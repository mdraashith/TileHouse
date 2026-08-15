import React from 'react'
import {
    Box,
    Typography,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function HeroVisual() {
    return (
        <>


            {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

            <Box
                sx={{
                    position: {
                        xs: "relative",
                        md: "absolute",
                    },

                    right: {
                        xs: "auto",
                        md: "1%",
                        lg: "3%",
                    },

                    top: {
                        xs: "auto",
                        md: "88px",
                    },

                    width: {
                        xs: "100%",
                        sm: "100%",
                        md: "51%",
                        lg: "50%",
                    },

                    height: {
                        xs: "380px",
                        sm: "450px",
                        md: "calc(100% - 88px)",
                    },

                    mt: {
                        xs: 4,
                        sm: 5,
                        md: 0,
                    },
                    pt:"10rem",
                    zIndex: 4,

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "flex-end",

                    maxWidth: "100%",
                    overflow: "visible",
                }}
            >

                {/* ================= PERSON ================= */}

                <Box
                    component="img"
                    src="/img/Myppics.png"
                    alt="Mohamed Raashith"
                    sx={{
                        width: {
                            xs: "68%",
                            sm: "58%",
                            md: "70%",
                            lg: "72%",
                        },
                       
                        
                        maxWidth: {
                            xs: "280px",
                            sm: "360px",
                            md: "440px",
                        },

                        height: "auto",

                        objectFit: "contain",

                        position: "absolute",

                        bottom: 0,

                        zIndex: 2,

                        filter:
                            "drop-shadow(0 15px 35px rgba(0,0,0,0.45))",
                    }}
                />
                {/* ================= CODE ICON ================= */}

                <Box
                    sx={{
                        position: "absolute",
                        left: {
                            xs: "3%",
                            sm: "6%",
                            md: "8%",
                        },
                        top: {
                            xs: "4%",
                            sm: "6%",
                            md: "10%",
                        },
                        width: {
                            xs: 48,
                            sm: 62,
                            md: 80,
                        },
                        height: {
                            xs: 48,
                            sm: 62,
                            md: 80,
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border:
                            "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "16px",
                        background:
                            "rgba(8,10,28,0.65)",
                        backdropFilter: "blur(12px)",
                        zIndex: 5,
                        boxShadow:
                            "0 10px 30px rgba(0,0,0,0.25)",
                        flexShrink: 0,
                    }}
                >
                    <CodeIcon
                        sx={{
                            fontSize: {
                                xs: 35,
                                sm: 38,
                                md: 55,
                            },
                            color: "#239AFF",
                        }}
                    />
                </Box>
                {/* ================= 6+ PROJECTS ================= */}
                <Box
                    sx={{
                        position: "absolute",
                        right: {
                            xs: "2%",
                            sm: "3%",
                            md: "4%",
                        },
                        top: {
                            xs: "2%",
                            sm: "3%",
                            md: "3%",
                        },
                        width: {
                            xs: 100,
                            sm: 128,
                            md: 170,
                        },
                        p: {
                            xs: 1.2,
                            sm: 1.8,
                            md: 2.5,
                        },
                        border:
                            "1px solid rgba(255,255,255,0.2)",
                        borderRadius: {
                            xs: "12px",
                            md: "16px",
                        },
                        background:
                            "rgba(8,10,28,0.65)",
                        backdropFilter: "blur(12px)",
                        zIndex: 5,
                        boxSizing: "border-box",
                    }}
                >
                    <RocketLaunchIcon
                        sx={{
                            fontSize: {
                                xs: 35,
                                sm: 26,
                                md: 35,
                            },
                            color: "#00BFFF",
                            mb: { xs: 0.5, md: 1 },
                        }}
                    />

                    <Typography
                        sx={{
                            color: "#fff",
                            fontSize: {
                                xs: 25,
                                sm: 26,
                                md: 30,
                            },
                            fontWeight: 600,
                            lineHeight: 1,
                        }}
                    >
                        6+
                    </Typography>

                    <Typography
                        sx={{
                            color: "#D0D0D0",
                            fontSize: {
                                xs: 14,
                                sm: 14,
                                md: 16,
                            },
                            width: {
                                xs: "auto",
                                md: 155,
                            },
                            mt: { xs: 0.5, md: 1 },
                            lineHeight: 1.4,
                        }}
                    >
                        Projects Completed
                    </Typography>
                </Box>
                {/* ================= 2+ YEARS ================= */}

                <Box
                    sx={{
                        display: { xs: "none", sm: "block" },
                        position: "absolute",

                        right: {
                            sm: "3%",
                            md: "-3%",
                        },
                        top: {
                            sm: "35%",
                            md: "34%",
                        },
                        width: {
                            sm: 128,
                            md: 155,
                        },
                        p: {
                            sm: 1.8,
                            md: 2.5,
                        },
                        border:
                            "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "16px",
                        background:
                            "rgba(8,10,28,0.65)",
                        backdropFilter: "blur(12px)",
                        zIndex: 5,
                        boxSizing: "border-box",
                    }}
                >
                    <CodeIcon
                        sx={{
                            fontSize: { sm: 26, md: 35 },
                            color: "#00BFFF",
                            mb: 1,
                        }}
                    />
                    <Typography
                        sx={{
                            color: "#fff",
                            fontSize: {
                                sm: 18,
                                md: 30,
                            },
                            fontWeight: 600,
                            lineHeight: 1,
                        }}
                    >
                        2+
                    </Typography>

                    <Typography
                        sx={{
                            color: "#D0D0D0",
                            fontSize: {
                                sm: 10,
                                md: 16,
                            },
                            mt: 1,
                            width: {
                                sm: "auto",
                                md: 155,
                            },
                            lineHeight: 1.4,
                        }}
                    >
                        Years of Learning
                    </Typography>
                </Box>


                {/* =====================================================
              CODE EDITOR CARD
          ===================================================== */}

                <Box
                    sx={{
                        position: "absolute",
                        left: {
                            xs: "40%",
                            sm: "50%",
                            md: "8%",
                        },
                        transform: {
                            xs: "translateX(-50%)",
                            sm: "translateX(-50%)",
                            md: "none",
                        },
                        bottom: {
                            xs: "-1%",
                            sm: "-3%",
                            md: "1%",
                        },
                        width: {
                            xs: "70%",
                            sm: "82%",
                            md: "390px",
                            lg: "460px",
                        },
                        maxWidth: {
                            xs: "340px",
                            sm: "420px",
                            md: "390px",
                            lg: "460px",
                        },
                        minHeight: {
                            xs: 165,
                            sm: 210,
                            md: 255,
                        },
                        border:
                            "1px solid rgba(255,255,255,0.22)",
                        borderRadius: "18px",
                        background:
                            "rgba(8,10,28,0.85)",
                        backdropFilter: "blur(6px)",
                        boxShadow:
                            "0 20px 50px rgba(0,0,0,0.35)",
                        zIndex: 6,
                        overflow: "hidden",
                        boxSizing: "border-box",
                    }}
                >
                    {/* Window Header */}

                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,

                            px: 2,

                            py: 1.5,

                            borderBottom:
                                "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        <Box
                            sx={{
                                width: {
                                    xs: 12,
                                    md: 13,
                                },
                                height: {
                                    xs: 12,
                                    md: 13,
                                },
                                borderRadius: "50%",
                                background: "#C329FF",
                            }}
                        />

                        <Box
                            sx={{
                                width: {
                                    xs: 12,
                                    md: 13,
                                },
                                height: {
                                    xs: 12,
                                    md: 13,
                                },
                                borderRadius: "50%",
                                background: "#7D4CFF",
                            }}
                        />

                        <Box
                            sx={{
                                width: {
                                    xs: 12,
                                    md: 13,
                                },
                                height: {
                                    xs: 12,
                                    md: 13,
                                },
                                borderRadius: "50%",
                                background: "#287EFF",
                            }}
                        />
                    </Box>


                    {/* Code */}

                    <Box
                        sx={{
                            p: {
                                xs: 1.2,
                                sm: 1.8,
                                md: 2.5,
                            },

                            fontFamily:
                                "monospace",

                            fontSize: {
                                xs: 8.5,
                                sm: 10,
                                md: 13,
                                lg: 14,
                            },

                            lineHeight: 1.9,

                            whiteSpace: "nowrap",
                            overflowX: "auto",
                        }}
                    >

                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                                fontSize: {xs:"14px",md:"20px"},
                            }}
                        >
                            01&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#E05AFF" }}
                            >
                                const
                            </Box>{" "}
                            <Box
                                component="span"
                                sx={{ color: "#55D9FF" }}
                            >
                                developer
                            </Box>{" "}
                            = {"{"}
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                                fontSize: {xs:"14px",md:"20px"},
                            }}
                        >
                            02&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#fff" }}
                            >
                                Name:
                            </Box>{" "}
                            <Box
                                component="span"
                                sx={{ color: "#54E66D" }}
                            >
                                "Mohamed Raashith",
                            </Box>
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                               fontSize: {xs:"14px",md:"20px"},
                            }}
                        >
                            03&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#fff" }}
                            >
                                Role:
                            </Box>{" "}
                            <Box
                                component="span"
                                sx={{ color: "#54E66D" }}
                            >
                                "Frontend Developer",
                            </Box>
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                               fontSize: {xs:"14px",md:"20px"},
                            }}
                        >
                            04&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#fff" }}
                            >
                                Skills:
                            </Box>{" "}
                            <Box
                                component="span"
                                sx={{ color: "#54E66D" }}
                            >
                                ["Frontend", "React.js"]
                            </Box>
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                                fontSize: {xs:"14px",md:"20px"},
                            }}
                        >
                            05&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#fff" }}
                            >
                                passion:
                            </Box>{" "}
                            <Box
                                component="span"
                                sx={{ color: "#54E66D" }}
                            >
                                "Building amazing
                            </Box>
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                                fontSize: {xs:"14px",md:"20px"},
                            }}
                        >
                            06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#54E66D" }}
                            >
                                web experiences"
                            </Box>
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                                fontSize: {xs:"14px",md:"20px"},
                            }}
                        >
                            07&nbsp;&nbsp;{"};"}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default HeroVisual
