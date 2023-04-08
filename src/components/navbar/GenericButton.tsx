import { ReactElement, useState } from "react";
import { To, useNavigate } from "react-router-dom";

function useNavButton(reroute_to: To): [Object, boolean]
{
    const navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    }

    const handleMouseOut = () => {
        setIsHovered(false);
    }

    const handleClick = () => {
        navigate(reroute_to);
    }

    const buttonProps = {
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseOut,
        onClick: handleClick,
        className: 'button'
    };

    return [buttonProps, isHovered]; 
}

function GenericButton(button_text: String, button_route: To, mobile_button: boolean): ReactElement<HTMLLIElement>
{
    const [buttonProps, isHovered] = useNavButton(button_route);

    return (
        <div>
            {[<button {...buttonProps}
            className={`${mobile_button? "text-[#FFFF] text-xl my-5 font-light" : "text-sm"}`}>
            {button_text}</button>]}
            {!isHovered && <div className="h-0.5 bg-transparent"></div>}
            {isHovered && <div className="h-0.5 bg-yellow-500"></div>}
        </div>
    );
}
export default GenericButton;