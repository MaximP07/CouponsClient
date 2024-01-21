import { ChangeEvent } from "react";
import { ActionType } from "../../Redux/action-type";
import { ICategory } from "../../Models/ICategory";


export interface IProps{
    string: ICategory[];
    onOptionSelected: Function;
}

function Dropdown(props:IProps){
    const OnOptionSelected = (event: ChangeEvent<HTMLSelectElement>) =>{
        props.onOptionSelected(event.target.value);
    };

    return(
        <div className="dropdown">
        
        </div>
    );
}
export default Dropdown;