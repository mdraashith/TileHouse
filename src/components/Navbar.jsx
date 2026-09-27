import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const navItems = [
  "Home",
  "About",
  "Tiles",
  "Sanitaryware",
  "Bath Fittings",
  "Gallery",
  "Contact",
];

const routes = {
  Home: "/",
  About: "/about",
  Tiles: "/tiles",
  Sanitaryware: "/sanitaryware",
  "Bath Fittings": "/bath-fittings",
  Gallery: "/gallery",
  Contact: "/contact",
};

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const active =
    location.pathname === "/"
      ? "Home"
      : navItems.find(
          (item) =>
            item !== "Home" &&
            location.pathname.startsWith(routes[item])
        ) || "Home";

  const handleClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom:
            "1px solid rgba(220, 220, 220, 0.6)",
          boxShadow:
            "0 4px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: "72px",
                md: "88px",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* LOGO */}
            <Box
              component={Link}
              to="/"
              onClick={handleClick}
              sx={{
                display: "block",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="/img/logo.png"
                alt="Tile House 360"
                sx={{
                  width: {
                    xs: "170px",
                    sm: "200px",
                    md: "235px",
                    lg: "250px",
                  },
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              />
            </Box>

            {/* DESKTOP NAV */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                gap: {
                  lg: 0.2,
                  xl: 0.8,
                },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  component={Link}
                  to={routes[item]}
                  onClick={handleClick}
                  sx={{
                    position: "relative",
                    minWidth: "auto",
                    px: {
                      lg: 1.2,
                      xl: 1.6,
                    },
                    py: 2.5,
                    color:
                      active === item
                        ? "#111111"
                        : "#3f3f3f",
                    fontFamily:
                      '"Poppins", sans-serif',
                    fontSize: {
                      lg: "13px",
                      xl: "13.5px",
                    },
                    fontWeight:
                      active === item
                        ? 600
                        : 500,
                    letterSpacing: "0.15px",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    transition:
                      "all 0.3s ease",
                    textDecoration: "none",

                    "&:hover": {
                      backgroundColor:
                        "transparent",
                      color: "#B88924",
                    },

                    /* GOLD UNDERLINE */
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "50%",
                      bottom: "12px",
                      width: "65%",
                      height: "3px",
                      borderRadius: "20px",
                      backgroundColor:
                        "#C89B3C",
                      transform:
                        active === item
                          ? "translateX(-50%) scaleX(1)"
                          : "translateX(-50%) scaleX(0)",
                      transition:
                        "transform 0.3s ease",
                    },

                    "&:hover::after": {
                      transform:
                        "translateX(-50%) scaleX(1)",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* ENQUIRY BUTTON */}
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={handleClick}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                flexShrink: 0,
                minWidth: {
                  md: "140px",
                  lg: "155px",
                },
                px: 2.5,
                py: 1.25,
                borderRadius: "30px",
                background:
                  "linear-gradient(135deg, #E4C568, #B88924)",
                color: "#111111",
                fontFamily:
                  '"Poppins", sans-serif',
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "none",
                boxShadow:
                  "0 4px 12px rgba(184, 137, 36, 0.18)",
                transition:
                  "all 0.3s ease",

                "&:hover": {
                  background:
                    "linear-gradient(135deg, #B88924, #E4C568)",
                  boxShadow:
                    "0 8px 20px rgba(184, 137, 36, 0.28)",
                  transform:
                    "translateY(-2px)",
                },

                "& .MuiButton-endIcon": {
                  transition:
                    "transform 0.3s ease",
                },

                "&:hover .MuiButton-endIcon": {
                  transform:
                    "translateX(4px)",
                },
              }}
            >
              Enquiry Now
            </Button>

            {/* MOBILE MENU */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  lg: "none",
                },
                width: "44px",
                height: "44px",
                color: "#111111",
                border:
                  "1px solid #dddddd",
                borderRadius: "10px",

                "&:hover": {
                  color: "#B88924",
                  borderColor:
                    "#C89B3C",
                  backgroundColor:
                    "#faf7ef",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: {
              xs: "82%",
              sm: "360px",
            },
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Box
          sx={{
            p: 2.5,
            height: "100%",
          }}
        >
          {/* CLOSE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              onClick={() =>
                setMobileOpen(false)
              }
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* MOBILE LOGO */}
          <Box
            component={Link}
            to="/"
            onClick={handleClick}
            sx={{
              display: "block",
            }}
          >
            <Box
              component="img"
              src="/img/logo.png"
              alt="Tile House 360"
              sx={{
                width: "210px",
                maxWidth: "100%",
                height: "auto",
                display: "block",
                mt: 1,
                mb: 3,
              }}
            />
          </Box>

          {/* GOLD LINE */}
          <Box
            sx={{
              width: "50px",
              height: "3px",
              backgroundColor: "#C89B3C",
              borderRadius: "20px",
              mb: 3,
            }}
          />

          {/* MOBILE MENU */}
          <List sx={{ p: 0 }}>
            {navItems.map((item) => (
              <ListItem
                key={item}
                disablePadding
                sx={{
                  mb: 0.5,
                }}
              >
                <ListItemButton
                  component={Link}
                  to={routes[item]}
                  onClick={handleClick}
                  sx={{
                    borderRadius: "10px",
                    py: 1.3,
                    px: 2,
                    color:
                      active === item
                        ? "#B88924"
                        : "#222222",
                    backgroundColor:
                      active === item
                        ? "#faf7ef"
                        : "transparent",
                    transition:
                      "all 0.3s ease",
                    textDecoration: "none",

                    "&:hover": {
                      backgroundColor:
                        "#faf7ef",
                      color: "#B88924",
                      transform:
                        "translateX(4px)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    slotProps={{
                      primary: {
                        sx: {
                          fontFamily:
                            '"Poppins", sans-serif',
                          fontSize: "15px",
                          fontWeight:
                            active === item
                              ? 600
                              : 500,
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* MOBILE ENQUIRY */}
          <Button
            component={Link}
            to="/contact"
            fullWidth
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={handleClick}
            sx={{
              mt: 3,
              py: 1.4,
              borderRadius: "30px",
              background:
                "linear-gradient(135deg, #E4C568, #B88924)",
              color: "#111111",
              fontFamily:
                '"Poppins", sans-serif',
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "none",
              boxShadow:
                "0 5px 15px rgba(184, 137, 36, 0.2)",

              "&:hover": {
                background:
                  "linear-gradient(135deg, #B88924, #E4C568)",
              },
            }}
          >
            Enquiry Now
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;