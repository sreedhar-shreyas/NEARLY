import React from "react";
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
        <div className="bg-gray-300 rounded-lg shadow m-4 dark:bg-white-800 my-4">
            <div className="connectDiscription text-2xl font-extrabold mt-2">Get In Touch</div>
            <div className="connect text-lg py-4">Have a question or need support? Contact us Today!</div>
            <div className="contactDetails py-4 lg:py-8 flex flex-col lg:flex-row lg:justify-between">
                <div className="email text-center flex flex-col items-center mb-4 lg:mb-0">
                    <div className="testmail mb-2">
                        <MdMailOutline size={24} />
                    </div>
                    <div className="emailHeading font-semibold text-base">
                        Email
                    </div>
                    <div className="emaildiscription text-lg">Send us an email, and we will get back to you promptly</div>
                    <a href="mailto:hello@relume.io" className="text-blue-500 mt-2">hello@relume.io</a>
                </div>

                <div className="contact text-center flex flex-col items-center mb-4 lg:mb-0">
                    <BsTelephone size={24} />
                    <div className="phoneHeading font-semibold text-base">
                        Phone
                    </div>
                    <div className="phonediscription text-lg">Give us a call, and our friendly team will assist you</div>
                    <a href="tel:+1(555)000-0000" className="text-blue-500 mt-2">+1 (555)000-0000</a>
                </div>
                <div className="address text-center flex flex-col items-center">
                    <HiOutlineLocationMarker size={24} />
                    <div className="phoneHeading font-semibold text-base">
                        Office
                    </div>
                    <div className="addressdiscription text-lg">Visit our office for a personal consultation and tour</div>
                    <a href="geo:42.340082,-71.089488?q=Northeastern+University" className="text-blue-500 mt-2">Northeastern University</a>
                </div>
            </div>
            <div className="connectsection py-10 flex flex-col lg:flex-row lg:justify-between my-4">
                <div className="logo mb-4 lg:mb-0">
                    <div className="logosName font-bold text-lg">
                        Logos
                    </div>
                    <div className="logo-disc py-3 text-base">
                        Stay up to date on the latest features and releases by joining our newsletter
                    </div>

                    <div className="flex flex-col items-center lg:flex-row lg:gap-x-2">
                        <form className="formnewsletter mb-4 lg:mb-0">
                            <input
                                type="input"
                                id="fname"
                                name="fname"
                                className="block w-full rounded-md border-0 py-1.5 pr-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 mb-2 lg:mb-0"
                                placeholder="Your email address"
                            />
                            <input
                                type="submit"
                                value="Submit"
                                id="newslettersubmit"
                                className="rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            />
                        </form>
                    </div>
                </div>
                <div className="column-1">
                    <div className="list">
                        <ul className="list-none p-0">
                            <li className="icon py-1 text-blue-500">
                                <a href="/aboutus" className="ml-2">About</a>
                            </li>
                            <li className="icon py-1 text-blue-500">
                                <a href="/contact" className="ml-2">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="socialmedia">
                    <p className="mr-4">Social Media</p>
                    <ul className="list-none p-0">
                        <li className="icon py-1 text-blue-500 flex items-center">
                            <FaFacebook className="mr-2" />
                            <a href="#" className="ml-2">Facebook</a>
                        </li>
                        <li className="icon py-1 text-blue-500 flex items-center">
                            <IoLogoInstagram className="mr-2" />
                            <a href="#" className="ml-2">Instagram</a>
                        </li>
                        <li className="icon py-1 text-blue-500 flex items-center">
                            <RiTwitterXLine className="mr-2" />
                            <a href="#" className="ml-2">Twitter</a>
                        </li>
                        <li className="icon py-1 text-blue-500 flex items-center">
                            <FaLinkedin className="mr-2" />
                            <a href="#" className="ml-2">LinkedIn</a>
                        </li>
                        <li className="icon py-1 text-blue-500 flex items-center">
                            <FaYoutube className="mr-2" />
                            <a href="#" className="ml-2">Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
