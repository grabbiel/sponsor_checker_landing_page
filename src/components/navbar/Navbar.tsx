import BrandButton from "./BrandButton";
import ComplexButton from "./ComplexButton";
import GenericButton from "./GenericButton";
import MenuButton from "./MenuButton";

function Navbar({ isMenuClicked, setIsMenuClicked }: { isMenuClicked: boolean, setIsMenuClicked: any}){
    return(
        <div className="
        z-[50] sticky  
        top-8 
        inset-x-0 mx-auto  
        bg-white rounded-[16px] drop-shadow-md 
        py-3 px-8 
        w-11/12 
        lg:w-8/12 lg:max-w-6xl 
        ">
        <div className="">
            <ul className="flex justify-between items-center">
            <li key="brand_btn"><BrandButton/></li>
            <li key="features_btn" className="hidden lg:block">{GenericButton('Features', '/features', false)}</li>
            <li key="source_code_btn" className="hidden lg:block">{GenericButton('Source Code', '/source', false)}</li>
            <li key="faq_btn" className="hidden lg:block">{GenericButton('FAQ', '/faq', false)}</li>
            <li key="donate_btn" className="hidden lg:block">{ComplexButton('Donate', '/donate', true, false)}</li>
            <li key="feedback_btn" className="hidden lg:block">{ComplexButton('Feedback', '/feedback', false, false)}</li>
            <li key="menu_btn" className="block lg:hidden">{MenuButton({isMenuClicked, setIsMenuClicked})}</li>
            </ul>
        </div>
        </div>
    );
}

export default Navbar;

