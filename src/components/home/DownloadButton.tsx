
import { ReactElement, useEffect, useState } from "react";
function useDownloadButton(): [Object, boolean]
{
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    }

    const handleMouseOut = () => {
        setIsHovered(false);
    }

    const buttonProps = {
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseOut,
        className: 'button w-full py-7 font-[Figtree] font-bold px-10'
    };

    return [buttonProps, isHovered]; 
}

function DownloadButton({downloadLink}:{downloadLink: number}): ReactElement<HTMLButtonElement>
{
    const [buttonProps, isHovered] = useDownloadButton();
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
        w-60 xsmob:w-80 lg:max-w-80">
            {[<button {...buttonProps}>
                <a href={goURL} target="_blank">Add to your browser</a>
            </button>]}
        </div>
    );
}
export default DownloadButton;