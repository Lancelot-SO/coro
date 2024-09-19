/* eslint-disable react/no-unescaped-entities */
import motorbg from "../assets/purplemotor/motorbg.png"
import motorfeature from "../assets/purplemotor/motorfeature.png"
import product5 from "../assets/purpleproduct/product5.png"

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import "./global.css"
import { useState } from "react";
import { Link } from "react-router-dom";
const PurpleMotor = () => {

    const [isExpanded, setIsExpanded] = useState({
        comprehensive: true,
        thirdPartyFire: false,
        thirdPartyOnly: false,
    });

    const toggleExpand = (section) => {
        setIsExpanded((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div>
            <div>
                <div className="flex w-full h-[450px] bg-red-500 ">
                    <div className="flex-1 flex-col bg-[#EFEFF0] flex items-center justify-center">
                        <div className=" ">
                            <h2 className="text-[56px] leading-[64px] font-bold">Motor Insurance</h2>
                            <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                                This is an insurance product that pays for damages to your vehicle (private or commercial) as a result of theft,
                                accident or fire. It also covers third-party injury and death,
                                property damage and legal cost. It comes in 3 variants namely Third Party, Third Party, Fire and theft & Comprehensive.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={motorbg} alt="about" className="bg-cover w-full h-full" loading="lazy" />
                    </div>
                    <div className="glass absolute bottom-[137px] right-0 w-[385px] h-[174px]">
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
                <div className="w-full h-[290px] bg-black px-28 items-center py-20">
                    <div className="flex flex-col">
                        <h3 className="text-white text-[40px] leading-[44px] font-bold w-[483px]">
                            CAR INSURANCE THAT IS CUSTOMIZED FOR YOU
                        </h3>
                        <div className="flex items-center mt-4">
                            <span className="text-white text-[18px] leading-[24px] font-normal w-[703px] h-[48px]">
                                Your car is as unique as you. This is why our plans are flexible and designed to fit your specific needs. No matter the size of your car (or pocket), we’ve got something for you.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={motorfeature} alt="feature" loading="lazy" />
                    <div className="absolute top-[20%] left-[20%] w-[954px] min-h-[272px] bg-white border rounded-lg shadow-md">
                        <div className="p-4">
                            {/* Comprehensive Insurance Section */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <h2 className={`${isExpanded.comprehensive ? "text-black text-[24px]" : "text-[#888991]"
                                        }`}>
                                        COMPREHENSIVE INSURANCE
                                    </h2>
                                    <div onClick={() => toggleExpand("comprehensive")} className="cursor-pointer">
                                        {isExpanded.comprehensive ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                </div>
                                {isExpanded.comprehensive && (
                                    <>
                                        <span className="w-[906px] h-[72px] text-[16px] leading-[24px] font-normal text-[#888991]">
                                            This is an insurance product that pays for damages to your vehicle as a result of theft,
                                            accident or fire. It also covers legal liability to third-parties in the event of death, bodily injury, legal cost and property damage. With this policy, the cost of replacing or repairing your vehicle is covered.
                                        </span>
                                        <div className="flex gap-4">
                                            <span className="w-[142px] h-[36px] bg-[#B580D1] font-semibold text-[14px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                                Insurance Features
                                            </span>
                                            <span className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold text-[14px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                                GET A QUOTE
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Third Party Fire & Theft Section */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <h2 className={`${isExpanded.thirdPartyFire ? "text-black text-[24px]" : "text-[#888991]"
                                        }`}
                                    >
                                        THIRD PARTY FIRE & THEFT
                                    </h2>
                                    <div onClick={() => toggleExpand("thirdPartyFire")} className="cursor-pointer">
                                        {isExpanded.thirdPartyFire ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                </div>
                                {isExpanded.thirdPartyFire && (
                                    <>
                                        <span className="w-[906px] h-[72px] text-[16px] leading-[24px] font-normal text-[#888991]">
                                            This is an insurance product which covers the policy holder against legal liability to third parties in the event of death, bodily injury and property damage. Beyond these, this policy also covers theft or damage by fire. Under Third party fire & theft the cost of repairs and/or outright replacement is also covered. The policy allows you to buy additional features such as personal accident and cover for riots along with the standard features of the product.
                                        </span>
                                        <div className="flex gap-4">
                                            <span className="w-[142px] h-[36px] bg-[#B580D1] font-semibold text-[14px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                                Insurance Features
                                            </span>
                                            <span className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold text-[14px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                                GET A QUOTE
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Third Party Only Section */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <h2 className={`${isExpanded.thirdPartyOnly ? "text-black text-[24px]" : "text-[#888991]"
                                        }`}
                                    >
                                        THIRD PARTY ONLY
                                    </h2>
                                    <div onClick={() => toggleExpand("thirdPartyOnly")} className="cursor-pointer">
                                        {isExpanded.thirdPartyOnly ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                </div>
                                {isExpanded.thirdPartyOnly && (
                                    <>
                                        <span className="w-[906px] h-[72px] text-[16px] leading-[24px] font-normal text-[#888991]">
                                            It is a simple insurance product which covers the policyholder against legal liability to third parties in the event of death, bodily injury, legal cost and property damage involving the insured vehicle. Third party insurance is a mandatory requirement for all vehicles on Ghanaian roads. It became mandatory through the Motor Vehicle (third party) Insurance Act of 1958.
                                        </span>
                                        <div className="flex gap-4">
                                            <span className="w-[142px] h-[36px] bg-[#B580D1] font-semibold text-[14px] leading-[20px] cursor-pointer rounded-lg shadow-md text-black flex items-center justify-center mt-6">
                                                Insurance Features
                                            </span>
                                            <span className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold text-[14px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                                GET A QUOTE
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="p-20">
                    <div className="w-full h-[450px]">
                        <div className="w-full h-[108px]">
                            <h2 className="text-[40px] leading-[44px] font-semibold">BENEFITS</h2>
                            <div className="flex items-center justify-between">
                                <span className="w-[518px] h-[48px]">
                                    The product has been designed with a combination of <br />Enhanced term life which gives you an additional benefit.
                                </span>
                                <div className="w-[122px] h-[36px] bg-[#B580D1] font-semibold text-[14px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                    <Link>GET A QUOTE</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <div className="flex-1 flex flex-col h-[300px] gap-4 bg-white border rounded-lg shadow-md p-4">
                                <div className="h-[192px]">
                                    <div className="text-[24px] leading-[32px] font-semibold">COMPREHENSIVE INSURANCE</div>
                                    <div className="pl-6 mt-2">
                                        <ul className="list-disc flex flex-col gap-2">
                                            <li className="text-[16px] text-[#56575D]">Free tracker for vehicles with value - GHS100,000</li>
                                            <li className="text-[16px] text-[#56575D]">No-Claim discount at renewal</li>
                                            <li className="text-[16px] text-[#56575D]">Reimbursement of legal fees if policy holder is prosecuted in court over an accident resulting in a valid claim</li>
                                            <li className="text-[16px] text-[#56575D]">Waives your windscreen excess</li>
                                            <li className="text-[16px] text-[#56575D]">Multi-car Discount</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link className="font-semibold text-[14px] leading-[20px] text-black mt-6">
                                    Learn More
                                </Link>
                            </div>
                            <div className="flex-1 flex flex-col h-[300px] gap-4 bg-white border rounded-lg shadow-md p-4">
                                <div className="h-[192px]">
                                    <div className="text-[24px] leading-[32px] font-semibold">THIRD PARTY FIRE & THEFT</div>
                                    <div className="pl-6 mt-2">
                                        <ul className="list-disc flex flex-col gap-2">
                                            <li className="text-[16px] text-[#56575D]">No-Claim discount at renewal</li>
                                            <li className="text-[16px] text-[#56575D]">Multi-car Discount</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link className="font-semibold text-[14px] leading-[20px] text-black mt-6">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={product5} alt="banner" className="w-full bg-cover" />
                    <div className="absolute top-[48%] left-[7%] text-[56px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                    <div className="bg-white absolute top-[48%] right-[7%] w-[108px] h-[44px] flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleMotor