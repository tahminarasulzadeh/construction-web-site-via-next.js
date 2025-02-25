
export default function AboutPage() {

    return <div  className="flex  pt-28 flex-col">
        <div className="flex flex-col-reverse  h-full  w-full md:flex-row justify-center md:max-h-[633px]">
            <div className="w-full flex justify-start md:justify-end p-10 max-h-[633px] bg-[rgb(247,247,247)]">
                <div>
                    <p className="text-start font-montserrat font-bold text-[#1E2D3B]  text-[27px] md:text-[54.03px] md:leading-[65.39px]   mt-[20px] tracking-wider">ABOUT</p>
                    <div className="w-[80px]  md:w-[116px] h-[10px] mt-1 md:mt-5 bg-[#EDCD1F]"></div>

                    <p className="  md:w-[406px]  w-[300px] md:mt-[40px] mt-[20px]  h-[620px] font-sans   md:text[16px] text-[14px] leading-[28px] font-normal tracking-normal text-[#706f6f]">
                        I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I&apos;m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                    </p>
                </div>
            </div>
            <div className="w-full h-[350px]  md:h-[633px] bg-center bg-fixed bg-parallax bg-cover bg-no-repeat"></div>


        </div>

        <div className="w-full flex flex-wrap md:flex-nowrap justify-center gap-6 items-center h-auto bg-[#EDCD1D] p-6">
            <div className="w-[45%] md:w-auto flex flex-col items-center">
                <p className="text-center text-[48px] font-bold font-sans text-[#3D5975]">2035</p>
                <p className="text-center text-[20px] font-[600] font-sans text-[#3D5975]">Year <br /> Established</p>
            </div>

            <div className="bg-white w-[2px] h-[90px] hidden md:inline" ></div>
            <div className="w-[45%] md:w-auto flex flex-col items-center">
                <p className="text-center text-[48px] font-bold font-sans text-[#3D5975]">206</p>
                <p className="text-center text-[20px] font-[600] font-sans text-[#3D5975]">Projects <br /> Completed</p>
            </div>

            <div className="bg-white w-[2px] h-[90px] hidden  md:inline" ></div>
            <div className="w-[45%] md:w-auto flex flex-col items-center">
                <p className="text-center text-[48px] font-bold font-sans text-[#3D5975]">870</p>
                <p className="text-center text-[20px] font-[600] font-sans text-[#3D5975]">Contractors <br /> Appointed</p>
            </div>

            <div className="bg-white w-[2px] h-[90px] hidden md:inline" ></div>
            <div className="w-[45%] md:w-auto flex flex-col items-center">
                <p className="text-center text-[48px] font-bold font-sans text-[#3D5975]">26</p>
                <p className="text-center text-[20px] font-[600] font-sans text-[#3D5975]">Awards <br /> Won</p>
            </div>

        </div>
    </div>
}