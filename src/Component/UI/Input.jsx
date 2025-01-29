const Input = ({ type, label }) => {
    const style = "block w-full border-2 p-2 mt-1 border-gray-200 rounded-md focus:outline-none focus:border-blue-300"
    return <div>
        <label htmlFor={label} className="text-md font-semibold">{label}</label>
        {type !== "textArea" && <input type={type} id={label} name={label} className={style} />}
        {type === "textArea" && <textarea className={style} id={label} name={label}></textarea>}
        
    </div>
}
export default Input