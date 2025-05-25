import Image from "next/image"

export default function Footer() {
    return (
        <footer className='w-full bg-[#131114]' id='footer'>

            <div className='w-[80%] m-auto border-b border-gray-700 py-10'>

                <Image
                    src="/images/logo.webp"
                    alt="logo"
                    width={60}
                    height={60}
                    className="m-auto mb-5"
                />

                <p className='text-center text-xl bg-gradient-to-l from-[#e66505] to-[#0008ff] text-transparent bg-clip-text font-bold'>Gestión Inteligente para Google TV</p>
            </div>

            <div className="w-[80%] m-auto py-7 grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">Acerca de Nosotros</h3>

                    <p className="text-2xl mb-2 font-bold labellock">
                        <span className="text-[#e66505]">SMART</span>
                        <span className="text-gray-100">PAY</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>

                <div>

                    <h3 className="text-lg font-semibold mb-1 text-white">Contáctanos</h3>

                    <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-location"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                        Av. Amazonas y Villa Roel
                    </p>

                    <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                        099 999 9999
                    </p>

                    <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                        correo@correo.com
                    </p>

                </div>
            </div>

            <div className='bg-[#1b181c] py-2'>

                <div className='w-[80%] m-auto flex justify-between items-center'>
                    <p className="text-center">Copyright © 2025 SmartPay. Todos los derechos reservados.</p>

                    <div className='flex items-center gap-2'>
                        <a href="#" target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-[#e66505] transition-colors -skew-x-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /></svg>
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-[#e66505] transition-colors -skew-x-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z" /></svg>
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-[#e66505] transition-colors -skew-x-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-whatsapp skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.497 4.409a10 10 0 0 1 -10.36 16.828l-.223 -.098l-4.759 .849l-.11 .011a1 1 0 0 1 -.11 0l-.102 -.013l-.108 -.024l-.105 -.037l-.099 -.047l-.093 -.058l-.014 -.011l-.012 -.007l-.086 -.073l-.077 -.08l-.067 -.088l-.056 -.094l-.034 -.07l-.04 -.108l-.028 -.128l-.012 -.102a1 1 0 0 1 0 -.125l.012 -.1l.024 -.11l.045 -.122l1.433 -3.304l-.009 -.014a10 10 0 0 1 1.549 -12.454l.215 -.203a10 10 0 0 1 13.226 -.217m-8.997 3.09a1.5 1.5 0 0 0 -1.5 1.5v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0 -3h-1l-.144 .007a1.5 1.5 0 0 0 -1.128 .697l-.042 .074l-.022 -.007a4.01 4.01 0 0 1 -2.435 -2.435l-.008 -.023l.075 -.041a1.5 1.5 0 0 0 .704 -1.272v-1a1.5 1.5 0 0 0 -1.5 -1.5" /></svg>
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}
