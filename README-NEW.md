# Formation Écoconception Web - Anti-Patterns

Ce dépôt de formation contient **35 anti-patterns d'écoconception** volontairement intégrés dans le code. Chaque problème est unique et nécessite une correction simple et rapide.

## 🎯 Objectif

Identifier et corriger les mauvaises pratiques d'écoconception web pour :
- Réduire l'empreinte environnementale
- Améliorer les performances
- Optimiser la consommation de ressources
- Respecter les bonnes pratiques du web

## 📋 Liste des 35 Anti-Patterns

### 🌐 Ressources Externes (6 problèmes)

**ANTI-PATTERN 1 : Double import Font Awesome**
- **Localisation** : `index.html` lignes 7-9
- **Problème** : Import de Font Awesome v4.7 ET v6.0
- **Impact** : ~200 KB de CSS inutile
- **Solution** : Garder uniquement la version 6.0

**ANTI-PATTERN 2 : Import de 3 Google Fonts complètes**
- **Localisation** : `index.html` ligne 14
- **Problème** : Import de 3 polices (Lato, Mulish, Raleway) avec tous les poids
- **Impact** : ~500 KB de polices non utilisées
- **Solution** : Importer uniquement les poids nécessaires (400, 700)

**ANTI-PATTERN 3 : Scripts sans defer/async**
- **Localisation** : `index.html` lignes 17-19
- **Problème** : Scripts bloquant le rendu de la page
- **Impact** : Augmentation du temps de chargement initial
- **Solution** : Ajouter `defer` ou `async` aux balises script

**ANTI-PATTERN 4 : CDN Bootstrap entier**
- **Localisation** : `index.html` ligne 22
- **Problème** : Import de tout Bootstrap pour quelques composants
- **Impact** : ~150 KB de CSS inutilisé
- **Solution** : Utiliser un build custom ou extraire uniquement les composants nécessaires

**ANTI-PATTERN 20 : Scripts externes réseaux sociaux**
- **Localisation** : `index.html` lignes 245-248
- **Problème** : 4 scripts externes (Facebook, Twitter, Pinterest, LinkedIn)
- **Impact** : ~300 KB + tracking + requêtes multiples
- **Solution** : Utiliser des liens simples sans widgets JavaScript

**ANTI-PATTERN 27 : Widget LinkedIn avec scripts**
- **Localisation** : `index.html` lignes 231-237
- **Problème** : Scripts LinkedIn + AddToAny au lieu d'un simple lien `<a href>`
- **Impact** : ~100 KB de scripts pour un simple lien social
- **Solution** : Remplacer par `<a href="https://linkedin.fr" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a>`

### 🖼️ Images & Médias (5 problèmes)

**ANTI-PATTERN 6 : Image sans width/height**
- **Localisation** : `index.html` lignes 63, 67
- **Problème** : Images du carrousel sans dimensions
- **Impact** : CLS (Cumulative Layout Shift) élevé
- **Solution** : Ajouter attributs `width` et `height`

**ANTI-PATTERN 7 : Alt text non descriptif**
- **Localisation** : `index.html` lignes 63, 67
- **Problème** : Alt="Image 1", "Image 2" (non descriptif)
- **Impact** : Mauvaise accessibilité
- **Solution** : Décrire le contenu réel de l'image

**ANTI-PATTERN 9 : Image sans alt**
- **Localisation** : `index.html` ligne 94
- **Problème** : Image `side.jpg` sans attribut alt
- **Impact** : Accessibilité compromise
- **Solution** : Ajouter un alt descriptif

**ANTI-PATTERN 10 : Image sans alt et dimensions**
- **Localisation** : `index.html` ligne 118
- **Problème** : Image `char.jpg` sans alt ni dimensions
- **Impact** : CLS + accessibilité
- **Solution** : Ajouter alt, width, height

**ANTI-PATTERN 12 : Image trop lourde**
- **Localisation** : `index.html` ligne 149
- **Problème** : Image `back22.jpg` non optimisée
- **Impact** : Poids de page élevé
- **Solution** : Compresser et redimensionner l'image

### 🎬 Vidéo & Animations (4 problèmes)

**ANTI-PATTERN 5 : Carrousel automatique**
- **Localisation** : `index.html` ligne 51
- **Problème** : Carrousel avec `data-interval="3000"` (rotation auto)
- **Impact** : Consommation CPU continue
- **Solution** : Supprimer `data-interval` ou mettre `false`

