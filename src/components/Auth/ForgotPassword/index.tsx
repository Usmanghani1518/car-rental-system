import logoDark from "@/assets/Logo-dark.png";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { AuthImg } from "@/shared/ui/AuthImg";

export const ForgotPassword = () => {
	return (
		<>
			<div className="lg:flex  min-h-screen">
				<AuthImg />
				<div className="lg:w-1/2 flex flex-col items-center justify-center my-10">
					<div className=" flex items-center justify-center ">
						<img src={logoDark} className="" alt="" />
					</div>
					<h1 className="text-center text-2xl font-bold mt-4">
						Forget your Account?
					</h1>
					<p className="text-center">Please enter your registered email</p>
					<form
						action=""
						className="mt-4 lg:w-[75%] max-lg:w-[60%] max-sm:w-[80%]">
						<Input
							label="Email"
							placeholder="Enter your email"
							type="text"
							clasName=""
						/>

						<Button
							label="Continue"
							loading
							width=""
							font="semibold"
							color="blue"
							className="bg-[#3563E9]"
							type="submit"
						/>
					</form>
				</div>
			</div>
		</>
	);
};
