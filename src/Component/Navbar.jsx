import { motion, useScroll, useTransform } from "motion/react";
import { Link, useLocation } from "react-router"
import "../assets/styles/navbar.css"
import superHero from "/images/superhero.jpg"

const Navbar = () => {
    const location = useLocation();
    const { scrollYProgress } = useScroll()
    const navBgColor = useTransform(scrollYProgress, [0, .5, 1], ["","" ,'#111d32'])
    return <motion.nav style={{
        // backgroundColor: navBgColor
        background: location.pathname !== "/" ? "linear-gradient(#222c31, #111d32)" : navBgColor
    }}
    >

        <div className="logo"><Link to="/"><img src={superHero} alt="super man" /></Link></div>
        <div>
            <Link to="/challenges">Challenges</Link>
            {/*             <Link to="/movie">Movies list</Link> */}
        </div>
    </motion.nav>
}
export default Navbar
