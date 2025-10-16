# 🌱 Formation Écoconception Web - 35 Exercices Pratiques

Bienvenue dans cette formation pratique sur l'écoconception web ! Ce site contient **35 anti-patterns** volontairement intégrés. Votre mission : les identifier et les corriger.

## 🎯 Objectifs pédagogiques

- Identifier les mauvaises pratiques d'écoconception
- Comprendre leur impact environnemental
- Apprendre à les corriger
- Améliorer les performances et l'accessibilité

## 📊 Vue d'ensemble

| Partie | Nombre d'exercices |
|--------|-------------------|
| 🌱 Écoconception | 26 |
| ♿ Accessibilité | 9 |
| **TOTAL** | **35** |

## 🛠️ Outils recommandés

- **Lighthouse** (DevTools Chrome) : Audit de performance
- **Kastor.green** : Audit d'écoconception
- **EcoIndex** : Audit d'écoconception

---

# 🌱 PARTIE 1 : ÉCOCONCEPTION

## 🌐 RESSOURCES EXTERNES

### 📝 Exercice 1 : Double import de bibliothèque d'icônes
**Fichier** : `index.html` (head)

Examinez les imports de Font Awesome dans le `<head>`. Combien de versions sont importées ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Font Awesome v4.7 ET v6.0 importées  
**Impact** : ~200 KB de CSS inutile  
**Solution** : Garder uniquement la version 6.0  
</details>

---

### 📝 Exercice 2 : Import de polices non optimisé
**Fichier** : `index.html` (head)

Analysez l'import Google Fonts. Combien de polices et de poids sont chargés ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : 3 polices (Lato, Mulish, Raleway) avec tous les poids  
**Impact** : ~500 KB de polices non utilisées  
**Solution** : Importer uniquement Lato avec poids 400 et 700  
</details>

---

### 📝 Exercice 3 : Scripts bloquant le rendu
**Fichier** : `index.html` (head)

Les scripts jQuery, Popper et Bootstrap bloquent-ils le rendu de la page ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Scripts dans le `<head>` sans `defer`  
**Impact** : Blocage du rendu initial  
**Solution** : Ajouter `defer` à tous les scripts  
**Gain** : Amélioration FCP et LCP
</details>

---

### 📝 Exercice 4 : CDN Bootstrap complet
**Fichier** : `index.html` (head)

Le site utilise-t-il tous les composants Bootstrap ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Bootstrap complet (~150 KB) pour 3 composants  
**Impact** : 80% de CSS inutilisé  
**Solution** : Build custom ou PurgeCSS  
</details>

---

### 📝 Exercice 5 : Scripts externes de réseaux sociaux
**Fichier** : `index.html` (fin du body)

Combien de scripts externes pour les réseaux sociaux sont chargés ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : 4 scripts (Facebook, Twitter, Pinterest, LinkedIn)  
**Impact** : ~300 KB + tracking  
**Solution** : Remplacer par des liens simples `<a href>`  
</details>

---

### 📝 Exercice 6 : Widget LinkedIn avec scripts
**Fichier** : `index.html` (footer)

L'icône LinkedIn utilise-t-elle la même approche que les autres icônes ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Scripts LinkedIn + AddToAny pour un simple lien  
**Impact** : ~100 KB de scripts inutiles  
**Solution** : Utiliser un lien simple comme les autres icônes  
</details>

---

## 🖼️ IMAGES & MÉDIAS

### 📝 Exercice 7 : Image non optimisée
**Fichier** : `index.html` (section keypoint)

L'image `back22.jpg` est-elle optimisée ? (Utilisez DevTools pour vérifier)

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Image lourde non compressée  
**Impact** : Plusieurs MB au lieu de < 100 KB  
**Solution** : Redimensionner (800×600px) et compresser (qualité 80%)  
**Outils** : Squoosh.app, TinyPNG  
**Gain** : -70% de poids
</details>

---

### 📝 Exercice 8 : Images sans dimensions
**Fichier** : `index.html` (carrousel)

Les images du carrousel ont-elles des attributs `width` et `height` ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Pas d'attributs `width` et `height`  
**Impact** : CLS (Cumulative Layout Shift) élevé  
**Solution** : Ajouter `width="1920" height="800"`  
**Gain** : CLS réduit
</details>

---

### 📝 Exercice 9 : Image hors écran sans lazy loading
**Fichier** : `index.html` (section produits)

Y a-t-il des images cachées qui se chargent quand même ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Image avec `display:none` chargée immédiatement  
**Impact** : Bande passante gaspillée  
**Solution** : Ajouter `loading="lazy"` ou ne pas charger l'image  
</details>

---

## 🎬 VIDÉO & ANIMATIONS

### 📝 Exercice 10 : Carrousel automatique
**Fichier** : `index.html` (carrousel)

Le carrousel tourne-t-il automatiquement ? (Cherchez `data-interval`)

<details>
<summary>💡 Voir la solution</summary>

