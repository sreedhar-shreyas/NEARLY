import Image from "next/image";
import Connect from "./footer/Connect";
import FrequentQuestions from "./footer/FrequentQuestions";
import Hero from "./herosection/Hero";
import IssueSection from "./issuesection/IssueSection";


export default function LandingPage(){
    return (<>
    <Hero/>
    <IssueSection />
    <div>Landing Page</div>
    <Connect/>
    <FrequentQuestions/>
    
    </>
      
    )
}