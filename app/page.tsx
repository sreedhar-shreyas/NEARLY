import React from 'react';
import Modal from "./components/models/Model";
import RentModal from "./components/models/RentModel";
import Navbar from "./components/navbar/Navbar";
import UserHomePage from "./components/pages/User_Home/userHomePage";
import Container from "./components/Container";
import ClientOnly from "./components/ClientOnly";
import EmptyState from "./components/EmptyState";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function page() {
  return (
    <>
      <UserHomePage />
      <Navbar />

      <ClientOnly>
        <Container>
          <div 
            className="
              pt-24
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4
              xl:grid-cols-5
              2xl:grid-cols-6
              gap-8
            "
          >
            <div>My future listings</div>
          </div>
        </Container>
      </ClientOnly>
    </>
  );
}

export default page;
