import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import App from "@/App";
import SignUp from "@/pages/SignUp";
import Login from "@/pages/Login";
import { ForgotPassword } from "./components/Auth/ForgotPassword";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<SignUp />} />
			<Route path="login" element={<Login />} />
			<Route path="forgot" element={<ForgotPassword />} />
		</Route>
	)
);
