import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ActivityLog from "../pages/ActivityLog";
import DisplayError from "../pages/DisplayError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <ActivityLog />
            }
        ]
    }
])