import { motion, AnimatePresence } from "motion/react"
import { useContext } from "react";

import ChallengeInfo from "../Component/ChallengeInfo";
import ChallengesContext from "../Component/context/ChallengesContext";
import { challengeFilter } from "../utlity/challengesFilter"
import FileNotFound from "../Component/UI/FileNotFound";

const CompletedChallenges = () => {
    const { challenges } = useContext(ChallengesContext);
    const activeChallenge = challengeFilter(challenges, "completed")
    console.log(activeChallenge);

    return <>
        <AnimatePresence>
            <motion.ul >
                {activeChallenge.length === 0 && <FileNotFound />}
                {activeChallenge.map(data => (
                    <ChallengeInfo
                        id={data.id}
                        key={data.id}
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
export default CompletedChallenges