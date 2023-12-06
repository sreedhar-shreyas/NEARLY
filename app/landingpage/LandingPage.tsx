import Image from "next/image";
import Connect from "./footer/Connect";
import FrequentQuestions from "./footer/FrequentQuestions";
import Hero from "./herosection/Hero";
import StartNow from "./startnow/startnow";


export default function LandingPage(){
    return (<>
    <Hero/>
    <div>Landing Page</div>
    <Connect/>
    <FrequentQuestions/>
    <StartNow/>
    
    </>
      
    )
}