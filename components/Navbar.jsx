// import Link from "next/link";
// import { Lexend } from "next/font/google";
// import { getSession } from "../app/lib/session";
// import NavLinkItem from "./NavLinkItem";
// import MobileMenu from "./MobileMenu";

// const lexend = Lexend({ subsets: ["latin"] });

// export default async function Navbar() {
//   const session = await getSession();
//   const isLoggedIn = !!session;

//   return (
//     <nav className="w-full border-b border-gray-200 py-4 sticky top-0 bg-white z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img src="/BGIIES-SMALL.png" alt="BGIIES Logo" className="w-12 h-12" />
//           <p className="text-black font-bold text-sm" style={{ fontFamily: lexend.style.fontFamily }}>
//             BITS Goa Innovation, Incubation & Entrepreneurship Society
//           </p>
//         </div>

//         {/* Desktop Links */}
//         <div
//           className="hidden lg:flex flex-1 justify-between px-6"
//           style={{ fontFamily: lexend.style.fontFamily }}
//         >
//           <NavLinkItem href="/" text="Home" />
//           <NavLinkItem href="/facilities" text="Facilities" />
//           <NavLinkItem href="/incubation" text="Incubation" />
//           <NavLinkItem href="/events" text="Events" />
//           <NavLinkItem href="/gallery" text="Gallery" />
//           <NavLinkItem href="/bgiies" text="BGIIES Till Now" />
//           <NavLinkItem href="/sisfs" text="SISFS" />
//           <NavLinkItem href="/contact" text="Contact Us" />
//           <NavLinkItem href="/dev" text="Dev" />

//           {isLoggedIn ? (
//             <NavLinkItem text="Log Out" isLogout />
//           ) : (
//             <NavLinkItem href="/login" text="Login" />
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <MobileMenu isLoggedIn={isLoggedIn} />
//       </div>
//     </nav>
//   );
// }


import Link from "next/link";
import { Lexend } from "next/font/google";
import { getSession } from "../app/lib/session";
import NavLinkItem from "./NavLinkItem";
import MobileMenu from "./MobileMenu";

const lexend = Lexend({ subsets: ["latin"] });

export default async function Navbar() {
  const session = await getSession();
  const isLoggedIn = !!session;

  // 1. Define all your base navigation links here
  const baseLinks = [
    { href: "/", text: "Home" },
    { href: "/facilities", text: "Facilities" },
    { href: "/incubation", text: "Incubation" },
    { href: "/events", text: "Events" },
    { href: "/gallery", text: "Gallery" },
    { href: "/founders", text: "Founders" },
    { href: "/bgiies", text: "BGIIES Till Now" },
    // { href: "/sisfs", text: "SISFS" },
    { href: "/contact", text: "Contact Us" },
    // { href: "/dev", text: "Dev" },
  ];

  // 2. Create the final list including the dynamic Auth button
  const allLinks = [
    ...baseLinks,
    isLoggedIn
      ? { href: "#", text: "Log Out", isLogout: true }
      : { href: "/login", text: "Login" },
  ];

  // 3. Slice the array: First 6 items vs the rest
  const VISIBLE_COUNT = 6;
  const visibleLinks = allLinks.slice(0, VISIBLE_COUNT);
  const hiddenLinks = allLinks.slice(VISIBLE_COUNT);

  return (
    <nav className="w-full border-b border-gray-200 py-4 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/BGIIES-SMALL.png" alt="BGIIES Logo" className="w-12 h-12" />
          <p
            className="text-black font-bold text-sm"
            style={{ fontFamily: lexend.style.fontFamily }}
          >
            BITS Goa Innovation, Incubation & Entrepreneurship Society
          </p>
        </div>

        {/* Desktop Links - Refactored */}
        <div
          className="hidden lg:flex flex-1 justify-end items-center gap-6 pl-8"
          style={{ fontFamily: lexend.style.fontFamily }}
        >
          {/* Render first 6 links normally */}
          {visibleLinks.map((link, index) => (
            <NavLinkItem
              key={index}
              href={link.href}
              text={link.text}
              isLogout={link.isLogout}
            />
          ))}

          {/* Render "More" Dropdown if there are hidden links */}
          {hiddenLinks.length > 0 && (
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-gray-600 hover:text-black font-medium transition-colors">
                More
                {/* Simple SVG Down Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:rotate-180"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* The Dropdown Menu (Appears on Hover) */}
              <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="bg-white border border-gray-200 shadow-xl rounded-lg flex flex-col overflow-hidden">
                  {hiddenLinks.map((link, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 border-b border-gray-100 last:border-none hover:bg-gray-50 text-right"
                    >
                      <NavLinkItem
                        href={link.href}
                        text={link.text}
                        isLogout={link.isLogout}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <MobileMenu isLoggedIn={isLoggedIn} />
      </div>
    </nav>
  );
}