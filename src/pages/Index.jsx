import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
const Index = () => {
    return <>
        <Navbar />
        <Outlet />
    </>
}
export default Index