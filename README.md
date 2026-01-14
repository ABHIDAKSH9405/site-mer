# Océan Bleu - Site de Protection des Océans

Site web responsive dédié à la protection et la préservation des océans, développé dans le cadre de l'examen BTS SIO.

## Thème

Protection des océans et sensibilisation à l'écologie marine.

## Technologies Utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique pour un code plus robuste
- **Tailwind CSS** - Framework CSS utilitaire
- **Variables CSS Custom** - Thème maritime personnalisé

## Structure du Site

### Pages

1. **Accueil (/)** - Présentation de l'urgence de la protection marine et actions quotidiennes
2. **À propos (/about)** - Histoire, valeurs et réalisations de l'organisation
3. **Galerie (/gallery)** - Collection d'images marines avec faits fascinants

### Composants

- **Header** - Navigation responsive avec menu burger mobile
- **Footer** - Copyright et liens réseaux sociaux
- **Layout** - Structure globale du site

## Variables CSS Custom

Le site utilise des variables CSS personnalisées pour le thème maritime :

```css
--color-ocean-deep: #0A4C6D;
--color-ocean-medium: #1E88B5;
--color-ocean-light: #3FA8D3;
--color-foam: #F0F8FF;
--color-sand: #F5DEB3;
--color-coral: #FF6B6B;
```

## Caractéristiques Techniques

- Sémantique HTML5 (`<header>`, `<main>`, `<footer>`, `<nav>`)
- Design responsive mobile-first
- Menu burger avec animation CSS
- Images optimisées via Next.js Image
- Pas de scroll horizontal sur mobile
- Hover states sur les éléments interactifs

## Installation et Lancement

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Build de production
npm run build

# Lancement en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Déploiement

Ce site est conçu pour être déployé sur Netlify :

1. Connectez votre repository GitHub à Netlify
2. Configuration automatique détectée (Next.js)
3. Déploiement automatique à chaque push

## Conformité BTS SIO

- Variables CSS custom (obligatoire)
- 3 pages distinctes
- Navigation responsive
- Menu burger fonctionnel
- Contenu pertinent (pas de Lorem Ipsum)
- Sémantique HTML
- Design professionnel

## Auteur

Projet BTS SIO - 2026
