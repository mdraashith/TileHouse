import React, { lazy, Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Box } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";

import "./App.css";
import Footer from "./components/Footer";


// =====================================================
// LAZY LOADING
// =====================================================

const Home = lazy(() =>
    import("./components/Home/Home")
);

const About = lazy(() =>
    import("./components/About/About")
);

const Skill = lazy(() =>
    import("./components/Skills/Skill")
);

const Project = lazy(() =>
    import("./components/Project/Project")
);

const Contact = lazy(() =>
    import("./components/Contact")
);


// =====================================================
// LOADING SCREEN
// =====================================================

function Loading() {
    return (
        <Box
            sx={{
                minHeight: "100vh",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                background: "#030510",

                color: "#fff",

                fontSize: "18px",

                fontWeight: 600,
            }}
        >
            Loading...
        </Box>
    );
}


// =====================================================
// APP
// =====================================================

function App() {

    return (
        <BrowserRouter>
            <ScrollToTop />

            <Nav />

            <Suspense fallback={<Loading />}>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                    <Route
                        path="/skills"
                        element={<Skill />}
                    />

                    <Route
                        path="/projects"
                        element={<Project />}
                    />

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />

                </Routes>

            </Suspense>
            <Footer />

        </BrowserRouter>
    );
}

export default App;