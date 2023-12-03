'use client';

import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
const Navbar = () => {
    return (
        
        <div className="position-absolute w-full z-10 shadow-sm bg-slate-900 bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-rose-800">
        <div className="py-4">
            <Container>
                <div
                className="
                flex
                flex-grow
                items-center
                justify-between
                gap-3
                md:gap-0">
                    <Logo/>
                    <Search />
                    <UserMenu />
                </div>

            </Container>
        </div>
        <Categories/>
    </div> 
    
    );
}
 
export default Navbar;