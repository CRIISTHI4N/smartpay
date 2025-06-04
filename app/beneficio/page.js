import MainLayout from '@/components/MainLayout'
import "../../styles/styles.css"
import Link from 'next/link'

export default function Beneficio() {
    return (
        <MainLayout>
            <section className='text-gray-800 mt-[9rem] w-[80%] m-auto'>
                <h2 className='text-center text-3xl font-bold mb-5'>¿Por qué <span className='text-[#2e3192]'>elegirnos</span>?</h2>

                <p className='text-center'>Toma el control de tu negocio y ofrece un producto de calidad con la seguridad que necesitas. ¡Empieza hoy!</p>

                <span className='block w-[80%] lg:w-[50%] m-auto h-[2px] bg-[#e66505] my-5'></span>
            </section>

            <section className='w-[80%] m-auto flex flex-col gap-10 mb-12'>
                <article className='flex items-start gap-8'>
                    <span className='block -skew-x-12 bg-[#e66505] w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                    </span>

                    <div>
                        <h3 className='font-semibold text-[#e66505] text-lg'>Aprueba crédito</h3>

                        <p className='space-y-[-7px] text-gray-800'>
                            Evita pérdidas por impagos. Nuestro sistema bloquea los dispositivos automáticamente si no se realizan los pagos a tiempo.
                        </p>
                    </div>
                </article>

                <article className='flex items-start gap-8'>
                    <span className='block -skew-x-12 bg-[#e66505] w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                    </span>

                    <div>
                        <h3 className='font-semibold text-[#e66505] text-lg'>Ventas a crédito sin preocupación</h3>

                        <p className='space-y-[-7px] text-gray-800'>
                            Ofrece dispostivos a plazos sin preocuparte por el incumplimiento. Más ventas, menos estrés.
                        </p>
                    </div>
                </article>

                <article className='flex items-start gap-8'>
                    <span className='block -skew-x-12 bg-[#e66505] w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                    </span>

                    <div>
                        <h3 className='font-semibold text-[#e66505] text-lg'>Sistema automático y seguro</h3>

                        <p className='space-y-[-7px] text-gray-800'>
                            Una solución tecnológica fácil de implementar, sin intervención manual y con alta confiabilidad.
                        </p>
                    </div>
                </article>

                <article className='flex items-start gap-8'>
                    <span className='block -skew-x-12 bg-[#e66505] w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                    </span>

                    <div>
                        <h3 className='font-semibold text-[#e66505] text-lg'>Control total</h3>

                        <p className='space-y-[-7px] text-gray-800'>
                            Gestiona el estado de cada equipo desde un panel web. Revisa pagos, desbloquea o bloquea fácilmente.
                        </p>
                    </div>
                </article>

                <article className='flex items-start gap-8'>
                    <span className='block -skew-x-12 bg-[#e66505] w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                    </span>

                    <div>
                        <h3 className='font-semibold text-[#e66505] text-lg'>Mejora tu reputación</h3>

                        <p className='space-y-[-7px] text-gray-800'>
                            Al ofrecer un sistema profesional de pagos y control, tus clientes perciben mayor confianza y respaldo.
                        </p>
                    </div>
                </article>

                <article className='flex items-start gap-8'>
                    <span className='block -skew-x-12 bg-[#e66505] w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                    </span>

                    <div>
                        <h3 className='font-semibold text-[#e66505] text-lg'>Soporte dedicado</h3>

                        <p className='space-y-[-7px] text-gray-800'>
                            Siempre contarás con nuestro equipo para ayudarte en la configuración o resolver cualquier duda.
                        </p>
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