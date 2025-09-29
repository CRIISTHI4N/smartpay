import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
import "../styles/styles.css"
import BrandCarousel from '../components/BrandCarousel'
import Link from 'next/link'

export default function Home() {
  return (
    <>

      <section className='bg-[#131114] w-full flex justify-between items-center px-[10%]'>

        <div className='flex items-center gap-2'>
          <p>Smart Pay</p>

          <div className='bg-[#e66505] w-fit py-2 px-4 -skew-x-12 text-gray-800 font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-tv"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M16 3l-4 4l-4 -4" /></svg>
          </div>

        </div>


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

      </section>

      <MainLayout>
        <section className="w-full h-screen bienvenida relative bg-gray-800">

          <div className="absolute top-[50%] -translate-y-[50%] left-[9%] right-[9%] md:top-[15%] md:-translate-y-0 lg:top-[29%]">
            <p className="text-xl text-[#e66505] font-bold">Potencia</p>
            <p className="text-3xl text-gray-100 font-bold lg:text-5xl">
              Tu <span className='text-[#e66505]'>Negocio</span> sin limites.
            </p>
            <p className="text-3xl text-gray-100 font-bold lg:text-5xl uppercase">Ofrece televisores</p>

            <div className="flex items-end gap-2">
              <p className="text-3xl text-gray-100 font-bold lg:text-5xl">
                <span className='text-[#e66505] uppercase'>A crédito</span>
              </p>
              <p className="text-xl text-gray-100 font-bold">con total facilidad</p>
            </div>
            

            <div className='mt-5 flex items-center gap-1'>
              <Link
                href={"/contacto"}
                className="block bg-[#e66505] w-fit py-2 px-4 -skew-x-12 hover:bg-gray-100 hover:text-gray-800 transition-colors"
              >
                <span className='text-gray-800 font-bold -skew-x-12'>Contáctanos</span>
              </Link>

              <span className='w-1 h-10 -skew-x-12 bg-[#e66505]'></span>

            </div>

          </div>

          <div className="absolute hidden w-[300px] left-[50%] md:block -translate-x-[50%] top-[63%] md:w-[350px] md:top-[55%] lg:top-[35%] lg:left-[55%] lg:translate-x-0 lg:w-[400px] xl:top-[50%] xl:-translate-y-[50%] xl:w-[500px] z-10 fade-in-slide">
            <Image
              src="/images/tv2.png"
              alt="logo"
              width={500}
              height={500}
              className="w-full"
            />
          </div>

        </section>

        <section className='w-[80%] m-auto my-10 text-gray-800 grid grid-cols-1 lg:grid-cols-4 gap-10 items-start'>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-imac text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12z" /><path d="M3 13h18" /><path d="M8 21h8" /><path d="M10 17l-.5 4" /><path d="M14 17l.5 4" /></svg>
            </span>


            <div className='flex flex-col gap-2'>
              <h2 className='text-[#e66505] font-semibold text-xl'>Sin complicaciones</h2>

              <p>Aprueba crédito sin buró a tus clientes</p>
            </div>

          </article>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
            </span>


            <div className='flex flex-col gap-2'>
              <h2 className='text-[#e66505] font-semibold text-xl'>Beneficio</h2>

              <p>Incrementa tus ganancias</p>
            </div>

          </article>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-supabase text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 14h8v7l8 -11h-8v-7z" /></svg>
            </span>



            <div className='flex flex-col gap-2'>
              <h2 className='text-[#e66505] font-semibold text-xl'>Sin trámites</h2>

              <p>Sin papeleos, rápido y seguro</p>
            </div>

          </article>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-[#e66505] p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield-lock text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" /><path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12l0 2.5" /></svg>
            </span>


            <div className='flex flex-col gap-2'>
              <h2 className='text-[#e66505] font-semibold text-xl'>La seguridad primero</h2>

              <p>Sin riesgo</p>
            </div>

          </article>

        </section>

        <section className='w-full h-72 bg-[#131114] banner_dos flex items-center justify-center'>
          <div className='flex flex-col gap-7 lg:flex-row items-center justify-between w-[80%] m-auto'>
            <div>
              <p className='font-bold text-xl lg:text-3xl'>La mejor solución <br /> para tu negocio</p>
              <p>Ofrece televisores a crédito con total tranquilidad. Nuestra plataforma te da una solución integral para la gestión de dispositivos Android, asegurando el control y la seguridad que necesitas para tu negocio. Expande tus ventas con confianza.</p>
            </div>

            <button
              className='bg-[#e66505] w-fit py-2 px-4 -skew-x-12 hover:bg-gray-100 hover:text-gray-800 transition-colors relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'
            >
              <span className='text-gray-800 font-bold -skew-x-12 text-nowrap'>Ver Demostración</span>
            </button>
          </div>
        </section>

        <section className='text-gray-800 my-10 w-[80%] m-auto'>
          <h2 className='text-center text-3xl font-bold mb-5'>¿Por qué <span className='text-[#2e3192]'>Smart Pay</span>?</h2>

          <p className='text-center'>De la sala de ventas al hogar de tus clientes, SmartPay te da el control para <br /> ofrecer televisores a crédito de forma segura, sencilla y sin complicaciones.</p>

          <span className='block w-[80%] lg:w-[50%] m-auto h-[2px] bg-[#e66505] mt-5'></span>

          <section className='relative grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>

            <div className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-full lg:w-[60%] h-[20%] lg:h-[100%] rounded-full bg-gray-200 opacity-70 z-[-1]'></div>

            <div className='flex flex-col gap-10'>

              <div>
                <h2 className='text-[#e66505] text-3xl font-bold'>Empresa</h2>
                <p className='text-gray-800 text-2xl'>Aumenta tus ventas.</p>
              </div>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#e66505] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#e66505] text-lg'>Aprueba crédito.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Sin Buro de crédito.</li>
                    <li>- Facilidad de ventas.</li>
                  </ul>
                </div>
              </article>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#e66505] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#e66505] text-lg'>Incrementa tus ganancias.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Emulador de crédito.</li>
                    <li>- Control de pagos.</li>
                  </ul>
                </div>
              </article>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#e66505] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#e66505] text-lg'>Sin papeleos</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Contrato automáticos.</li>
                    <li>- Copia de cédula.</li>
                  </ul>
                </div>
              </article>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#e66505] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#e66505]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#e66505] text-lg'>Sin riesgo.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Económicos.</li>
                  </ul>
                </div>
              </article>
            </div>

            <div className='flex items-center justify-center'>
              <Image
                src="/images/tv.png"
                alt="logo"
                width={500}
                height={500}
                className="w-full"
              />
            </div>

            <div className='flex flex-col gap-10'>

              <div>
                <h2 className='text-[#2e3192] text-3xl font-bold'>Cliente</h2>
                <p className='text-gray-800 text-2xl'>Mejora tu nivel crediticio.</p>
              </div>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#2e3192] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#2e3192]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#2e3192] text-lg'>Facilidad de pagos.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Quincenales.</li>
                    <li>- Semanales.</li>
                    <li>- Mensuales.</li>
                    <li>- Cuotas pequeñitas.</li>
                  </ul>
                </div>
              </article>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#2e3192] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#2e3192]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#2e3192] text-lg'>Premios - Regalos sorpresas.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Cuotas sin retraso.</li>
                    <li>- Sin entrada en tu próxima compra.</li>
                  </ul>
                </div>
              </article>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#2e3192] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#2e3192]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#2e3192] text-lg'>Mejora tu historial.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Certificado de crédito.</li>
                    <li>- Mejora de nivel crediticio.</li>
                  </ul>
                </div>
              </article>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#2e3192] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#2e3192]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#2e3192] text-lg'>Variedad.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Marcas.</li>
                    <li>- Modelos.</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>
        </section>

        <section className='text-gray-800 my-10 w-[80%] m-auto'>
          <h2 className='text-center text-3xl font-bold mb-5'>Amplia gama de <br /> <span className='text-[#2e3192]'>Marcas</span></h2>

          <BrandCarousel />
        </section>
      </MainLayout>
    </>
  );
}
