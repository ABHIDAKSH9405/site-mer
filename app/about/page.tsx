'use client';

import Image from "next/image";
import { motion } from "framer-motion";

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
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0
  }
};

export default function About() {
  const values = [
    {
      icon: "🔬",
      title: "Science et Recherche",
      description: "Nous basons toutes nos actions sur des données scientifiques rigoureuses issues de collaborations avec des laboratoires internationaux. Notre équipe de chercheurs publie régulièrement dans des revues à comité de lecture et participe activement au GIEC pour éclairer les politiques publiques."
    },
    {
      icon: "🤝",
      title: "Collaboration Locale",
      description: "Nous travaillons main dans la main avec les communautés côtières, respectant leurs traditions et valorisant leurs connaissances ancestrales. L'autonomisation des populations locales est au cœur de notre approche, avec plus de 150 partenariats actifs dans 25 pays."
    },
    {
      icon: "📚",
      title: "Éducation et Sensibilisation",
      description: "Nous croyons que l'éducation est la clé du changement durable. Nos programmes éducatifs touchent plus de 80 000 étudiants chaque année à travers des ateliers, conférences et supports pédagogiques innovants, inspirant la prochaine génération de défenseurs des océans."
    },
    {
      icon: "🌍",
      title: "Action Globale",
      description: "Les océans n'ont pas de frontières et notre action non plus. Nous coordonnons des initiatives internationales pour créer un réseau mondial de protection marine, influençant les politiques environnementales aux niveaux local, national et international."
    }
  ];

  const achievements = [
    {
      number: "4,2",
      unit: "millions",
      title: "de kilogrammes de déchets collectés",
      description: "Grâce à nos campagnes de nettoyage annuelles mobilisant plus de 15 000 bénévoles, nous avons retiré 4,2 millions de kg de déchets des océans et des côtes depuis notre création en 2020."
    },
    {
      number: "22",
      unit: "",
      title: "aires marines protégées créées",
      description: "Nous avons contribué à l'établissement de 22 nouvelles aires marines protégées, couvrant plus de 750 000 km² d'océan et protégeant des milliers d'espèces endémiques menacées."
    },
    {
      number: "180 000",
      unit: "",
      title: "coraux transplantés avec succès",
      description: "Nos programmes innovants de restauration des récifs coralliens ont permis de transplanter avec succès plus de 180 000 fragments de coraux dans des zones dégradées, avec un taux de survie moyen de 78%."
    }
  ];

  return (
    <main className="flex-1">
      {/* Header Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-gradient-to-r from-ocean-deep via-ocean-medium to-ocean-deep text-foam py-20 md:py-28"
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            À Propos de Notre Mission
          </motion.h1>
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-ocean-light leading-relaxed"
          >
            Découvrez qui nous sommes et pourquoi la protection des océans guide chacune de nos actions
          </motion.p>
        </div>
      </motion.section>

      {/* Notre Histoire */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-8"
          >
            Notre Histoire
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-ocean-medium leading-relaxed">
              Océan Bleu est née d'une passion partagée pour le monde marin et d'une prise de conscience
              urgente face aux défis environnementaux sans précédent auxquels nos océans sont confrontés.
              Fondée en 2020 par une équipe multidisciplinaire de biologistes marins, d'océanographes,
              d'ingénieurs environnementaux et de militants écologistes, notre organisation s'est donnée
              pour mission de protéger et restaurer les écosystèmes marins à l'échelle mondiale.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-ocean-medium leading-relaxed">
              Nos débuts furent modestes mais déterminés : une petite équipe de 12 bénévoles organisant
              des nettoyages de plages le weekend à Marseille. L'engagement des participants et les résultats
              tangibles de nos actions ont rapidement attiré l'attention. Aujourd'hui, nous comptons plus de
              15 000 membres actifs répartis dans 25 pays, menant des projets ambitieux de recherche, de
              conservation et d'éducation à travers le monde.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-ocean-medium leading-relaxed">
              Notre croissance s'est accompagnée d'une professionnalisation de nos méthodes et d'une
              reconnaissance internationale. Nous collaborons désormais avec des institutions académiques
              prestigieuses, des gouvernements et des ONG internationales pour maximiser notre impact.
              Chaque projet est guidé par la science, soutenu par la communauté et orienté vers des
              résultats mesurables et durables.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
              alt="Récif corallien vibrant avec une biodiversité exceptionnelle de poissons tropicaux multicolores dans l'océan Indien"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-deep/90 to-transparent p-8">
              <p className="text-foam text-base md:text-lg font-medium italic leading-relaxed">
                "Les récifs coralliens, véritables forêts tropicales des océans, abritent 25% de toute la vie marine sur seulement 0,1% de la surface océanique"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="bg-ocean-light bg-opacity-10 py-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-12 text-center"
          >
            Nos Valeurs Fondamentales
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-foam p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl mb-5">{value.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-ocean-deep mb-4 flex items-center">
                  {value.title}
                </h3>
                <p className="text-ocean-medium text-base md:text-lg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nos Réalisations */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-12 text-center"
          >
            Nos Réalisations Concrètes
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={slideInLeft}
                whileHover={{ x: 10 }}
                className="border-l-4 border-ocean-medium pl-6 md:pl-8 py-4 bg-foam rounded-r-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-ocean-deep">
                    {achievement.number}
                  </span>
                  {achievement.unit && (
                    <span className="text-xl md:text-2xl font-semibold text-ocean-medium">
                      {achievement.unit}
                    </span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-ocean-deep mb-3">
                  {achievement.title}
                </h3>
                <p className="text-ocean-medium text-base md:text-lg leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-gradient-to-r from-ocean-medium to-ocean-light py-16 md:py-20"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foam mb-8 text-center">
            Une Équipe Passionnée et Experte
          </h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-foam"
          >
            <motion.div variants={scaleIn}>
              <div className="text-5xl mb-4">👥</div>
              <div className="text-4xl font-bold mb-2">120+</div>
              <p className="text-lg">Employés permanents</p>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="text-5xl mb-4">🎓</div>
              <div className="text-4xl font-bold mb-2">45</div>
              <p className="text-lg">Chercheurs et scientifiques</p>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="text-5xl mb-4">🌐</div>
              <div className="text-4xl font-bold mb-2">15 000+</div>
              <p className="text-lg">Bénévoles actifs</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-section"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-ocean-deep to-ocean-medium p-10 md:p-14 rounded-2xl shadow-2xl text-center text-foam">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Rejoignez Notre Communauté
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Ensemble, nous pouvons inverser la tendance. Chaque membre compte, chaque action fait la différence.
            </p>
            <motion.a
              href="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-coral hover:bg-coral/90 text-foam px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Découvrir notre galerie
            </motion.a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
