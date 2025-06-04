'use client'


import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navBarActive, setNavBarActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);


    return (
        <nav className={`fixed top-8 left-[50%] translate-x-[-50%] z-20 w-[80%] m-auto bg-gradient-to-l from-[#d37126] to-[#d46007] p-2 lg:p-3 transition-transform duration-300 flex justify-between items-center shadow-md shadow-[#131114] border border-[#dc792e] ${isVisible ? "translate-y-0" : "-translate-y-[200%]"}`}>

            <div className="w-full flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <Link href="/">
                        <Image
                            width={50}
                            height={50}
                            src="/images/logo.webp"
                            alt="logo"
                        />
                    </Link>

                    <p className='font-bold text-md lg:text-xl'>Smart Pay</p>
                </div>

                <ul className='hidden lg:flex items-center gap-1'>
                    <li>
                        <Link
                            href="/"
                            className={`block leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold ${pathname === '/' ? 'bg-[#2e3192]' : ''}`}
                        >
                            <span className='block skew-x-12 leading-none'>Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/sobre-nosotros"
                            className={`block leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold ${pathname === '/sobre-nosotros' ? 'bg-[#2e3192]' : ''}`}
                        >
                            <span className='block skew-x-12 leading-none'>Sobre Nosotros</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/beneficio"
                            className={`block leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold ${pathname === '/beneficio' ? 'bg-[#2e3192]' : ''}`}
                        >
                            <span className='block skew-x-12 leading-none'>Beneficio</span>

                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/afiliate"
                            className={`block leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold ${pathname === '/afiliate' ? 'bg-[#2e3192]' : ''}`}
                        >
                            <span className='block skew-x-12 leading-none'>Afiliate</span>

                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contacto"
                            className={`block leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold ${pathname === '/contacto' ? 'bg-[#2e3192]' : ''}`}
                        >
                            <span className='block skew-x-12 leading-none'>Contacto</span>

                        </Link>
                    </li>
                </ul>
            </div>

            {navBarActive ?
                <button
                    type="button"
                    className={`block lg:hidden leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold bg-[#2e3192]`}
                    onClick={() => setNavBarActive(!navBarActive)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x -skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                </button>
                :
                <button
                    type="button"
                    className={`block lg:hidden leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold bg-[#2e3192]`}
                    onClick={() => setNavBarActive(!navBarActive)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
                </button>
            }

            <Link
                href="https://tv.lockplay.org/gin"
                target="_blank"
                className="items-center gap-1 py-2 px-3 font-semibold bg-[#2e3192] transition-colors text-gray-100 hidden lg:flex text-nowrap -skew-x-12"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-user skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
                <span className='block skew-x-12 leading-none'>Iniciar Sesión</span>
            </Link>

            <div className={`${navBarActive ? "translate-y-0" : "-translate-y-[200%]"} bg-gradient-to-l from-[#d37126] to-[#d46007] shadow-md shadow-[#131114] border border-[#dc792e] absolute top-20 left-[50%] -translate-x-[50%] p-2 transition-all duration-500`}>
                <ul className='flex flex-col items-center gap-1 text-nowrap text-sm lg:text-base'>
                    <li>
                        <Link
                            href="/"
                            className={`block leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold ${pathname === '/' ? 'bg-[#2e3192]' : ''}`}
                        >
                            <span className='block skew-x-12 leading-none'>Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/sobre-nosotros"
                            className={`block leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold ${pathname === '/sobre-nosotros' ? 'bg-[#2e3192]' : ''}`}
                        >
                            <span className='block skew-x-12 leading-none'>Sobre Nosotros</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/beneficio"
                            className={`block leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold ${pathname === '/beneficio' ? 'bg-[#2e3192]' : ''}`}
                        >
                            <span className='block skew-x-12 leading-none'>Beneficio</span>

                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/afiliate"
                            className={`block leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold ${pathname === '/afiliate' ? 'bg-[#2e3192]' : ''}`}
                        >
                            <span className='block skew-x-12 leading-none'>Afiliate</span>

                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contacto"
                            className={`block leading-none -skew-x-12 hover:bg-[#2e3192] transition-colors py-2 px-3 font-semibold ${pathname === '/contacto' ? 'bg-[#2e3192]' : ''}`}
                        >
                            <span className='block skew-x-12 leading-none'>Contacto</span>

                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://tv.lockplay.org/"
                            target="_blank"
                            className="items-center gap-1 py-2 px-3 font-semibold bg-[#2e3192] transition-colors text-gray-100 flex text-nowrap -skew-x-12"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-user skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
                            <span className='block skew-x-12 leading-none'>Iniciar Sesión</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </nav >
    )
}
