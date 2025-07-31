// lib/themes.ts
export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  textSecondary: string;
  hover: string;
  button: string;
  buttonText: string;
  buttonHover: string;
}

export type CompanyType = "default" | "capital" | "tech" | "law" | "media";

export const themes: Record<CompanyType, Theme> = {
  default: {
    primary: "slate-900",
    secondary: "slate-800",
    accent: "white",
    text: "white",
    textSecondary: "slate-300",
    hover: "slate-700",
    button: "white",
    buttonText: "slate-900",
    buttonHover: "slate-200",
  },
  capital: {
    primary: "#EF0307", // Deep red
    secondary: "#FF6666", // Light red
    accent: "#FF9999", // Very light red for accents
    text: "white",
    textSecondary: "#FFE6E6", // Very light red for secondary text
    hover: "#CC0205", // Darker red for hover
    button: "#EF0307", // Primary red for buttons
    buttonText: "white",
    buttonHover: "#CC0205", // Darker red for button hover
  },
  tech: {
    primary: "#2D3748", // Dark gray (engineering/industrial)
    secondary: "#4A5568", // Medium gray
    accent: "#F7931E", // Engineering orange
    text: "white",
    textSecondary: "#E2E8F0", // Light gray for secondary text
    hover: "#1A202C", // Very dark gray for hover
    button: "#F7931E", // Orange for buttons
    buttonText: "white",
    buttonHover: "#E67E22", // Darker orange for button hover
  },
  law: {
    primary: "#226C35", // Deep green
    secondary: "#238F3D", // Medium green
    accent: "#48BB78", // Light green for accents
    text: "white",
    textSecondary: "#C6F6D5", // Very light green for secondary text
    hover: "#1A5629", // Darker green for hover
    button: "#238F3D", // Secondary green for buttons
    buttonText: "white",
    buttonHover: "#1A5629", // Darker green for button hover
  },
  media: {
    primary: "#143D8F", // Deep blue
    secondary: "#137DC7", // Medium blue
    accent: "#4299E1", // Light blue for accents
    text: "white",
    textSecondary: "#BEE3F8", // Very light blue for secondary text
    hover: "#0F2A5F", // Darker blue for hover
    button: "#137DC7", // Secondary blue for buttons
    buttonText: "white",
    buttonHover: "#0F2A5F", // Darker blue for button hover
  },
};

export const getTheme = (company: CompanyType): Theme => {
  return themes[company] || themes.default;
};

export const getCompanyFromPath = (pathname: string): CompanyType => {
  if (pathname.startsWith("/capital")) return "capital";
  if (pathname.startsWith("/tech")) return "tech";
  if (pathname.startsWith("/law")) return "law";
  if (pathname.startsWith("/media")) return "media";
  return "default";
};
