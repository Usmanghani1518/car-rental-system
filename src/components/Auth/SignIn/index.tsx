import logoDark from "@/assets/Logo-dark.png";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import gLogo from "@/assets/google-icon.svg";
import appleLogo from "@/assets/apple-icon.svg";
import fbLogo from "@/assets/fb-icon.svg";
import { AuthImg } from "@/shared/ui/AuthImg";
import { Link } from "react-router-dom";

export const SignIn = () => {
	return (
		<>
			<div className="lg:flex min-h-screen">
				<AuthImg />

				<div className=" lg:w-1/2 flex flex-col items-center justify-center my-10">
					<div className=" flex justify-center  ">
						<img src={logoDark} className="" alt="" />
					</div>
					<h1 className="text-center text-2xl font-bold mt-4">
						Sign In to your Account
					</h1>
					<p className="text-center">Welcome! please enter your detail</p>
					<form className="mt-4 lg:w-[75%] max-lg:w-[60%] max-sm:w-[80%]">
						<Input
							label="Name"
							placeholder="Enter your Full Name"
							type="text"
							clasName=""
						/>
						<Input
							label="Phone"
							placeholder="Enter your phone number"
							type="text"
							clasName=""
						/>
						<Input
							label="Email"
							placeholder="Enter your email"
							type="text"
							clasName=""
						/>
						<Input
							label="Password"
							placeholder="Enter your password"
							type="password"
							clasName=""
						/>
						<Button
							label="Sign In"
							loading
							width=""
							font="semibold"
							color="blue"
							className="bg-[#3563E9]"
							type="submit"
						/>
						<p className="text-center">
							Already have an Account?
							<Link
								className="font-semibold text-blue-500 hover:underline"
								to="/login">
								Login
							</Link>
						</p>

						<p className="text-center text-blue-500 my-2">OR</p>
						<Button
							label="Sign in with Google"
							loading
							width=""
							className="mt-2 !text-black font-normal bg-[#f3f4f6]"
							color=""
							font="normal"
							icon={gLogo}
							type="button"
						/>
						<Button
							label="Sign in with Facebook"
							loading
							width=""
							font="normal"
							className="mt-2 !text-black font-normal bg-[#f3f4f6]"
							color=""
							icon={fbLogo}
							type="button"
						/>
						<Button
							label="Sign in with Apple "
							loading
							width=""
							font="normal"
							className="mt-2 !text-black font-normal bg-[#f3f4f6]"
							color=""
							icon={appleLogo}
							type="button"
						/>
					</form>
				</div>
			</div>
		</>
	);
};
