import Herosection from "@/app/components/homepage/section1/Herosection"
import Navbar from "@/app/components/navbar/Navbar"

import About from "../About/about"
import Connect from "../Footer/Connect"
import FrequentQuestions from "../Footer/FrequentQuestions"

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
      <FrequentQuestions />

      <Connect />
    </>
  )
}

export default UserHomePage