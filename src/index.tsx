import React from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routerSetting } from "@/router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Gong Gothic";
        font-weight: lighter;
        src: url("./assets/font/Gong_Gothic_Light.ttf");
    }

    @font-face {
        font-family: "Gong Gothic";
        font-weight: normal;
        src: url("./assets/font/Gong_Gothic_Medium.ttf");
    }

    @font-face {
        font-family: "Gong Gothic";
        font-weight: bold;
        src: url("./assets/font/Gong_Gothic_Bold.ttf");
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        list-style: none;
        font-family: "Gong Gothic";
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: #FFCAD2;
    }

    #root > div {
        height: 100vh;
    }
`;

const router = createBrowserRouter([routerSetting]);
createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle />
        <RouterProvider router={router} />
    </React.StrictMode>
);
