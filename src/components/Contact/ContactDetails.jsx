import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

import {
  PhoneOutlined,
  EmailOutlined,
  LocationOnOutlined,
  LanguageOutlined,
  ArrowForward,
} from "@mui/icons-material";

const contactInfo = [
  {
    icon: <PhoneOutlined />,
    title: "Call Us",
    text: "+91 80-72006215",
  },
  {
    icon: <EmailOutlined />,
    title: "Email Us",
    text: "Tilehouse360@gmail.com",
  },
  {
    icon: <LanguageOutlined />,
    title: "Website",
    text: "www.Tilehouse360.com",
  },
  {
    icon: <LocationOnOutlined />,
    title: "Visit Our Showroom",
    text: (
      <>
        No. 1441, Kundrathur High Road,
        <br />
        Gerugambakkam, Chennai - 600128.
      </>
    ),
  },
];

const showroomDetails = [
  {
    icon: (
      <LocationOnOutlined
        sx={{
          color: "#C8892F",
          fontSize: 22,
        }}
      />
    ),
    text: (
      <>
        No. 1441, Kundrathur High Road,
        <br />
        Gerugambakkam, Chennai - 600128.
      </>
    ),
  },
  {
    icon: (
      <PhoneOutlined
        sx={{
          color: "#C8892F",
          fontSize: 22,
        }}
      />
    ),
    text: "+91 80-72006215",
  },
  {
    icon: (
      <EmailOutlined
        sx={{
          color: "#C8892F",
          fontSize: 22,
        }}
      />
    ),
    text: "Tilehouse360@gmail.com",
  },
  {
    icon: (
      <LanguageOutlined
        sx={{
          color: "#C8892F",
          fontSize: 22,
        }}
      />
    ),
    text: "www.Tilehouse360.com",
  },
];

const textFieldSx = {
  background: "#fff",
  borderRadius: 1,

  "& .MuiOutlinedInput-root": {
    borderRadius: 1,

    "& fieldset": {
      borderColor: "#E3DFD6",
    },

    "&:hover fieldset": {
      borderColor: "#C8892F",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#C8892F",
    },
  },
};

