import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import Link from "next/link";

export default function Copyright () {
    return (
        <div className="flex max-w-[950px] justify-between p-16 ml-[18%]">
            <p className="text-[17px] text-[#6b6969] font-[400] tracking-normal mt-3 leading-[25.5px] font-sans ">© 2035 by Sphere Constructions. Powered and secured by Wix</p>
            <div className="flex justify-center gap-[10px]">
                <Link href="https://www.facebook.com/" className="bg-[#000000] w-[40px] h-[40px] rounded-full pl-3 pt-3 ">
                    <FaFacebookF className="text-white"/>
                    
                </Link>
                <Link href="https://www.linkedin.com/" className="bg-[#000000] w-[40px] h-[40px] rounded-full pl-3 pt-3 ">
                    <FaLinkedinIn className="text-white"/>
                    
                </Link>
            </div>
        </div>
    )
}