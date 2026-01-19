import { House, DiamondPlus, Telescope, Heart, Settings } from "lucide-react";

export const links = [
  {
    icon: <House />,
    title: "Anasayfa",
    path: "/",
  },
  {
    icon: <DiamondPlus />,
    title: "Oluştur",
    path: "/ekle",
  },
  {
    icon: <Telescope />,
    title: "Keşfet",
    path: "/keşfet",
  },
  {
    icon: <Heart />,
    title: "Favoriler",
    path: "/favoriler",
  },
  {
    icon: <Settings />,
    title: "Ayarlar",
    path: "/ayarlar",
  },
];

export const selectStyles = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? "#a8a29e" : "#e7e5e4",
    boxShadow: state.isFocused ? "0 0 0 1PX #axa29e" : "none",
    borderRadius: "0.5rem",
    padding: "0.25rem",
    "&:hover": {
      borderColor: "#a8a29e",
    },
  }),
};
