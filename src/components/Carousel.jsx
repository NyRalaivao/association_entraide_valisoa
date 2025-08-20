import React from "react";

const images = [
  "/images/photo1.jpeg",
  "/images/photo2.jpeg",
  "/images/photo3.png",
  "/images/photo4.png",
  "/images/photo5.png",
  "/images/photo6.png",
  "/images/photo7.png",
  "/images/photo8.jpeg",
  "/images/photo9.jpeg",
  "/images/photo10.jpeg",
  "/images/photo11.jpeg",
  "/images/photo12.jpeg",
  "/images/photo13.jpeg",
  "/images/photo14.jpeg",
  "/images/photo18.jpeg",
  "/images/photo19.jpeg",
  "/images/photo24.jpeg",
  "/images/photo25.jpeg",
  "/images/photo26.jpeg",
  "/images/photo27.jpeg",
  "/images/photo28.jpeg",
  "/images/photo29.jpeg",
  "/images/photo30.jpeg",
  "/images/photo31.jpeg",
  "/images/photo32.jpeg",
  "/images/photo33.jpeg"
];

export default function Carousel() {
  return (
    <>
      {/* Animation CSS */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .scrolling-wrapper {
            animation: scroll 60s linear infinite;
          }

          .carousel-container:hover .scrolling-wrapper {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-10 px-4 bg-white">
        {/* Carousel d'images */}
        <div className="carousel-container relative w-full max-w-6xl overflow-hidden rounded shadow-md">
          <div className="scrolling-wrapper flex w-max">
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                className="w-64 h-40 object-cover flex-shrink-0"
                alt={`image-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Texte de présentation */}
        <div className="max-w-md text-gray-700 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">
            Soutien à l’éducation et développement personnel
          </h2>

          <p className="mb-4">
            L’association place <span className="font-semibold text-emerald-600">l’éducation</span> au cœur de sa mission :
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              Fournitures scolaires offertes aux enfants de l’<span className="text-amber-600">EPP</span> et des écoles catholiques.
            </li>
            <li>
              Récompenses symboliques pour les élèves ayant passé le <span className="font-medium text-emerald-600">CEPE</span>.
            </li>
            <li>
              <span className="font-medium text-emerald-600">Parrainage actif</span> de 40 enfants pour leur permettre de poursuivre leur scolarité dans de bonnes conditions.
            </li>
          </ul>
          
          <p className="mb-6">
            Chaque mois, de petits moments de <span className="text-amber-600 font-medium">partage</span> sont organisés pour les enfants de <span className="text-emerald-600 font-semibold">Nanitoana Mahasoabe</span> :
            <span className="italic"> goûters, friandises, petits cadeaux</span> – des gestes simples mais porteurs d'<span className="font-semibold text-emerald-700">espoir</span>.
          </p>
        </div>
      </div>
    </>
  );
}

