import MainLayout from '@/components/MainLayout'
import "../../styles/styles.css"
import Link from 'next/link'

export default function Afiliate() {
    return (
        <MainLayout>

            <section className='text-gray-800 mt-[9rem] w-[80%] m-auto'>
                <h2 className='text-center text-3xl font-bold mb-5'>Gana más con <span className='text-[#2e3192]'>Smart Pay</span></h2>

                <p className='text-center'>Asóciate y obtén más beneficios para tu negocio y tus clientes.</p>

                <span className='block w-[80%] lg:w-[50%] m-auto h-[2px] bg-[#e66505] mt-5'></span>
            </section>

            <section className='w-[80%] m-auto my-10 text-gray-800 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start'>

                <article className='flex flex-col items-center justify-center gap-2 text-center '>

                    <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-coin text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" /><path d="M12 7v10" /></svg>
                    </span>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[#e66505] font-semibold text-xl'>Aumenta tus ventas sin asumir riesgos</h2>

                        <p>Afíliate a nuestra red y permite que tus clientes compren a crédito sin afectar tu liquidez. Sin riesgos para tu tienda.</p>
                    </div>

                </article>

                <article className='flex flex-col items-center justify-center gap-2 text-center '>

                    <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                    </span>


                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[#e66505] font-semibold text-xl'>Vende más con cuotas accesibles</h2>

                        <p>Facilita el acceso a televisores, celulares y más con pagos quincenales, semanales y mensuales, cómodos para tus clientes. Manten el control del dispositivo, asegurando el cumplimiento del pago.</p>
                    </div>

                </article>

                <article className='flex flex-col items-center justify-center gap-2 text-center '>

                    <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list-check text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg>
                    </span>



                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[#e66505] font-semibold text-xl'>Seguridad en cada venta</h2>

                        <p>Ofrece crédito sin miedo al impago. Nuestra tecnología permite bloquear remotamente los dispositivos en caso de incumplimiento.</p>
                    </div>

                </article>

                <article className='flex flex-col items-center justify-center gap-2 text-center '>

                    <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list-check text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg>
                    </span>



                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[#e66505] font-semibold text-xl'>Atrae más clientes con facilidades</h2>

                        <p>Amplía tu cartera de clientes con planes de pago flexibles. Más personas se animan a comprar cuando saben que pueden pagar en cuotas. Tú aumentas tus ventas.</p>
                    </div>

                </article>

                {/* <article className='flex flex-col items-center justify-center gap-2 text-center '>

                    <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list-check text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg>
                    </span>



                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[#e66505] font-semibold text-xl'>Cobro garantizado, sin esfuerzo</h2>

                        <p>Te olvidas del seguimiento de cobros. Nosotros gestionamos los pagos mensuales del cliente. Tú cobras de inmediato, sin preocuparte por morosidad.</p>
                    </div>

                </article> */}

                <article className='flex flex-col items-center justify-center gap-2 text-center '>

                    <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list-check text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg>
                    </span>



                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[#e66505] font-semibold text-xl'>Fortalece tu tienda con el respaldo de una empresa sólida</h2>

                        <p>Tus clientes confían más cuando una empresa formal respalda el crédito. Tú te conviertes en una tienda aliada con respaldo tecnológico y financiero.</p>
                    </div>

                </article>

            </section>

            <section className='w-full h-80 bg-[#131114] banner_dos flex items-center justify-center'>
                <div className='flex flex-col gap-7 lg:flex-row items-center justify-between w-[80%] m-auto'>
                    <div>
                        <p className="text-3xl font-bold text-gray-100"><span className="text-[#ea332a]">LOCK</span>PLAY</p>
                        <p className='font-bold text-xl lg:text-2xl'>Adminsitra tus dispositivos.</p>
                        <p>Elimina riesgos y garantiza la seguridad operativa de tus dispositivos.</p>
                    </div>

                    <Link
                        href='https://lockplay.org/'
                        target="_blank"
                        className='bg-[#e66505] w-fit py-2 px-4 -skew-x-12 hover:bg-gray-100 hover:text-gray-800 transition-colors relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'
                    >
                        <span className='text-gray-800 font-bold -skew-x-12 text-nowrap'>Visitar</span>
                    </Link>
                </div>
            </section>

        </MainLayout>
    )
}
