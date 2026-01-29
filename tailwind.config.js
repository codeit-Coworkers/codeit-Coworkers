/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand */
        brand: {
          primary: "#10B981",
          secondary: "#34D399",
          tertiary: "#A3E635",
        },

        /* Point */
        point: {
          purple: "#A855F7",
          cyan: "#06B6D4",
          pink: "#EC4899",
          rose: "#F43F5E",
        },

        /* Surface */
        surface: {
          primary: "#0F172A",
          secondary: "#1E293B",
          tertiary: "#334155",
        },

        /* Interaction */
        interaction: {
          inactive: "#94A3B8",
          hover: "#059669",
          pressed: "#047857",
        },

        /* ✅ Color (TEXT / BORDER 공용) */
        "color-primary": "#F8FAFC",
        "color-secondary": "#CBD5E1",
        "color-tertiary": "#E2E8F0",
        "color-default": "#64748B",
        "color-inverse": "#FFFFFF",
        "color-disabled": "#94A3B8",

        /* Status */
        status: {
          danger: "#DC2626",
        },

        /* Icon */
        icon: {
          primary: "#64748B",
          inverse: "#F8FAFC",
          brand: "#10B981",
        },
      },

      fontSize: {
        "4xl-m": ["40px", { lineHeight: "48px", fontWeight: "500" }],

        "3xl-b": ["32px", { lineHeight: "38px", fontWeight: "700" }],
        "3xl-sb": ["32px", { lineHeight: "38px", fontWeight: "600" }],

        "2xl-b": ["24px", { lineHeight: "28px", fontWeight: "700" }],
        "2xl-sb": ["24px", { lineHeight: "28px", fontWeight: "600" }],
        "2xl-m": ["24px", { lineHeight: "28px", fontWeight: "500" }],
        "2xl-r": ["24px", { lineHeight: "28px", fontWeight: "400" }],

        "xl-b": ["20px", { lineHeight: "24px", fontWeight: "700" }],
        "xl-sb": ["20px", { lineHeight: "24px", fontWeight: "600" }],
        "xl-m": ["20px", { lineHeight: "24px", fontWeight: "500" }],
        "xl-r": ["20px", { lineHeight: "24px", fontWeight: "400" }],

        "2lg-b": ["18px", { lineHeight: "21px", fontWeight: "700" }],
        "2lg-sb": ["18px", { lineHeight: "21px", fontWeight: "600" }],
        "2lg-m": ["18px", { lineHeight: "21px", fontWeight: "500" }],
        "2lg-r": ["18px", { lineHeight: "21px", fontWeight: "400" }],

        "lg-b": ["16px", { lineHeight: "19px", fontWeight: "700" }],
        "lg-sb": ["16px", { lineHeight: "19px", fontWeight: "600" }],
        "lg-m": ["16px", { lineHeight: "19px", fontWeight: "500" }],
        "lg-r": ["16px", { lineHeight: "19px", fontWeight: "400" }],

        "md-b": ["14px", { lineHeight: "17px", fontWeight: "700" }],
        "md-sb": ["14px", { lineHeight: "17px", fontWeight: "600" }],
        "md-m": ["14px", { lineHeight: "17px", fontWeight: "500" }],
        "md-r": ["14px", { lineHeight: "17px", fontWeight: "400" }],

        "sm-sb": ["13px", { lineHeight: "16px", fontWeight: "600" }],
        "sm-m": ["13px", { lineHeight: "16px", fontWeight: "500" }],

        "xs-sb": ["12px", { lineHeight: "14px", fontWeight: "600" }],
        "xs-m": ["12px", { lineHeight: "14px", fontWeight: "500" }],
        "xs-r": ["12px", { lineHeight: "14px", fontWeight: "400" }],
      },

      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
};
