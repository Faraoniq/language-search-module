# Gladia Landing Page

Landing page pour Gladia - Building End-to-End Voice Agents.

## 🚀 Démarrage rapide

### 1. Installer les dépendances

```bash
npm install
```

### 2. Ajouter les images depuis Figma

Exportez les images depuis Figma et placez-les dans `/public/images/` :

| Fichier | Description | Format recommandé |
|---------|-------------|-------------------|
| `header-logo.svg` | Logo dans la navbar | SVG |
| `chevron-down.svg` | Icône flèche des boutons | SVG |
| `cover.png` | Image de couverture du ebook | PNG @2x |
| `logo-white.png` | Logo Gladia blanc sur la carte | PNG @2x |
| `person.jpg` | Photo de la personne (vidéo) | JPG |
| `play-icon.svg` | Icône lecture | SVG |
| `form-preview.png` | Aperçu du formulaire | PNG @2x |
| `gladia-logo.svg` | Logo dans le footer | SVG |
| `social-icons.svg` | Icônes réseaux sociaux | SVG |

#### Comment exporter depuis Figma :

1. Sélectionnez le calque image/icône
2. Dans le panneau de droite, section **Export**
3. Choisissez le format (SVG pour icônes, PNG pour images)
4. Pour les PNG, cochez **2x** pour la rétina
5. Cliquez sur **Export**

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### 4. Build pour la production

```bash
npm run build
```

Les fichiers seront générés dans `/dist/`

---

## 📁 Structure du projet

```
gladia-landing/
├── public/
│   └── images/           ← Vos assets Figma ici
├── src/
│   ├── components/
│   │   ├── GladiaLandingPage.jsx
│   │   └── GladiaLandingPage.module.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         ← Design system tokens
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Design System

Le projet utilise un design system basé sur des variables CSS :

### Spacing (Base 8)
- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 32px
- ...

### Border Radius
- `--radius-3`: 24px (navbar, cards)
- `--radius-4`: 32px (form card)
- `--radius-5`: 40px (boutons, video)
- `--radius-full`: 9999px (pills)

### Colors
- `--text-primary`: Blanc (#FFFFFF)
- `--text-tertiary`: Gris (#727272)
- `--bg-primary`: Noir (#000000)
- `--bg-glass`: rgba(12, 12, 12, 0.8)

### Typography
- **Display SM**: 56px, medium, line-height 1.3
- **Heading LG**: 40px, medium, line-height 1.3
- **Body LG**: 24px, regular, line-height 1.4
- **Body MD**: 20px, regular, line-height 1.5

---

## 📝 Personnalisation

### Modifier les couleurs
Éditez les variables dans `src/index.css`

### Modifier les composants
Les styles sont dans `src/components/GladiaLandingPage.module.css`

### Ajouter de nouvelles sections
Créez de nouveaux composants dans `src/components/`

---

## 🔧 Technologies

- **Vite** - Build tool
- **React 18** - Framework
- **CSS Modules** - Styling
- **Design Tokens** - Variables CSS

---

## 📄 License

Propriétaire - Gladia
