import Image from "next/image";
import Hero from "./herosection/Hero";
import IssueSection from "./issuesection/IssueSection";
import Index from "./homefeatures/index";
import Connect from "./footer/Connect";
import FrequentQuestions from "./footer/FrequentQuestions";


export default function LandingPage(){
    return (<>  
    <Hero></Hero>
    <Index/>
    <IssueSection />
    <FrequentQuestions/>
    <Connect/>

    </>
      
    )
}