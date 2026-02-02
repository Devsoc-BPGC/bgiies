'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Quicksand } from 'next/font/google';

const quicksand_bold = Quicksand({
  weight: '700',
  subsets: ['latin'],
});

const quicksand_medium = Quicksand({
  weight: '500',
  subsets: ['latin'],
});

/* =========================
   INCUBATEES DATA ARRAY
   ========================= */

 const incubatees = [
  { img: '/incubatee-1.png', url: 'https://www.intellicontech.com/', name: 'Intellicon Technologies' }, 
  { img: '/incubatee-2.png', url: 'https://acc-red.com/', name: 'ACC-RED' },  
  { img: '/incubatee-3.png', url: '#', name: 'AMCAS' },
  { img: '/incubatee-4.png', url: '#', name: 'Angirus' },
  { img: '/incubatee-5.png', url: '#', name: 'bi (brand)' },
  { img: '/incubatee-6.png', url: '#', name: 'CogniX' },
  { img: '/incubatee-7.png', url: '#', name: 'DE (brand)' },
  { img: '/incubatee-8.png', url: '#', name: 'FSB' },
  { img: '/incubatee-9.png', url: '#', name: 'GotoSpares' },
  { img: '/incubatee-10.png', url: '#', name: 'greengrahi' },
  { img: '/incubatee-11.png', url: '#', name: 'GreenShift Energy' },
  { img: '/incubatee-12.png', url: '#', name: 'GALF' },
  { img: '/incubatee-13.png', url: '#', name: 'iTechSeed' },
  { img: '/incubatee-14.png', url: '#', name: 'INERGIO' },
  { img: '/incubatee-15.png', url: '#', name: 'TEPL' },
  { img: '/incubatee-16.png', url: '#', name: 'upskillr' },
  { img: '/incubatee-17.png', url: '#', name: 'Trumedin' },
  { img: '/incubatee-18.png', url: '#', name: 'ACC-RED' },
  { img: '/incubatee-19.png', url: '#', name: 'Another Startup 19' },
  { img: '/incubatee-20.png', url: 'http://www.trumedsolutions.com/', name: 'trumedsolutions' },
];


export default function IncubationPage() {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[100vh] w-full overflow-hidden">

        <Image
          src="/incubation-bg.png"
          alt="Incubation background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 z-10">
          <Image
            src="/incubation-gradient.png"
            alt="Gradient overlay"
            fill
            className="object-cover opacity-50"
          />
        </div>

        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4">
          <h1 className={`${quicksand_bold.className} text-2xl sm:text-3xl md:text-[40px] font-bold text-white whitespace-normal md:whitespace-nowrap leading-tight mb-2`}>
            Always make products that are the best in the world
            <br className="hidden md:block" />
            <span className="md:inline block mt-2 md:mt-0"> -Sridhar Vembu</span>
          </h1>
          <h2 className={`${quicksand_medium.className} text-xl sm:text-2xl md:text-[32px] font-bold text-white mt-2`}>
            Co-founder, Zoho
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 z-20 w-1/2 sm:w-auto">
          <Image
            src="/incubation-bottomleft-element.png"
            alt="Bottom left overlay"
            width={356}
            height={150}
            className="object-contain"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

      </div>

      {/* ================= INCUBATEES SECTION ================= */}
      <div className="bg-white w-full min-h-screen pt-12 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center mb-12 md:mb-28">
            <h2 className={`${quicksand_bold.className} text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center`}>
              Our Incubatees
            </h2>
            <div className="w-16 h-1 bg-yellow-500 rounded-full transform -translate-x-12 md:-translate-x-20"></div>
          </div>

          {/* ===== Dynamic Grid ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-y-8 mb-24 md:mb-48 justify-items-center">
            {incubatees.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                title={item.name}
                className="w-full max-w-[228px] aspect-[228/210] relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </Link>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
