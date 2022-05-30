import React from 'react';
import qrScreen from 'assets/images/RvD5XHwVYap7YXHVjsfKZsgxGVLHQ1CW1R0fLsqY.png'
import ApplePlayStore from 'svg/ApplePlayStore';
import GooglePlayStore from 'svg/GooglePlayStore';
import logo from 'assets/images/logo.png';
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai';


const Footer = () => {
    return (
        <div className="bg-[#111723]">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-4 text-white p-4">
                    <div className="">
                        
                        <img className="h-8 w-auto sm:h-10 mt-5" src={logo} alt="" />
                        <h2 className="mb-2 text-lg border-b w-[85px] py-1 border-b-[#eb5525] border-b-2">Follow Us</h2>
                        <div >
                            <ul className="flex gap-3 mt-4 cursor-pointer">
                            <li className="hover:-mt-1">
                            <div className="bg-blue-800 p-[7px] rounded-full ">
                            <a href="" >
                            <FaFacebookF className="text-white" />
                            </a>
                            </div>
                            </li>
                            <li className="hover:-mt-1">
                            <div className="bg-[#007bff] p-[7px] rounded-full hover:-mt-2">
                            <a href="" >
                            <AiOutlineTwitter className="text-white" />
                            </a>
                            </div>
                            </li>
                            <li className="hover:-mt-1">
                            <div className="bg-[#e83e8c] p-[7px] rounded-full hover:-mt-2">
                            <a href="" >
                            <AiOutlineInstagram className="text-white" />
                            </a>
                            </div>
                            </li>
                            <li className="hover:-mt-1">
                            <div className="bg-[#dc3545] p-[7px] rounded-full hover:-mt-2">
                            <a href="" >
                            <AiFillYoutube className="text-white" />
                            </a>
                            </div>
                            </li>
                            <li className="hover:-mt-1">
                            <div className="bg-blue-600 p-[7px] rounded-full hover:-mt-2">
                            <a href="" >
                            <FaLinkedinIn className="text-white" />
                            </a>
                            </div>
                            </li>
                           
                            </ul>
                            
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-2 text-xl  border-b w-[85px] py-1 border-b-[#eb5525] border-b-2">Company</h2>
                        <div >
                        <p className="text-[#6c757d] cursor-pointer hover:text-white">Seller Registration</p>
                        <p className="text-[#6c757d] cursor-pointer hover:text-white">Order Track</p>
                        </div>
                        <p className="mb-2 text-xl border-b w-[50px] py-1 border-b-[#eb5525] border-b-2">Legal</p>
                        <p className="text-[#6c757d] cursor-pointer hover:text-white text-base"> Privacy & Policy</p>
                        <p className="text-[#6c757d] cursor-pointer hover:text-white">Terms & Conditions</p>
                        <p className="text-[#6c757d] cursor-pointer hover:text-white">Return & Refunds Policy</p>

                    </div>
                    <div>
                        <h2 className="mb-2 text-xl border-b w-36 py-1 border-b-[#eb5525] border-b-2">Customer Care</h2>
                        <p className="text-[#6c757d] cursor-pointer hover:text-white">Return & Refunds</p>
                        <p className="text-[#6c757d] cursor-pointer hover:text-white">Terms & Conditions</p>
                        <p className="text-[#6c757d] cursor-pointer hover:text-white">Call Us: 01967-227733, 01958-182833</p>
                        <p className="text-[#6c757d] cursor-pointer hover:text-white">Email Us: cs@monarchmart.com</p>
                    </div>
                    <div className="bg-[#6c757d] p-4 rounded-lg">
                        <h3 className="text-2xl font-semibold leading-relaxed text-[#eb5525]">Download Android App</h3>
                        <div className="flex">
                        <div className="bg-white rounded-lg">
                        <img className="p-2" src={qrScreen} alt="" />
                        </div>
                        <div className="p-2">
                        <GooglePlayStore></GooglePlayStore>
                        <ApplePlayStore></ApplePlayStore>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t mx-10">
                <div className="flex justify-between p-5  text-white">
                       <p>©2022 All Rights Reserved by Monarch Mart</p>
                       <p>Powered by Softavion Ltd. An associate company of Monarch holdings Ltd.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;