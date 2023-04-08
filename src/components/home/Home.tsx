import HomeTop from "./HomeTop";

function Home({downloadLink}:{downloadLink: number})
{
    return(
        <div className="current-page h-[100rem] w-full bg-[#00BD72] my-14 ">
            <HomeTop downloadLink={downloadLink}/>
        </div>
    );
}

export default Home;