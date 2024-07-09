import { RouteObject } from "react-router-dom";
import Main from "@pages/Main";
import Post from "@/pages/Post";
import Notification from "@/pages/Post/notification";
import Member from "@/pages/Post/member";
import War from "@/pages/Post/war";
import Tip from "@/pages/Post/tip";

export const routerSetting: RouteObject = {
    children: [
        {
            path: "/",
            element: <Main />,
        },
        {
            path: "/post",
            element: <Post />,
        },
        {
            path: "/post/notification",
            element: <Notification />,
        },
        {
            path: "/post/member",
            element: <Member />,
        },
        {
            path: "/post/war",
            element: <War />,
        },
        {
            path: "/post/tip",
            element: <Tip />,
        },
    ],
};
