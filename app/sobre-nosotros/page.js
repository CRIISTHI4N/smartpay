import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
import "../../styles/styles.css"


export default function SobreNosotros() {
    return (
        <MainLayout>
            <section className='grid grid-cols-1 lg:grid-cols-2 sobre_nosotros'>
                <div>
                    <Image
                        src="/images/about_us.jpg"
                        alt="tv1"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </div>

                <div className='pl-10 pb-10'>
                    <h2
                        className='text-2xl font-bold font mt-[20%] w-fit -skew-x-12 bg-[#2e3192] text-white p-2'
                    >
                        <span className='skew-x-12'>Sobre Nosotros</span>

                    </h2>


                    <p className='text-gray-100 mt-5 mr-[10%]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>

                    <p className='text-gray-100 mt-5 mr-[10%]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>

                    <p className='text-gray-100 mt-5 mr-[10%]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                </div>
            </section>
        </MainLayout>
    )
}
