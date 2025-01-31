import { useState } from "react";
import { useLocation, Outlet } from "react-router";
import { motion, AnimatePresence } from "motion/react"

import Button from "../Component/UI/Button";
import Tab from "../Component/Tab";
import Model from "../Component/UI/Model"
import AddNewChallenge from "../Component/NewChallenge";
import AddChallengeContext from "../Component/context/AddChallengeContext";
import Navbar from "../Component/Navbar";
import "../assets/styles/challenges.css"
import { generateId } from "../utlity/generateRandomId"
import ChallengesContext from "../Component/context/ChallengesContext";
import { challengeFilter } from "../utlity/challengesFilter";

const Challenges = () => {
    const location = useLocation();
    const [isShowModel, setIsShowModel] = useState(false);
    const [challenges, setChallenges] = useState([]);
    const activeChallenge = challengeFilter(challenges, 'active')
    const completedChallenge = challengeFilter(challenges, 'completed')
    const faildChallenge = challengeFilter(challenges, 'failed')
    function addChallenge(data) {
        data.status = "active";
        data.id = generateId()

        setChallenges((prevState) => {
            return [...prevState, data]
        })
    }

    function handleChallangeStatus(id, newStatus) {
        setChallenges((prevstate) =>
            prevstate.map((challenge) =>
                challenge.id === id
                    ? { ...challenge, status: newStatus }
                    : challenge
            )
        );

    }
    function handleAddChallengeModel() {
        setIsShowModel(true)
    }

    return <>
        <Navbar />
        <AddChallengeContext.Provider value={{ showModel: setIsShowModel, addChallenge }}>
            <AnimatePresence>
                {isShowModel && <Model title="New Challenge"><AddNewChallenge /></Model>}
            </AnimatePresence>
        </AddChallengeContext.Provider>

        <div className="challenges">
            <div>
                <div className="challenges-header">
                    <h1>Your Challenges</h1>
                    <Button role="button" handleClick={handleAddChallengeModel}>
                        Add challenges
                    </Button>
                </div>
                <ChallengesContext.Provider value={{ challenges, hadleChallenges: handleChallangeStatus }}>
                    <motion.div className="challenges-list-card">
                        <motion.div className="challenges-tabs">
                            <Tab path="" count={activeChallenge.length} isActive={location.pathname === "/challenges"}>Active</Tab>
                            <Tab path='completed' count={completedChallenge.length} isActive={location.pathname === "/challenges/completed"}>Completed</Tab>
                            <Tab path='failed' count={faildChallenge.length} isActive={location.pathname === "/challenges/failed"}>Failed</Tab>
                        </motion.div>
                        <Outlet />

                    </motion.div>
                </ChallengesContext.Provider>
            </div>
        </div>
    </>

}

export default Challenges