import Image from "next/image";
import Connect from "./footer/Connect";
import FrequentQuestions from "./footer/FrequentQuestions";
import Hero from "./herosection/Hero";


export default function LandingPage(){
    return (<>
    <Hero/>
    <div>Landing Page</div>
    <Connect/>
    <FrequentQuestions/>
    
    </>
      
    )
}