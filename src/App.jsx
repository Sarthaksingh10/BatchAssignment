import { Outlet } from "react-router-dom";
import TopNavbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden h-screen">
      <TopNavbar />
      <Outlet />
    </div>
  );
}

export default App;
