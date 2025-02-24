'use client';

import { useRef, useState } from "react";


export default function ContactForm() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const subjectInputRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [errors, setErrors] = useState<string[]>([]);

  function submitFormHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value.trim();
    const enteredLastName = lastNameInputRef.current?.value.trim();
    const enteredEmail = emailInputRef.current?.value.trim();
    const enteredSubject = subjectInputRef.current?.value.trim();
    const enteredMessage = messageRef.current?.value.trim();


    const reqBody = {
      name: enteredName,
      lastName: enteredLastName,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage

    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));

    const validationErrors: string[] = [];

    if (!enteredName) validationErrors.push("First Name is required.");
    if (!enteredLastName) validationErrors.push("Last Name is required.");
    if (!enteredEmail || !/\S+@\S+\.\S+/.test(enteredEmail))
      validationErrors.push("Valid Email is required.");
    if (!enteredSubject) validationErrors.push("Subject is required.");
   

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset errors if validation passes
    setErrors([]);

    // Submit the form (example action)
    console.log({
      name: enteredName,
      lastName: enteredLastName,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    });

    // Clear form fields
    if (nameInputRef.current) nameInputRef.current.value = "";
    if (lastNameInputRef.current) lastNameInputRef.current.value = "";
    if (emailInputRef.current) emailInputRef.current.value = "";
    if (subjectInputRef.current) subjectInputRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  }

  return (
    <div className="flex py-6 flex-col">
      <p className="text-[25px] font-sans font-bold leading-normal text-[#1e2d3b]">
        Contact Us
      </p>
      <form onSubmit={submitFormHandler} className="flex flex-col">
        {/* Display validation errors */}
        {errors.length > 0 && (
          <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* First Name */}
        <label
          htmlFor="firstName"
          className="text-[17px] text-[#6b6969] font-[400] tracking-normal mt-3 leading-[25.5px] font-sans"
        >
          First Name *
        </label>
        <input
          type="text"
          id="firstName"
          ref={nameInputRef}
          className="bg-gray-100 border-solid transition-all cursor-pointer duration-500 ease-in-out focus:outline-none hover:bg-[#C6C6C6] border-[1px] px-3 mt-2 lg:w-[405px] w-[350]  h-[45px] border-[#757575]"
        />

        {/* Last Name */}
        <label
          htmlFor="lastName"
          className="text-[17px] text-[#6b6969] font-[400] tracking-normal mt-3 leading-[25.5px] font-sans"
        >
          Last Name *
        </label>
        <input
          type="text"
          id="lastName"
          ref={lastNameInputRef}
          className="bg-gray-100 border-solid transition-all cursor-pointer duration-500 ease-in-out focus:outline-none hover:bg-[#C6C6C6] border-[1px] px-3 mt-2 lg:w-[405px] w-[350]  h-[45px] border-[#757575]"
        />

        {/* Email */}
        <label
          htmlFor="email"
          className="text-[17px] text-[#6b6969] font-[400] tracking-normal mt-3 leading-[25.5px] font-sans"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          ref={emailInputRef}
          className="bg-gray-100 border-solid transition-all cursor-pointer duration-500 ease-in-out focus:outline-none hover:bg-[#C6C6C6] border-[1px] px-3 mt-2 lg:w-[405px] w-[350]  h-[45px] border-[#757575]"
        />

        {/* Subject */}
        <label
          htmlFor="theme"
          className="text-[17px] text-[#6b6969] font-[400] tracking-normal mt-3 leading-[25.5px] font-sans"
        >
          Subject *
        </label>
        <input
          type="text"
          id="theme"
          ref={subjectInputRef}
          className="bg-gray-100 border-solid transition-all cursor-pointer duration-500 ease-in-out focus:outline-none hover:bg-[#C6C6C6] border-[1px] px-3 mt-2 lg:w-[405px] w-[350]  h-[45px] border-[#757575]"
        />

        {/* Message */}
        <label
          htmlFor="message"
          className="text-[17px] text-[#6b6969] font-[400] tracking-normal mt-3 leading-[25.5px] font-sans"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          ref={messageRef}
          placeholder="Write your message here..."
          className="bg-gray-100 border-solid transition-all cursor-pointer duration-500 ease-in-out focus:outline-none hover:bg-[#C6C6C6] border-[1px] p-5 mt-2 lg:w-[405px] w-[350]  h-[105px] border-[#757575]"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-end p-5">
          <button
            type="submit"
            className="w-[135px] h-[40px] text-[#EDCD1D] bg-[#211f15] transition-all cursor-pointer duration-500 ease-in-out hover:bg-[#edcd1d] hover:text-[#211f15]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
