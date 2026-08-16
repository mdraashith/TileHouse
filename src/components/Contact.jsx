import React, { useState } from "react";

import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleOutlinedIcon
    from "@mui/icons-material/AccountCircleOutlined";

import EmailOutlinedIcon
    from "@mui/icons-material/EmailOutlined";

import LocalOfferOutlinedIcon
    from "@mui/icons-material/LocalOfferOutlined";

import MessageOutlinedIcon
    from "@mui/icons-material/MessageOutlined";

import ContentCopyIcon
    from "@mui/icons-material/ContentCopy";

import GitHubIcon
    from "@mui/icons-material/GitHub";

import LinkedInIcon
    from "@mui/icons-material/LinkedIn";

import InstagramIcon
    from "@mui/icons-material/Instagram";

import WhatsAppIcon
    from "@mui/icons-material/WhatsApp";

import SendIcon
    from "@mui/icons-material/Send";

import LocationOnOutlinedIcon
    from "@mui/icons-material/LocationOnOutlined";

import PhoneOutlinedIcon
    from "@mui/icons-material/PhoneOutlined";


function Contact() {

    /* =====================================================
       FORM STATES
    ===================================================== */

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    /* =====================================================
       COPY TEXT
    ===================================================== */

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };


    /* =====================================================
       SEND MESSAGE TO WHATSAPP
    ===================================================== */

    const sendToWhatsApp = () => {

        /* Validation */

        if (!name.trim()) {
            alert("Please enter your name.");
            return;
        }

        if (!email.trim()) {
            alert("Please enter your email.");
            return;
        }

        if (!subject.trim()) {
            alert("Please enter the subject.");
            return;
        }

        if (!message.trim()) {
            alert("Please enter your message.");
            return;
        }


        /* Your WhatsApp Number */

        const whatsappNumber =
            "919597212376";


        /* WhatsApp Message */

        const whatsappMessage = `
Hello Mohamed Raashith 👋

I would like to contact you regarding your portfolio.

👤 Name:
${name}

📧 Email:
${email}

📌 Subject:
${subject}

💬 Message:
${message}

Thank you.
        `;


        /* WhatsApp URL */

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
            )}`;


        /* Open WhatsApp */

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );
    };


    /* =====================================================
       CONTACT ITEM
    ===================================================== */

    const ContactItem = ({
        icon,
        title,
        value,
        href,
    }) => {

        return (
            <Box
                sx={{
                    display: "flex",

                    alignItems: "center",

                    gap: {
                        xs: 1,
                        sm: 1.2,
                    },
                    py: 1.3,

                    borderBottom:
                        "1px solid rgba(120,100,180,0.15)",
                }}
            >

                {/* ICON */}

                <Box
                    sx={{
                        width: {
                            xs: 45,
                            sm: 46,
                        },

                        height: {
                            xs: 45,
                            sm: 46,
                        },

                        flexShrink: 0,

                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",

                        borderRadius: "10px",

                        color: "#C14CFF",

                        background:
                            "rgba(110,40,220,0.18)",

                        border:
                            "1px solid rgba(140,60,255,0.3)",
                    }}
                >
                    {icon}
                </Box>


                {/* CONTACT TEXT */}

                <Box
                    component={href ? "a" : "div"}

                    href={href || undefined}

                    target={
                        href &&
                            href.startsWith("http")
                            ? "_blank"
                            : undefined
                    }

                    rel={
                        href &&
                            href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                    }

                    sx={{
                        flex: 1,

                        minWidth: 0,

                        textDecoration:
                            "none",

                        cursor:
                            href
                                ? "pointer"
                                : "default",

                        "&:hover .contact-value":
                        {
                            color:
                                "#C35CFF",
                        },
                    }}
                >

                    {/* TITLE */}

                    <Typography
                        sx={{
                            color: "#fff",

                            fontSize: {
                                xs: 17,
                                sm: 13,
                                md: 14,
                            },

                            fontWeight: 600,

                            mb: 0.2,
                        }}
                    >
                        {title}
                    </Typography>


                    {/* VALUE */}

                    <Typography
                        className="contact-value"

                        sx={{
                            color: "#AEB3C4",

                            fontSize: {
                                xs: 14,
                                sm: 15,
                                md: 16,
                            },

                            fontWeight: 500,

                            lineHeight: 1.5,

                            transition:
                                "0.2s ease",

                            overflow: "hidden",

                            textOverflow:
                                "ellipsis",

                            whiteSpace:
                                "nowrap",
                        }}
                    >
                        {value}
                    </Typography>

                </Box>


                {/* COPY BUTTON */}

                <IconButton
                    onClick={() =>
                        copyText(value)
                    }

                    sx={{
                        color: "#C15CFF",

                        width: {
                            xs: 32,
                            sm: 36,
                        },

                        height: {
                            xs: 32,
                            sm: 36,
                        },

                        flexShrink: 0,

                        "&:hover": {
                            background:
                                "rgba(130,60,255,0.15)",
                        },
                    }}
                >
                    <ContentCopyIcon
                        sx={{
                            fontSize: 17,
                        }}
                    />
                </IconButton>

            </Box>
        );
    };


    /* =====================================================
       SOCIAL BUTTON
    ===================================================== */

    const SocialButton = ({
        icon,
        href,
        label,
    }) => {

        return (
            <IconButton
                component="a"

                href={href}

                target="_blank"

                rel="noopener noreferrer"

                aria-label={label}

                sx={{
                    width: {
                        xs: 48,
                        sm: 52,
                    },

                    height: {
                        xs: 48,
                        sm: 52,
                    },

                    color: "#fff",

                    borderRadius:
                        "10px",

                    border:
                        "1px solid rgba(110,100,190,0.4)",

                    background:
                        "rgba(15,20,50,0.7)",

                    transition:
                        "0.3s ease",

                    "&:hover": {
                        borderColor:
                            "#9A43FF",

                        color: "#fff",

                        transform:
                            "translateY(-4px)",

                        boxShadow:
                            "0 0 20px rgba(130,50,255,0.4)",
                    },
                }}
            >
                {icon}
            </IconButton>
        );
    };


    /* =====================================================
       CONTACT INPUT
    ===================================================== */

    const ContactInput = ({
        icon,
        placeholder,
        value,
        onChange,
    }) => {

        return (
            <Box
                sx={{
                    position:
                        "relative",

                    mb: 1.8,
                }}
            >

                {/* INPUT ICON */}

                <Box
                    sx={{
                        position:
                            "absolute",

                        left: 15,

                        top: "50%",

                        transform:
                            "translateY(-50%)",

                        color: "#DDE0EA",

                        zIndex: 2,

                        display: "flex",
                    }}
                >
                    {icon}
                </Box>


                {/* INPUT */}

                <TextField
                    fullWidth

                    placeholder={
                        placeholder
                    }

                    value={value}

                    onChange={onChange}

                    sx={{
                        "& .MuiOutlinedInput-root":
                        {
                            height: 62,

                            color: "#fff",

                            borderRadius:
                                "12px",

                            background:
                                "rgba(8,13,38,0.7)",

                            pl: 6,

                            "& fieldset": {
                                borderColor:
                                    "rgba(100,110,180,0.35)",
                            },

                            "&:hover fieldset":
                            {
                                borderColor:
                                    "#7D4CFF",
                            },

                            "&.Mui-focused fieldset":
                            {
                                borderColor:
                                    "#8A45FF",
                            },
                        },

                        "& input": {
                            color: "#fff",

                            fontSize: {
                                xs: 13,
                                sm: 14,
                                md: 15,
                            },

                            "&::placeholder":
                            {
                                color:
                                    "#9DA3B5",

                                opacity: 1,
                            },
                        },
                    }}
                />

            </Box>
        );
    };


    return (

        <Box
            id="contact"

            sx={{
                width: "100%",

                minHeight:
                    "100vh",

                color: "#fff",

                backgroundImage:
                    "url('/img/aboutbg.png')",

                backgroundSize:
                    "cover",

                backgroundPosition:
                    "center top",

                backgroundRepeat:
                    "no-repeat",

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

                overflow:
                    "hidden",
            }}
        >


            {/* =====================================================
                    HEADER
            ===================================================== */}

            <Box
                sx={{
                    maxWidth:
                        "800px",

                    mx: "auto",

                    textAlign:
                        "center",

                    mb: {
                        xs: 4,
                        md: 5,
                    },
                }}
            >

                {/* LABEL */}

                <Box
                    sx={{
                        display:
                            "inline-flex",

                        alignItems:
                            "center",

                        gap: 1,

                        px: 2,

                        py: 0.7,
                        mt: 5.5,
                        mb: 1.5,

                        borderRadius:
                            "20px",

                        border:
                            "1px solid rgba(166,70,255,0.6)",

                        background:
                            "rgba(70,30,130,0.18)",

                        color:
                            "#C98AFF",

                        fontSize: 14,

                        fontWeight: 600,

                        letterSpacing:
                            "1px",
                    }}
                >

                    <SendIcon
                        sx={{
                            fontSize: 15,
                        }}
                    />

                    LET'S CONNECT

                </Box>


                {/* TITLE */}

                <Typography
                    sx={{
                        fontSize: {
                            xs: 35,
                            sm: 45,
                            md: 55,
                        },

                        lineHeight: 1.1,

                        fontWeight: 800,

                        letterSpacing:
                            "-2px",
                    }}
                >

                    Get In Touch{" "}

                    <Box
                        component="span"

                        sx={{
                            background:
                                "linear-gradient(90deg,#C02CFF,#287EFF)",

                            WebkitBackgroundClip:
                                "text",

                            WebkitTextFillColor:
                                "transparent",
                        }}
                    >
                        With Me
                    </Box>

                </Typography>


                {/* LINE */}

                <Box
                    sx={{
                        width: 90,

                        height: 3.5,

                        mx: "auto",

                        mt: 2,

                        mb: 2,

                        borderRadius: 5,

                        background:
                            "linear-gradient(90deg,#C329FF,#238DFF)",

                        boxShadow:
                            "0 0 15px rgba(150,50,255,0.8)",
                    }}
                />


                {/* DESCRIPTION */}

                <Typography
                    sx={{
                        color: "#B8BDCE",

                        fontSize: {
                            xs: 15,
                            sm: 14,
                            md: 17,
                        },
                        fontWeight: 700,
                        lineHeight: 1.7,
                    }}
                >
                    Have a project in mind or looking
                    for a frontend developer?

                    <br />

                    Feel free to reach out.
                    I'd love to hear from you!
                </Typography>

            </Box>


            {/* =====================================================
                    MAIN CONTENT
            ===================================================== */}

            <Box
                sx={{
                    maxWidth:
                        "1180px",

                    mx: "auto",

                    display: "grid",

                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "0.85fr 1.15fr",
                    },

                    gap: {
                        xs: 2.5,
                        md: 2,
                    },
                }}
            >


                {/* =================================================
                        LEFT PROFILE CARD
                ================================================= */}

                <Box
                    sx={{
                        borderRadius:
                            "18px",

                        border:
                            "1px solid rgba(155,60,255,0.6)",

                        background:
                            "rgba(4,8,30,0.68)",

                        backdropFilter:
                            "blur(12px)",

                        p: {
                            xs: 2.5,
                            sm: 3,
                            md: 3.5,
                        },

                        boxShadow:
                            "0 0 35px rgba(80,40,180,0.12)",
                    }}
                >


                    {/* PROFILE */}

                    <Box
                        sx={{
                            textAlign:
                                "center",

                            pb: 2.5,

                            borderBottom:
                                "1px solid rgba(130,100,200,0.2)",
                        }}
                    >

                        {/* IMAGE */}

                        <Box
                            component="img"

                            src="/img/Myppics.png"

                            alt="Mohamed Raashith"

                            sx={{
                                width: {
                                    xs: 250,
                                    sm: 230,
                                    md: 280,
                                },

                                height: {
                                    xs: 250,
                                    sm: 230,
                                    md: 280,
                                },

                                objectFit:
                                    "contain",

                                borderRadius:
                                    "28px",

                                border:
                                    "2px solid #8B3DFF",

                                boxShadow:
                                    "0 0 35px rgba(140,50,255,0.5)",

                                transition:
                                    "0.3s ease",

                                "&:hover": {
                                    transform:
                                        "scale(1.03)",

                                    boxShadow:
                                        "0 0 45px rgba(140,50,255,0.7)",
                                },
                            }}
                        />


                        {/* NAME */}

                        <Typography
                            sx={{
                                mt: 1.5,

                                fontSize: {
                                    xs: 30,
                                    sm: 32,
                                    md: 34,
                                },

                                fontWeight: 700,

                                background:
                                    "linear-gradient(90deg,#C329FF,#4A8CFF)",

                                WebkitBackgroundClip:
                                    "text",

                                WebkitTextFillColor:
                                    "transparent",
                            }}
                        >
                            Mohamed Raashith
                        </Typography>


                        {/* ROLE */}

                        <Typography
                            sx={{
                                color:
                                    "#D0D3DF",

                                fontSize: {
                                    xs: 17,
                                    sm: 17,
                                    md: 18,
                                },
                                fontWeight: 700,
                                mt: 0.3,
                            }}
                        >
                            Frontend Developer
                        </Typography>


                        {/* STATUS */}

                        <Box
                            sx={{
                                display:
                                    "inline-flex",

                                alignItems:
                                    "center",

                                gap: 0.8,

                                mt: 1.2,

                                px: 1.5,

                                py: 0.6,

                                borderRadius:
                                    "20px",

                                border:
                                    "1px solid rgba(40,210,100,0.5)",

                                color:
                                    "#43E878",

                                background:
                                    "rgba(30,160,80,0.08)",

                                fontSize: 15,

                                fontWeight: 600,
                            }}
                        >

                            <Box
                                sx={{
                                    width: 7,

                                    height: 7,

                                    borderRadius:
                                        "50%",

                                    background:
                                        "#38E873",

                                    boxShadow:
                                        "0 0 8px #38E873",
                                }}
                            />

                            Open to Opportunities

                        </Box>

                    </Box>


                    {/* =================================================
                            CONTACT INFORMATION
                    ================================================= */}

                    <Typography
                        sx={{
                            mt: 2,

                            mb: 1.5,

                            color:
                                "#B94CFF",

                            fontSize: {
                                xs: 19,
                                sm: 18,
                            },

                            fontWeight: 700,
                        }}
                    >
                        Contact Information
                    </Typography>


                    {/* EMAIL */}

                    <ContactItem
                        icon={
                            <EmailOutlinedIcon
                                sx={{
                                    fontSize: 30,
                                }}
                            />
                        }

                        title="Email"

                        value=
                        "mdraashith653@gmail.com"

                        href=
                        "mailto:mdraashith653@gmail.com"
                    />


                    {/* PHONE */}

                    <ContactItem
                        icon={
                            <PhoneOutlinedIcon
                                sx={{
                                    fontSize: 30,
                                }}
                            />
                        }

                        title="Phone"

                        value=
                        "+91 95972 12376"

                        href=
                        "tel:+919597212376"
                    />


                    {/* LOCATION */}

                    <ContactItem
                        icon={
                            <LocationOnOutlinedIcon
                                sx={{
                                    fontSize: 30,
                                }}
                            />
                        }

                        title="Location"

                        value=
                        "Mayiladuthurai, Tamil Nadu"

                        href=
                        "https://www.google.com/maps/search/?api=1&query=Mayiladuthurai,Tamil+Nadu"
                    />


                    {/* =================================================
                            SOCIAL LINKS
                    ================================================= */}

                    <Typography
                        sx={{
                            mt: 2,

                            mb: 1.5,

                            color:
                                "#B94CFF",

                            fontSize: {
                                xs: 19,
                                sm: 18,
                            },

                            fontWeight: 700,
                        }}
                    >
                        Connect With Me
                    </Typography>


                    <Box
                        sx={{
                            display:
                                "flex",

                            gap: 1.2,

                            flexWrap:
                                "wrap",
                        }}
                    >

                        {/* GITHUB */}

                        <SocialButton
                            label="GitHub"

                            icon={
                                <GitHubIcon
                                    sx={{
                                        fontSize: 35,
                                    }}
                                />
                            }

                            href=
                            "https://github.com/"
                        />


                        {/* LINKEDIN */}

                        <SocialButton
                            label="LinkedIn"

                            icon={
                                <LinkedInIcon
                                    sx={{
                                        fontSize: 35,
                                    }}
                                />
                            }

                            href=
                            "https://www.linkedin.com/"
                        />


                        {/* INSTAGRAM */}

                        <SocialButton
                            label="Instagram"

                            icon={
                                <InstagramIcon
                                    sx={{
                                        fontSize: 35,
                                    }}
                                />
                            }

                            href=
                            "https://www.instagram.com/"
                        />


                        {/* WHATSAPP */}

                        <SocialButton
                            label="WhatsApp"

                            icon={
                                <WhatsAppIcon
                                    sx={{
                                        fontSize: 35,
                                    }}
                                />
                            }

                            href=
                            "https://wa.me/919597212376"
                        />

                    </Box>

                </Box>


                {/* =================================================
                        RIGHT MESSAGE FORM
                ================================================= */}

                <Box
                    sx={{
                        borderRadius:
                            "18px",

                        border:
                            "1px solid rgba(45,130,255,0.65)",

                        background:
                            "rgba(4,8,30,0.68)",

                        backdropFilter:
                            "blur(12px)",

                        p: {
                            xs: 2.5,
                            sm: 3,
                            md: 3.5,
                        },

                        boxShadow:
                            "0 0 35px rgba(40,80,220,0.12)",
                    }}
                >

                    <Typography
                        sx={{
                            fontSize: {
                                xs: 20,
                                sm: 27,
                            },

                            fontWeight: 700,

                            mb: 3,

                            background:
                                "linear-gradient(90deg,#C329FF,#4B8CFF)",

                            WebkitBackgroundClip:
                                "text",

                            WebkitTextFillColor:
                                "transparent",
                        }}
                    >
                        Send Me a Message
                    </Typography>


                    {/* NAME */}

                    <ContactInput
                        icon={
                            <AccountCircleOutlinedIcon
                                sx={{
                                    fontSize: 35,
                                }}
                            />
                        }

                        placeholder=
                        "Enter your name"

                        value={name}

                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />


                    {/* EMAIL */}

                    <ContactInput
                        icon={
                            <EmailOutlinedIcon
                                sx={{
                                    fontSize: 35,
                                }}
                            />
                        }

                        placeholder=
                        "Enter your email"

                        value={email}

                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />


                    {/* SUBJECT */}

                    <ContactInput
                        icon={
                            <LocalOfferOutlinedIcon
                                sx={{
                                    fontSize: 35,
                                }}
                            />
                        }

                        placeholder=
                        "What is this about?"

                        value={subject}

                        onChange={(e) =>
                            setSubject(e.target.value)
                        }
                    />


                    {/* =================================================
                            MESSAGE
                    ================================================= */}

                    <Box
                        sx={{
                            position:
                                "relative",

                            mb: 2,
                        }}
                    >




                        <TextField
                            fullWidth

                            multiline
                            rows={8}

                            placeholder=
                            "Tell me about your project..."

                            value={message}

                            onChange={(e) =>
                                setMessage(
                                    e.target.value.slice(
                                        0,
                                        500
                                    )
                                )
                            }

                            sx={{
                                "& .MuiOutlinedInput-root":
                                {
                                    color:
                                        "#fff",

                                    borderRadius:
                                        "12px",

                                    background:
                                        "rgba(8,13,38,0.7)",

                                    pl: 4,

                                    "& fieldset":
                                    {
                                        borderColor:
                                            "rgba(100,110,180,0.35)",
                                    },

                                    "&:hover fieldset":
                                    {
                                        borderColor:
                                            "#7D4CFF",
                                    },

                                    "&.Mui-focused fieldset":
                                    {
                                        borderColor:
                                            "#8A45FF",
                                    },
                                },

                                "& textarea":
                                {
                                    color:
                                        "#fff",

                                    fontSize:
                                    {
                                        xs: 13,
                                        sm: 14,
                                        md: 15,
                                    },
                                },

                                "& textarea::placeholder":
                                {
                                    color:
                                        "#9DA3B5",

                                    opacity: 1,
                                },
                            }}
                        />


                        {/* CHARACTER COUNT */}

                        <Typography
                            sx={{
                                position:
                                    "absolute",

                                right: 12,

                                bottom: 10,

                                color:
                                    "#8D92A6",

                                fontSize: 15,
                            }}
                        >
                            {message.length}/500
                        </Typography>

                    </Box>


                    {/* =================================================
                            SEND BUTTON
                    ================================================= */}

                    <Button
                        fullWidth

                        startIcon={
                            <WhatsAppIcon />
                        }

                        onClick={
                            sendToWhatsApp
                        }

                        sx={{
                            height: 60,

                            borderRadius: "9px",

                            color: "#fff",

                            fontSize: 20,

                            fontWeight: 600,

                            textTransform: "none",

                            background:
                                "linear-gradient(100deg,#A92CFF,#287EFF)",

                            boxShadow:
                                "0 8px 25px rgba(100,40,255,0.25)",

                            "& .MuiButton-startIcon": {
                                marginRight: "10px",

                                "& svg": {
                                    fontSize: "32px",
                                },
                            },

                            "&:hover": {
                                background:
                                    "linear-gradient(100deg,#B83CFF,#368CFF)",

                                transform:
                                    "translateY(-2px)",
                            },

                            transition:
                                "0.3s ease",
                        }}
                    >
                        Send Message
                    </Button>

                    {/* PRIVACY */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 0.5,
                            mt: 2,
                        }}
                    >
                        <LockOutlinedIcon
                            sx={{
                                fontSize: 15,
                                color: "#898FA5",
                            }}
                        />

                        <Typography
                            sx={{
                                textAlign: "center",
                                color: "#898FA5",
                                fontSize: 13,
                            }}
                        >
                            Your information is safe with me.
                            I'll never share it.
                        </Typography>
                    </Box>

                </Box>

            </Box>

        </Box>
    );
}


export default Contact;