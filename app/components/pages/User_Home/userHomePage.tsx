import Herosection from "@/app/components/homepage/section1/Herosection"
import Navbar from "@/app/components/navbar/Navbar"

import About from "../About/about"
import Connect from "../Footer/Connect"
import FrequentQuestions from "../Footer/FrequentQuestions"
import WorkingDemo from "../Details/WorkingDemo"
import AddListing from "../UploadListing/AddListing"

function UserHomePage() {
  return (
    <>
    <Navbar/>
    <Herosection/>
    {/* <About/> */}
      {/* this was a page thats linked ^


      <Herosection/>
      ^this is a section */}
      ^this is a section
<AddListing />
      <WorkingDemo />
      <FrequentQuestions />

      <Connect />
      
    </>
  )
}

export default UserHomePage