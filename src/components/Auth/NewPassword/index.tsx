import logoDark from "@/assets/Logo-dark.png";
import { Input } from "@/shared/ui/Input/index.tsx";
import { Button } from "@/shared/ui/Button/index.tsx";
import { AuthImg } from "@/shared/ui/AuthImg";
import { useNavigate } from "react-router-dom";

export const ResetNewPassword = () => {
	const navigate = useNavigate();
	const submitForm = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		navigate("/login");
	};
	return (
		<>
			<div className="lg:flex  min-h-screen">
				<AuthImg />
				<div className="lg:w-1/2 flex flex-col items-center justify-center my-10">
					<div className=" flex items-center justify-center ">
						<img src={logoDark} className="" alt="" />
					</div>
					<h1 className="text-center text-2xl font-bold mt-4">
						Create New Password
					</h1>
					<p className="text-center">
						Please Enter your Password and Confirm Password
					</p>
					<form
						action=""
						onSubmit={submitForm}
						className="mt-4 lg:w-[75%] max-lg:w-[60%] max-sm:w-[80%]">
						<Input
							label="Password"
							placeholder="Enter your password"
							type="password"
							clasName=""
						/>
						<Input
							label="Password"
							placeholder="Enter your confirm password"
							type="password"
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
