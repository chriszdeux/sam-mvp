// button.ts
export const buttonStyles = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }: any) => ({
        fontSize: "1.1rem",
        fontWeight: 600,
        borderRadius: 4,
        padding: "10px 24px",
        color: theme.palette.customColors.white,

        // 🎨 Efecto vidrio base
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(12px) saturate(180%)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out",

        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          transform: "translateY(-2px)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        },

        "&:active": {
          transform: "scale(0.98)",
        },
      }),

      // 🟦 Variantes contenidas con glass effect + color del tema
      containedPrimary: ({ theme }: any) => ({
        backgroundColor: "rgba(33, 150, 243, 0.25)", // azul translúcido
        // // border: `1px solid ${theme.palette.primary.main}`,
        "&:hover": {
          backgroundColor: "rgba(33, 150, 243, 0.35)",
        },
      }),
      containedSecondary: ({ theme }: any) => ({
        backgroundColor: "rgba(0, 150, 136, 0.25)", // teal translúcido
        // border: `1px solid ${theme.palette.secondary.main}`,
        "&:hover": {
          backgroundColor: "rgba(0, 150, 136, 0.35)",
        },
      }),
      containedError: ({ theme }: any) => ({
        backgroundColor: "rgba(244, 67, 54, 0.25)", // rojo translúcido
        // border: `1px solid ${theme.palette.error.main}`,
        "&:hover": {
          backgroundColor: "rgba(244, 67, 54, 0.35)",
        },
      }),
      containedWarning: ({ theme }: any) => ({
        backgroundColor: "rgba(255, 152, 0, 0.25)", // naranja translúcido
        // border: `1px solid ${theme.palette.warning.main}`,
        "&:hover": {
          backgroundColor: "rgba(255, 152, 0, 0.35)",
        },
      }),
    },
  },
};
