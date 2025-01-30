import { motion, AnimatePresence, animate } from "motion/react"
import { useContext } from "react";

import ChallengeInfo from "../Component/ChallengeInfo";
import ChallengesContext from "../Component/context/ChallengesContext";
import FileNotFound from "../Component/UI/FileNotFound";
import { challengeFilter } from "../utlity/challengesFilter"
const ActiveChallenges = () => {
    const { challenges } = useContext(ChallengesContext);
    const activeChallenge = challengeFilter(challenges, "active")
    console.log(activeChallenge);

    return <>
        <AnimatePresence>
            <motion.ul >
                {activeChallenge.length === 0 && <FileNotFound />}
                {activeChallenge.length !== 0 && activeChallenge.map(data => (
                    <ChallengeInfo
                        key={data.id}
                        id={data.id}
                        imgUrl={data.actionImage}
                        title={data.Title}
                        date={data.Date}
                        description={data.Description}
                    />
                ))}
            </motion.ul>
        </AnimatePresence>
    </>
}
export default ActiveChallenges