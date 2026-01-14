'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import TextType from "@/components/TextType";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0
  }
};

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <video src="https://www.pexels.com/fr-fr/download/video/856882/" autoPlay muted></video>
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/50 to-ocean-deep/70 flex items-center justify-center">
          <div className="text-center text-foam px-4 max-w-4xl">
            <TextType 
              text={[
                "Protégeons Nos Océans",
                "Ensemble pour préserver la biodiversité marine et assurer un avenir durable aux générations futures",
              ]}
              typingSpeed={65}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              className="text-white text-4xl"
            />
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="#actions"
                className="inline-block bg-coral hover:bg-coral/90 text-foam px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Découvrir comment agir
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-8 text-center">
              L'Urgence de la Protection Marine
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-ocean-medium leading-relaxed">
              Les océans sont le cœur battant de notre planète. Couvrant plus de 70% de la surface terrestre,
              ils produisent environ 50% de l'oxygène que nous respirons grâce au phytoplancton marin. Régulateurs
              du climat mondial, ils absorbent près de 30% du CO₂ émis par les activités humaines et distribuent
              la chaleur à travers les courants océaniques, maintenant ainsi l'équilibre climatique essentiel à la vie.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-ocean-medium leading-relaxed">
              Au-delà de leur rôle écologique crucial, les océans constituent une source vitale de nourriture
              pour plus de 3 milliards de personnes et génèrent des revenus pour des millions de familles à
              travers le monde. Ils abritent une biodiversité extraordinaire avec plus de 230 000 espèces
              répertoriées, et les scientifiques estiment que des millions d'autres restent à découvrir dans
              les profondeurs inexplorées.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-ocean-medium leading-relaxed">
              Pourtant, ce patrimoine naturel irremplaçable fait face à des menaces sans précédent. Chaque année,
              environ 8 millions de tonnes de plastique finissent dans les océans, formant des zones de pollution
              massive comme le Great Pacific Garbage Patch, une île de déchets grande comme trois fois la France.
              Le réchauffement climatique provoque l'acidification des océans et le blanchissement des coraux,
              tandis que la surpêche décime les populations de poissons à un rythme alarmant.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-gradient-to-r from-ocean-medium to-ocean-light py-16 md:py-20"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div variants={scaleIn} className="text-center text-foam">
              <div className="text-5xl md:text-6xl font-bold mb-3">50%</div>
              <p className="text-lg md:text-xl font-medium">
                de l'oxygène que nous respirons provient des océans
              </p>
            </motion.div>
            <motion.div variants={scaleIn} className="text-center text-foam">
              <div className="text-5xl md:text-6xl font-bold mb-3">90%</div>
              <p className="text-lg md:text-xl font-medium">
                des grands poissons ont disparu depuis 1950
              </p>
            </motion.div>
            <motion.div variants={scaleIn} className="text-center text-foam">
              <div className="text-5xl md:text-6xl font-bold mb-3">8M</div>
              <p className="text-lg md:text-xl font-medium">
                de tonnes de plastique polluent les océans chaque année
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Actions Section */}
      <section id="actions" className="bg-ocean-light bg-opacity-10 py-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-12 text-center"
          >
            Comment Agir Au Quotidien
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-foam p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-5">♻️</div>
              <h3 className="text-2xl font-bold text-ocean-deep mb-4">
                Réduire le Plastique
              </h3>
              <p className="text-ocean-medium leading-relaxed mb-4">
                Évitez les plastiques à usage unique en privilégiant des alternatives durables : gourdes
                réutilisables, sacs en tissu, contenants en verre. Chaque petit geste compte.
              </p>
              <p className="text-ocean-medium text-sm italic">
                Impact : Réduction de 40% de votre empreinte plastique
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-foam p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-5">🐟</div>
              <h3 className="text-2xl font-bold text-ocean-deep mb-4">
                Consommer Responsable
              </h3>
              <p className="text-ocean-medium leading-relaxed mb-4">
                Choisissez des produits de la mer issus de pêcheries durables certifiées MSC ou ASC.
                Privilégiez les espèces locales et de saison pour préserver les stocks.
              </p>
              <p className="text-ocean-medium text-sm italic">
                Impact : Soutien direct aux pratiques de pêche durable
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-foam p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-5">🌊</div>
              <h3 className="text-2xl font-bold text-ocean-deep mb-4">
                Participer au Nettoyage
              </h3>
              <p className="text-ocean-medium leading-relaxed mb-4">
                Rejoignez des initiatives locales de nettoyage des plages et côtes. En France, plus de
                200 tonnes de déchets sont collectées chaque année grâce aux bénévoles.
              </p>
              <p className="text-ocean-medium text-sm italic">
                Impact : Retrait direct des déchets des écosystèmes marins
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-6">
                Des Actions Qui Portent Leurs Fruits
              </h2>
              <p className="text-lg md:text-xl text-ocean-medium mb-6 leading-relaxed">
                Les initiatives de protection marine montrent des résultats concrets et encourageants. Les aires
                marines protégées (AMP) ont permis de restaurer des populations de poissons avec une augmentation
                moyenne de 670% de la biomasse dans les zones bien gérées. Ces sanctuaires marins protègent également
                des espèces menacées et préservent des écosystèmes entiers.
              </p>
              <p className="text-lg md:text-xl text-ocean-medium mb-6 leading-relaxed">
                Les programmes de restauration des récifs coralliens affichent des taux de survie remarquables,
                atteignant jusqu'à 80% dans certaines régions tropicales. En Floride, le projet Coral Restoration
                Foundation a transplanté plus de 100 000 coraux depuis 2007, redonnant vie à des récifs dégradés.
              </p>
              <p className="text-lg md:text-xl text-ocean-medium leading-relaxed">
                Les campagnes de sensibilisation portent également leurs fruits : plusieurs villes côtières ont
                réduit leur consommation de plastique de 40% grâce à des programmes éducatifs ciblés. L'engagement
                collectif fait la différence.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              whileHover={{ scale: 1.02 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80"
                alt="Tortue marine verte nageant paisiblement dans les eaux cristallines de l'océan Pacifique"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-deep/90 to-transparent p-6">
                <p className="text-foam text-sm md:text-base font-medium italic">
                  "Les tortues marines, espèce menacée, retrouvent leurs habitats grâce aux programmes de conservation"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-gradient-to-r from-ocean-deep to-ocean-medium py-16 md:py-20 text-center"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foam mb-6">
            Rejoignez le Mouvement
          </h2>
          <p className="text-xl md:text-2xl text-ocean-light mb-8 leading-relaxed">
            Chaque action compte. Ensemble, nous pouvons inverser la tendance et offrir un océan sain aux générations futures.
          </p>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-coral hover:bg-coral/90 text-foam px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            En savoir plus sur notre mission
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}
