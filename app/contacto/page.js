import MainLayout from '@/components/MainLayout'
import "../../styles/styles.css"

export default function Contacto() {
    return (
        <MainLayout>
            <section className=' contacto pt-[9rem]'>

                <h2
                    className='block m-auto text-2xl text-center font-bold font w-fit -skew-x-12 bg-[#e66505] text-white p-2 '
                >
                    <span className='skew-x-12'>Contáctanos</span>
                </h2>

                <p className='text-center text-gray-100 w-[80%] m-auto mt-5 shadow-text'>
                    ¿Tienes dudas o quieres más información? Escríbenos y descubre cómo proteger tu negocio de forma sencilla y segura.
                </p>

                <span className='block w-[80%] lg:w-[50%] m-auto h-[2px] bg-[#e66505] my-5'></span>

                <div className='grid grid-cols-1 lg:grid-cols-2 pb-10'>
                    <div className='flex flex-col justify-center items-center'>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-start gap-4'>

                                <span className='-skew-x-12 bg-[#e66505] p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-location skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                                </span>

                                <div>
                                    <p className='font-bold text-xl'>Dirección</p>
                                    <p>Edificio Empresarial Unicornio II, Piso 15-04</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>

                                <span className='-skew-x-12 bg-[#e66505] p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                                </span>

                                <div>
                                    <p className='font-bold text-xl'>Teléfono</p>
                                    <p>096 903 1988</p>
                                    <p>096 019 2561</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>

                                <span className='-skew-x-12 bg-[#e66505] p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                </span>

                                <div>
                                    <p className='font-bold text-xl'>Correo</p>
                                    <p>ventas@lockplay.org</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex pt-10 justify-center items-center lg:pt-0 lg:justify-start'>

                        <form
                            action="mailto:ventas@lockplay.org"
                            method='POST'
                            className='bg-gradient-to-l from-[#5155c4] to-[#363aba] -skew-x-6 lg:-skew-x-12 shadow-lg shadow-gray-800 w-[70%] lg:w-[60%]'
                        >
                            <div className='skew-x-6 lg:skew-x-12 px-10 py-5 flex flex-col gap-4 lg:px-16'>

                                <input
                                    type="text"
                                    name='ruc'
                                    placeholder='Ruc'
                                    className='bg-transparent border-b border-b-gray-100 text-gray-100 p-2 outline-none w-full focus:border-b-[#e66505] transition-colors placeholder:text-gray-100'
                                />

                                <input
                                    type="text"
                                    name='nombre'
                                    placeholder='Nombre'
                                    className='bg-transparent border-b border-b-gray-100 text-gray-100 p-2 outline-none w-full focus:border-b-[#e66505] transition-colors placeholder:text-gray-100'
                                />

                                <input
                                    type="text"
                                    name='direccion'
                                    placeholder='Dirección'
                                    className='bg-transparent border-b border-b-gray-100 text-gray-100 p-2 outline-none w-full focus:border-b-[#e66505] transition-colors placeholder:text-gray-100'
                                />

                                <input
                                    type="text"
                                    name='correo'
                                    placeholder='Correo electrónico'
                                    className='bg-transparent border-b border-b-gray-100 text-gray-100 p-2 outline-none w-full focus:border-b-[#e66505] transition-colors placeholder:text-gray-100'
                                />

                                <input
                                    type="text"
                                    name='telefono'
                                    placeholder='Teléfono'
                                    className='bg-transparent border-b border-b-gray-100 text-gray-100 p-2 outline-none w-full focus:border-b-[#e66505] transition-colors placeholder:text-gray-100'
                                />

                                <button
                                    type='submit'
                                    className='bg-[#e66505] -skew-x-12 w-fit py-2 px-3 mt-3'
                                >
                                    <span className='skew-x-12 flex items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                                        Enviar
                                    </span>
                                </button>

                            </div>
                        </form>

                    </div>
                </div>
            </section>

        </MainLayout>
    )
}
