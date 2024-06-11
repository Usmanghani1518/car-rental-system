import { Outlet } from "react-router-dom";
const App = () => {
	return (
		<>
			{/* <div className="text-2xl text-red-600">header</div> */}
			<Outlet />
			{/* <div className="text-2xl text-red-600">footer</div> */}
		</>
	);
};

export default App;