**ANTI-PATTERN 14 : Vidéo en autoplay + preload="auto"**
- **Localisation** : `index.html` ligne 170
- **Problème** : Vidéo avec `autoplay`, `loop` et `preload="auto"`
- **Impact** : Toute la vidéo téléchargée automatiquement + lecture CPU continue
- **Solution** : Supprimer `autoplay` et `loop`, utiliser `preload="metadata"` ou `preload="none"`

**ANTI-PATTERN 28 : Vidéo non compressée sans formats alternatifs**
- **Localisation** : `index.html` lignes 170-174
- **Problème** : Un seul format MP4, pas de WebM, pas d'image poster
- **Impact** : Vidéo lourde, pas d'optimisation selon le navigateur
- **Solution** : Ajouter `<source>` WebM, compresser la vidéo, ajouter attribut `poster`

**ANTI-PATTERN 29 : Vidéo cachée en autoplay**
- **Localisation** : `index.html` lignes 176-178
- **Problème** : Vidéo en `display:none` mais qui se charge et joue quand même
- **Impact** : Bande passante et CPU gaspillés pour rien
- **Solution** : Supprimer complètement cette vidéo inutile

### 💻 Code & Structure (7 problèmes)

**ANTI-PATTERN 8 : Inline styles**
- **Localisation** : `index.html` lignes 90, 94, 211
- **Problème** : Styles CSS directement dans le HTML
- **Impact** : Code non maintenable, pas de cache
- **Solution** : Déplacer dans `styles.css`

**ANTI-PATTERN 11 : Lien vide**
- **Localisation** : `index.html` ligne 124
- **Problème** : `href="#"` non fonctionnel
- **Impact** : Mauvaise UX
- **Solution** : Lien vers une vraie page ou `href="#contact"`

**ANTI-PATTERN 13 : Structure HTML incorrecte**
- **Localisation** : `index.html` lignes 153-156
- **Problème** : Balises `<li>` sans `<ul>` parent
- **Impact** : HTML invalide, accessibilité compromise
- **Solution** : Entourer les `<li>` d'une balise `<ul>`

**ANTI-PATTERN 15 : Attribut method sur div**
- **Localisation** : `index.html` ligne 186
- **Problème** : `method="post"` sur une `<div>` au lieu du `<form>`
- **Impact** : Attribut ignoré, HTML invalide
- **Solution** : Déplacer sur la balise `<form>`

**ANTI-PATTERN 16 : Formulaire sans labels**
- **Localisation** : `index.html` lignes 190-192
- **Problème** : Inputs sans `<label>` associés
- **Impact** : Accessibilité compromise
- **Solution** : Ajouter des `<label>` avec attribut `for`

**ANTI-PATTERN 17 : Formulaire vers service externe**
- **Localisation** : `index.html` ligne 189
- **Problème** : POST vers Google Sheets (service externe)
- **Impact** : Dépendance externe, données envoyées à Google
- **Solution** : Traiter le formulaire côté serveur ou localement

**ANTI-PATTERN 18 : iFrame sans lazy loading**
- **Localisation** : `index.html` ligne 201
- **Problème** : Google Maps chargé immédiatement
- **Impact** : ~500 KB chargés même si non visible
- **Solution** : Ajouter `loading="lazy"` à l'iframe

### 🎨 CSS (5 problèmes)

**ANTI-PATTERN 21 : Background image fixe**
- **Localisation** : `styles.css` ligne 4
- **Problème** : `background-attachment: fixed`
- **Impact** : Consommation GPU élevée sur mobile
- **Solution** : Utiliser `scroll` ou supprimer la propriété

**ANTI-PATTERN 22 : CSS inutilisé**
- **Localisation** : `styles.css` lignes 21-30
- **Problème** : Classes `.unused-class` et `.another-unused` non utilisées
- **Impact** : Poids CSS inutile
- **Solution** : Supprimer ces règles

**ANTI-PATTERN 23 : Code CSS commenté**
- **Localisation** : `styles.css` lignes 340-351
- **Problème** : Code commenté non supprimé
- **Impact** : Dette technique, poids fichier
- **Solution** : Supprimer le code commenté

**ANTI-PATTERN 24 : Sélecteurs trop spécifiques**
- **Localisation** : `styles.css` ligne 378
- **Problème** : `body div.product div.product_container...` (6 niveaux)
- **Impact** : Performance CSS dégradée
- **Solution** : Simplifier en `.product-img` par exemple

**ANTI-PATTERN 19 : Inline style dans footer**
- **Localisation** : `index.html` ligne 211
- **Problème** : Style inline sur l'image du footer
- **Impact** : Code non maintenable
- **Solution** : Créer une classe CSS

