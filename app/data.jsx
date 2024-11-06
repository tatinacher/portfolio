import { Avatar } from "@mui/material";

export const projects = [
  {
    image: "./shop.webp",
    imageDescription: "",
    description: "Furniture Shop",
    link: "https://shop-sigma-swart.vercel.app/",
  },
  {
    image: "./hangyl.webp",
    imageDescription: "",
    description: "Learn Korean",
    link: "https://learn-korean-flax.vercel.app/",
  },
];

export const connects = [
  {
    label: "Github",
    link: "https://github.com/tatinacher",
    icon: (
      <Avatar
        src={"./github.png"}
        sx={{
          width: { md: 16, xs: 16 },
          height: { md: 16, xs: 16 },
          background: "#fff",
        }}
      />
    ),
  },
  {
    label: "Telegram",
    link: "https://t.me/tatinacher",
    icon: (
      <Avatar
        src={"./telegram.png"}
        sx={{
          width: { md: 16, xs: 16 },
          height: { md: 16, xs: 16 },
          background: "#fff",
        }}
      />
    ),
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/tatiana-cherednichenko-7b549b1a0/",
    icon: (
      <Avatar
        src={"./linkedin.png"}
        sx={{
          width: { md: 16, xs: 16 },
          height: { md: 16, xs: 16 },
          background: "#fff",
        }}
      />
    ),
  },
];

export const menu = [
  {
    name: "Home",
    id: "main",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Connect",
    id: "connect",
  },
];
