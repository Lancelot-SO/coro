/* eslint-disable react/no-unescaped-entities */
import "./global.css"
import selfservicebg from "../assets/purpleservice/selfservicebg.png"
import serviceimg from "../assets/purpleservice/serviceimg.png"

import { FaRegFileAlt } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

import { Link } from "react-router-dom";


const PurpleService = () => {
    return (
        <div>
            <div className="flex w-full gap-24">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div>
                        <h2 className="text-[56px] font-bold leading-[64px]">Self Service</h2>
                        <span className="text-[16px] font-normal leading-[24px]">Choose the service you would like to access</span>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <img src={selfservicebg} alt="service" className="bg-cover" loading="lazy" />
                    <div className="glass absolute bottom-0 rounded-tl-lg right-0 w-[385px] h-[174px]">
                        <div className="p-6">
                            <span className="text-white w-[300px] h-[32px] text-[24px] leading-[32px] font-semibold">My Insurance Account</span>
                            <p className="text-white text-[16px] leading-[24px] font-normal mt-2">
                                Want to know more about our services? Let's talk
                            </p>
                            <div className="flex mt-5 w-[116px] h-[36px] bg-white font-semibold text-[14px] leading-[20px] text-black rounded-lg items-center justify-center">
                                GET A QUOTE
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="relative pt-20">
                    <img src={serviceimg} alt="feature" loading="lazy" />
                    <div className="absolute top-[35%] left-[43%] w-[737px] min-h-[300px] bg-white border rounded-lg shadow-md">
                        <div className="p-4 flex w-[714px] h-[300px]">
                            <div className="flex-1 flex flex-col gap-4 p-4">
                                <FaRegFileAlt className="text-[#B580D1] w-10 h-12" />
                                <div className="w-full h-[200px]">
                                    <h3 className="text-[32px] font-semibold leading-[40px]">File a Claim</h3>
                                    <p className="text-[16px] font-normal leading-[24px] text-[#888991]">
                                        Designed for your convenience to enable you initiate claim request and monitor the status of your existing claim request.
                                    </p>
                                </div>

                                <Link to="/" className="text-[#B580D1]">File a Claim</Link>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 p-4">
                                <IoShieldCheckmarkOutline className="text-[#B580D1] w-10 h-12" />
                                <div className="w-full h-[200px]">
                                    <h3 className="text-[32px] font-semibold leading-[40px]">Buy Insurance</h3>
                                    <p className="text-[16px] font-normal leading-[24px] text-[#888991]">
                                        Discover the most convenient way to plan your insurance with Coronation Mobile App,                                    </p>
                                </div>

                                <Link to="/" className="text-[#B580D1]">Buy Insurance</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleService