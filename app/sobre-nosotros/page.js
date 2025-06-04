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
                        Somos una empresa Ecuatoriana fundada en 2022, inmediatamente depués de la pandemia, con el objetivo de brindar soluciones financieras accesibles para que más personas puedan acceder a tecnologías y servicios digitales.
                    </p>
                    <p className='text-gray-100 mt-5 mr-[10%]'>
                        Nuestro principal compromiso es impulsar la inclusión financiera a través de herramientas inovadoras y modelos de financiemanto flexibles.
                    </p>
                    <p className='text-gray-100 mt-5 mr-[10%]'>
                        Nacimos de la necesidad de ofrecer alternativas de pago que se ajusten a la realidad de cada cliente, especialmente para los que no cuentan con un historial crediticio sólido o con facilidades bancarias tradicionales.
                    </p>
                    <p className='text-gray-100 mt-5 mr-[10%]'>
                        A través de nuestro sistema de financiamiento, buscamos que todos, sin importar su nivel socioeconómico, tengan la oportunida de adquirir teléfonos inteligentes y otros dispositivos que les permitan mantenerse conectados con el mundo y aprovechar las oportunidades de la era digital.
                    </p>
                    <p className='text-gray-100 mt-5 mr-[10%]'>
                        Creemos en el poder de la tecnología para transformar vidas y reducir brechas. Por ello, seguimos inovando y expandiendo nuestro portafolio de soluciones digitales, siempre enfocados en la satisfacción de nuestros clientes y el desarrollo sostenible de nuestras comunidades.
                    </p>
                </div>
            </section>
        </MainLayout>
    )
}
