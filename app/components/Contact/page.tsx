import ContactForm from "../ContactForm/page"

export default function Contact() {
    return <div className="w-full  h-full p-16">
        <div className=" flex flex-col justify-center items-center">
            <p className="text-center text-[55px] text-[#1E2D3B] leading-normal font-semibold font-seans">CONTACT</p>
            <div className="w-[116px] mt-1  h-[10px] bg-[#EDCD1F]"></div>
        </div>
        <div className="flex justify-center w-full items-center p-16 ">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.09243614515!2d72.77606668933461!3d19.408411694707134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ab97cb3fc2c7%3A0x229602485f9ea91e!2sSPHERE%20Construction!5e0!3m2!1sen!2saz!4v1740137956734!5m2!1sen!2saz"
                width="600"
                height="450"
                className="border-0 rounded-md w-[70%]  h-[450px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div className="flex justify-start ml-[18%]  gap-[100px] ">
            <div className="flex flex-col">
                <p className="text-[25px] font-sans font-bold leading-normal text-[#1e2d3b]">Inquiries</p>
                <p className="text-[17px] text-[#6b6969] font-[400] tracking-normal mt-3 leading-[25.5px] font-sans w-[415.9px] h-[51px]">For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form</p>
                <ContactForm />
            </div>
            <div className="flex flex-col">
                <p className="text-[25px] font-sans font-bold leading-normal text-[#1e2d3b]">Head Office</p>
                <p className="text-[17px] text-[#6b6969] font-[400] tracking-normal mt-3 leading-[25.5px] font-sans w-[193.92px] h-[75px]">500 Terry Francine Street San Francisco, CA 94158  </p>
                <p className="text-[17px] text-[#6b6969] font-[400] tracking-normal mt-3 leading-[25.5px] font-sans w-[193.92px] h-[75px]"> info@mysite.com <br /> Tel: 123-456-7890  <br /> Fax: 123-456-7890  </p>

                <div className="flex py-10 flex-col">
                    <p className="text-[25px] font-sans font-bold leading-normal text-[#1e2d3b]">Employment</p>
                    <p className="text-[17px] text-[#6b6969] font-[400] tracking-normal mt-3 leading-[25.5px] font-sans w-[338.45px] h-[77px]">To apply for a job with Sphere Constuctions, please send a cover letter together with your C.V. to: info@mysite.com</p>
                    <div className="w-[64px] mt-2 h-[10px] bg-[#EDCD1F]"></div>
                    <p className="text-[#1E2D3B]  font-bold font-sans  mt-5 leading-normal tracking-normal text-[25px]">Get a quote: <span>123-456-7890</span></p>
                </div>

            </div>

        </div>

    </div>
}