import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="sign-up" element={<SignUp />} />
			<Route path="login" element={<Login />} />
		</Route>
	)
);
