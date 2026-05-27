// ══════════════════════════════════════════════════════════
// COLOR PALETTE — Exact hex values, no deviation
// ══════════════════════════════════════════════════════════

// Backgrounds
export const BG = '#0A0A0A';
export const SURFACE = '#111111';
export const SURFACE_RAISED = '#1A1A1A';
export const BORDER = '#1E1E1E';
export const BORDER_ACTIVE = '#2A2A2A';

// Accents
export const FLAME = '#FF6D2E';
export const AZURE = '#3B82F6';
export const VIOLET = '#8B5CF6';
export const CYAN = '#06B6D4';
export const EMERALD = '#10B981';
export const AMBER = '#F59E0B';

// Text
export const TEXT_PRIMARY = '#E6EDF3';
export const TEXT_SECONDARY = '#8B949E';
export const TEXT_DIM = '#4B5563';
export const TEXT_GHOST = '#2A2A2A';

// Tinted tag backgrounds
export const TINT_FLAME = '#1F1108';
export const TINT_AZURE = '#0C1829';
export const TINT_VIOLET = '#140E24';
export const TINT_CYAN = '#041518';
export const TINT_EMERALD = '#061812';
export const TINT_AMBER = '#1A1508';

// Accent color map for programmatic use
export const accentMap = {
  flame: { color: FLAME, tint: TINT_FLAME },
  azure: { color: AZURE, tint: TINT_AZURE },
  violet: { color: VIOLET, tint: TINT_VIOLET },
  cyan: { color: CYAN, tint: TINT_CYAN },
  emerald: { color: EMERALD, tint: TINT_EMERALD },
  amber: { color: AMBER, tint: TINT_AMBER },
} as const;

export type AccentName = keyof typeof accentMap;
