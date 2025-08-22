import React from "react";

function Realisations() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/plaquette_association_valisoa.pdf"; // chemin vers ton PDF dans public/documents/
    link.download = "plaquette_association_valisoa.pdf";        // nom du fichier téléchargé
    link.click();
  };

  return (
    <section id="actions" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
        {/* Bloc gauche avec les photos */}
        <div className="w-full md:w-1/2 relative flex flex-wrap justify-center items-center gap-2">
          <img src="/images/photo18.jpeg" alt="Réalisation 1" className="w-16 h-16 object-cover rounded-md" />
          <img src="/images/photo3.png" alt="Réalisation 2" className="w-24 h-12 object-cover rounded-md" />
          <img src="/images/photo24.jpeg" alt="Réalisation 3" className="w-20 h-20 object-cover rounded-md" />
          <img src="/images/photo30.jpeg" alt="Réalisation 4" className="w-28 h-28 object-cover rounded-md" />
          <img src="/images/photo29.jpeg" alt="Réalisation 5" className="w-40 h-28 object-cover rounded-md" />
          <img src="/images/photo7.png" alt="Réalisation 6" className="w-36 h-36 object-cover rounded-md" />
          <img src="/images/photo2.jpeg" alt="Réalisation 7" className="w-48 h-40 object-cover rounded-md" />
        </div>

        {/* Bloc droit avec le texte */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">Solidarité sur le terrain</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Depuis son lancement, <span className="font-semibold text-emerald-700">Mutual Aid Foundation</span> a apporté un soutien concret à diverses communautés à Madagascar, en commençant par <span className="text-amber-600 font-medium">Nanitoana Mahasoabe</span>, où plus de <span className="font-bold text-emerald-600">1 000 personnes</span> ont bénéficié d’aides essentielles.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              <span className="font-semibold text-emerald-700">Aînés</span> : produits de première nécessité distribués aux personnes âgées pour leur offrir <span className="italic">dignité</span> et <span className="italic">réconfort</span>.
            </li>
            <li>
              <span className="font-semibold text-emerald-700">Femmes</span> : à <span className="text-amber-600">Ambatomaro</span>, des vêtements et produits de base ont été remis à des travailleuses courageuses lors de la Journée de la Femme.
            </li>
            <li>
              <span className="font-semibold text-emerald-700">Handicap</span> : au Centre Orchidée d’<span className="text-amber-600">Andoharanofotsy</span>, des dons ont été accompagnés de <span className="italic">présence humaine et d’écoute</span>.
            </li>
          </ul>

          <p className="text-gray-700 mb-6">
            Ces actions ont été rendues possibles grâce à <span className="text-emerald-700 font-medium">l’engagement personnel</span> de notre présidente et au soutien de généreux <span className="text-emerald-600 font-medium">membres et partenaires</span>.
          </p>

          <button
            onClick={handleDownload}
            className="border border-emerald-600 text-emerald-700 px-6 py-2 rounded hover:bg-emerald-600 hover:text-white transition font-medium"
          >
            Télécharger pour voir plus
          </button>
        </div>
      </div>
    </section>
  );
}

export default Realisations;
