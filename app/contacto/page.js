import MainLayout from '@/components/MainLayout'
import "../../styles/styles.css"

export default function Contacto() {
    return (
        <MainLayout>
            <section
                className=' contacto pt-[9rem]'
            >

                <h2
                    className='block m-auto text-2xl text-center font-bold font w-fit -skew-x-12 bg-[#e66505] text-white p-2 '
                >
                    <span className='skew-x-12'>Contáctanos</span>
                </h2>

                <p className='text-center text-gray-100 w-[80%] m-auto mt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
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
                                    <p>Av. Amazonas y Villa Roel</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>

                                <span className='-skew-x-12 bg-[#e66505] p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                                </span>

                                <div>
                                    <p className='font-bold text-xl'>Teléfono</p>
                                    <p>099 999 9999</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>

                                <span className='-skew-x-12 bg-[#e66505] p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                </span>

                                <div>
                                    <p className='font-bold text-xl'>Correo</p>
                                    <p>correo@correo.com</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex pt-10 justify-center items-center lg:pt-0 lg:justify-start'>

                        <form
                            action=""
                            className='bg-gradient-to-l from-[#4043a8] to-[#2e3192] -skew-x-6 lg:-skew-x-12 shadow-lg shadow-gray-800 w-[70%] lg:w-[60%]'
                        >
                            <div className='skew-x-6 lg:skew-x-12 px-10 py-5 flex flex-col gap-4 lg:px-16'>

                                <input
                                    type="text"
                                    placeholder='Nombres del Propietario'
                                    className='bg-transparent border-b border-b-gray-500 text-gray-100 p-2 outline-none w-full focus:border-b-gray-100 transition-colors'
                                />

                                <input
                                    type="text"
                                    placeholder='Ruc'
                                    className='bg-transparent border-b border-b-gray-500 text-gray-100 p-2 outline-none w-full focus:border-b-gray-100 transition-colors'
                                />

                                <input
                                    type="text"
                                    placeholder='Nombre de la tienda'
                                    className='bg-transparent border-b border-b-gray-500 text-gray-100 p-2 outline-none w-full focus:border-b-gray-100 transition-colors'
                                />

                                <input
                                    type="text"
                                    placeholder='Dirección'
                                    className='bg-transparent border-b border-b-gray-500 text-gray-100 p-2 outline-none w-full focus:border-b-gray-100 transition-colors'
                                />

                                <input
                                    type="text"
                                    placeholder='Correo electrónico'
                                    className='bg-transparent border-b border-b-gray-500 text-gray-100 p-2 outline-none w-full focus:border-b-gray-100 transition-colors'
                                />

                                <input
                                    type="text"
                                    placeholder='Teléfono'
                                    className='bg-transparent border-b border-b-gray-500 text-gray-100 p-2 outline-none w-full focus:border-b-gray-100 transition-colors'
                                />

                                <button
                                    type='submit'
                                    className='bg-[#e66505] -skew-x-12 w-fit py-2 px-4'
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

            <section className='w-full m-auto'>
                <div className="w-full h-[450px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.0872117270678!2d-78.48586447852044!3d-0.1770001432495587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a858f56d4d1%3A0xafe084d8581292c2!2sUnicornio%20II%20Edificio%20Empresarial!5e0!3m2!1sen!2sec!4v1747860155729!5m2!1sen!2sec" width="600" height="450" style={{ border: 0, width: '100%', height: '100%', borderRadius: '1rem' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </MainLayout>
    )
}
