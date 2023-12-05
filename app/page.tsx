import Modal from "./components/models/Model";
import RentModal from "./components/models/RentModel";
import Navbar from "./components/navbar/Navbar";
import UserHomePage from "./components/pages/User_Home/userHomePage";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Home() {
  return (
    <>

      <UserHomePage/>
    
      <Navbar />
    </>
  )
}
