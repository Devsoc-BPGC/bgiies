"use client";
import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });
const profiles = [
  {
    name: "Prof. Anirban Roy",
    role: "Joint Secretary and FIC",
    source: "/Prof_Anirban_Roy.jpg",
  },
  {
    name: "Prof. Sachin Arya",
    role: "Vice President",
    source: "/Sachin_Arya_Vice President.jpg",
  },
  {
    name: "Prof. Suman Kundu",
    role: "BGIIES President",
    source: "/Prof_Suman_Kundu.jpg",
  },
  {
    name: "Prof. Ian Sardinha",
    role: "Treasurer",
    source: "/Ian_Sardinha_Treasurer.jpg",
  },
  {
    name: "Prof. D. M. Kulkarni",
    role: "Secretary",
    source: "/Prof_DM_Kulkarni_Secretary.jpg",
  },
];
const OrgStructure = () => {
  const containerStyle = {
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 16,
    flexWrap: "wrap",
  };
  const cardStyle = {
    width: 180,
    textAlign: "center",
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  };
  const imgWrapperStyle = {
    width: 160,
    height: 160,
    margin: "0 auto 8px",
    border: "3px solid #b58fff",
    borderRadius: 4,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    background: "#fff",
  };
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };
  const nameStyle = {
    fontSize: 18,
    fontWeight: 700,
    margin: "6px 0 2px",
    color: "black",
  };
  const roleStyle = {
    fontSize: 10,
    color: "#8a8a8a",
    letterSpacing: 0.3,
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 text-center font-bold text-black">
          <span className="border-b-4 border-amber-300 pb-1">Org</span>
          anisational Structure
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 mb-50">
        <div style={containerStyle} className="mt-10">
          {profiles.map((p, i) => (
            <div key={i} style={cardStyle}>
              <div style={imgWrapperStyle}>
                {/* intentionally left src blank as requested */}
                <img
                  src={p.source}
                  alt={`${p.name} portrait`}
                  style={imgStyle}
                />
              </div>
              <div style={nameStyle}>{p.name}</div>
              <div style={roleStyle}>{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrgStructure;
