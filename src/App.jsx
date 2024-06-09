import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="overflow-x-hidden h-screen">
      <Outlet />
    </div>
  );
}

export default App;
