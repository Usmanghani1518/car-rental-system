import logoLight from "@/assets/Log-light.png";
import SideImage from "@/assets/Login.png";

export const AuthImg = () => {
	return (
		<>
			<div className="relative w-1/2 max-lg:hidden ">
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
		</>
	);
};
