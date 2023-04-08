import './index.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Features from './components/features/Features';
import SourceCode from './components/sourcecode/SourceCode';
import FAQ from './components/faq/FAQ';
import Donate from './components/donate/Donate';
import Feedback from './components/feedback/Feedback';
import { useEffect, useState } from 'react';
import AlternateNavbar from './components/navbar/AlternateNavbar';
import { useLocation } from 'react-router-dom';

function App() {

    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const location = useLocation();
    useEffect(()=>{
        if(isMenuClicked) setIsMenuClicked((prevState) => !prevState);
    },[location]);

    const [browserName, setBrowserName] = useState(1); // Chrome is default
    useEffect(()=>{
        const userAgent = navigator.userAgent;
        if (userAgent.indexOf("Edg") > -1)
            setBrowserName(1); // 4
        else if (userAgent.indexOf("Firefox") > -1)
            setBrowserName(2);
        else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1)
            setBrowserName(1); // 3
        else if (userAgent.indexOf("Google") > -1)
            useState(1);
    }, [browserName]);

    return (
        <div className='w-full relative bg-[#00BD72] py-0 h-screen'>
        <Navbar isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked}/>
        {isMenuClicked && <AlternateNavbar visibilityStatus={true} />}
        <Routes>
            <Route path='/' element={<Home downloadLink={browserName} />} />
            <Route path='/features' element={<Features />} />
            <Route path='/source' element={<SourceCode />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/feedback' element={<Feedback />} />
        </Routes>
        </div>
    );
}

export default App;
