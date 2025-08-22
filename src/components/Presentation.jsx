import { motion } from "framer-motion";

function Presentation() {
  return (
    <>
      <section id="apropos" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Ce que nous soutenons
          </h2>

          {/* CONTAINER AVEC ANIMATION ENCHAINÉE */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.3 }}
            viewport={{ once: true }}
          >
            {/* VARIANTES POUR LES CARTES */}
            {[
              {
                titre: "Social",
                texte:
                  "Nous œuvrons pour le bien-être et l'inclusion de chacun à travers des actions solidaires et communautaires.",
              },
              {
                titre: "Environnemental",
                texte:
                  "Nous sensibilisons et agissons pour protéger notre planète en promouvant des pratiques durables et écologiques.",
              },
              {
                titre: "Éducation",
                texte:
                  "Nous offrons des opportunités d'apprentissage et de développement pour permettre à chacun de construire son avenir.",
              },
              {
                titre: "Sanitaire",
                texte:
                  "Nous contribuons à l'amélioration des conditions de santé en facilitant l'accès aux soins et à la prévention.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-stone-100 p-6 rounded-xl shadow hover:shadow-md transition"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">
                  {item.titre}
                </h3>
                <p className="text-gray-700">{item.texte}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* TEXTE EN BAS AVEC ANIMATION */}
          <motion.div
            className="mt-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Depuis 2024, l'Association Valisoa (Mutual Aid Foundation) œuvre avec passion pour apporter aide, espoir et dignité aux communautés de Madagascar. 
              À travers nos actions solidaires, nous soutenons l’éducation des enfants, la santé, offrons du réconfort aux personnes vulnérables, encourageons les femmes, 
              protégeons l’environnement et semons la joie là où elle manque.
              <br /><br />
              Chaque sourire, chaque geste, chaque projet témoigne de notre conviction : 
              <span className="font-semibold text-emerald-600"> ensemble, nous pouvons changer des vies et bâtir un avenir meilleur pour tous.</span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Presentation;
