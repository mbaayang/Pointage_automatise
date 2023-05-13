import { Navigate, Outlet } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import "./NIGHMODE.css"

function PageAdmin() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="bg-color-night" >
      <div className="mt-48" style={{ marginTop: "12rem" }}>
        <Outlet />
      </div>
      <Header />
    </div>
  );
}
export default PageAdmin;
