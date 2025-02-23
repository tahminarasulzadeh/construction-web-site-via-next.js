import Logo from "../Logo/page"

export default function HeaderPage () {
    return <div className="w-full fixed top-0 left-0  z-50 shadow-md flex justify-between h-[120px] pr-[70px] bg-[#1E2D3B]">
        <Logo />
         <ul className="flex flex-row items-center gap-[70px]">
            <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[14px]">HOME</li>
            <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[14px]">SERVICES</li>
            <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[14px]">ABOUT</li>
            <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[14px]">PROJECTS</li>
            <li className="text-white font-montserrat leading-[16.94px] font-[400] text-[14px]">CONTACT</li>
          
        </ul>
    </div>

}