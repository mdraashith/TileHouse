import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  Weekend,
  BedOutlined,
  KitchenOutlined,
  BathtubOutlined,
  GridView,
  ParkOutlined,
} from "@mui/icons-material";

const categories = [
  { name: "All", icon: <GridView /> },
  { name: "Living Room", icon: <Weekend /> },
  { name: "Bedroom", icon: <BedOutlined /> },
  { name: "Kitchen", icon: <KitchenOutlined /> },
  { name: "Bathroom", icon: <BathtubOutlined /> },
  { name: "Tiles", icon: <GridView /> },
  { name: "Outdoor", icon: <ParkOutlined /> },
];

const gallery = [
  {
    name: "Living Room",
    image: "/img/livingroom.png",
    text: "Elegant tiles for modern living spaces",
  },
  {
    name: "Living Room",
    image: "/img/livingroom2.png",
    text: "Modern marble flooring and interiors",
  },
  {
    name: "Living Room",
    image: "/img/livingroom3.png",
    text: "Contemporary living room designs",
  },
  {
    name: "Living Room",
    image: "/img/livingroom4.png",
    text: "Premium surfaces for beautiful homes",
  },
  {
    name: "Kitchen",
    image: "/img/kitchen.png",
    text: "Stylish designs for contemporary kitchens",
  },
   {
    name: "Kitchen",
    image: "/img/kitchen2.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Kitchen",
    image: "/img/kitchen3.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Kitchen",
    image: "/img/kitchen4.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Bathroom",
    image: "/img/bathroom.png",
    text: "Premium sanitaryware for luxurious spaces",
  },
  {
    name: "Bathroom",
    image: "/img/bathroom2.png",
    text: "Premium sanitaryware for luxurious spaces",
  },
  {
    name: "Bathroom",
    image: "/img/bathroom3.png",
    text: "Premium sanitaryware for luxurious spaces",
  },
  {
    name: "Bathroom",
    image: "/img/bathroom4.png",
    text: "Premium sanitaryware for luxurious spaces",
  },
  {
    name: "Bedroom",
    image: "/img/bedroom.png",
    text: "Create cozy and elegant bedrooms",
  },
   {
    name: "Bedroom",
    image: "/img/bedroom2.png",
    text: "Create cozy and elegant bedrooms",
  },
   {
    name: "Bedroom",
    image: "/img/bedroom3.png",
    text: "Create cozy and elegant bedrooms",
  },
   {
    name: "Bedroom",
    image: "/img/bedroom4.png",
    text: "Create cozy and elegant bedrooms",
  },
  {
    name: "Tiles",
    image: "/img/stone.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Tiles",
    image: "/img/designertile.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Tiles",
    image: "/img/wooden.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Tiles",
    image: "/img/marbles.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Tiles",
    image: "/img/marbel.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Tiles",
    image: "/img/kitchenwall.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Tiles",
    image: "/img/walltitles2.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Tiles",
    image: "/img/walltitles3.png",
    text: "Stylish designs for contemporary kitchens",
  },
  {
    name: "Outdoor",
    image: "/img/outdoor.png",
    text: "Durable tiles for outdoor spaces",
  },
  {
    name: "Outdoor",
    image: "/img/outdoor2.png",
    text: "Durable tiles for outdoor spaces",
  },
  {
    name: "Outdoor",
    image: "/img/outdoor3.png",
    text: "Durable tiles for outdoor spaces",
  },
  {
    name: "Outdoor",
    image: "/img/outdoor4.png",
    text: "Durable tiles for outdoor spaces",
  },
];

const GalleryCollections = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? gallery
      : gallery.filter((item) => item.name === active);

  return (
    <Box
      sx={{
        background: "#F7F4EE",
        minHeight: "100vh",
        py: { xs: 3, md: 5 },
      }}
    >
      {/* CATEGORY BAR */}

      <Box
        sx={{
          maxWidth: 1450,
          mx: "auto",
          px: { xs: 2, md: 4 },
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            overflowX: "auto",
            pb: 1,

            "&::-webkit-scrollbar": {
              height: 0,
            },
          }}
        >
          {categories.map((item) => {
            const activeItem = active === item.name;

            return (
              <Box
                key={item.name}
                onClick={() => setActive(item.name)}
                sx={{
                  flexShrink: 0,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  gap: 1,

                  minWidth: {
                    xs: 105,
                    md: 125,
                  },

                  px: 2,
                  py: 1.2,

                  borderRadius: "50px",

                  cursor: "pointer",

                  background: activeItem
                    ? "#B77B32"
                    : "#FFFFFF",

                  color: activeItem
                    ? "#FFFFFF"
                    : "#303030",

                  border: activeItem
                    ? "1px solid #B77B32"
                    : "1px solid #E7E0D7",

                  boxShadow: activeItem
                    ? "0 6px 18px rgba(183,123,50,0.20)"
                    : "0 3px 12px rgba(0,0,0,0.04)",

                  transition: "all .3s ease",

                  "&:hover": {
                    transform: "translateY(-2px)",
                    background: activeItem
                      ? "#B77B32"
                      : "#F0E7DA",
                  },
                }}
              >
                {React.cloneElement(item.icon, {
                  sx: {
                    fontSize: 18,
                  },
                })}

                <Typography
                  sx={{
                    fontSize: {
                      xs: 11,
                      md: 12,
                    },
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* GALLERY */}

      <Box
        sx={{
          maxWidth: 1450,
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },

            gap: {
              xs: 1.5,
              md: 2,
            },
          }}
        >
          {filtered.map((item, index) => (
            <Box
              key={`${item.name}-${index}`}
              sx={{
                position: "relative",

                height: {
                  xs: 300,
                  sm: 300,
                  md: 320,
                },

                overflow: "hidden",

                borderRadius: "14px",

                background: "#ddd",

                cursor: "pointer",

                boxShadow:
                  "0 8px 25px rgba(0,0,0,0.08)",

                "&:hover img": {
                  transform: "scale(1.07)",
                },

                "&:hover .info": {
                  transform: "translateY(0)",
                },
              }}
            >
              {/* IMAGE */}

              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: "100%",

                  objectFit: "cover",

                  display: "block",

                  transition:
                    "transform .6s ease",
                }}
              />

              {/* GRADIENT */}

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,

                  background:
                    "linear-gradient(180deg, transparent 35%, rgba(0,0,0,.78) 100%)",
                }}
              />

              {/* INFO */}

              <Box
                className="info"
                sx={{
                  position: "absolute",

                  left: 0,
                  right: 0,
                  bottom: 0,

                  p: {
                    xs: 2,
                    md: 2.4,
                  },

                  color: "#fff",

                  transform: "translateY(5px)",

                  transition:
                    "transform .4s ease",
                }}
              >
                <Typography
                  sx={{
                    fontFamily:
                      "Georgia, serif",

                    fontSize: {
                      xs: 22,
                      md: 25,
                    },

                    lineHeight: 1.1,

                    mb: 0.6,
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,

                    color:
                      "rgba(255,255,255,.82)",

                    lineHeight: 1.5,

                    maxWidth: 260,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>

              {/* NUMBER */}

              <Typography
                sx={{
                  position: "absolute",

                  top: 14,
                  right: 16,

                  color:
                    "rgba(255,255,255,.85)",

                  fontSize: 11,

                  letterSpacing: 1.5,

                  background:
                    "rgba(0,0,0,.25)",

                  backdropFilter:
                    "blur(6px)",

                  px: 1.2,
                  py: 0.6,

                  borderRadius: "20px",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GalleryCollections;