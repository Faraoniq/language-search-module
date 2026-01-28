---
name: web-designer-assistant
description: >
  Cette compétence aide à concevoir des sites web modernes en proposant
  une structure claire, une expérience utilisateur optimale et un design UI cohérent.
---


# Design System Skill

## Overview
This skill provides the official design system tokens and guidelines for UI development. Always read this file before creating any UI components, pages, or interfaces.

## Design Principles

1. **Base 8 Grid** - All spacing values are multiples of 8px
2. **Dark Mode First** - Primary interface is dark with vibrant accents
3. **Typography** - Suisse Intl (sans) + Geist Mono (monospace)
4. **Consistent Tokens** - Always use CSS variables, never hardcoded values

---

## Primitives

### Colors

```css
/* Neutral */
--color-neutral-0: #FFFFFF;
--color-neutral-50: #FAFAFA;
--color-neutral-100: #F5F5F5;
--color-neutral-200: #E5E5E5;
--color-neutral-300: #D4D4D4;
--color-neutral-400: #A3A3A3;
--color-neutral-500: #727272;
--color-neutral-600: #515151;
--color-neutral-700: #252525;
--color-neutral-800: #1C1C1E;
--color-neutral-900: #0C0C0C;
--color-neutral-1000: #000000;

/* Purple */
--color-purple-100: #EDE9FE;
--color-purple-200: #BEB4FF;
--color-purple-300: #A87CFF;
--color-purple-400: #947AFC;
--color-purple-500: #925BFF;
--color-purple-600: #7C3AED;
--color-purple-700: #6D28D9;

/* Blue */
--color-blue-100: #BAE0FF;
--color-blue-200: #7EC8FF;
--color-blue-300: #45B0FF;
--color-blue-400: #1A9EFF;
--color-blue-500: #008CFF;
--color-blue-600: #0070CC;
--color-blue-700: #005499;

/* Green */
--color-green-100: #DCFCE7;
--color-green-500: #22C55E;
--color-green-600: #16A34A;

/* Red */
--color-red-100: #FEE2E2;
--color-red-500: #EF4444;
--color-red-600: #DC2626;

/* Yellow */
--color-yellow-100: #FEF9C3;
--color-yellow-400: #F2CB45;
--color-yellow-500: #EAB308;

/* Accent */
--color-orange-500: #FF630F;
--color-pink-400: #FF5FB0;
```

### Spacing (Base 8)

```css
--space-0: 0px;
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-7: 56px;
--space-8: 64px;
--space-9: 72px;
--space-10: 80px;
--space-12: 96px;
--space-14: 112px;
--space-15: 120px;
--space-16: 128px;
--space-20: 160px;
--space-24: 192px;
```

### Border Radius

```css
--radius-0: 0px;
--radius-1: 8px;
--radius-2: 16px;
--radius-3: 24px;
--radius-4: 32px;
--radius-5: 40px;
--radius-6: 48px;
--radius-full: 9999px;
```

### Shadows

```css
--shadow-none: none;
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 8px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 16px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 16px 32px -8px rgba(0, 0, 0, 0.15);
```

### Typography

```css
/* Font Families */
--font-sans: 'Suisse Intl', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'Geist Mono', 'JetBrains Mono', monospace;

/* Font Sizes */
--font-size-10: 10px;
--font-size-12: 12px;
--font-size-14: 14px;
--font-size-16: 16px;
--font-size-18: 18px;
--font-size-20: 20px;
--font-size-24: 24px;
--font-size-32: 32px;
--font-size-40: 40px;
--font-size-48: 48px;
--font-size-56: 56px;
--font-size-64: 64px;
--font-size-80: 80px;

/* Font Weights */
--font-weight-regular: 400;
--font-weight-book: 450;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Line Heights */
--line-height-none: 1;
--line-height-tight: 1.2;
--line-height-snug: 1.3;
--line-height-normal: 1.4;
--line-height-relaxed: 1.5;
--line-height-loose: 1.6;

/* Letter Spacing */
--letter-spacing-tighter: -0.04em;
--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.02em;
--letter-spacing-wider: 0.08em;
--letter-spacing-widest: 0.16em;
```

### Animation

