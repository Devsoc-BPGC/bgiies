"use client";

import { Lexend } from "next/font/google";
import { useEffect, useRef } from "react";

const lexend = Lexend({ subsets: ["latin"] });

export default function InvestorsSection() {
  const scrollRef = useRef(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const rafRef = useRef(null);

  // -------- Auto Scroll Loop --------
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const loop = () => {
      if (!isDraggingRef.current) {
        el.scrollLeft += 0.6;

        // seamless reset
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // -------- Drag / Touch Support --------
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function getPageX(e) {
      return e.touches ? e.touches[0].pageX : e.pageX;
    }

    function onDown(e) {
      isDraggingRef.current = true;
      startXRef.current = getPageX(e);
      startScrollRef.current = el.scrollLeft;
      document.body.style.userSelect = "none";
      document.body.style.cursor = "grabbing";
    }

    function onMove(e) {
      if (!isDraggingRef.current) return;
      const x = getPageX(e);
      const walk = (x - startXRef.current) * 1.5;
      el.scrollLeft = startScrollRef.current - walk;
    }

    function onUp() {
      isDraggingRef.current = false;
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    }

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    el.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);

    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);

      el.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  // -------- Data --------
  const investors = [
    "/investor1.png",
    "/investor2.png",
    "/investor3.png",
    "/investor4.png",
    "/investor5.png",
  ];

  const loopItems = [...investors, ...investors];

  return (
    <section
      className="w-full relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/investors-bg.png')" }}
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl font-semibold text-black"
          style={{ fontFamily: lexend.style.fontFamily }}
        >
          Associated Investors
        </h2>
        <div className="w-16 h-[3px] bg-[#1BA1E2] mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Scroll Area */}
      <div
        ref={scrollRef}
        className="overflow-x-scroll overflow-y-hidden w-full cursor-grab select-none scrollbar-hide"
      >
        <div className="flex gap-10 py-6 w-fit pl-6">
          {loopItems.map((img, idx) => (
            <div
              key={idx}
              className="w-56 h-40 flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-md border border-gray-100"
            >
              <img
                src={img}
                alt={`Investor ${idx}`}
                className="w-32 h-16 object-contain"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