const ContactDetails = () => {
  const [enquiryType, setEnquiryType] = useState("");

  const openDirections = () => {
    const address =
      "No. 1441, Kundrathur High Road, Gerugambakkam, Chennai - 600128";

    const url =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(address);

    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        background: "#F8F5EF",
        overflow: "hidden",
      }}
    >
      {/* MAIN SECTION */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "42% 58%",
          },
        }}
      >
        {/* LEFT FORM */}
        <Box
          sx={{
            p: {
              xs: 2.5,
              sm: 4,
              md: 6,
            },
            background: "#F8F5EF",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.55),rgba(255,255,255,.55)),url('/img/marble.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{
              mb: 1.5,
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                color: "#B47735",
                fontSize: {
                  xs: 10,
                  sm: 12,
                },
                letterSpacing: {
                  xs: 2,
                  sm: 3,
                },
                fontWeight: 600,
              }}
            >
              SEND US A MESSAGE
            </Typography>

            <Box
              sx={{
                width: 40,
                height: "2px",
                background: "#B47735",
              }}
            />
          </Stack>

          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: {
                xs: 32,
                sm: 38,
                md: 42,
              },
              lineHeight: 1.15,
              color: "#171717",
            }}
          >
            We’d Love
            <br />
            to Hear{" "}
            <Box
              component="span"
              sx={{
                color: "#B47735",
                fontStyle: "italic",
              }}
            >
              From You
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              mb: 3,
              color: "#666",
              fontSize: {
                xs: 12,
                sm: 14,
              },
              lineHeight: 1.6,
            }}
          >
            Have questions about our products or need expert advice?
            <br />
            Fill out the form and our team will get back to you soon.
          </Typography>

          <Stack spacing={2}>
            {/* NAME + EMAIL */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },
                gap: 2,
              }}
            >
              <TextField
                size="small"
                placeholder="Your Name *"
                fullWidth
                sx={textFieldSx}
              />

              <TextField
                size="small"
                placeholder="Your Email *"
                fullWidth
                sx={textFieldSx}
              />
            </Box>

            <TextField
              size="small"
              placeholder="Phone Number *"
              fullWidth
              sx={textFieldSx}
            />

            <TextField
              select
              size="small"
              value={enquiryType}
              onChange={(e) =>
                setEnquiryType(e.target.value)
              }
              fullWidth
              SelectProps={{
                displayEmpty: true,
              }}
              sx={textFieldSx}
            >
              <MenuItem value="" disabled>
                Select Enquiry Type
              </MenuItem>

              <MenuItem value="tiles">
                Tiles
              </MenuItem>

              <MenuItem value="sanitaryware">
                Sanitaryware
              </MenuItem>

              <MenuItem value="bath-fittings">
                Bath Fittings
              </MenuItem>

              <MenuItem value="showroom">
                Showroom Visit
              </MenuItem>
            </TextField>

            <TextField
              multiline
              rows={4}
              placeholder="Your Message *"
              fullWidth
              sx={textFieldSx}
            />

            <Button
              fullWidth
              endIcon={<ArrowForward />}
              sx={{
                mt: 0.5,
                py: 1.4,
                background: "#C8892F",
                color: "#fff",
                borderRadius: 1,
                textTransform: "none",
                fontWeight: 600,
                fontSize: 15,

                "&:hover": {
                  background: "#A96D24",
                },
              }}
            >
              Send Message
            </Button>
          </Stack>
        </Box>

        {/* RIGHT SIDE */}
        <Box>
          {/* CONTACT INFO */}
          <Box
            sx={{
              background: "#151515",
              color: "#fff",

              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
            }}
          >
            {contactInfo.map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  p: {
                    xs: 2.5,
                    sm: 2.5,
                    md: 3,
                  },

                  minWidth: 0,

                  borderRight: {
                    xs: "none",
                    sm:
                      index % 2 === 0
                        ? "1px solid rgba(255,255,255,.15)"
                        : "none",
                    lg:
                      index !== 3
                        ? "1px solid rgba(255,255,255,.15)"
                        : "none",
                  },

                  borderBottom: {
                    xs:
                      index !== contactInfo.length - 1
                        ? "1px solid rgba(255,255,255,.15)"
                        : "none",
                    sm:
                      index < 2
                        ? "1px solid rgba(255,255,255,.15)"
                        : "none",
                    lg: "none",
                  },
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: {
                      xs: 38,
                      sm: 40,
                    },
                    height: {
                      xs: 38,
                      sm: 40,
                    },
                    border: "1px solid #C8892F",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#D99A35",
                    mb: 1.5,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: {
                      xs: 13,
                      sm: 14,
                    },
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#ccc",
                    fontSize: {
                      xs: 11,
                      sm: 12,
                    },
                    lineHeight: 1.5,
                    overflowWrap: "anywhere",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* SHOWROOM */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "44% 56%",
              },
              alignItems: "stretch",
              background: "#F8F5EF",
            }}
          >
            {/* SHOWROOM CONTENT */}
            <Box
              sx={{
                p: {
                  xs: 2.5,
                  sm: 3.5,
                  md: 4,
                },

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: {
                    xs: 29,
                    sm: 32,
                    md: 36,
                  },
                  color: "#171717",
                }}
              >
                Our Showroom
              </Typography>

              <Box
                sx={{
                  width: 45,
                  height: "2px",
                  background: "#B47735",
                  my: 2,
                }}
              />

              <Typography
                sx={{
                  color: "#666",
                  fontSize: {
                    xs: 12,
                    sm: 13,
                  },
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                Visit our spacious showroom to explore a wide
                range of tiles, bathware, sanitaryware, and
                interior solutions from leading brands.
                Experience our products in person and get
                expert guidance from our team.
              </Typography>

              <Stack
                spacing={1.5}
                sx={{
                  mb: 3,
                }}
              >
                {showroomDetails.map((row, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.2,
                    }}
                  >
                    <Box
                      sx={{
                        mt: "1px",
                        display: "flex",
                        flexShrink: 0,
                      }}
                    >
                      {row.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: 12,
                          sm: 13,
                        },
                        color: "#333",
                        lineHeight: 1.5,
                        overflowWrap: "anywhere",
                      }}
                    >
                      {row.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* GET DIRECTIONS */}
              <Button
                onClick={openDirections}
                endIcon={<ArrowForward />}
                variant="outlined"
                sx={{
                  alignSelf: "flex-start",
                  borderColor: "#C8892F",
                  color: "#B47735",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,

                  "&:hover": {
                    borderColor: "#A96D24",
                    background: "#fff",
                  },
                }}
              >
                Get Directions
              </Button>
            </Box>

            {/* SHOWROOM IMAGE */}
            <Box
              sx={{
                p: {
                  xs: 2,
                  sm: 2.5,
                  md: 2,
                },

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="/img/contactimg.png"
                alt="Tile House 360 Showroom"
                sx={{
                  width: "100%",

                  height: {
                    xs: 280,
                    sm: 330,
                    md: 390,
                  },

                  objectFit: "cover",
                  objectPosition: "center",

                  display: "block",

                  borderRadius: 2,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetails;