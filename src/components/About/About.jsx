import React from "react";

import {
    Box,
    Typography,
    Button,
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

                backgroundImage: "url('/img/aboutbg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",

                color: "#fff",

                px: {
                    xs: 2,
                    sm: 3,
                    md: 5,
                    lg: 7,
                },

                py: {
                    xs: 7,
                    sm: 8,
                    md: 10,
                },
            }}
        >
            {/* =====================================================
                ABOUT TOP SECTION
            ===================================================== */}

            <Box
                sx={{
                    maxWidth: "1200px",
                    mx: "auto",

                    display: "flex",

                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },

                    alignItems: "center",

                    gap: {
                        xs: 5,
                        md: 7,
                        lg: 9,
                    },
                }}
            >
                {/* ================= IMAGE ================= */}

                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "75%",
                            md: "42%",
                        },

                        display: "flex",
                        justifyContent: "center",

                        position: "relative",
                    }}
                >
                    {/* Glow */}

                    <Box
                        sx={{
                            position: "absolute",

                            width: {
                                xs: "260px",
                                sm: "330px",
                                md: "400px",
                            },

                            height: {
                                xs: "260px",
                                sm: "330px",
                                md: "400px",
                            },

                            borderRadius: "50%",

                            background:
                                "radial-gradient(circle, rgba(131,45,255,0.45), transparent 70%)",

                            filter: "blur(30px)",

                            zIndex: 0,
                        }}
                    />

                    {/* Image Container */}

                    <Box
                        sx={{
                            width: {
                                xs: "350px",
                                sm: "310px",
                                md: "360px",
                            },

                            height: {
                                xs: "400px",
                                sm: "370px",
                                md: "430px",
                            },

                            borderRadius: {
                                xs: "22px",
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

                                objectPosition: "center top",
                            }}
                        />
                    </Box>
                </Box>

                {/* ================= ABOUT CONTENT ================= */}

                <Box
                    sx={{
                        flex: 1,

                        width: "100%",
                    }}
                >
                    {/* Label */}

                    <Box
                        sx={{
                            display: "inline-flex",

                            alignItems: "center",

                            gap: 1,

                            px: 2,

                            py: 0.8,
                            mt:2,
                            mb: 2,

                            borderRadius: "30px",

                            border:
                                "1px solid rgba(173,70,255,0.7)",

                            background:
                                "rgba(110,45,255,0.08)",
                        }}
                    >
                        <PersonIcon
                            sx={{
                                fontSize: 18,
                                color: "#A73DFF",
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 16,
                                    sm: 13,
                                },

                                color: "#D9A7FF",

                                fontWeight: 600,
                            }}
                        >
                            About Me
                        </Typography>
                    </Box>

                    {/* Heading */}

                    <Typography
                        component="h1"
                        sx={{
                            fontSize: {
                                xs: "48px",
                                sm: "48px",
                                md: "54px",
                            },

                            fontWeight: 800,

                            lineHeight: 1.05,

                            letterSpacing: "-2px",

                            mb: 2,
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

                    {/* Description */}

                    <Typography
                        sx={{
                            maxWidth: "620px",

                            color: "#C7C9D8",
                            fontWeight: "bolder",
                            fontSize: {
                                xs: 17,
                                sm: 15,
                                md: 16,
                            },

                            lineHeight: 1.7,

                            mb: 4,
                        }}
                    >
                        I'm Mohamed Raashith, a passionate Frontend Developer who loves turning creative ideas into clean, modern, and engaging digital experiences. I enjoy building responsive web applications that not only look visually appealing but also feel smooth, intuitive, and easy to use across every device. With hands-on experience in HTML, CSS, JavaScript, React.js, and Material UI, I focus on creating interfaces that combine thoughtful design with well-structured code. I’m constantly exploring new technologies, improving my skills, and challenging myself through real-world projects, with the goal of growing into a skilled developer and creating web experiences that leave a lasting impression.
                    </Typography>

                    {/* ================= STATS ================= */}

                    <Box
                        sx={{
                            display: "grid",

                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(3, 1fr)",
                            },

                            gap: {
                                xs: 1.5,
                                sm: 2,
                            },
                        }}
                    >
                        {stats.map((stat) => (
                            <Box
                                key={stat.title}
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

                                    alignItems: "center",

                                    textAlign: "center",

                                    transition:
                                        "0.3s ease",

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
                                        },

                                        fontWeight: 700,
                                    }}
                                >
                                    {stat.number}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#AEB2C6",
                                        fontWeight: "bolder",
                                        fontSize: {
                                            xs: 16,
                                            sm: 12,
                                        },
                                    }}
                                >
                                    {stat.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* =====================================================
                JOURNEY + SKILLS
            ===================================================== */}

            <Box
                sx={{
                    maxWidth: "1200px",

                    mx: "auto",

                    mt: {
                        xs: 6,
                        md: 8,
                    },

                    p: {
                        xs: 2,
                        sm: 3,
                        md: 4,
                    },

                    borderRadius: {
                        xs: "20px",
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
                }}
            >
                {/* ================= JOURNEY ================= */}

                <Box>
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
                                height: 2,

                                background:
                                    "linear-gradient(90deg, #B52CFF, #5B73FF)",
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 25,
                                    md: 22,
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
                                xs: 20,
                                sm: 16,
                            },

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
                                xs: 20,
                                sm: 16,
                            },

                            lineHeight: 1.7,

                            mb: 3,
                        }}
                    >
                        Today, I’m focused on sharpening my skills, exploring new technologies, building meaningful projects, and taking the next step toward becoming a professional Frontend Developer.
                    </Typography>

                    {/* Resume Button */}

                    <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        sx={{
                            textTransform: "none",
                            fontSize: {
                                xs: 20,
                                sm: 12,
                            },
                            borderRadius: "10px",
                            height: {xs:"4rem",md:"2.5rem"},
                            px: 2.5,

                            py: 1.2,

                            fontWeight: 600,

                            background:
                                "linear-gradient(90deg, #A72CFF, #347DFF)",

                            "&:hover": {
                                background:
                                    "linear-gradient(90deg, #9320EA, #286EF0)",
                            },
                        }}
                    >
                        Download Resume
                    </Button>
                </Box>

                {/* ================= SKILLS ================= */}

                <Box
                    sx={{
                        p: {
                            xs: 2,
                            sm: 3,
                        },

                        borderRadius: "18px",

                        border:
                            "1px solid rgba(105,79,200,0.3)",

                        background:
                            "rgba(15,18,52,0.65)",
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
                                    xs: 45,
                                    md: 35,
                                },
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 26,
                                    md: 22,
                                },

                                fontWeight: 700,
                            }}
                        >
                            My Skills
                        </Typography>
                    </Box>

                    {skills.map((skill) => (
                        <Box
                            key={skill.name}
                            sx={{
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",

                                    justifyContent:
                                        "space-between",

                                    mb: 0.7,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#D8D9E3",

                                        fontSize: {
                                            xs: 18,
                                            sm: 14,
                                        },
                                    }}
                                >
                                    {skill.name}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#C7C9D8",

                                        fontSize: {
                                            xs: 16,
                                            sm: 13,
                                        },
                                    }}
                                >
                                    {skill.value}%
                                </Typography>
                            </Box>

                            <LinearProgress
                                variant="determinate"
                                value={skill.value}
                                sx={{
                                    height: 8.5,

                                    borderRadius: 10,

                                    backgroundColor:
                                        "rgba(255,255,255,0.1)",

                                    "& .MuiLinearProgress-bar":
                                    {
                                        borderRadius: 10,

                                        background:
                                            "linear-gradient(90deg, #A42CFF, #3B8CFF)",
                                    },
                                }}
                            />
                        </Box>
                    ))}
                </Box>

            </Box>
            <Education />
            <SkillsExpertise />
        </Box>
    );
}

export default About;