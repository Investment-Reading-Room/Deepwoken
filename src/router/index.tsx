import { RouteObject } from "react-router-dom";
import Main from "@pages/Main";

export const routerSetting: RouteObject = {
    children: [
        {
            path: '/',
            element: <Main />
        }
    ]
}