import { Components, Theme, alpha } from "@mui/material/styles";

export const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    variants: [
      {
        props: { color: "neutral" },
        style: ({ theme }) => ({
          color: theme.palette.text.primary,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }),
      },
    ],
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "4px",
        padding: "8px 16px",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: "2px",
        border: "1px solid #333333",
        padding: "16px",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        "& .MuiInputBase-root": {
          backgroundColor:
            ownerState.color && theme.palette[ownerState.color]
              ? alpha(theme.palette[ownerState.color].main, 0.1)
              : "#2A2A2A",
        },
      }),
    },
  },
};
