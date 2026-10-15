import React from "react";

import {
    Box,
    Typography,
    LinearProgress,
} from "@mui/material";

import Education from "./Education";
import SkillsExpertise from "./SkillsExpertise";

import PersonIcon from "@mui/icons-material/Person";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";
import LayersIcon from "@mui/icons-material/Layers";

import { motion } from "framer-motion";


// =====================================================
//                  ANIMATION VARIANTS
// =====================================================

const bottomToTop = {
    hidden: {
        opacity: 0,
        y: 60,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};


const staggerContainer = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};


// =====================================================
//                  ABOUT
// =====================================================

function About() {

    const stats = [
        {
            icon: <RocketLaunchIcon />,
            number: "6+",
            title: "Projects Completed",
        },

        {
            icon: <CalendarMonthIcon />,
            number: "2+",
            title: "Years of Learning",
        },

        {
            icon: <CodeIcon />,
            number: "100%",
            title: "Passion for Coding",
        },
    ];


    const skills = [
        {
            name: "React.js",
            value: 90,
        },

        {
            name: "JavaScript",
            value: 85,
        },

        {
            name: "HTML & CSS",
            value: 95,
        },

        {
            name: "Material UI",
            value: 80,
        },

        {
            name: "Git & GitHub",
            value: 85,
        },
    ];


    return (

        <Box
            id="about"

            sx={{
                width: "100%",

                minHeight: "100vh",

                backgroundImage:
                    "url('/img/aboutbg.png')",

                backgroundSize: "cover",

                backgroundPosition: "center",

                backgroundRepeat: "no-repeat",

                backgroundAttachment: {
                    xs: "scroll",
                    sm: "scroll",
                    md: "fixed",
                },

                color: "#fff",

                px: {
                    xs: 1.5,
                    sm: 2.5,
                    md: 5,
                    lg: 7,
                    xl: 9,
                },

                py: {
                    xs: 5,
                    sm: 6,
                    md: 8,
                    lg: 10,
                },

                boxSizing: "border-box",

                overflowX: "hidden",
            }}
        >

            {/* =====================================================
                            ABOUT TOP SECTION
            ===================================================== */}

            <Box
                sx={{
                    width: "100%",

                    maxWidth: "1200px",

                    mx: "auto",

                    display: "flex",

                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },

                    alignItems: {
                        xs: "stretch",
                        md: "center",
                    },

                    gap: {
                        xs: 4,
                        sm: 5,
                        md: 7,
                        lg: 9,
                    },

                    boxSizing: "border-box",
                }}
            >

                {/* =================================================
                                IMAGE
                ================================================= */}

                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "100%",
                            md: "42%",
                        },

                        display: "flex",

                        justifyContent: "center",

                        alignItems: "center",

                        position: "relative",

                        flexShrink: 0,

                        boxSizing: "border-box",
                    }}
                >

                    {/* ================= GLOW ================= */}

                    <Box
                        sx={{
                            position: "absolute",

                            width: {
                                xs: "240px",
                                sm: "300px",
                                md: "400px",
                            },

                            height: {
                                xs: "240px",
                                sm: "300px",
                                md: "400px",
                            },

                            maxWidth: "90vw",

                            maxHeight: "90vw",

                            borderRadius: "50%",

                            background:
                                "radial-gradient(circle, rgba(131,45,255,0.45), transparent 70%)",

                            filter: {
                                xs: "blur(20px)",
                                md: "blur(30px)",
                            },

                            zIndex: 0,

                            pointerEvents: "none",
                        }}
                    />


                    {/* ================= IMAGE CONTAINER ================= */}

                    <Box
                        sx={{
                            width: {
                                xs: "min(100%, 300px)",
                                sm: "310px",
                                md: "360px",
                            },

                            height: {
                                xs: "360px",
                                sm: "370px",
                                md: "430px",
                            },

                            mt: {
                                xs: 10,
                                md: 0,
                            },

                            maxWidth: "100%",

                            borderRadius: {
                                xs: "20px",
                                sm: "22px",
                                md: "28px",
                            },

                            position: "relative",

                            zIndex: 1,

                            overflow: "hidden",

                            border:
                                "1px solid rgba(151,70,255,0.8)",

                            background:
                                "linear-gradient(145deg, rgba(101,35,180,0.35), rgba(16,25,100,0.5))",

                            boxShadow:
                                "0 0 35px rgba(104,54,255,0.25)",

                            display: "flex",

                            justifyContent: "center",

                            alignItems: "flex-end",

                            boxSizing: "border-box",
                        }}
                    >

                        {/* ================= FLOATING IMAGE ================= */}

                        <motion.div
                            animate={{
                                y: [0, -10, 0, 10, 0],
                            }}

                            transition={{
                                duration: 4,

                                repeat: Infinity,

                                ease: "easeInOut",
                            }}

                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        >

                            <Box
                                component="img"

                                src="/img/Myppics.png"

                                alt="Mohamed Raashith"

                                sx={{
                                    width: "100%",

                                    height: "100%",

                                    objectFit: "cover",

                                    objectPosition:
                                        "center top",

                                    display: "block",
                                }}
                            />

                        </motion.div>

                    </Box>

                </Box>


                {/* =================================================
                            ABOUT CONTENT
                ================================================= */}

                <motion.div
                    variants={staggerContainer}

                    initial="hidden"

                    whileInView="visible"

                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}

                    style={{
                        flex: 1,
                        width: "100%",
                        minWidth: 0,
                    }}
                >

                    {/* ================= LABEL ================= */}

                    <motion.div
                        variants={bottomToTop}
                    >

                        <Box
                            sx={{
                                display: "inline-flex",

                                alignItems: "center",

                                gap: 1,

                                px: 2,

                                py: 0.8,

                                mt: {
                                    xs: 1,
                                    md: 6,
                                },

                                mb: 2,

                                borderRadius: "30px",

                                border:
                                    "1px solid rgba(173,70,255,0.7)",

                                background:
                                    "rgba(110,45,255,0.08)",

                                maxWidth: "100%",

                                boxSizing: "border-box",
                            }}
                        >

                            <PersonIcon
                                sx={{
                                    fontSize: {
                                        xs: 18,
                                        sm: 18,
                                    },

                                    color: "#A73DFF",

                                    flexShrink: 0,
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: 16,
                                        sm: 13,
                                        md: 14,
                                    },

                                    color: "#D9A7FF",

                                    fontWeight: 600,

                                    whiteSpace: "nowrap",
                                }}
                            >
                                About Me
                            </Typography>

                        </Box>

                    </motion.div>


                    {/* ================= HEADING ================= */}

                    <motion.div
                        variants={bottomToTop}
                    >

                        <Typography
                            component="h1"

                            sx={{
                                fontSize: {
                                    xs: "36px",
                                    sm: "42px",
                                    md: "54px",
                                    lg: "58px",
                                },

                                fontWeight: 800,

                                lineHeight: {
                                    xs: 1.1,
                                    sm: 1.05,
                                    md: 1.05,
                                },

                                letterSpacing: {
                                    xs: "-1px",
                                    sm: "-1.5px",
                                    md: "-2px",
                                },

                                mb: 2,

                                maxWidth: "100%",

                                wordBreak: "normal",
                            }}
                        >

                            Let me introduce

                            <Box
                                component="span"

                                sx={{
                                    display: "block",

                                    background:
                                        "linear-gradient(90deg, #B52CFF, #5B73FF)",

                                    WebkitBackgroundClip:
                                        "text",

                                    WebkitTextFillColor:
                                        "transparent",
                                }}
                            >
                                myself
                            </Box>

                        </Typography>

                    </motion.div>


                    {/* ================= DESCRIPTION ================= */}

                    <motion.div
                        variants={bottomToTop}
                    >

                        <Typography
                            sx={{
                                width: "100%",

                                maxWidth: "620px",

                                color: "#C7C9D8",

                                fontWeight: "bolder",

                                fontSize: {
                                    xs: 16,
                                    sm: 15,
                                    md: 16,
                                    lg: 17,
                                },

                                lineHeight: {
                                    xs: 1.7,
                                    sm: 1.7,
                                    md: 1.7,
                                },

                                mb: {
                                    xs: 3,
                                    md: 4,
                                },

                                wordBreak: "normal",
                            }}
                        >
                            I'm Mohamed Raashith, a passionate Frontend Developer who loves turning creative ideas into clean, modern, and engaging digital experiences. I enjoy building responsive web applications that not only look visually appealing but also feel smooth, intuitive, and easy to use across every device. With hands-on experience in HTML, CSS, JavaScript, React.js, and Material UI, I focus on creating interfaces that combine thoughtful design with well-structured code. I’m constantly exploring new technologies, improving my skills, and challenging myself through real-world projects, with the goal of growing into a skilled developer and creating web experiences that leave a lasting impression.
                        </Typography>

                    </motion.div>


                    {/* =================================================
                                STATS
                    ================================================= */}

                    <motion.div
                        variants={staggerContainer}

                        style={{
                            width: "100%",
                        }}
                    >

                        <Box
                            sx={{
                                display: "grid",

                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: "repeat(3, minmax(0, 1fr))",
                                },

                                gap: {
                                    xs: 1.5,
                                    sm: 2,
                                    md: 2.5,
                                },

                                width: "100%",
                            }}
                        >

                            {stats.map((stat) => (

                                <motion.div
                                    key={stat.title}

                                    variants={bottomToTop}
                                >

                                    <Box
                                        sx={{
                                            minHeight: {
                                                xs: 105,
                                                sm: 120,
                                            },

                                            p: {
                                                xs: 1.5,
                                                sm: 2,
                                            },

                                            borderRadius: "18px",

                                            border:
                                                "1px solid rgba(132,77,255,0.45)",

                                            background:
                                                "rgba(8,12,42,0.65)",

                                            display: "flex",

                                            flexDirection:
                                                "column",

                                            justifyContent:
                                                "center",

                                            alignItems:
                                                "center",

                                            textAlign: "center",

                                            transition:
                                                "0.3s ease",

                                            boxSizing:
                                                "border-box",

                                            minWidth: 0,

                                            "&:hover": {
                                                transform:
                                                    "translateY(-5px)",

                                                borderColor:
                                                    "#9D4DFF",

                                                boxShadow:
                                                    "0 0 25px rgba(132,60,255,0.2)",
                                            },
                                        }}
                                    >

                                        <Box
                                            sx={{
                                                color: "#A43DFF",

                                                display: "flex",

                                                mb: 0.5,
                                            }}
                                        >
                                            {stat.icon}
                                        </Box>


                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xs: 30,
                                                    sm: 28,
                                                    md: 30,
                                                },

                                                fontWeight: 700,

                                                lineHeight: 1,
                                            }}
                                        >
                                            {stat.number}
                                        </Typography>


                                        <Typography
                                            sx={{
                                                color: "#AEB2C6",

                                                fontWeight: "bolder",

                                                fontSize: {
                                                    xs: 17,
                                                    sm: 12,
                                                    md: 15,
                                                },

                                                mt: 0.5,

                                                whiteSpace:
                                                    "normal",
                                            }}
                                        >
                                            {stat.title}
                                        </Typography>

                                    </Box>

                                </motion.div>

                            ))}

                        </Box>

                    </motion.div>

                </motion.div>

            </Box>


            {/* =====================================================
                        JOURNEY + SKILLS
            ===================================================== */}

            <motion.div
                initial="hidden"

                whileInView="visible"

                viewport={{
                    once: true,
                    amount: 0.15,
                }}

                variants={staggerContainer}
            >

                <Box
                    sx={{
                        width: "100%",

                        maxWidth: "1200px",

                        mx: "auto",

                        mt: {
                            xs: 5,
                            sm: 6,
                            md: 8,
                        },

                        p: {
                            xs: 1.5,
                            sm: 3,
                            md: 4,
                        },

                        borderRadius: {
                            xs: "18px",
                            md: "24px",
                        },

                        border:
                            "1px solid rgba(104,77,190,0.35)",

                        background:
                            "rgba(5,8,30,0.55)",

                        display: "grid",

                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                        },

                        gap: {
                            xs: 4,
                            md: 6,
                        },

                        boxSizing: "border-box",

                        minWidth: 0,
                    }}
                >

                    {/* =================================================
                                JOURNEY
                    ================================================= */}

                    <motion.div
                        variants={bottomToTop}
                    >

                        <Box
                            sx={{
                                minWidth: 0,
                            }}
                        >

                            <Box
                                sx={{
                                    display: "flex",

                                    alignItems: "center",

                                    gap: 1.5,

                                    mb: 2,
                                }}
                            >

                                <Box
                                    sx={{
                                        width: 25,

                                        height: 3,

                                        flexShrink: 0,

                                        background:
                                            "linear-gradient(90deg, #B52CFF, #5B73FF)",
                                    }}
                                />

                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: 25,
                                            sm: 22,
                                            md: 26,
                                        },

                                        fontWeight: 700,
                                    }}
                                >
                                    My Journey
                                </Typography>

                            </Box>


                            <Typography
                                sx={{
                                    color: "#BFC2D1",

                                    fontSize: {
                                        xs: 16,
                                        sm: 15,
                                        md: 16,
                                    },

                                    fontWeight: 700,

                                    lineHeight: 1.7,

                                    mb: 2,
                                }}
                            >
                                My journey into web development started with a simple curiosity to understand how websites are built and how ideas can be transformed into something people can actually use. As I explored different technologies, I discovered my passion for Frontend Development and fell in love with creating modern, responsive, and interactive user interfaces. Along the way, I’ve worked on various real-world projects using HTML, CSS, JavaScript, React.js, and modern UI tools, continuously learning from every project and challenge.
                            </Typography>


                            <Typography
                                sx={{
                                    color: "#BFC2D1",

                                    fontSize: {
                                        xs: 16,
                                        sm: 15,
                                        md: 16,
                                    },

                                    fontWeight: 700,

                                    lineHeight: 1.7,

                                    mb: 3,
                                }}
                            >
                                Today, I’m focused on sharpening my skills, exploring new technologies, building meaningful projects, and taking the next step toward becoming a professional Frontend Developer.
                            </Typography>


                            {/* ================= RESUME ================= */}

                            <Box
                                component="a"

                                href="/resume.pdf"

                               download="resume.pdf"

                                sx={{
                                    textDecoration: "none",

                                    display: "inline-block",

                                    maxWidth: "100%",
                                }}
                            >

                                <Box
                                    component="button"

                                    sx={{
                                        display: "inline-flex",

                                        alignItems: "center",

                                        justifyContent:
                                            "center",

                                        gap: 1,

                                        width: {
                                            xs: "100%",
                                            sm: "auto",
                                        },

                                        minWidth: {
                                            sm: "170px",
                                        },

                                        height: {
                                            xs: "50px",
                                            sm: "48px",
                                        },

                                        px: {
                                            xs: 2,
                                            sm: 2.5,
                                        },

                                        border: "none",

                                        borderRadius: "10px",

                                        color: "#fff",

                                        fontFamily:
                                            "inherit",

                                        fontSize: {
                                            xs: 18,
                                            sm: 13,
                                            md: 16,
                                        },

                                        fontWeight: 600,

                                        cursor: "pointer",

                                        background:
                                            "linear-gradient(90deg, #A72CFF, #347DFF)",

                                        transition:
                                            "0.3s ease",

                                        "&:hover": {
                                            background:
                                                "linear-gradient(90deg, #9320EA, #286EF0)",

                                            transform:
                                                "translateY(-2px)",
                                        },
                                    }}
                                >

                                    <DownloadIcon
                                        sx={{
                                            fontSize: {
                                                xs: 23,
                                                sm: 21,
                                            },
                                        }}
                                    />

                                    Download Resume

                                </Box>

                            </Box>

                        </Box>

                    </motion.div>


                    {/* =================================================
                                SKILLS
                    ================================================= */}

                    <motion.div
                        variants={bottomToTop}
                    >

                        <Box
                            sx={{
                                p: {
                                    xs: 1.5,
                                    sm: 3,
                                },

                                borderRadius: "18px",

                                border:
                                    "1px solid rgba(105,79,200,0.3)",

                                background:
                                    "rgba(15,18,52,0.65)",

                                minWidth: 0,

                                boxSizing: "border-box",
                            }}
                        >

                            <Box
                                sx={{
                                    display: "flex",

                                    alignItems: "center",

                                    gap: 1.5,

                                    mb: 3,
                                }}
                            >

                                <LayersIcon
                                    sx={{
                                        color: "#A33DFF",

                                        fontSize: {
                                            xs: 37,
                                            sm: 35,
                                        },

                                        flexShrink: 0,
                                    }}
                                />

                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: 25,
                                            sm: 22,
                                            md: 22,
                                        },

                                        fontWeight: 700,
                                    }}
                                >
                                    My Skills
                                </Typography>

                            </Box>


                            {/* =================================================
                                        SKILL LIST
                            ================================================= */}

                            <motion.div
                                variants={staggerContainer}
                            >

                                {skills.map((skill) => (

                                    <motion.div
                                        key={skill.name}

                                        variants={bottomToTop}
                                    >

                                        <Box
                                            sx={{
                                                mb: 2,

                                                width: "100%",

                                                minWidth: 0,
                                            }}
                                        >

                                            <Box
                                                sx={{
                                                    display: "flex",

                                                    justifyContent:
                                                        "space-between",

                                                    alignItems:
                                                        "center",

                                                    gap: 1,

                                                    mb: 0.7,

                                                    minWidth: 0,
                                                }}
                                            >

                                                <Typography
                                                    sx={{
                                                        color:
                                                            "#D8D9E3",

                                                        fontWeight: 700,

                                                        fontSize: {
                                                            xs: 18,
                                                            sm: 14,
                                                            md: 16,
                                                        },

                                                        minWidth: 0,

                                                        overflow:
                                                            "hidden",

                                                        textOverflow:
                                                            "ellipsis",

                                                        whiteSpace:
                                                            "nowrap",
                                                    }}
                                                >
                                                    {skill.name}
                                                </Typography>


                                                <Typography
                                                    sx={{
                                                        color:
                                                            "#C7C9D8",

                                                        fontWeight: 700,

                                                        fontSize: {
                                                            xs: 18,
                                                            sm: 13,
                                                            md: 16,
                                                        },

                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    {skill.value}%
                                                </Typography>

                                            </Box>


                                            {/* =============================
                                                    PROGRESS BAR
                                            ============================== */}

                                            <Box
                                                sx={{
                                                    height: 8,

                                                    width: "100%",

                                                    borderRadius: 10,

                                                    backgroundColor:
                                                        "rgba(255,255,255,0.1)",

                                                    overflow: "hidden",
                                                }}
                                            >

                                                <motion.div
                                                    initial={{
                                                        width: 0,
                                                    }}

                                                    whileInView={{
                                                        width:
                                                            `${skill.value}%`,
                                                    }}

                                                    viewport={{
                                                        once: true,
                                                    }}

                                                    transition={{
                                                        duration: 1,

                                                        ease: "easeOut",
                                                    }}

                                                    style={{
                                                        height:
                                                            "100%",

                                                        borderRadius:
                                                            "10px",

                                                        background:
                                                            "linear-gradient(90deg, #A42CFF, #3B8CFF)",
                                                    }}
                                                />

                                            </Box>

                                        </Box>

                                    </motion.div>

                                ))}

                            </motion.div>

                        </Box>

                    </motion.div>

                </Box>

            </motion.div>


            {/* =====================================================
                            EDUCATION
            ===================================================== */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 60,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                }}

                viewport={{
                    once: true,
                    amount: 0.15,
                }}

                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
            >

                <Education />

            </motion.div>


            {/* =====================================================
                            SKILLS EXPERTISE
            ===================================================== */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 60,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                }}

                viewport={{
                    once: true,
                    amount: 0.15,
                }}

                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
            >

                <SkillsExpertise />

            </motion.div>

        </Box>
    );
}


export default About;