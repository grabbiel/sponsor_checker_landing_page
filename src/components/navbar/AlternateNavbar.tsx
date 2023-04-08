import { useState, useEffect } from 'react';
import ComplexButton from "./ComplexButton";
import GenericButton from "./GenericButton";
import "./AlternateNavbar.css";


function AlternateNavbar({visibilityStatus}: {visibilityStatus: boolean}) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);
  

    return (
        <div className={"z-[10] absolute top-0 h-full w-full flex flex-col bg-[#00BC72] overflow-hidden animate-slide-in"}>
            <div className="w-full h-4/6 overflow-hidden my-auto flex flex-col justify-between">
                <ul className='h-1/2 flex flex-col justify-start '>
                    <li key="features_btn">{GenericButton('Features', '/features', true)}</li>
                    <li key="source_code_btn">{GenericButton('Source Code', '/source', true)}</li>
                    <li key="faq_btn">{GenericButton('FAQ', '/faq', true)}</li>
                </ul>
                <ul className='h-1/4 flex flex-col justify-end'>
                    <li key="donate_btn">{ComplexButton('Donate', '/donate', true, true)}</li>
                    <li key="feedback_btn">{ComplexButton('Feedback', '/feedback', false, true)}</li>
                </ul>
            </div>
        </div>
    );
}

export default AlternateNavbar;