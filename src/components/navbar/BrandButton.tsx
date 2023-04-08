import { useNavigate } from "react-router-dom";

function BrandButton()
{
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/');
    }
    
    return(
        <div className="">
            <button onClick={handleClick}
            className="font-['Unbounded'] text-[#00BD72] font-bold text-xl xsmob:text-2xl">
            VisaSpotter</button>
        </div>
    );
}

export default BrandButton;