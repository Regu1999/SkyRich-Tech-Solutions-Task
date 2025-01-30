import { motion } from "motion/react";
import { Link, useLocation } from "react-router"
import "../assets/styles/navbar.css"
import superHero from "/images/superhero.jpg"

const Navbar = () => {
const location=useLocation();
console.log(location.pathname);

if (location.pathname!=="/") {
    console.log("hi");
    
}
    return <motion.nav style={{
        background:location.pathname!=="/"?"linear-gradient(#222c31, #111d32)":''
    }}>

        <div className="logo"><Link to="/"><img src={superHero} alt="super man" /></Link></div>
        <div>
            <Link to="/challenges">Challenges</Link>
            <Link to="/movie">Movies list</Link>
        </div>
    </motion.nav>
}
export default Navbar