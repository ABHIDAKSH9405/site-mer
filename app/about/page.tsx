import Image from "next/image";

export default function About() {
  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="bg-ocean-deep text-foam py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            À Propos de Notre Mission
          </h1>
          <p className="text-xl md:text-2xl text-ocean-light">
            Découvrez qui nous sommes et pourquoi la protection des océans est au cœur de nos actions
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-6">
            Notre Histoire
          </h2>
          <p className="text-lg text-ocean-medium mb-4 leading-relaxed">
            Océan Bleu est née d'une passion partagée pour le monde marin et d'une prise de conscience
            urgente face aux défis environnementaux auxquels nos océans sont confrontés. Fondée en 2020
            par une équipe de biologistes marins, d'océanographes et de militants écologistes, notre
            organisation s'est donnée pour mission de protéger et restaurer les écosystèmes marins.
          </p>
          <p className="text-lg text-ocean-medium mb-4 leading-relaxed">
            Nous avons débuté avec une petite équipe de bénévoles organisant des nettoyages de plages
            locales. Aujourd'hui, nous comptons plus de 10 000 membres actifs dans 25 pays, menant des
            projets de recherche, de conservation et d'éducation à travers le monde.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
              alt="Récif corallien coloré avec des poissons tropicaux"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="bg-ocean-light bg-opacity-10 py-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-12 text-center">
            Nos Valeurs Fondamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Valeur 1 */}
            <div className="bg-foam p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-ocean-deep mb-4 flex items-center">
                <span className="text-3xl mr-3">🔬</span>
                Science et Recherche
              </h3>
              <p className="text-ocean-medium leading-relaxed">
                Nous basons toutes nos actions sur des données scientifiques rigoureuses. Notre équipe
                de chercheurs collabore avec des universités et des instituts de recherche pour
                développer des solutions innovantes de conservation marine.
              </p>
            </div>

            {/* Valeur 2 */}
            <div className="bg-foam p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-ocean-deep mb-4 flex items-center">
                <span className="text-3xl mr-3">🤝</span>
                Collaboration Locale
              </h3>
              <p className="text-ocean-medium leading-relaxed">
                Nous travaillons main dans la main avec les communautés côtières, respectant leurs
                traditions et leurs connaissances ancestrales. La protection des océans passe par
                l'autonomisation des populations locales.
              </p>
            </div>

            {/* Valeur 3 */}
            <div className="bg-foam p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-ocean-deep mb-4 flex items-center">
                <span className="text-3xl mr-3">📚</span>
                Éducation et Sensibilisation
              </h3>
              <p className="text-ocean-medium leading-relaxed">
                Nous croyons que l'éducation est la clé du changement. Nos programmes touchent plus de
                50 000 étudiants chaque année, inspirant la prochaine génération de défenseurs des océans.
              </p>
            </div>

            {/* Valeur 4 */}
            <div className="bg-foam p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-ocean-deep mb-4 flex items-center">
                <span className="text-3xl mr-3">🌍</span>
                Action Globale
              </h3>
              <p className="text-ocean-medium leading-relaxed">
                Les océans n'ont pas de frontières. Nous coordonnons des initiatives internationales
                pour créer un réseau mondial de protection marine, influençant les politiques
                environnementales à tous les niveaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Réalisations */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-8 text-center">
            Nos Réalisations
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-ocean-medium pl-6 py-2">
              <h3 className="text-xl font-bold text-ocean-deep mb-2">
                3 millions de kg de déchets collectés
              </h3>
              <p className="text-ocean-medium">
                Grâce à nos campagnes de nettoyage annuelles, nous avons retiré plus de 3 millions de
                kilogrammes de déchets des océans et des côtes depuis notre création.
              </p>
            </div>

            <div className="border-l-4 border-ocean-medium pl-6 py-2">
              <h3 className="text-xl font-bold text-ocean-deep mb-2">
                15 aires marines protégées créées
              </h3>
              <p className="text-ocean-medium">
                Nous avons contribué à l'établissement de 15 nouvelles aires marines protégées,
                couvrant plus de 500 000 km² d'océan et protégeant des milliers d'espèces.
              </p>
            </div>

            <div className="border-l-4 border-ocean-medium pl-6 py-2">
              <h3 className="text-xl font-bold text-ocean-deep mb-2">
                100 000 coraux transplantés
              </h3>
              <p className="text-ocean-medium">
                Nos programmes de restauration des récifs coralliens ont permis de transplanter
                avec succès plus de 100 000 fragments de coraux dans des zones dégradées.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