```css
/* Duration */
--duration-0: 0ms;
--duration-1: 80ms;
--duration-2: 160ms;
--duration-3: 240ms;
--duration-4: 320ms;
--duration-5: 480ms;

/* Easing */
--easing-linear: linear;
--easing-in: cubic-bezier(0.4, 0, 1, 1);
--easing-out: cubic-bezier(0, 0, 0.2, 1);
--easing-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## Semantic Tokens

### Text Colors
```css
--text-primary: var(--color-neutral-1000);
--text-secondary: var(--color-neutral-600);
--text-tertiary: var(--color-neutral-500);
--text-disabled: var(--color-neutral-400);
--text-inverse: var(--color-neutral-0);
--text-link: var(--color-neutral-300);
--text-brand: var(--color-purple-400);
--text-success: var(--color-green-600);
--text-warning: var(--color-yellow-500);
--text-error: var(--color-red-600);
```

### Background Colors
```css
--bg-primary: var(--color-neutral-0);
--bg-secondary: var(--color-neutral-50);
--bg-tertiary: var(--color-neutral-100);
--bg-inverse: var(--color-neutral-1000);
--bg-elevated: var(--color-neutral-700);
--bg-sunken: var(--color-neutral-900);
--bg-glass: rgba(12, 12, 12, 0.8);
--bg-glass-light: rgba(255, 255, 255, 0.08);
--bg-brand: var(--color-purple-400);
--bg-brand-subtle: var(--color-purple-100);
--bg-success: var(--color-green-100);
--bg-warning: var(--color-yellow-100);
--bg-error: var(--color-red-100);
```

### Border Colors
```css
--border-primary: var(--color-neutral-200);
--border-secondary: var(--color-neutral-100);
--border-tertiary: var(--color-neutral-800);
--border-inverse: var(--color-neutral-700);
--border-transparent: rgba(255, 255, 255, 0.12);
--border-transparent-subtle: rgba(255, 255, 255, 0.08);
--border-focus: var(--color-blue-400);
--border-brand: var(--color-purple-400);
--border-success: var(--color-green-500);
--border-warning: var(--color-yellow-500);
--border-error: var(--color-red-500);
```

---

## Components

### Button

**Sizes:**
- `sm`: height 32px, padding-x 16px, font-size 14px
- `md`: height 40px, padding-x 24px, font-size 16px
- `lg`: height 56px, padding-x 32px, font-size 16px

**Variants:**
- `primary`: bg white, text black, border transparent
- `secondary`: bg neutral-700, text white, border rgba(255,255,255,0.08)
- `ghost`: bg transparent, text white, hover bg rgba(255,255,255,0.08)

**Base styles:**
- border-radius: var(--radius-full)
- font-weight: var(--font-weight-medium)
- transition: all 80ms ease-out

```html
<button class="btn btn-md btn-primary">Button</button>
```

### Input

**Sizes:**
- `sm`: height 40px, padding-x 16px, font-size 14px
- `md`: height 48px, padding-x 16px, font-size 16px
- `lg`: height 56px, padding-x 24px, font-size 16px

**States:**
- default: border neutral-200, bg white
- focus: border purple-400, shadow 0 0 0 3px purple-100
- error: border red-500, shadow 0 0 0 3px red-100
- disabled: opacity 0.6, bg neutral-50

**Base styles:**
- border-radius: var(--radius-2) (16px)
- border-width: 1px
- font-family: var(--font-sans)

### Card

**Variants:**
- `default`: bg neutral-800, border neutral-700
- `elevated`: bg white, shadow-lg, border transparent
- `dark`: bg neutral-1000, border neutral-800

**Padding:**
- `sm`: 16px
- `md`: 24px
- `lg`: 32px

**Base styles:**
- border-radius: var(--radius-4) (32px)
- border-width: 1px

### Badge

**Sizes:**
- `sm`: padding 4px 8px, font-size 12px
- `md`: padding 8px 16px, font-size 14px

**Variants:**
- `default`: bg neutral-100, text neutral-600
- `brand`: bg purple-100, text purple-700
- `success`: bg green-100, text green-600
- `warning`: bg yellow-100, text yellow-500
- `error`: bg red-100, text red-600

**Base styles:**
- border-radius: var(--radius-full)
- font-weight: var(--font-weight-medium)

### Tag Label (Overline with indicator)

```html
<div class="tag-label">
  <span class="tag-indicator"></span>
  <span class="tag-text">SECTION TITLE</span>
</div>
```

- Indicator: 16px × 8px, bg purple-400, border-radius full
- Text: 12px, bold, uppercase, letter-spacing 0.16em, font-mono
- Gap: 16px

### Menu Bar (Glassmorphism)

- Height: 72px
- Background: rgba(12, 12, 12, 0.8)
- Border: 1px solid rgba(255, 255, 255, 0.12)
- Border-radius: 24px
- Padding: 24px horizontal

### Feature Card

- Border-radius: 40px
- Border: 1px solid neutral-800
- Background: black
- Overflow: hidden
- Sizes: 576px (lg), 448px (md)

### Accordion

- Padding: 32px top, 32px bottom
- Border-bottom: 1px solid neutral-800
- Title: 20px, regular weight
- Icon: 32px

### Footer

- Background: black
- Border-top: 1px solid neutral-700
- Padding-top: 72px
- Column gap: 16px
- Heading: 16px, white
- Links: 16px, neutral-500

---

## Typography Presets

### Display
- **lg**: 80px, bold, line-height 1.2, letter-spacing -0.04em
- **md**: 64px, bold, line-height 1.2, letter-spacing -0.04em
- **sm**: 48px, semibold, line-height 1.2, letter-spacing -0.02em

### Heading
- **lg**: 40px, semibold, line-height 1.3, letter-spacing -0.02em
- **md**: 32px, semibold, line-height 1.3
- **sm**: 24px, medium, line-height 1.3
- **xs**: 20px, medium, line-height 1.4

### Body
- **lg**: 20px, regular, line-height 1.5
- **md**: 16px, regular, line-height 1.4
- **sm**: 14px, regular, line-height 1.4
- **xs**: 12px, regular, line-height 1.4

### Overline
- 12px, bold, monospace, uppercase, letter-spacing 0.16em

---

## Layout

### Container
- Max-width: 1200px
- Padding-x: 24px

### Section Spacing
- Default gap: 120px between sections
- Content gap: 48px

### Grid
- 12 columns
- Gap: 24px

---

## Usage Guidelines

1. **Always use CSS variables** - Never hardcode colors, spacing, or other values
2. **Respect the base 8 grid** - All custom spacing should be multiples of 8
3. **Dark mode by default** - Design for dark backgrounds first
4. **Consistent border-radius** - Use pill (full) for buttons/badges, 32px for cards, 16px for inputs
5. **Typography hierarchy** - Use display for heroes, heading for sections, body for content
6. **Glassmorphism for overlays** - Use bg-glass with border-transparent for floating elements
