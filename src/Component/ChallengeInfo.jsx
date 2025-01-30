import { useState, useContext } from "react"
import { motion, AnimatePresence } from "motion/react";
import ChallengesContext from "./context/ChallengesContext";
import "../assets/styles/challengeInfo.css"

const ChallengeInfo = ({id, imgUrl, title, date, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const {hadleChallenges} =useContext(ChallengesContext);

    function handleClick() {
        setIsOpen(prevState => {
            return !prevState
        })
    }
    function changeStatus(type){
        hadleChallenges(id, type)
    }

    const btnStyle = {  padding: '.5rem', background: 'none', border:'none', cursor:'pointer' }
    return <motion.li className="challengeList"
        variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -20, opacity: 0 } }}
        initial="hidden"
        animate="visible"
    >
        <div>
            <div style={{ display: 'flex' }}>
                <img src={`/images/${imgUrl}.png`} width="80px" />
                <div className="list-data ">
                    <p>{title}</p>
                    <small >Complete Until {date}</small>
                </div>
            </div>
            <div>
                <button type="button" onClick={()=>changeStatus("failed")} style={{...btnStyle, color:'red'} }>Mark as faild</button>
                <button type="button" onClick={()=>changeStatus("completed")} style={{...btnStyle, color:'#2d96f7'} }>Mark as completed</button>
            </div>

        </div>
        <motion.button type="button" style={{...btnStyle,fontSize:'1.2rem', color:'#2d96f7',marginTop:'1rem'}}
            onClick={handleClick}
        >
            View Details
            <motion.span style={{display:'inline-block'}}
                initial={{
                    rotate: 0
                }}
                animate={{
                    rotate: isOpen ? 180 : 0
                }}
            >&#11205;</motion.span>
        </motion.button>
        <AnimatePresence>
            {isOpen && <motion.p
                variants={{ visible: { opacity: 1, y: 0, height: 'auto' }, hidden: { opacity: 0, y: -10, height: 0 } }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{color:'white', padding:'0 2rem'}}>
                {description}
            </motion.p>}
        </AnimatePresence>
    </motion.li>

}

export default ChallengeInfo