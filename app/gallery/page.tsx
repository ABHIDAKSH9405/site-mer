import Image from "next/image";

export default function Gallery() {
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
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      alt: "Banc de poissons tropicaux",
      title: "Banc de Poissons",
      description: "Harmonie collective sous-marine"
    }
  ];

  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-ocean-deep to-ocean-medium text-foam py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Galerie Marine
          </h1>
          <p className="text-xl md:text-2xl text-ocean-light">
            Découvrez la splendeur et la diversité de la vie sous-marine à travers notre collection d'images
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-ocean-medium leading-relaxed mb-8">
            Les océans abritent une biodiversité extraordinaire, allant des plus petits organismes planctoniques
            aux majestueuses baleines bleues. Cette galerie célèbre la beauté fragile de notre monde marin et
            rappelle l'importance cruciale de sa protection.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-section">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 md:h-80 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-foam">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm text-ocean-light">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="bg-ocean-light bg-opacity-10 py-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-12 text-center">
            Faits Fascinants sur la Vie Marine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🐋</div>
              <h3 className="text-2xl font-bold text-ocean-deep mb-3">200 tonnes</h3>
              <p className="text-ocean-medium">
                Le poids maximum qu'une baleine bleue peut atteindre, faisant d'elle le plus grand
                animal ayant jamais existé sur Terre
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🐠</div>
              <h3 className="text-2xl font-bold text-ocean-deep mb-3">230 000 espèces</h3>
              <p className="text-ocean-medium">
                Le nombre estimé d'espèces marines connues, mais les scientifiques pensent qu'il en
                reste des millions à découvrir
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🪸</div>
              <h3 className="text-2xl font-bold text-ocean-deep mb-3">25% de la vie marine</h3>
              <p className="text-ocean-medium">
                La proportion de toutes les espèces marines qui dépendent des récifs coralliens,
                bien qu'ils ne couvrent que 0,1% du fond océanique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Message */}
      <section className="py-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-foam p-8 md:p-12 rounded-lg shadow-xl border-l-4 border-coral">
            <h2 className="text-2xl md:text-3xl font-bold text-ocean-deep mb-4">
              Protégeons Cette Beauté Ensemble
            </h2>
            <p className="text-lg text-ocean-medium mb-6 leading-relaxed">
              Chaque créature marine que vous voyez dans cette galerie fait partie d'un écosystème
              fragile et interconnecté. La pollution, le changement climatique et la surpêche menacent
              leur survie. Mais il n'est pas trop tard pour agir.
            </p>
            <p className="text-lg text-ocean-medium leading-relaxed">
              En soutenant les initiatives de conservation, en réduisant votre empreinte plastique et
              en sensibilisant votre entourage, vous contribuez à préserver ces merveilles pour les
              générations futures. Ensemble, nous pouvons faire la différence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
