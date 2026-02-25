import { lazy } from "react";

const LazyLanding = lazy(() => import("../Pages/LandingPage.tsx"));
const LazyLogin = lazy(() => import("../Pages/Login.tsx"));
const LazyRegister = lazy(() => import("../Pages/Register.tsx"));

export { LazyLanding, LazyLogin, LazyRegister };
