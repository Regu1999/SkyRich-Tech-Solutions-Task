import "../assets/styles/welcome.css"
import buildingImg from "../assets/images/buiding.jpg"
import heroImg from "../assets/images/hero.png"
import Button from "../Component/UI/Button";
import Info from "../Component/UI/Info";
import { motion, useScroll, useTransform } from "motion/react";
import Card from "../Component/UI/Card";
import { FaSearchengin } from "react-icons/fa";
import { TbMailbox } from "react-icons/tb";
import { GiTrophy } from "react-icons/gi";

const Welcome = () => {
    const { scrollY } = useScroll();
    const cityY = useTransform(scrollY, [0, 50, 100], [1, 20, 30])
    const cityOpacity = useTransform(scrollY, [0, 150, 200, 250], [1, 0.5, 0.5, 0]);
    const heroY = useTransform(scrollY, [0, 100, 200], [1, 50, 100]);
    const heroOpacity = useTransform(scrollY, [0, 200, 250, 300], [1, 0.5, 0.5, 0])
    const gettingStartedScal = useTransform(scrollY, [0, 200], [1, 1.2]);
    const gettingStartedY = useTransform(scrollY, [0, 100, 200], [1, 25, 50]);

    return <>
        <motion.main className="main-banner">
            <motion.img src={buildingImg} alt="Building"
                style={{
                    opacity: cityOpacity,
                    y: cityY
                }}
                className="banner-img" />
            <motion.img src={heroImg} alt="Building" className="hero-img"
                initial={{
                    left: "50%",
                    x: "-80%",
                    opacity: 0,
                    y: '-50px',
                }}
                animate={{
                    left: "50%",
                    x: "-80%",
                    opacity: 1,
                    y: '0',
                }}
                transition={{ duration: 1 }}
                style={{
                    position: "absolute",
                    y: heroY,
                    opacity: heroOpacity
                }}
            />
            <motion.div
                style={{
                    y: gettingStartedY,
                    scale: gettingStartedScal
                }}
            >
                <h1>Maximize Your Productivity</h1>
                <div className="text-center text-1xl">
                    <Button>GET STARTED</Button>
                </div>
            </motion.div>

        </motion.main>

        <div className="info-section">
            <Info title="WHO WE ARE">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae perferendis
                facere aperiam sapiente culpa fugiat illo, dignissimos dolores esse laborum
                nostrum ipsa rem! Similique ea suscipit maiores a accusamus voluptatum!
            </Info>
            <Info title="Our way to success">

                <div style={{ display: 'flex', gap: '2rem', flexWrap: "wrap", justifyContent: 'center' }}>
                    <Card>
                        <FaSearchengin className="info-section-icon" />
                        <h4>Expert Consulting</h4>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae perferendis
                        facere aperiam sapiente culpa fugiat illo, dignissimos dolores esse laborum
                        nostrum ipsa rem!
                    </Card>
                    <Card>
                        <TbMailbox className="info-section-icon" />
                        <h4>Development</h4>

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae perferendis
                        facere aperiam sapiente culpa fugiat illo, dignissimos dolores esse laborum
                        nostrum ipsa rem!
                    </Card>
                    <Card>
                        <GiTrophy className="info-section-icon" />
                        <h4>Transformation</h4>

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae perferendis
                        facere aperiam sapiente culpa fugiat illo, dignissimos dolores esse laborum
                        nostrum ipsa rem!
                    </Card>
                </div>
            </Info>
        </div>
    </>
}

export default Welcome