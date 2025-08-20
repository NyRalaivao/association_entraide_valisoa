function Presidente() {
  return (
    <section className="bg-stone-50 py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        {/* Image de la fondatrice */}
        <div className="w-[40vw] max-w-[150px] h-[25vw] rounded-full overflow-hidden border-4 border-emerald-600 shadow-lg">
          <img
            src="/images/Fondatrice.png"
            alt="RAKOTOMAHARO Miangola Valisoa"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Mot de la fondatrice</h2>
          <p className="text-gray-700 mb-4">
            Fondée par une jeune visionnaire de 22 ans, <strong>RAKOTOMAHARO Miangola Valisoa</strong>, notre association incarne l'audace
            et la détermination d'une nouvelle génération prête à transformer Madagascar.
            Ensemble, nous bâtissons un avenir où l'entraide et l'innovation font la différence !
          </p>
          <p className="text-gray-700">
            « Je suis née ici, j’ai grandi ici, et chaque jour, je vois des sourires qui cachent des souffrances, des
              talents étouffés par le manque, et des cœurs qui battent fort malgré tout. C’est pour eux, pour
              nous, que l' <strong>Association d’Entraide Valisoa (Mutual Aid Foundation)</strong> existe.
              À travers chaque action menée — une main tendue — nous construisons une société plus juste,
              plus humaine, plus digne.
              Cette association, ce n’est pas un simple projet. C’est un combat du cœur. Un rêve de solidarité
              qui devient réalité, pas à pas.
              Et tant qu’il restera des vies à éclairer, des causes à défendre et des espoirs à ranimer, je
              continuerai. Nous continuerons.»
          </p>
        </div>
      </div>
    </section>
  );
}

export default Presidente;
