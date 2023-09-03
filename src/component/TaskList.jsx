import React from "react"


export default function TaskList(prop){
    const [isChecked, setIsChecked] = React.useState(false)

    function handelcheck(){
        setIsChecked(!isChecked)
    }
    return(
        <div className={isChecked ? "task-item checked" : "task-item"}>
            <input type="checkbox" className="checkbox-input" checked={isChecked} onChange={handelcheck} />
            <span className="task-text">{prop.item}</span><br />
        </div>

    )
}