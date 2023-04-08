import { ReactElement } from "react";
import "./MenuButton.css";
import useMenuButton from "./MenuButtonUtility";

function MenuButton({ isMenuClicked, setIsMenuClicked }: { isMenuClicked: boolean, setIsMenuClicked: any}): ReactElement<HTMLElement>
{
    const [buttonProps, isClicked] = useMenuButton(isMenuClicked, setIsMenuClicked);
    return (
        <div>
            {[
                <button 
                    key={isClicked ? 1 : 0} 
                    {...buttonProps} 
                >
                <img
                    src="public/navbar/menu-bar.svg"
                    alt="Menu Bar Logo"
                    className="z-[10] h-8 object-contain object-center"
                />
                </button>,
            ]}

        </div>
      );
}

export default MenuButton;