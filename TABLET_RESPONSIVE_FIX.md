# Tablet Responsive Design Update (1920x1200 Support)

## Problem

The user specifically targeted "1920 x 1200" devices (e.g., high-end tablets).

- In **Portrait** (1200px width), it should look like **Mobile**.
- In **Landscape** (1920px width), it should look like **Desktop**.

Standard logic treats 1200px width as "Desktop" because it's usually > 1024px.

## Solution

### 1. Tailwind Config Update (`tailwind.config.js`)

We redefined the breakpoints to be orientation-aware for this specific range.

```javascript
screens: {
  // 'md' usually triggers at 768px.
  // NOW: Triggers ONLY if Landscape AND width > 768px
  // OR if width > 1280px (safe desktop)
  'md': {'raw': '(min-width: 768px) and (orientation: landscape), (min-width: 1280px)'},

  // 'lg' usually triggers at 1024px.
  // NOW: Triggers ONLY if Landscape AND width > 1024px
  // OR if width > 1280px
  'lg': {'raw': '(min-width: 1024px) and (orientation: landscape), (min-width: 1280px)'},

  // 'xl' triggers at 1280px (Safe Desktop)
  'xl': '1280px',
}
```

**Effect**:

- **1200px Portrait**:
  - `md`: `(768 and Landscape)` is False. `(1280)` is False. -> **No match**. -> **Mobile View**.
  - `lg`: `(1024 and Landscape)` is False. -> **No match**. -> **Mobile View**.
- **1920px Landscape**:
  - `md`: `(768 and Landscape)` is True. -> **Match**. -> **Desktop View**.
  - `lg`: `(1024 and Landscape)` is True. -> **Match**. -> **Desktop View**.

### 2. CSS Zoom Update (`globals.css`)

Expanded the portrait zoom rule to cover the 1200px width case.

```css
@media (min-width: 768px) and (max-width: 1279px) and (orientation: portrait) {
  body {
    zoom: 100%; /* Keep standard mobile zoom */
  }
}
```

## Verification

- **Portrait (1200px width)**: Mobile layout, 100% zoom.
- **Landscape (1920px width)**: Desktop layout, 80% zoom (from existing rule).

This fully aligns with the 1920x1200 resolution requirements.
