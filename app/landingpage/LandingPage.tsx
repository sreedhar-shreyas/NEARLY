import Image from "next/image";
import Connect from "./footer/Connect";
import FrequentQuestions from "./footer/FrequentQuestions";
import Hero from "./herosection/Hero";
import IssueSection from "./issuesection/IssueSection";
import Index from "./homefeatures/index";


export default function LandingPage(){
    return (<>  
    {/* <Index/> */}
    <IssueSection />
    <div>Landing Page</div>
    <Index/>
    <Connect/>
    <FrequentQuestions/>
    
    </>
      
    )
}