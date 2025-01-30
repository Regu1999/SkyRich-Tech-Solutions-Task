import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router";

import Button from "./UI/Button";
import AddChallengeContext from "./context/AddChallengeContext";
import "../assets/styles/newChallenge.css";

const actionImages = [
  "constructing", "cooking", "family-time", "playing-guitar",
  "romantic-walk", "working-on-computer", "working-out"
];

const AddNewChallenge = () => {
    const { showModel, addChallenge } = useContext(AddChallengeContext);
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm();

    function onSubmit(data) {
        addChallenge(data)
        navigate("/challenges");
        showModel(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="Title" className="text-md font-semibold">Title</label>
                <motion.input 
                    type="text" 
                    id="Title" 
                    name="Title"
                    className={`input-style ${errors.Title ? 'error-border' : ''}`}
                    {...register("Title", { required: "Title is required" })}
                    onBlur={() => trigger("Title")}
                    animate={errors.Title ? { x: [-5, 5, -5, 5, 0] } : {}}
                />
                {errors.Title && <p className="error-text">{errors.Title.message}</p>}
            </div>
            
            <div>
                <label htmlFor="Description" className="text-md font-semibold">Description</label>
                <motion.textarea
                    id="Description" 
                    name="Description" 
                    className={`input-style ${errors.Description ? 'error-border' : ''}`}
                    {...register("Description", { required: "Description is required" })}
                    onBlur={() => trigger("Description")}
                    animate={errors.Description ? { x: [-5, 5, -5, 5, 0] } : {}}
                />
                {errors.Description && <p className="error-text">{errors.Description.message}</p>}
            </div>
            
            <div>
                <label htmlFor="Date" className="text-md font-semibold">Date</label>
                <motion.input
                    type="date" 
                    id="Date" 
                    name="Date" 
                    className={`input-style ${errors.Date ? 'error-border' : ''}`}
                    {...register("Date", { required: "Date is required" })}
                    onBlur={() => trigger("Date")}
                    animate={errors.Date ? { x: [-5, 5, -5, 5, 0] } : {}}
                />
                {errors.Date && <p className="error-text">{errors.Date.message}</p>}
            </div>
            
            <motion.ul className="challenge-lists"
                variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
                {actionImages.map((actionImage) => (
                    <motion.li key={actionImage}
                        className="challenge-image"
                        whileTap={{ scale: 1.1 }}
                        variants={{
                            hidden: { scale: 0.5, opacity: 0 },
                            visible: { scale: 1, opacity: 1 }
                        }}
                    >
                        <input type="radio" name="actionImage" 
                            value={actionImage} 
                            {...register("actionImage", { required: "Please select an image" })} 
                            id={actionImage} 
                        />
                        <label htmlFor={actionImage}>
                            <img src={`/assets/images/${actionImage}.png`} 
                                alt={actionImage} />
                        </label>
                    </motion.li>
                ))}
            </motion.ul>
            {errors.actionImage && <p className="error-text">{errors.actionImage.message}</p>}
            
            <div style={{
                display:'flex',
                justifyContent:'end',
                gap:'2rem',
                marginTop:'1rem'
            }}>
                <button type="button"
                    style={{ padding:'0 1rem', border:'none' }}
                    onClick={() => showModel(false)}>Cancel
                </button>
                <Button role="button">Add Challenge</Button>
            </div>
        </form>
    );
};

export default AddNewChallenge;
