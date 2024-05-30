import { FC, useState } from "react";
import { InputFieldProp } from "../../../Types/UI";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export const Input: FC<InputFieldProp> = (prop) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const { type, placeholder, label, className, error } = prop;

	return (
		<>
			<label className="block font-semibold text-xs mb-2">{label}</label>
			<div className="relative w-80">
				<input
					type={showPassword ? "text" : type}
					className={`border border-[#E2E8F0] rounded-lg h-10 w-full pl-3 pr-10 ${className}`}
					placeholder={placeholder}
				/>
				{type === "password" && (
					<span
						onClick={() => setShowPassword(!showPassword)}
						className="absolute text-lg inset-y-0 right-0 flex items-center   pr-3 cursor-pointer">
						{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
					</span>
				)}
			</div>
			{error && <span className="text-red-500">{error}</span>}
		</>
	);
};
