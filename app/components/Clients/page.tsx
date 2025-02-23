import comLogo from '../../../public/logos/Marriott-Bonvoy-Logo-SVG_005.svg'
import comLogo2 from '../../../public/logos/Ramada-Logo-SVG_007.svg'
import comLogo3 from '../../../public/logos/TVC-mall-Logo-SVG_002.svg'
import comLogo4 from '../../../public/logos/Equinix-Logo-SVG_002.svg'

import Image from "next/image"

export default function Clients() {
    return <div className="w-full p-16 h-full bg-[#F7F7F7]">
        <div className=" flex flex-col justify-center items-center">
            <p className="text-center text-[55px] text-[#1E2D3B] leading-normal font-semibold font-seans">CLIENTS</p>
            <div className="w-[116px] mt-1  h-[10px] bg-[#EDCD1F]"></div>
        </div>
        <div className="flex justify-around mt-6">
            <Image className='w-[200px] h-[90px]' src={comLogo} alt="companies logo" />
            <Image className='w-[200px] h-[90px]' src={comLogo2} alt="companies logo" />
            <Image className='w-[200px] h-[90px]' src={comLogo3} alt="companies logo" />
            <Image className='w-[200px] h-[90px]' src={comLogo4} alt="companies logo" />
            
        </div>
    </div>
}