**Problème** : `data-interval="3000"` (rotation auto)  
**Impact** : Consommation CPU continue  
**Solution** : Mettre `data-interval="false"`  
</details>

---

### 📝 Exercice 11 : Vidéo en autoplay
**Fichier** : `index.html` (section équipe)

La vidéo se lance-t-elle automatiquement ? Quels attributs posent problème ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : `autoplay`, `loop` et `preload="auto"`  
**Impact** : Vidéo téléchargée automatiquement + lecture continue  
**Solution** : Supprimer `autoplay` et `loop`, utiliser `preload="metadata"`  
</details>

---

### 📝 Exercice 12 : Vidéo sans formats alternatifs
**Fichier** : `index.html` (section équipe)

La vidéo est-elle proposée en plusieurs formats ? Y a-t-il une image poster ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Un seul format MP4, pas de WebM, pas de poster  
**Impact** : Vidéo lourde, pas d'optimisation  
**Solution** : Ajouter source WebM + attribut `poster`  
</details>

---

### 📝 Exercice 13 : Vidéo cachée en autoplay
**Fichier** : `index.html` (section équipe)

Y a-t-il une vidéo cachée (`display:none`) qui se charge quand même ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Vidéo en `display:none` mais qui se charge et joue  
**Impact** : Bande passante et CPU gaspillés pour rien  
**Solution** : Supprimer cette vidéo inutile  
</details>

---

## 💻 CODE & STRUCTURE

### 📝 Exercice 14 : Styles inline
**Fichier** : `index.html` (plusieurs endroits)

Trouvez tous les attributs `style=""` dans le HTML. Sont-ils nécessaires ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Plusieurs `style="..."` inline  
**Impact** : Code non maintenable, pas de cache CSS  
**Solution** : Déplacer dans `styles.css` avec des classes  
</details>

---

### 📝 Exercice 15 : iFrame sans lazy loading
**Fichier** : `index.html` (Google Maps)

L'iframe Google Maps se charge-t-elle immédiatement ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Pas d'attribut `loading="lazy"`  
**Impact** : ~500 KB chargés même si non visible  
**Solution** : Ajouter `loading="lazy"`  
</details>

---

### 📝 Exercice 16 : Formulaire vers service externe
**Fichier** : `index.html` (formulaire)

Où sont envoyées les données du formulaire ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : POST vers Google Sheets (service externe)  
**Impact** : Dépendance externe, vie privée  
**Solution** : Traiter le formulaire côté serveur  
</details>

---

## 🎨 CSS

### 📝 Exercice 17 : Background image fixe
**Fichier** : `styles.css` (body)

Le background du body utilise-t-il `background-attachment: fixed` ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : `background-attachment: fixed`  
**Impact** : Consommation GPU élevée sur mobile  
**Solution** : Utiliser `scroll` ou supprimer la propriété  
</details>

---

### 📝 Exercice 18 : CSS inutilisé
**Fichier** : `styles.css`

Y a-t-il des classes CSS définies mais jamais utilisées ? (Utilisez DevTools Coverage)

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Classes `.unused-class` et `.another-unused`  
**Impact** : Poids CSS inutile  
**Solution** : Supprimer ces règles  
</details>

---

### 📝 Exercice 19 : Code CSS commenté
**Fichier** : `styles.css` (footer)

Y a-t-il du code CSS commenté qui devrait être supprimé ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Bloc de code commenté non supprimé  
**Impact** : Dette technique, poids augmenté  
**Solution** : Supprimer le code commenté  
</details>

---

### 📝 Exercice 20 : Sélecteurs CSS inefficaces
**Fichier** : `styles.css`

Trouvez les sélecteurs CSS trop spécifiques (> 4 niveaux).

<details>
<summary>💡 Voir la solution</summary>

**Problème** : `body div.product div.product_container...` (6 niveaux)  
**Impact** : Performance CSS dégradée  
**Solution** : Simplifier en `.product-img`  
</details>

---

### 📝 Exercice 21 : CSS non minifié
**Fichier** : `styles.css`

Le fichier CSS est-il minifié ? Y a-t-il des commentaires très longs ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Commentaires longs, fichier non minifié  
**Impact** : Taille augmentée inutilement  
**Solution** : Minifier le CSS + activer gzip/brotli  
</details>

---

## ⚙️ JAVASCRIPT

### 📝 Exercice 22 : jQuery inutile
**Fichier** : `script.js`

Le code jQuery est-il nécessaire ? Bootstrap gère-t-il déjà ces fonctionnalités ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : jQuery pour des fonctionnalités déjà gérées par Bootstrap  
**Impact** : ~30 KB de code redondant  
**Solution** : Supprimer le code jQuery  
</details>

---

### 📝 Exercice 23 : Console.log en production
**Fichier** : `script.js`

Y a-t-il des `console.log()` dans le code ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Logs console inutiles  
**Impact** : Pollution console, légère consommation mémoire  
**Solution** : Supprimer tous les console.log  
</details>

---

