// 'use client';

// import Image from 'next/image';
// import { Quicksand } from 'next/font/google';
// import TestimonialCarousel from '../../components/TestimonialCarousel'; // <-- 1. ADD THIS IMPORT

// const quicksand_bold = Quicksand({
//   weight: '700', // Bold weight
//   subsets: ['latin'],
// });

// const quicksand_medium = Quicksand({
//   weight: '500', 
//   subsets: ['latin'],
// });

// export default function IncubationPage() {
//     return (
//     <div> {/* 80px = 20 in Tailwind (20 * 4px = 80px) */}
      
//       {/* --- HERO SECTION --- */}
//       <div className="relative h-[100vh] w-full">
        
//         {/* Main Background Image */}
//         <Image
//           src="/incubation-bg.png"
//           alt="Incubation background"
//           fill
//           className="object-cover"
//           priority
//         />
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 z-10">
//           <Image
//             src="/incubation-gradient.png"
//             alt="Gradient overlay"
//             fill
//             className="object-cover opacity-50"
//           />
//         </div>
//         <div className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
//           <h1 className={`${quicksand_bold.className} text-[40px] font-bold text-white whitespace-nowrap`}>
//             Always make products that are the best in the world
//             <br /> -Sridhar Vembu
//           </h1>
//           <h2 className={`${quicksand_medium.className} text-[32px] font-bold text-white whitespace-nowrap`}>
//             Co-founder,Zoho
//           </h2>
//         </div>
//         {/* Small Image in Bottom Left Corner */}
//           <Image
//             src="/incubation-bottomleft-element.png"
//             alt="Bottom left overlay"
//             width={356}
//             height={150}
//             className="absolute bottom-0 left-0 z-20 object-cover"
//           />
        
//       </div>

//       {/* --- WHITE CONTENT SECTION --- */}
//       <div className="bg-white w-full min-h-screen pt-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-col items-center mb-28">
//             <h2 className={`${quicksand_bold.className} text-3xl font-bold text-gray-800 mb-2`}>
//               Our Incubatees
//             </h2>
//             <div className="w-16 h-1 bg-yellow-500 -ml-40"></div>
//           </div>
//           <div className="grid grid-cols-4 gap-x-3 gap-y-3 mb-48">
//             {Array.from({ length: 19 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="w-[228px] h-[210px] overflow-hidden"
//               >
//                 <Image
//                   src={`/incubatee-${index + 1}.png`} // Replace with your actual image paths
//                   alt={`Incubatee ${index + 1}`}
//                   width={228}
//                   height={210}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Testimonials Section */}
//         <div className="flex flex-col items-center mb-48">
//           <h2 className={`${quicksand_bold.className} text-3xl font-bold text-gray-800 mb-2`}>
//             Testimonials
//           </h2>
//           <div className="w-16 h-1 bg-yellow-500 -ml-40"></div>
//         </div>
        
//         {/* --- THIS IS THE REPLACEMENT FOR THE TODO --- */}
//         <div className="mb-48">
//           <TestimonialCarousel
//             quicksand_bold={quicksand_bold}
//             quicksand_medium={quicksand_medium}
//           />
//         </div>
//         {/* --- END OF REPLACEMENT --- */}

//       </div>
//     </div>
//   );
// }

'use client';

import Image from 'next/image';
import { Quicksand } from 'next/font/google';
import TestimonialCarousel from '../../components/TestimonialCarousel';

const quicksand_bold = Quicksand({
  weight: '700',
  subsets: ['latin'],
});

const quicksand_medium = Quicksand({
  weight: '500', 
  subsets: ['latin'],
});

export default function IncubationPage() {
    return (
    <div>
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[100vh] w-full overflow-hidden">
        
        {/* Main Background Image */}
        <Image
          src="/incubation-bg.png"
          alt="Incubation background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/incubation-gradient.png"
            alt="Gradient overlay"
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* Hero Text Content */}
        {/* Changed: Added padding, responsive text sizing, and text wrapping for mobile */}
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

        {/* Small Image in Bottom Left Corner */}
        {/* Changed: Added responsive width (w-1/2 on mobile) to prevent it covering the whole screen */}
        <div className="absolute bottom-0 left-0 z-20 w-1/2 sm:w-auto">
          <Image
            src="/incubation-bottomleft-element.png"
            alt="Bottom left overlay"
            width={356}
            height={150}
            className="object-contain"
            style={{ width: 'auto', height: 'auto' }} // Maintains aspect ratio
          />
        </div>
        
      </div>

      {/* --- WHITE CONTENT SECTION --- */}
      {/* Changed: Reduced top padding on mobile */}
      <div className="bg-white w-full min-h-screen pt-12 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header: Our Incubatees */}
          {/* Changed: Replaced negative margin hack with flex alignment */}
          <div className="flex flex-col items-center mb-12 md:mb-28">
            <h2 className={`${quicksand_bold.className} text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center`}>
              Our Incubatees
            </h2>
            {/* The underline */}
            <div className="w-16 h-1 bg-yellow-500 rounded-full transform -translate-x-12 md:-translate-x-20"></div>
          </div>

          {/* Grid Section */}
          {/* Changed: grid-cols-1 for mobile, 2 for tablet, 4 for desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-y-8 mb-24 md:mb-48 justify-items-center">
            {Array.from({ length: 19 }).map((_, index) => (
              <div
                key={index}
                // Changed: Removed fixed pixel width. Uses max-width for constraint, but fills grid cell.
                className="w-full max-w-[228px] aspect-[228/210] relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Image
                  src={`/incubatee-${index + 1}.png`} 
                  alt={`Incubatee ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <div className="flex flex-col items-center mb-12 md:mb-20">
          <h2 className={`${quicksand_bold.className} text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center`}>
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-yellow-500 rounded-full transform -translate-x-12 md:-translate-x-20"></div>
        </div>

        <div className="mb-20 md:mb-48 px-4">
          <TestimonialCarousel
            quicksand_bold={quicksand_bold}
            quicksand_medium={quicksand_medium}
          />
        </div> */}

      </div>
    </div>
  );
}