import { useState, useEffect, useCallback } from "react";

function useMenuButton(isMenuClicked: boolean, setIsMenuClicked: any): [Object, boolean]
{
    const [isClicked, setIsClicked] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#00BD72");
    const [rotationDegrees, setRotationDegrees] = useState(0);


    useEffect(() => {
        setBackgroundColor(isClicked ? "#D6DB3E" : "#00BD72");
        setRotationDegrees(isClicked ? rotationDegrees + 180 : 0);
    }, [isClicked]);
    
    const handleClick = useCallback(() => {
        setIsClicked((prevState) => !prevState);
        setIsMenuClicked((prevState: boolean) => !prevState );

        const currentPage = document.body.querySelector(".current-page")!;
        if(!currentPage.classList.contains("hidden"))
            currentPage.classList.add("hidden");
        else
            currentPage.classList.remove("hidden");
    }, []);


    const buttonProps = {
        onClick: handleClick,
        style: { 
            backgroundColor, 
            transform: `rotate(${rotationDegrees}deg)`,
            transition: "transform 0.30s ease-in-out"
        },
        className: `
          button rounded-[14px] py-2 px-2 z-30 menu-button
        `,
    };

    return [buttonProps, isClicked];
}

export default useMenuButton;