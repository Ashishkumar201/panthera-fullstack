import React from "react";

const logos = [
  { src: "https://res.cloudinary.com/dt8emxboh/image/upload/v1753537546/rqgyygbej8elcmilwf0f.png", alt: "KB Home" },
  { src: "https://res.cloudinary.com/dt8emxboh/image/upload/v1753537662/v11rvf3i26ytqvpx3t7k.png", alt: "NVR" },
  { src: "https://res.cloudinary.com/dt8emxboh/image/upload/v1753537887/lymutaowvzsqpxv2ecyz.png", alt: "Lennar" },
  { src: "https://res.cloudinary.com/dt8emxboh/image/upload/v1753537925/cnkfndaqdk72us0l3n6h.png", alt: "Richmond" },
  { src: "https://res.cloudinary.com/dt8emxboh/image/upload/v1753537983/oaujs7ncj3yugtok6eyu.png", alt: "Tri Pointe" },
  { src: "https://res.cloudinary.com/dt8emxboh/image/upload/v1753538018/je4tyxo2zconlmzefuyk.png", alt: "Smith Douglas" },
];

export default function URLsView() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Builder Logos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-xl aspect-square flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain p-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}