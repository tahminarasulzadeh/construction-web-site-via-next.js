import logoIcn from '../../../public/Frame.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return <Link href="/" className=" bg-[#EDCD1D] cursor-pointer items-center gap-[20px] flex justify-center w-[350px] h-[120px]">
        <Image src={logoIcn} alt="logo icon" />
        <div className='w-[209px] h-[46px]'>
            <p className='  font-montserrat text-[22.46px] leading-[23px] font-[400]'>SPHERE <br /> CONSTRUCTIONS</p>
        </div>
    </Link>
}