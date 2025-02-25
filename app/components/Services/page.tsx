import preConstImg from '../../../public/wow-image → c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg.svg'
import architecturalModelImg from '../../../public/wow-image → b31d0e84cb714761b2b1f06c305023c7.jpg.svg'
import constManagement from '../../../public/wow-image → 9e456adff0ee4a2c847cfd67a62454a3.jpg.svg'

import Image from 'next/image'

export default function ServicesPage() {
    return <div  className="flex flex-col  pb-5 pt-28 px-5 ">
        <div className='flex  justify-start items-start  md:justify-center md:items-center  flex-col'>
        <p className=" lg:text-center text:start font-sans font-bold text-[#1E2D3B] text-[32px] md:text-[54.03px]  lg:leading-[65.39px] mt-[50px] tracking-wider">SERVICES</p>
        <div className="w-[116px] h-[10px] bg-[#EDCD1F]"></div>
        </div>
    

        <div className="flex  lg:flex-row md:justify-center   justify-start flex-col gap-[50px] mt-10 md:items-center ">

            <div className='flex flex-col'>
                <Image src={preConstImg} alt="Preconstruction Planning" />
                <div className='w-[300px] h-[225px] bg-[#F7F7F7] p-6 '>
                    <p className='font-sans text-[#3D5975] text-[22px] leading-[26px] font-bold tracking-wider '>Preconstruction <br /> Planning</p>

                    <p className='w-[250px] h-[120px] mt-3 text-[#3B3A3A] text-[14px] leading-[24px] font-sans font-normal tracking-wider' >
                        I&apos;m a paragraph. Click here to add
                        your own text and edit me. It&apos; s easy.
                        Just click “Edit Text” or double click
                        me to add your own content and
                        make changes to the font.
                    </p>
                </div>
            </div>


            <div className='flex flex-col'>
                <Image src={architecturalModelImg} alt="Architectural Modelling" />
                <div className='w-[300px] h-[225px] bg-[#F7F7F7] p-6 '>
                    <p className='font-montserrat text-[#3D5975] text-[22px] leading-[26px] font-bold tracking-wider '>Architectural  <br /> Modelling</p>

                    <p className='w-[250px] h-[120px] mt-3 text-[#3B3A3A] text-[14px] leading-[24px] font-sans font-normal tracking-wider' >
                        I&apos;m a paragraph. Click here to add
                        your own text and edit me. It&apos;s easy.
                        Just click “Edit Text” or double click
                        me to add your own content and
                        make changes to the font.
                    </p>
                </div>
            </div>

            <div className='flex flex-col'>
                <Image src={constManagement} alt=" Construction Management" />
                <div className='w-[300px] h-[225px] bg-[#F7F7F7] p-6 '>
                    <p className='font-montserrat text-[#3D5975] text-[22px] leading-[26px] font-bold tracking-wider '>Construction  <br /> Management</p>

                    <p className='w-[250px] h-[120px] mt-3 text-[#3B3A3A] text-[14px] leading-[24px] font-sans font-normal tracking-wider' >
                        I&apos;m a paragraph. Click here to add
                        your own text and edit me. It&apos;s easy.
                        Just click “Edit Text” or double click
                        me to add your own content and
                        make changes to the font.
                    </p>
                </div>
            </div>
        </div>
    </div>
}