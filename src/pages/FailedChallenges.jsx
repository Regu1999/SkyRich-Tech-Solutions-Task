import { motion, AnimatePresence, animate } from "motion/react"
import { useContext } from "react";

import ChallengeInfo from "../Component/ChallengeInfo";
import ChallengesContext from "../Component/context/ChallengesContext";
import { challengeFilter } from "../utlity/challengesFilter"
import FileNotFound from "../Component/UI/FileNotFound";
const FaildChallenges = () => {
    const { challenges } = useContext(ChallengesContext);
    const faildChallenge = challengeFilter(challenges, "failed")

    return <>
        <AnimatePresence>
            <motion.ul >
                {faildChallenge.length === 0 && <FileNotFound />}
                {faildChallenge.map(data => (
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
export default FaildChallenges