import logoDark from "@/assets/Logo-dark.png";
import { Input } from "@/shared/ui/Input/index.tsx";
import { Button } from "@/shared/ui/Button/index.tsx";
import { AuthImg } from "@/shared/ui/AuthImg";
import { useState } from "react";
import { Otp } from "@/components/Auth/Otp";

export const ForgotPassword = () => {
	const [otp, setOtp] = useState<boolean>(false);
	const continueEmail = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setOtp(true);
	};
	return (
		<>
			{otp ? (
				<Otp />
			) : (
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
							onSubmit={continueEmail}
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
			)}
		</>
	);
};
