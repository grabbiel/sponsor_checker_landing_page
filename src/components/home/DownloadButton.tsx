
import { ReactElement, useEffect, useState } from "react";
function useDownloadButton(): [Object, boolean, boolean]
{
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    }

    const handleMouseOut = () => {
        setIsHovered(false);
    }

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const buttonProps = {
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseOut,
        onClick: handleClick,
        className: 'button w-full font-[Figtree] font-bold px-10 py-7'
    };

    return [buttonProps, isHovered, isClicked]; 
}

function DownloadButton({downloadLink}:{downloadLink: number}): ReactElement<HTMLButtonElement>
{
    const [buttonProps, isHovered, isClicked] = useDownloadButton();
    const [goURL, setURL] = useState("https://chrome.google.com/webstore/detail/h1b-sponsor-checker/mcnljenmincmifienefinhkgkbiicccp");

    useEffect(()=>{
        switch(downloadLink){
            case 1:
                setURL("https://chrome.google.com/webstore/detail/h1b-sponsor-checker/mcnljenmincmifienefinhkgkbiicccp");
                break;
            case 2:
                console.log("Mozilla here baby");
                setURL("https://addons.mozilla.org/en-US/firefox/addon/h1b-sponsor-checker/");
                break;
            default:
                break;
        } 
    },[goURL]);

    return (
        <div className="bg-[#FFF2E8] rounded-[10px] outline-dotted shadow-black shadow-md hover:shadow-lg hover:shadow-black duration-150 
        w-60 xsmob:w-80 lg:max-w-80 ">
            <a href={goURL} target="_blank">
                {[<button {...buttonProps}> Add to your browser </button>]}
            </a>
        </div>
    );
}
export default DownloadButton;