# SeonDrive Frontend

[en cours] Un site web moderne et optimisé pour le SEO permettant de louer des voitures haut de gamme et écologiques. Ce projet utilise Next.js, TypeScript, Redux Toolkit, Styled Components, Framer Motion, et d'autres technologies modernes pour offrir une expérience utilisateur fluide et interactive.

## Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Scripts Disponibles](#scripts-disponibles)
- [Technologies Utilisées](#technologies-utilisées)
- [Structure du Projet](#structure-du-projet)
- [Contribution](#contribution)
- [License](#license)

## Aperçu

Ce projet est un site de location de voitures haut de gamme avec une attention particulière à l'optimisation SEO et à un design moderne. Il permet aux utilisateurs de rechercher, filtrer, et réserver des véhicules écologiques et de luxe.

## Fonctionnalités

- **Réservation de Véhicules** : Sélection de dates, choix de voitures, et processus de paiement sécurisé.
- **Filtrage Avancé** : Filtrage par type de voiture (électrique, hybride), marque, modèle, et plus.
- **Pages Détails des Voitures** : Informations détaillées sur chaque véhicule avec des images haute résolution.
- **Blog sur la Mobilité Écologique** : Articles de blog pour attirer du trafic SEO et informer sur les dernières tendances.
- **Animations Fluides** : Animations modernes utilisant Framer Motion pour améliorer l'expérience utilisateur.
- **Support Multi-langue** : Utilisation de i18n pour l'internationalisation.

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

- **Next.js 14.2.8**: Framework React pour le rendu côté serveur et la génération statique.
- **TypeScript** : Superset de JavaScript pour un typage statique.
- **Redux Toolkit** : Gestion d'état globale simplifiée.
- **Styled Components** : CSS-in-JS pour des composants stylisés.
- **Framer Motion** : Bibliothèque d'animations pour des transitions et interactions fluides.
- **i18next** : Internationalisation pour le support multi-langue.

5. **Structure du Projet**

   ```bash
   /src
   ├── /app                  # Nouveau système de routage et de pages de Next.js 13+
   ├── /components           # Composants réutilisables de l'application
   ├── /data                 # Données mock utilisées en développement
   ├── /i18n                 # Fichiers de configuration et de traduction pour l'internationalisation
   ├── /pages                # Pages API ou pages spécifiques (optionnel avec /app)
   ├── /redux                # Configuration du store et slices Redux
   ├── /styles               # Fichiers de style global avec Styled Components
   ├── /utils                # Fonctions utilitaires réutilisables
   └── /tests                # Tests unitaires, d'intégration, et e2e
   ```
