function Presentation() {
    return(
        <>
        <section id="apropos" className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Ce que nous soutenons</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* SOCIAL */}
      <div className="bg-stone-100 p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3 text-emerald-600">Social</h3>
        <p className="text-gray-700">
          Nous œuvrons pour le bien-être et l'inclusion de chacun à travers des actions solidaires et communautaires.
        </p>
      </div>

      {/* ENVIRONNEMENT */}
      <div className="bg-stone-100 p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3 text-emerald-600">Environnemental</h3>
        <p className="text-gray-700">
          Nous sensibilisons et agissons pour protéger notre planète en promouvant des pratiques durables et écologiques.
        </p>
      </div>

      {/* EDUCATION */}
      <div className="bg-stone-100 p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3 text-emerald-600">Éducation</h3>
        <p className="text-gray-700">
          Nous offrons des opportunités d'apprentissage et de développement pour permettre à chacun de construire son avenir.
        </p>
      </div>

      {/* SANITAIRE */}
      <div className="bg-stone-100 p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3 text-emerald-600">Sanitaire</h3>
        <p className="text-gray-700">
          Nous contribuons à l'amélioration des conditions de santé en facilitant l'accès aux soins et à la prévention.
        </p>
      </div>
    </div>
  </div>
</section>

        </>
    )

}

export default Presentation;