### ⚙️ JavaScript (2 problèmes)

**ANTI-PATTERN 25 : jQuery inutile**
- **Localisation** : `script.js` lignes 1-17
- **Problème** : jQuery pour des fonctionnalités déjà gérées par Bootstrap
- **Impact** : ~30 KB de jQuery inutile
- **Solution** : Supprimer le code redondant ou utiliser vanilla JS

**ANTI-PATTERN 26 : Console.log en production**
- **Localisation** : `script.js` lignes 20-22
- **Problème** : Logs console inutiles
- **Impact** : Pollution console, légère consommation mémoire
- **Solution** : Supprimer les console.log

### 🖨️ Impression & Cache (2 problèmes)

**ANTI-PATTERN 30 : Pas de print CSS**
- **Localisation** : `index.html` ligne 25
- **Problème** : Aucune feuille de style pour l'impression
- **Impact** : Impression inefficace, gaspillage de papier et encre
- **Solution** : Ajouter `<link rel="stylesheet" href="print.css" media="print">`

**ANTI-PATTERN 34 : Fichier CSS non minifié**
- **Localisation** : `styles.css` ligne 382-383
- **Problème** : Commentaires longs et fichier non compressé
- **Impact** : Taille de fichier augmentée inutilement
- **Solution** : Minifier le CSS et activer la compression gzip/brotli

### 🔒 Permissions & Vie privée (3 problèmes)

**ANTI-PATTERN 31 : Géolocalisation au chargement**
- **Localisation** : `index.html` lignes 27-34
- **Problème** : Demande de géolocalisation dès le chargement de la page
- **Impact** : UX intrusive, consommation GPS mobile
- **Solution** : Demander uniquement quand nécessaire (action utilisateur)

**ANTI-PATTERN 32 : Notifications au chargement**
- **Localisation** : `index.html` lignes 36-43
- **Problème** : Demande de notifications dès le chargement
- **Impact** : UX intrusive, mauvaise pratique
- **Solution** : Demander uniquement après interaction utilisateur

**ANTI-PATTERN 33 : Cookies volumineux**
- **Localisation** : `index.html` lignes 45-51
- **Problème** : Cookies de 3000+ caractères créés inutilement
- **Impact** : Chaque requête HTTP alourdie de plusieurs KB
- **Solution** : Limiter les cookies à < 500 octets, utiliser localStorage si besoin

### 🚀 Chargement & Performance (1 problème)

**ANTI-PATTERN 35 : Image hors écran sans lazy loading**
- **Localisation** : `index.html` lignes 167-170
- **Problème** : Image cachée chargée immédiatement
- **Impact** : Bande passante gaspillée
- **Solution** : Ajouter `loading="lazy"` ou ne pas charger l'image

## 📊 Résumé par catégorie

| Catégorie | Nombre | Impact principal |
|-----------|--------|------------------|
| Ressources externes | 6 | Poids de page |
| Images & Médias | 5 | CLS + Accessibilité |
| Vidéo & Animations | 4 | CPU + Bande passante |
| Code & Structure | 7 | Accessibilité + Maintenabilité |
| CSS | 5 | Performance + Dette technique |
| JavaScript | 2 | Poids + Performance |
| Impression & Cache | 2 | Compression + Impression |
| Permissions & Vie privée | 3 | UX + Vie privée |
| Chargement & Performance | 1 | Lazy loading |
| **TOTAL** | **35** | **Écoconception globale** |

## 🎓 Méthodologie

Pour chaque anti-pattern :
1. **Localiser** le problème dans le code
2. **Comprendre** l'impact environnemental
3. **Corriger** avec la solution proposée
4. **Vérifier** l'amélioration

## 📸 Images à optimiser manuellement

Certaines images doivent être optimisées manuellement (voir section suivante du README).

## 🛠️ Outils recommandés

- **Lighthouse** : Audit de performance
- **WebPageTest** : Analyse détaillée
- **EcoIndex** : Score d'écoconception
- **Wave** : Accessibilité
- **ImageOptim** / **Squoosh** : Compression d'images

## 📚 Ressources

- [RGESN](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/) - Référentiel Général d'Écoconception
- [Web.dev](https://web.dev/learn-core-web-vitals/) - Core Web Vitals
- [GreenIT](https://www.greenit.fr/) - Numérique responsable

## 👥 Auteurs

- [@poupardjean](https://github.com/poupardjean)
- [@juliettespecinov](https://github.com/JulietteSpecinov)
