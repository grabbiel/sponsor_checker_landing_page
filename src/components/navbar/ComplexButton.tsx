import { ReactElement, useState } from "react";
import { To, useNavigate } from "react-router-dom"

function useComplexButton(reroute_to: To, isDonateButton: boolean, isMobileButton: boolean): [Object, boolean]
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
        className: (
            "button rounded-[14px] text-sm font-bold duration-150 " +
            " lg:px-5 xl:px-10 " + 
            (isDonateButton? 
                "text-[#005483] bg-[#D6DB3E] hover:bg-[#005483] hover:text-[#D6DB3E] " 
                : "hover:bg-[#005483] hover:text-[#D6DB3E] "
            ) +
            (
                isMobileButton?
                "w-5/6 py-5 "
                : "py-3 "
            ) + 
            (
                (!isDonateButton && isMobileButton)?
                "text-[#FFFFFF] " :
                " "
            )
        )
    };

    return [buttonProps, isHovered];
}

function ComplexButton(button_text: String, button_route: To, isDonateButton: boolean, isMobileButton: boolean): ReactElement<HTMLElement>
{
    const [buttonProps, isHovered] = useComplexButton(button_route, isDonateButton, isMobileButton);

    return (
        <div>
            {[<button {...buttonProps}>
            {button_text}</button>]}
        </div>
    );
}

export default ComplexButton; 