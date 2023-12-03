import React from 'react';
import './Connect.css';
import { RiTwitterXLine } from "react-icons/ri";

import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Connect() {
    return (
        <div className='bg-white rounded-lg shadow m-4 dark:bg-white-800'>
            <div className='connectHeading'>Connect</div>
            <div className='connectDiscription'>Get In Touch</div>
            <div className='connect py-8'>Have a question or need support? Contact us Today!</div>
            <div className='contactDetails py-8'>
                <div className='email'>
                    <div className='testmail'>
                        <MdMailOutline />
                    </div>
                    <div className='emailHeading'>
                        Email
                    </div>
                    <div className='emaildiscription' > Send us an email and we'll get back to you promptly</div>
                    <a href='mailto:hello@relume.io'>hello@relume.io</a>
                </div>
                <div className='contact'>
                    <BsTelephone />
                    <div className='phoneHeading'>
                        Phone
                    </div>
                    <div className='phonediscription' > Give us a call and our friendly team will assist you</div>
                    <a href='tel:+1(555)000-0000'>+1 (555)000-0000</a>

                </div>
                <div className='address'>
                    <HiOutlineLocationMarker />
                    <div className='phoneHeading'>
                        Office
                    </div>
                    <div className='addressdiscription' >Visit our office for personal consultation and tour</div>
                    <a href='tel:+1(555)000-0000'>+1 (555)000-0000</a>

                </div>
            </div>
            <div className='connectsection py-10'>
                <div className='logo'>
                    <div className='logosName font-bold'>
                        Logos
                    </div>
                    <div className='logo-disc py-3'>
                        Stay up to date on the latest features and releases by joining our newsletter
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <form className='formnewsletter py-3'>
                            <input type="input" id="fname" name="fname"  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder='Your email address'/>
                            <input type="submit" value="Submit" id="newslettersubmit" className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'/>
                        </form>

                    </div>
                </div>

                <div className='column-1'> 
                <div className='list'> 
                <ul>
                    <li><a className='py-1' href='#'>About</a></li>
                    <li><a className='py-1'href='#'>Contact</a></li>
                    <li><a className='py-1'href='#'>Link one</a></li>
                    <li><a className='py-1'href='#'>Link one</a></li>
                    <li><a className='py-1'href='#'>Link one</a></li>

                </ul>

                </div>

                </div>
                {/* <div className='column-2'> Column Two
                <div className='list'> 
                <ul>
                    <li><a href='#'>Link one</a></li>
                    <li><a href='#'>Link one</a></li>
                    <li><a href='#'>Link one</a></li>
                    <li><a href='#'>Link one</a></li>
                    <li><a href='#'>Link one</a></li>

                </ul>

                </div>

                </div> */}
                <div className='socialmedia'>
                    Socia Media
                <ul>
                <li><div className='icon py-1'><FaFacebook /><a  href='#'>Facebook</a></div></li>
                    <li><div className='icon py-1'><IoLogoInstagram /><a href='#'>Instagram</a></div></li>
                    <li><div className='icon py-1'><RiTwitterXLine /><a href='#'>Twitter</a></div></li>
                    <li><div className='icon py-1'><FaLinkedin /><a href='#'>LinkedIn</a></div></li>
                    <li><div className='icon py-1 '><FaYoutube /><a  href='#'>Youtube</a></div></li>

                </ul>
                </div>
                

                    
                </div>

            </div>
    );
}
