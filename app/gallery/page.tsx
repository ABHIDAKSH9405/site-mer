'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Animation variants
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

export default function Gallery() {
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1200&q=80",
      alt: "Méduse translucide bioluminescente flottant gracieusement dans les profondeurs sombres de l'océan",
      title: "Méduse Bioluminescente",
      description: "Les méduses créent leur propre lumière grâce à la bioluminescence, un phénomène fascinant utilisé pour la communication et la chasse"
    },
    {
      src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80",
      alt: "Tortue marine verte nageant paisiblement dans les eaux cristallines de l'océan Pacifique",
      title: "Tortue Marine Verte",
      description: "Les tortues marines parcourent des milliers de kilomètres pour retourner pondre sur la plage où elles sont nées"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      alt: "Vue aérienne spectaculaire des vagues déferlantes de l'océan Atlantique",
      title: "Vagues Atlantiques",
      description: "Les vagues transportent l'énergie à travers les océans, générée par les vents et les tempêtes sur des milliers de kilomètres"
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
      alt: "Récif corallien vibrant peuplé de poissons tropicaux multicolores",
      title: "Récif Corallien Tropical",
      description: "Les récifs coralliens abritent 25% de toute la biodiversité marine malgré qu'ils ne couvrent que 0,1% du fond océanique"
    },
    {
      src: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80",
      alt: "Dauphin joueur sautant gracieusement hors de l'eau au coucher du soleil",
      title: "Dauphin à Gros Nez",
      description: "Les dauphins utilisent l'écholocation pour naviguer et chasser, émettant des clics ultrasoniques jusqu'à 1000 fois par seconde"
    },
    {
      src: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1200&q=80",
      alt: "Banc de sardines formant une boule défensive dans l'océan Indien",
      title: "Banc de Sardines",
      description: "Les sardines forment des bancs massifs pouvant atteindre 15 km de long, créant une défense collective contre les prédateurs"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      alt: "Raie manta majestueuse glissant dans les eaux bleues cristallines",
      title: "Raie Manta Géante",
      description: "Avec une envergure pouvant atteindre 7 mètres, les raies mantas sont parmi les plus grands poissons de nos océans"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      alt: "Requin-baleine nageant près de la surface entouré de petits poissons",
      title: "Requin-Baleine",
      description: "Le plus grand poisson du monde peut mesurer plus de 12 mètres et se nourrit exclusivement de plancton"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80",
      alt: "Méduse translucide dans l'océan profond",
      title: "Méduse Lumineuse",
      description: "Une méduse bioluminescente dans les profondeurs marines"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      alt: "Vue aérienne des vagues de l'océan",
      title: "Vagues de l'Océan",
      description: "La beauté des vagues vues du ciel"
    },
    {
      src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
      alt: "Tortue marine nageant",
      title: "Tortue Marine",
      description: "Une tortue verte dans son habitat naturel"
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      alt: "Récif corallien coloré",
      title: "Récif Corallien",
      description: "Écosystème vibrant d'un récif de corail"
    },
    {
      src: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80",
      alt: "Dauphin sautant hors de l'eau",
      title: "Dauphin Joueur",
      description: "Un dauphin dans son élément naturel"
    },
    {
      src: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=800&q=80",
      alt: "Banc de poissons tropicaux",
      title: "Banc de Poissons",
      description: "Harmonie collective sous-marine"
    }
  ];

  const facts = [
    {
      icon: "🐋",
      title: "200 tonnes",
      description: "Le poids maximum qu'une baleine bleue peut atteindre, faisant d'elle le plus grand animal ayant jamais existé sur Terre, dépassant même les plus grands dinosaures"
    },
    {
      icon: "🐠",
      title: "2,2 millions",
      description: "Le nombre estimé d'espèces marines, dont seulement 230 000 sont répertoriées. Les scientifiques découvrent environ 2 000 nouvelles espèces chaque année"
    },
    {
      icon: "🪸",
      title: "500 millions",
      description: "Le nombre de personnes qui dépendent directement des récifs coralliens pour leur alimentation et leurs revenus à travers le monde"
    }
  ];

  return (
    <main className="flex-1">
      {/* Header Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-gradient-to-br from-ocean-deep via-ocean-medium to-ocean-light text-foam py-20 md:py-28"
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Galerie Marine
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-ocean-light leading-relaxed"
          >
            Plongez dans la splendeur et la diversité fascinante de la vie sous-marine
          </motion.p>
        </div>
      </motion.section>

      {/* Carousel Section */}
      <section className="py-section bg-ocean-light bg-opacity-5">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-12 text-center"
          >
            Découvrez la Faune Marine
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="carousel-container"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="marine-swiper"
            >
              {carouselImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/95 via-ocean-deep/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-foam text-xl md:text-2xl font-bold mb-2">
                          {image.title}
                        </h3>
                        <p className="text-ocean-light text-sm md:text-base leading-relaxed">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-ocean-medium leading-relaxed text-center">
              Les océans abritent une biodiversité extraordinaire et largement méconnue. Du minuscule plancton
              bioluminescent aux majestueuses baleines bleues, chaque créature joue un rôle essentiel dans
              l'équilibre fragile de nos écosystèmes marins. Cette galerie célèbre la beauté de notre monde
              sous-marin et rappelle l'urgence de sa protection.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-section">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-12 text-center"
          >
            Collection d'Images
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 md:h-80 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-foam">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm md:text-base text-ocean-light">{image.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="bg-gradient-to-r from-ocean-medium to-ocean-light py-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foam mb-12 text-center"
          >
            Faits Fascinants sur la Vie Marine
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-foam/10 backdrop-blur-sm p-8 rounded-xl"
              >
                <div className="text-6xl mb-5">{fact.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-foam mb-4">{fact.title}</h3>
                <p className="text-foam/90 text-base md:text-lg leading-relaxed">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conservation Message */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-ocean-deep to-ocean-medium p-10 md:p-14 rounded-2xl shadow-2xl border-l-8 border-coral"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foam mb-6">
              Protégeons Cette Beauté Ensemble
            </h2>
            <p className="text-xl md:text-2xl text-ocean-light mb-6 leading-relaxed">
              Chaque créature marine que vous découvrez dans cette galerie fait partie d'un écosystème
              fragile et interconnecté. La pollution plastique, le changement climatique et la surpêche
              menacent leur survie de manière critique.
            </p>
            <p className="text-xl md:text-2xl text-ocean-light mb-8 leading-relaxed">
              En soutenant les initiatives de conservation marine, en réduisant votre empreinte plastique et
              en sensibilisant votre entourage, vous contribuez activement à préserver ces merveilles pour les
              générations futures. L'avenir des océans dépend de nos actions collectives aujourd'hui.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-coral hover:bg-coral/90 text-foam px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Découvrir comment agir
            </motion.a>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .marine-swiper {
          padding-bottom: 60px !important;
        }

        .marine-swiper .swiper-button-next,
        .marine-swiper .swiper-button-prev {
          color: var(--color-ocean-deep);
          background: var(--color-foam);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: var(--shadow-lg);
        }

        .marine-swiper .swiper-button-next:after,
        .marine-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .marine-swiper .swiper-button-next:hover,
        .marine-swiper .swiper-button-prev:hover {
          background: var(--color-ocean-light);
          color: var(--color-foam);
        }

        .marine-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: var(--color-ocean-medium);
          opacity: 0.5;
        }

        .marine-swiper .swiper-pagination-bullet-active {
          background: var(--color-coral);
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </main>
  );
}
