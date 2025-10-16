# 📸 Images à optimiser manuellement

## Instructions

Voici la liste des images que vous devez optimiser manuellement pour compléter la refactorisation du site.

## Images du carrousel (2 images)

### 1. `images/pic1.jpg`
- **Utilisation** : Slide 1 du carrousel
- **Optimisations nécessaires** :
  - Redimensionner à **1920x800px** maximum
  - Compresser avec qualité 80-85%
  - Convertir en WebP si possible
  - Poids cible : < 150 KB

### 2. `images/pic3.jpg`
- **Utilisation** : Slide 2 du carrousel
- **Optimisations nécessaires** :
  - Redimensionner à **1920x800px** maximum
  - Compresser avec qualité 80-85%
  - Convertir en WebP si possible
  - Poids cible : < 150 KB

## Image de section (1 image)

### 3. `images/side.jpg`
- **Utilisation** : Section "Une expérience gastronomique"
- **Optimisations nécessaires** :
  - Redimensionner à **600x400px** maximum
  - Compresser avec qualité 85%
  - Poids cible : < 80 KB

## Images de produits (2 images)

### 4. `images/char.jpg`
- **Utilisation** : Produit "Charcuterie"
- **Optimisations nécessaires** :
  - Redimensionner à **500x500px**
  - Compresser avec qualité 85%
  - Poids cible : < 60 KB

### 5. `images/cake.jpg`
- **Utilisation** : Produit "Cakes"
- **Optimisations nécessaires** :
  - Redimensionner à **500x500px**
  - Compresser avec qualité 85%
  - Poids cible : < 60 KB

## Image de fond (1 image - IMPORTANTE)

### 6. `images/back22.jpg`
- **Utilisation** : Section "Faites votre choix"
- **Optimisations nécessaires** :
  - Redimensionner à **800x600px** maximum
  - Compresser avec qualité 80%
  - **Cette image est mentionnée comme ANTI-PATTERN 12**
  - Poids cible : < 100 KB

## Images conservées mais non prioritaires

Ces images peuvent rester telles quelles ou être optimisées plus tard :

- `images/logo.png` - Déjà petit
- `images/back.jpg` - Image de fond body (peut être optimisée mais moins prioritaire)
- `images/feed.jpg` - Image de fond formulaire

## Images à supprimer (non utilisées)

Ces images ne sont plus utilisées dans le nouveau `index.html` et peuvent être supprimées :

- `images/pic4.jpg` (3ème slide du carrousel supprimé)
- `images/bacon.jpg` (produit supprimé)
- `images/hot.jpg` (produit supprimé)
- `images/cele1.jpg` à `images/cele4.jpg` (page prestations supprimée)

## 🛠️ Outils recommandés

### En ligne
- **Squoosh** : https://squoosh.app/ (gratuit, excellent)
- **TinyPNG** : https://tinypng.com/ (gratuit)
- **Compressor.io** : https://compressor.io/ (gratuit)

### Logiciels
- **ImageOptim** (Mac) : https://imageoptim.com/
- **RIOT** (Windows) : https://riot-optimizer.com/
- **GIMP** (Multiplateforme) : https://www.gimp.org/

### Ligne de commande
```bash
# Avec ImageMagick
convert input.jpg -resize 1920x800 -quality 85 output.jpg

# Avec cwebp (pour WebP)
cwebp -q 85 input.jpg -o output.webp
```

## ✅ Checklist après optimisation

- [ ] `pic1.jpg` optimisé (< 150 KB)
- [ ] `pic3.jpg` optimisé (< 150 KB)
- [ ] `side.jpg` optimisé (< 80 KB)
- [ ] `char.jpg` optimisé (< 60 KB)
- [ ] `cake.jpg` optimisé (< 60 KB)
- [ ] `back22.jpg` optimisé (< 100 KB) ⭐ PRIORITÉ
- [ ] Images inutilisées supprimées

## 📊 Gain estimé

- **Avant optimisation** : ~2-3 MB d'images
- **Après optimisation** : ~600-800 KB
- **Gain** : ~70% de réduction du poids des images

## 💡 Bonnes pratiques

1. **Toujours garder les originaux** dans un dossier séparé
2. **Tester visuellement** après compression
3. **Vérifier sur mobile** que la qualité reste acceptable
4. **Considérer WebP** pour les navigateurs modernes (avec fallback JPEG)
5. **Ajouter width/height** dans le HTML après redimensionnement

## 🎯 Prochaines étapes

Une fois les images optimisées :
1. Remplacer les fichiers dans le dossier `images/`
2. Ajouter les attributs `width` et `height` dans `index.html`
3. Tester avec Lighthouse pour vérifier les améliorations
4. Mesurer avec EcoIndex le nouveau score d'écoconception