## 🖨️ IMPRESSION & CACHE

### 📝 Exercice 24 : Pas de print CSS
**Fichier** : `index.html` (head)

Y a-t-il une feuille de style pour l'impression ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Aucune print CSS  
**Impact** : Impression inefficace, gaspillage papier/encre  
**Solution** : Ajouter `<link rel="stylesheet" href="print.css" media="print">`  
</details>

---

### 📝 Exercice 25 : CSS non compressé côté serveur
**Fichier** : `styles.css`

Le fichier CSS est-il compressé côté serveur ? (Vérifiez les headers HTTP)

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Pas de compression gzip/brotli  
**Impact** : Fichier 3× plus lourd  
**Solution** : Activer la compression côté serveur  
</details>

---

## 🔒 PERMISSIONS & VIE PRIVÉE

### 📝 Exercice 26 : Géolocalisation au chargement
**Fichier** : `index.html` (head)

La géolocalisation est-elle demandée dès le chargement de la page ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : `navigator.geolocation.getCurrentPosition()` au chargement  
**Impact** : UX intrusive, consommation GPS mobile  
**Solution** : Demander uniquement après action utilisateur  
</details>

---

### 📝 Exercice 27 : Notifications au chargement
**Fichier** : `index.html` (head)

Les notifications sont-elles demandées dès le chargement ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : `Notification.requestPermission()` au chargement  
**Impact** : UX intrusive, mauvaise pratique  
**Solution** : Demander après interaction utilisateur  
</details>

---

### 📝 Exercice 28 : Cookies volumineux
**Fichier** : `index.html` (head)

Des cookies sont-ils créés automatiquement ? Quelle est leur taille ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : 3 cookies de 3000+ caractères  
**Impact** : Chaque requête HTTP alourdie de plusieurs KB  
**Solution** : Limiter à < 500 octets, utiliser localStorage  
</details>

---

# ♿ PARTIE 2 : ACCESSIBILITÉ

## 📝 Exercice 29 : Textes alternatifs non descriptifs
**Fichier** : `index.html` (carrousel)

Les attributs `alt` sont-ils descriptifs ? ("Image 1", "Image 2")

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Alt="Image 1", "Image 2" (non descriptif)  
**Impact** : Mauvaise accessibilité  
**Solution** : Décrire le contenu réel de l'image  
</details>

---

## 📝 Exercice 30 : Image sans attribut alt
**Fichier** : `index.html` (section jumbotron)

L'image `side.jpg` a-t-elle un attribut `alt` ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Image sans attribut `alt`  
**Impact** : Non conforme WCAG  
**Solution** : Ajouter `alt="Sélection de produits gastronomiques"`  
</details>

---

## 📝 Exercice 31 : Image produit sans alt
**Fichier** : `index.html` (section produits)

L'image `char.jpg` a-t-elle un attribut `alt` ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Pas d'alt  
**Impact** : Accessibilité compromise  
**Solution** : Ajouter `alt="Collection de charcuterie artisanale"`  
</details>

---

## 📝 Exercice 32 : Lien vide
**Fichier** : `index.html` (section produits)

Le bouton "Choisir l'option" fonctionne-t-il ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : `href="#"` non fonctionnel  
**Impact** : Mauvaise UX, navigation impossible  
**Solution** : Remplacer par `href="#contact"`  
</details>

---

## 📝 Exercice 33 : Structure HTML incorrecte
**Fichier** : `index.html` (section keypoint)

Les balises `<li>` sont-elles correctement structurées ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : `<li>` sans `<ul>` parent  
**Impact** : HTML invalide, accessibilité compromise  
**Solution** : Entourer les `<li>` d'une balise `<ul>`  
</details>

---

## 📝 Exercice 34 : Attribut method sur mauvais élément
**Fichier** : `index.html` (formulaire)

L'attribut `method="post"` est-il sur le bon élément ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : `method` sur `<div>` au lieu de `<form>`  
**Impact** : Attribut ignoré, HTML invalide  
**Solution** : Déplacer sur la balise `<form>`  
</details>

---

## 📝 Exercice 35 : Formulaire sans labels
**Fichier** : `index.html` (formulaire)

Les champs du formulaire ont-ils des labels associés ?

<details>
<summary>💡 Voir la solution</summary>

**Problème** : Inputs sans labels, uniquement placeholders  
**Impact** : Non conforme WCAG, inaccessible aux lecteurs d'écran  
**Solution** : Ajouter `<label for="id">` pour chaque input  
</details>

---

## 📚 Ressources

- [RGESN](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/) - Référentiel Général d'Écoconception
- [Web.dev](https://web.dev/learn-core-web-vitals/) - Core Web Vitals
- [GreenIT](https://www.greenit.fr/) - Numérique responsable
- [EcoIndex](https://www.ecoindex.fr/) - Mesure d'écoconception

## 👥 Auteurs

- [@poupardjean](https://github.com/poupardjean)
- [@juliettespecinov](https://github.com/JulietteSpecinov)

---