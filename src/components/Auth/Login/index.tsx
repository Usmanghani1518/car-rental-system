import SideImage from "@/assets/Login.png";
import logoLight from "@/assets/Log-light.png";
import logoDark from "@/assets/Logo-dark.png";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import gLogo from "@/assets/google-icon.svg";
import appleLogo from "@/assets/apple-icon.svg";
import fbLogo from "@/assets/fb-icon.svg";

export const LoginComp = () => {
	return (
		<>
			<div className="flex min-h-screen">
				<div className="relative w-1/2 ">
					<img
						className="absolute inset-0 w-full h-full object-cover"
						src={SideImage}
						alt=""
					/>
					<div className=" absolute inset-0 bg-[#34A1F4] opacity-55"></div>
					<div className="absolute inset-0 flex items-center justify-center ">
						<img src={logoLight} alt="" />
					</div>
				</div>

				<div className="w-1/2 flex flex-col items-center justify-center my-10">
					<div className=" flex items-center justify-center ">
						<img src={logoDark} className="" alt="" />
					</div>
					<h1 className="text-center text-2xl font-bold mt-6">
						Sign In to your Account
					</h1>
					<p className="text-center">Welcome! please enter your detail</p>
					<form action="" className="mt-4">
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
						<div className="flex justify-between items-center my-2">
							<div className="">
								<input type="checkbox" className="size-4 mt-2" />
								<span className="text-sm ml-3  item-center">Remember me</span>
							</div>
							<div className="text-[#3563E9] font-semibold">
								Forgot Password?
							</div>
						</div>
						<Button
							label="Sign In"
							loading
							width=""
							font="semibold"
							color="blue"
							className="bg-[#3563E9]"
						/>
						Dont have an Account? {/* <Link to="/signup">Sign Up</Link> */}
						<Button
							label="Sign in with Google"
							loading
							width=""
							className="mt-2 !text-black font-normal bg-[#f3f4f6]"
							color=""
							font="normal"
							icon={gLogo}
						/>
						<Button
							label="Sign in with Facebook"
							loading
							width=""
							font="normal"
							className="mt-2 !text-black font-normal bg-[#f3f4f6]"
							color=""
							icon={fbLogo}
						/>
						<Button
							label="Sign in with Apple "
							loading
							width=""
							font="normal"
							className="mt-2 !text-black font-normal bg-[#f3f4f6]"
							color=""
							icon={appleLogo}
						/>
					</form>
				</div>
			</div>
		</>
	);
};
