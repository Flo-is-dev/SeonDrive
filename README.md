# SeonDrive Frontend

[**Projet en cours visible sur: https://seondrive.netlify.app/**]
Un site web moderne et optimisé pour le SEO permettant de louer des voitures premiums et écologiques. Ce projet utilisera à terme Next.js, TypeScript, Redux Toolkit, Styled Components, Framer Motion, i18n et d'autres technologies modernes pour offrir une expérience utilisateur fluide et interactive.

## Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Technologies Utilisées](#technologies-utilisées)
- [Structure du Projet](#structure-du-projet)

## Aperçu

Ce projet est un site de location de voitures haut de gamme avec une attention particulière à l'optimisation SEO et à un design moderne. Il permet aux utilisateurs de rechercher, filtrer, et réserver des véhicules écologiques et de luxe.

## Fonctionnalités

- **Réservation de Véhicules** : Sélection de dates, choix de voitures, et processus de paiement sécurisé (à venir).
- **Filtrage Avancé** : Filtrage par type de voiture (électrique, hybride), marque, modèle, et plus. (à venir)
- **Pages Détails des Voitures** : Informations détaillées sur chaque véhicule. (à venir)
- **Blog sur la Mobilité** : Articles de blog pour attirer du trafic SEO et informer sur les dernières tendances.
- **Animations Fluides** : Animations entre les pages utilisant Framer Motion pour améliorer l'expérience utilisateur.
- **Support Multi-langue** : Utilisation de i18n pour gestion des langues (anglais/francais/coréen/chinois).

## Installation

1. **Cloner le Dépôt :**

   ```bash
   git clone https://github.com/ton-utilisateur/seondrive-frontend.git
   cd seondrive-frontend

   ```

2. **Installer les Dépendances :**

   ```bash
   npm install
   ```

3. **Démarrer le Serveur de Développement :**

   ```bash
   npm run dev
   ```

## Technologies Utilisées

- **Next.js 14.2.8** : Framework React pour le rendu côté serveur et la génération statique.
- **React 18 et React DOM** : Bibliothèques pour la création d'interfaces utilisateur.
- **TypeScript** : Superset de JavaScript pour un typage statique.
- **Redux Toolkit** : Gestion d'état globale simplifiée.
- **React Redux** : Intégration de Redux avec React pour la gestion de l'état.
- **Styled Components** : CSS-in-JS pour des composants stylisés.
- **Framer Motion** : Bibliothèque d'animations pour des transitions et interactions fluides.
- **Axios** : Client HTTP pour effectuer des appels API.
- **Swiper** : Librairie de carrousel pour des sliders modernes.
- **React Select** : Composant de sélection personnalisable pour les menus déroulants.
- **React Icons** : Collection d'icônes pour React.
- **@fortawesome/react-fontawesome** et @fortawesome/free-brands-svg-icons, free-regular-svg-icons, free-solid-svg-icons : Bibliothèque d'icônes de FontAwesome pour ajouter des icônes à l'interface.
- **next-intl** : Internationalisation pour le support multi-langue.
- **next-sitemap** : Générateur de sitemap pour Next.js, pour une meilleure optimisation SEO.

## Dépendances de Développement

- **TypeScript** : Gestion du typage statique pour un développement plus sûr.
- **@types** : Types pour les dépendances JavaScript (comme Node, React) pour améliorer le support TypeScript.
- **babel-plugin-styled-components** : Optimisation des styled-components pour un meilleur développement et débogage.
- **ESLint et Prettier** : Outils de linting et de formatage pour maintenir un code propre et cohérent.
- **eslint-config-next** : Configuration ESLint pour les projets Next.js.
- **eslint-config-prettier et eslint-plugin-prettier** : Pour intégrer Prettier avec ESLint.
- **Image Webpack Loader et Imagemin WebP Webpack Plugin** : Optimisation des images pour un meilleur temps de chargement et - \*\*une meilleure performance.
- **WebP Loader** : Prend en charge les images au format WebP pour améliorer les performances de chargement.

5. **Structure du Projet**

   ```bash
   /seondrive-frontend
   ├── .next                 # Fichiers générés par Next.js (build, cache, etc.)
   ├── messages              # Dossier contenant les messages de traduction (i18n)
   ├── node_modules          # Modules Node.js installés
   ├── public                # Fichiers publics accessibles directement (images, favicon, etc.)
   └── src
    ├── app               # Dossier principal pour les pages de l'application
    │   ├── [locale]      # Support pour la localisation
    │   ├── about         # Page "À propos"
    │   ├── blog          # Page de blog
    │   ├── contacts      # Page de contacts
    │   ├── vehicules     # Page des véhicules
    │   ├── data.ts       # Fichier de données
    │   ├── layout.tsx    # Composant de mise en page
    │   └── not-found.tsx # Page pour les erreurs 404
    │   └── types.ts      # Fichier de types TypeScript pour l'application
    │
    ├── components        # Dossier des composants réutilisables
    │   ├── blog          # Composants spécifiques au blog
    │   ├── common        # Composants communs réutilisables dans plusieurs pages
    │   ├── layout        # Composants de mise en page
    │   └── ui            # Composants UI généraux
    │
    ├── data              # Données spécifiques au projet
    ├── i18n              # Fichiers et configurations pour la localisation
    ├── redux             # Configuration du store Redux et des slices
    ├── styles            # Fichiers de style globaux ou partagés
    ├── tests             # Dossier pour les tests unitaires, d'intégration, et e2e
    └── utils             # Fonctions utilitaires pour l'application
   ```
