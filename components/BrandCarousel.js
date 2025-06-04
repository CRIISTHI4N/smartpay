'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import "../styles/styles.css"

const images = [
    { src: '/images/logo_motorola.webp', alt: 'Motorola' },
    { src: '/images/logo_tcl.webp', alt: 'TCL' },
    { src: '/images/logo_xiaomi.webp', alt: 'Xiaomi' },
    { src: '/images/logo_sony.webp', alt: 'Sony' },
    { src: '/images/logo_philips.webp', alt: 'Philips' },
];

// Duplicamos las primeras imágenes al final para un loop continuo
const extendedImages = [...images, ...images.slice(0, 2)];

export default function BrandCarousel() {
    const [current, setCurrent] = useState(0);
    const totalSlides = Math.ceil(images.length / 3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => {
                if (prev >= totalSlides - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="w-full overflow-hidden h-[150px] relative">
            <div
                className="flex transition-transform duration-700 ease-in-out h-[150px]"
                style={{
                    width: `${Math.ceil(extendedImages.length / 4) * 100}%`,
                    transform: `translateX(-${current * (100 / Math.ceil(extendedImages.length / 3))}%)`,
                }}
            >
                {extendedImages.map((img, idx) => (
                    <div
                        className="flex items-center justify-center h-[150px] px-6"
                        style={{ width: `${300 / extendedImages.length}%` }}
                        key={idx}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={280}
                            height={140}
                            className="object-contain h-32 mx-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
} 