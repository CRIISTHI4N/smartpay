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

                <p className='text-center text-xl bg-gradient-to-l from-[#e66505] to-[#0008ff] text-transparent bg-clip-text font-bold'>Gestión inteligente para dispositivos Android</p>
            </div>

            <div className="w-[80%] m-auto py-7 grid grid-cols-1 lg:grid-cols-3 gap-7">

                <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">Acerca de Nosotros</h3>

                    <p className="text-xl mb-2 font-bold labellock">
                        <span className="text-[#e66505]">SMART</span>
                        <span className="text-gray-100">PAY</span>
                    </p>

                    <p className="text-justify">Nacimos de la necesidad de ofrecer alternativas de pago que se ajusten a la realidad de cada cliente, especialmente para los que no cuentan con un historial crediticio o con facilidades bancarias.</p>

                </div>

                <div>

                    <h3 className="text-lg font-semibold mb-1 text-white">Contáctanos</h3>

                    <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-location"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                        Edificio Empresarial Unicornio II, Piso 15-04
                    </p>

                    <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                        096 903 1988 - 096 019 2561
                    </p>

                    <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                        ventas@lockplay.org
                    </p>

                </div>

                <section className='w-full'>
                    <div className="w-full h-[250px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.0872117270678!2d-78.48586447852044!3d-0.1770001432495587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a858f56d4d1%3A0xafe084d8581292c2!2sUnicornio%20II%20Edificio%20Empresarial!5e0!3m2!1sen!2sec!4v1747860155729!5m2!1sen!2sec" width="600" height="450" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
            </div>

            <div className='bg-[#1b181c] py-2'>

                <div className='w-[80%] m-auto flex justify-between items-center'>
                    <p className="text-center">Copyright © 2025 SmartPay. Todos los derechos reservados.</p>

                    <div className='flex items-center gap-2'>
                        <a href="https://www.facebook.com/people/LOCK-PLAY/61574944767558/" target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-[#e66505] transition-colors -skew-x-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /></svg>
                        </a>

                        <a href="https://www.tiktok.com/@homeplaycredito" target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-[#e66505] transition-colors -skew-x-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z" /></svg>
                        </a>

                        <a href="https://api.whatsapp.com/send?phone=593997518833&text=Hola%F0%9F%91%8B%20%2C%20deseo%20realizar%20un%20precredito%20para%20saber%20si%20puedo%20accerder%20a%20un%20cr%C3%A9dito.%20este%20es%20mi%20numero%20de%20c%C3%A9dula" target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-[#e66505] transition-colors -skew-x-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-whatsapp skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.497 4.409a10 10 0 0 1 -10.36 16.828l-.223 -.098l-4.759 .849l-.11 .011a1 1 0 0 1 -.11 0l-.102 -.013l-.108 -.024l-.105 -.037l-.099 -.047l-.093 -.058l-.014 -.011l-.012 -.007l-.086 -.073l-.077 -.08l-.067 -.088l-.056 -.094l-.034 -.07l-.04 -.108l-.028 -.128l-.012 -.102a1 1 0 0 1 0 -.125l.012 -.1l.024 -.11l.045 -.122l1.433 -3.304l-.009 -.014a10 10 0 0 1 1.549 -12.454l.215 -.203a10 10 0 0 1 13.226 -.217m-8.997 3.09a1.5 1.5 0 0 0 -1.5 1.5v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0 -3h-1l-.144 .007a1.5 1.5 0 0 0 -1.128 .697l-.042 .074l-.022 -.007a4.01 4.01 0 0 1 -2.435 -2.435l-.008 -.023l.075 -.041a1.5 1.5 0 0 0 .704 -1.272v-1a1.5 1.5 0 0 0 -1.5 -1.5" /></svg>
                        </a>

                        <a href="https://www.instagram.com/somospayplay/" target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-[#e66505] transition-colors -skew-x-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-instagram skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}
