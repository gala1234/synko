// Script para verificar contraste de colores según WCAG
// Ejecutar con: node scripts/check-contrast.js

// Colores del tema claro
const lightTheme = {
  bg: '#ffffff',
  fg: '#0f172a',
  muted: '#64748b',
  border: '#e2e8f0',
  primary: '#0369a1',
  primaryHover: '#075985',
  accent: '#22c55e',
  accentHover: '#16a34a',
  highlight: '#c026d3',
  highlightHover: '#a21caf'
};

// Colores del tema oscuro
const darkTheme = {
  bg: '#020617',
  fg: '#f1f5f9',
  muted: '#94a3b8',
  border: '#1e293b',
  primary: '#0369a1',
  accent: '#4ade80',
  highlight: '#7c3aed',
  highlightText: '#c084fc'
};

// Función para convertir hex a RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Función para calcular luminancia relativa
function getLuminance(rgb) {
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Función para calcular ratio de contraste
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Función para verificar si cumple WCAG
function checkWCAG(ratio, level = 'AA') {
  const standards = {
    'AA': { normal: 4.5, large: 3 },
    'AAA': { normal: 7, large: 4.5 }
  };
  
  return {
    normal: ratio >= standards[level].normal,
    large: ratio >= standards[level].large,
    ratio: ratio.toFixed(2)
  };
}

// Combinaciones a verificar
const combinations = [
  // Tema claro
  { name: 'Texto principal (claro)', fg: lightTheme.fg, bg: lightTheme.bg },
  { name: 'Texto muted (claro)', fg: lightTheme.muted, bg: lightTheme.bg },
  { name: 'Botón primary (claro)', fg: '#ffffff', bg: lightTheme.primary },
  { name: 'Botón primary hover (claro)', fg: '#ffffff', bg: lightTheme.primaryHover },
  { name: 'Botón highlight (claro)', fg: '#ffffff', bg: lightTheme.highlight },
  { name: 'Botón highlight hover (claro)', fg: '#ffffff', bg: lightTheme.highlightHover },
  { name: 'Botón outline (claro)', fg: lightTheme.primary, bg: lightTheme.bg },
  { name: 'Badge highlight (claro)', fg: lightTheme.highlight, bg: lightTheme.bg },
  
  // Tema oscuro
  { name: 'Texto principal (oscuro)', fg: darkTheme.fg, bg: darkTheme.bg },
  { name: 'Texto muted (oscuro)', fg: darkTheme.muted, bg: darkTheme.bg },
  { name: 'Botón primary (oscuro)', fg: '#ffffff', bg: darkTheme.primary },
  { name: 'Botón highlight (oscuro)', fg: '#ffffff', bg: darkTheme.highlight },
  { name: 'Badge highlight (oscuro)', fg: darkTheme.highlightText, bg: darkTheme.bg }
];

console.log('🎨 Verificación de contraste WCAG\n');
console.log('Estándares:');
console.log('- WCAG AA: 4.5:1 (texto normal), 3:1 (texto grande)');
console.log('- WCAG AAA: 7:1 (texto normal), 4.5:1 (texto grande)\n');

let issues = [];

combinations.forEach(combo => {
  const ratio = getContrastRatio(combo.fg, combo.bg);
  const wcagAA = checkWCAG(ratio, 'AA');
  const wcagAAA = checkWCAG(ratio, 'AAA');
  
  const status = wcagAA.normal ? '✅' : '❌';
  const statusAAA = wcagAAA.normal ? '✅' : '⚠️';
  
  console.log(`${status} ${combo.name}`);
  console.log(`   Ratio: ${wcagAA.ratio}:1`);
  console.log(`   WCAG AA: ${wcagAA.normal ? 'PASA' : 'FALLA'} (normal) | ${wcagAA.large ? 'PASA' : 'FALLA'} (grande)`);
  console.log(`   WCAG AAA: ${wcagAAA.normal ? 'PASA' : 'FALLA'} (normal) | ${wcagAAA.large ? 'PASA' : 'FALLA'} (grande)`);
  console.log(`   Colores: ${combo.fg} sobre ${combo.bg}\n`);
  
  if (!wcagAA.normal) {
    issues.push({
      name: combo.name,
      ratio: wcagAA.ratio,
      fg: combo.fg,
      bg: combo.bg
    });
  }
});

if (issues.length > 0) {
  console.log('🚨 PROBLEMAS DE CONTRASTE ENCONTRADOS:\n');
  issues.forEach(issue => {
    console.log(`❌ ${issue.name}`);
    console.log(`   Ratio actual: ${issue.ratio}:1 (necesita ≥4.5:1)`);
    console.log(`   Colores: ${issue.fg} sobre ${issue.bg}\n`);
  });
} else {
  console.log('🎉 ¡Todos los contrastes cumplen con WCAG AA!');
}

console.log(`\n📊 Resumen: ${combinations.length - issues.length}/${combinations.length} combinaciones pasan WCAG AA`);