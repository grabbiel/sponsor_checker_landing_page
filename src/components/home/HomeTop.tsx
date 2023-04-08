import DownloadButton from "./DownloadButton";
import Compatible from "./Compatible";

function HomeTop({downloadLink}:{downloadLink: number})
{
    return(
        <div className="h-9/12 mx-auto lg:px-0">

            <div className="h-9/12 pb-10 
            flex items-center justify-items-center 
            flex-col lg:flex-row 
            mx-auto max-w-6xl 
            w-9/12 lg:w-10/12 
            overflow-hidden 
            lg:overflow-visible
            relative">

                
            <div className="h-full lg:w-auto z-[10] absolute  lg:static lg:py-0 ">
                <img className="
                    w-60 
                    lg:w-60 
                    h-auto  
                    opacity-10 
                    rotate-180 
                    lg:rotate-0 
                    lg:opacity-100 
                "  src="public/mascot.png" alt="Mascot" />
            </div>


                <div className="lg:pl-5 flex items-center">

                    <h1 className="
                    z-[10] 
                    text-[#FFF2E8] 
                    font-['Unbounded'] 
                    font-semibold 
                    text-left 
                    text-5xl 
                    xsmob:text-6xl 
                    md:text-7xl 
                    ">
                    Your work visa one step at a time.</h1>
                    
                </div>
            </div>

            <div className="mx-auto flex flex-col justify-evenly max-w-4xl w-10/12 lg:w-9/12">

                <div className="mx-auto w-full">
                    <p className="
                    text-[#FFF2E8]
                    font-[Figtree]
                    text-center 
                    text-md 
                    xsmob:text-lg  
                    md:text-xl 
                    lg:text-3xl">
                        <span className="text-[#D6DB3E]">VisaSpotter</span> is a browser extension that allows international students to <span className="text-[#D6DB3E]">cut through the noise of online job openings</span>. Filter for the positions and companies willing to sponsor you.
                    </p>
                </div>

                <div className="w-4/12 mx-auto 
                flex flex-col items-center justify-center 
                py-8 
                xsmob:py-10">
                    <DownloadButton downloadLink={downloadLink}/>
                    <Compatible/>
                </div>
            </div>

        </div>
    );
}

export default HomeTop;