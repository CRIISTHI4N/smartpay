import MainLayout from '@/components/MainLayout'
import "../../styles/styles.css"

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
                        <h2 className='text-[#e66505] font-semibold text-xl'>Brinda más facilidades</h2>

                        <p>Permite que tus clientes accedan a un televisor con cuotas mensuales cómodas, mientras tú mantienes el control total del dispositivo.</p>
                    </div>

                </article>

                <article className='flex flex-col items-center justify-center gap-2 text-center '>

                    <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                    </span>


                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[#e66505] font-semibold text-xl'>Incentiva tus compras</h2>

                        <p> Ofrece planes de crédito accesibles sin temor a impagos. Con nuestro sistema de bloqueo, tus clientes compran más y tú vendes con seguridad.</p>
                    </div>

                </article>

                <article className='flex flex-col items-center justify-center gap-2 text-center '>

                    <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list-check text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg>
                    </span>



                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[#e66505] font-semibold text-xl'>Incrementa tus clientes</h2>

                        <p>Atrae a más personas con facilidades de pago. Nuestra tecnología garantiza el control de cada televisor en caso de incumplimiento, lo que te permite ampliar tu cartera sin riesgos.</p>
                    </div>

                </article>

            </section>

            <section className='w-full h-72 bg-[#131114] afiliacion flex items-center justify-center'>
            </section>

        </MainLayout>
    )
}
