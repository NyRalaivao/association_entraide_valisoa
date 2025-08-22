function Hero() {
    return (
        <>
            <section id="acceuil" className="relative bg-[url('/images/hero.jpeg')] bg-cover bg-center h-[70vh] text-white">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-20 p-20">
                    <div className="max-w-xl">
                        <h1 className="text-4xl font-bold mb-4">Agir pour les plus fragiles</h1>
                        <p className="text-lg">
                            Créer un avenir où la solidarité, l'éducation, la santé et l'environnement se rejoignent pour un Madagascar plus juste et durable.
                        </p>
                        <a
                            href="mailto:mutualaidfoundation2025@gmail.com?subject=Faire%20un%20don&body=Bonjour,%0D%0A%0D%0AJe souhaite faire un don pour soutenir vos actions.%0D%0A%0D%0AMerci."
                            className="inline-block mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200"
                        >
                            Faire un don
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
