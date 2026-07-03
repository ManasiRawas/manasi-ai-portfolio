export const theme = {
    colors: {
      // Backgrounds
      background: "#050505",
      graphite: "#111111",
      surface: "#1A1A1A",
  
      // Primary Brand
      white: "#F8FAFC",
  
      // Performance Red
      red: "#FF2D2D",
      crimson: "#D90429",
  
      // AI Purple
      purple: "#7C3AED",
      violet: "#A855F7",
  
      // Optional Arctic Accent
      cyan: "#22D3EE",
  
      // Text
      text: "#CBD5E1",
      muted: "#94A3B8",
  
      // Glass
      glass: "rgba(255,255,255,0.03)",
      glassStrong: "rgba(255,255,255,0.06)",
  
      border: "rgba(255,255,255,0.10)",
      borderHover: "rgba(255,255,255,0.18)",
    },
  
    gradients: {
      background: `
        linear-gradient(
          180deg,
          #050505 0%,
          #101010 35%,
          #161616 100%
        )
      `,
  
      performance: `
        linear-gradient(
          135deg,
          #FF2D2D,
          #D90429
        )
      `,
  
      ai: `
        linear-gradient(
          135deg,
          #7C3AED,
          #A855F7
        )
      `,
  
      mixed: `
        linear-gradient(
          135deg,
          #FF2D2D 0%,
          #7C3AED 55%,
          #22D3EE 100%
        )
      `,
    },
  
    glow: {
      red: "rgba(255,45,45,.35)",
      purple: "rgba(124,58,237,.35)",
      cyan: "rgba(34,211,238,.30)",
    },
  
    shadow: {
      glass: "0 20px 60px rgba(0,0,0,.45)",
      soft: "0 10px 30px rgba(0,0,0,.25)",
    },
  
    radius: {
      card: "28px",
      button: "18px",
      full: "999px",
    },
  
    blur: {
      glass: "30px",
      heavy: "180px",
    },
  
    animation: {
      fast: 0.2,
      normal: 0.4,
      slow: 0.8,
    },
  } as const;
  
  export type Theme = typeof theme;