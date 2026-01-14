import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
          alt="Océan vu du ciel avec des vagues"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ocean-deep bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-foam px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Protégeons Nos Océans
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Ensemble pour préserver la beauté et la biodiversité marine pour les générations futures
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-6 text-center">
            L'Urgence de la Protection Marine
          </h2>
          <p className="text-lg text-ocean-medium mb-4 leading-relaxed">
            Les océans couvrent plus de 70% de notre planète et produisent environ 50% de l'oxygène que nous respirons.
            Ils régulent le climat, fournissent de la nourriture à des milliards de personnes et abritent une biodiversité
            extraordinaire. Pourtant, ils font face à des menaces sans précédent : pollution plastique, réchauffement
            climatique, surpêche et destruction des habitats marins.
          </p>
          <p className="text-lg text-ocean-medium mb-4 leading-relaxed">
            Chaque année, environ 8 millions de tonnes de plastique finissent dans les océans, créant des zones de
            pollution massive comme le Great Pacific Garbage Patch. Les récifs coralliens, qui abritent 25% de la vie
            marine, ont perdu près de la moitié de leur superficie au cours des 30 dernières années.
          </p>
        </div>
      </section>

      {/* Actions Section */}
      <section className="bg-ocean-light bg-opacity-10 py-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-12 text-center">
            Comment Agir Au Quotidien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-foam p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-ocean-deep mb-3">
                Réduire le Plastique
              </h3>
              <p className="text-ocean-medium">
                Évitez les plastiques à usage unique, utilisez des sacs réutilisables et privilégiez
                les contenants durables. Chaque geste compte pour réduire la pollution marine.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-foam p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🐟</div>
              <h3 className="text-xl font-bold text-ocean-deep mb-3">
                Consommer Responsable
              </h3>
              <p className="text-ocean-medium">
                Choisissez des produits de la mer issus de pêcheries durables. Vérifiez les labels
                de certification et préférez les espèces locales et de saison.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-foam p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-ocean-deep mb-3">
                Participer au Nettoyage
              </h3>
              <p className="text-ocean-medium">
                Rejoignez des initiatives locales de nettoyage des plages et des côtes.
                Ensemble, nous pouvons retirer des tonnes de déchets de nos écosystèmes marins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-6">
                L'Impact de Nos Actions
              </h2>
              <p className="text-lg text-ocean-medium mb-4 leading-relaxed">
                Les initiatives de protection marine fonctionnent. Les aires marines protégées ont permis
                de restaurer des populations de poissons, de protéger des espèces menacées et de préserver
                des écosystèmes entiers.
              </p>
              <p className="text-lg text-ocean-medium mb-4 leading-relaxed">
                Des projets de restauration des récifs coralliens montrent des résultats encourageants,
                avec des taux de survie de coraux transplantés atteignant 80% dans certaines régions.
                Les programmes de sensibilisation ont réduit l'utilisation de plastique de 40% dans
                certaines communautés côtières.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80"
                alt="Tortue marine nageant dans l'océan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
