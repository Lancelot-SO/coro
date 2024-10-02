/* eslint-disable react/no-unescaped-entities */
import motorbg from "../assets/purplemotor/motorbg.png"
import motorfeature from "../assets/purplemotor/motorfeature.png"
import product5 from "../assets/purpleproduct/product5.png"
import motormob from "../assets/purplemotor/motormob.png"
import motorbanner from "../assets/purplemotor/motorbanner.png"


import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import "./global.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import MotorFeature from "../features/MotorFeature";
import TheftFeature from "../features/TheftFeature";
import PartyFeature from "../features/PartyFeature";


const RedMotor = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTravelModalOpen, setIsTravelModalOpen] = useState(false);
    const [isPartyModalOpen, setIsPartyModalOpen] = useState(false);



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
        <div className="overflow-hidden">
            <div>
                <div className="flex lg:flex-row flex-col-reverse w-full lg:h-[450px] h-[678px] ">
                    <div className="flex-1 flex-col bg-[#EFEFF0] flex lg:items-center justify-center">
                        <div className="p-4">
                            <h2 className="lg:text-[56px] text-[32px] lg:leading-[64px] leading-[40px] font-bold">Motor Insurance</h2>
                            <p className="lg:w-[560px] md:w-[600px] w-[319px] lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] font-medium text-[#56575D] lg:mt-4 mt-2">
                                This is an insurance product that pays for damages to your vehicle (private or commercial) as a result of theft,
                                accident or fire. It also covers third-party injury and death,
                                property damage and legal cost. It comes in 3 variants namely Third Party, Third Party, Fire and theft & Comprehensive.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={motorbg} alt="about" className="hidden lg:flex bg-cover w-full h-full" loading="lazy" />
                        <img src={motormob} alt="about" className="flex lg:hidden bg-cover w-full h-[458px]" loading="lazy" />
                    </div>
                    <div className="glass bg-[#FF0226] bg-opacity-70 absolute lg:bottom-[137px] md:bottom-[200px] small:bottom-[297px] nsm:bottom-[262px] xsm:bottom-[32px]
                    msm:bottom-[105px] rsm:bottom-[280px]
                    xxsm:bottom-[208px] bottom-[261px] right-0 lg:w-[385px] w-[243px] lg:h-[174px] h-[140px]">
                        <div className="lg:p-6 p-2">
                            <span className="text-white w-[300px] h-[32px] lg:text-[24px] leading-[32px] font-semibold">My Insurance Account</span>
                            <p className="text-white lg:text-[16px] text-[12px] leading-[24px] font-normal lg:mt-2 mt-0">
                                Want to know more about our services? Let's talk
                            </p>
                            <div className="flex lg:mt-5 mt-2 lg:w-[116px] w-[95px] h-[36px] bg-white font-semibold lg:text-[14px] text-[10px] leading-[20px] text-black rounded-lg items-center justify-center">
                                <Link to="https://ecoronation.com/motor" target='_blank' rel='noopener noreferrer'>GET A QUOTE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="w-full h-[290px] bg-black lg:px-28 px-4 items-center lg:py-20 md:py-20 py-10">
                    <div className="flex flex-col">
                        <h3 className="text-white lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-bold lg:w-[483px]">
                            CAR INSURANCE THAT IS CUSTOMIZED FOR YOU
                        </h3>
                        <div className="flex items-center mt-4">
                            <span className="text-white lg:text-[18px] md:text-[16px] text-[14px] leading-[24px] font-normal w-[703px] h-[48px]">
                                Your car is as unique as you. This is why our plans are flexible and designed to fit your specific needs. No matter the size of your car (or pocket), we’ve got something for you.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative overflow-hidden">
                    <img src={motorfeature} alt="feature" className="h-[657px] md:w-[400px] lg:w-[599px] object-cover" loading="lazy" />
                    <div className="absolute top-[20%] lg:left-[20%] md:left-[40%] left-5 lg:w-[954px] w-[350px] bg-white border rounded-lg shadow-md">
                        <div className="p-4">
                            {/* Comprehensive Insurance Section */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <h2 className={`${isExpanded.comprehensive ? "text-black lg:text-[24px] text-[16px]" : "text-[#888991]"
                                        }`}>
                                        COMPREHENSIVE INSURANCE
                                    </h2>
                                    <div onClick={() => toggleExpand("comprehensive")} className="cursor-pointer">
                                        {isExpanded.comprehensive ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                </div>
                                {isExpanded.comprehensive && (
                                    <>
                                        <span className="w-[906px] h-[72px] lg:text-[16px] text-[12px] leading-[24px] font-normal text-[#888991]">
                                            This is an insurance product that pays for damages to your vehicle as a result of theft,
                                            accident or fire. It also covers legal liability to third-parties in the event of death, bodily injury, legal cost and property damage. With this policy, the cost of replacing or repairing your vehicle is covered.
                                        </span>
                                        <div className="flex gap-4">
                                            <span onClick={() => setIsModalOpen(true)} className="w-[142px] h-[36px] bg-[#FF0226] font-semibold text-[14px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                                Insurance Features
                                            </span>
                                            <span className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold text-[14px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                                <Link to="https://ecoronation.com/motor" target='_blank' rel='noopener noreferrer'>GET A QUOTE</Link>
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                            {isModalOpen && (
                                <MotorFeature closeModal={() => setIsModalOpen(false)} /> // Pass close function to the modal
                            )}

                            {/* Third Party Fire & Theft Section */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <h2 className={`${isExpanded.thirdPartyFire ? "text-black lg:text-[24px] text-[16px]" : "text-[#888991]"
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
                                        <span className="w-[906px] h-[72px] lg:text-[16px] text-[12px] leading-[24px] font-normal text-[#888991]">
                                            This is an insurance product which covers the policy holder against legal liability to third parties in the event of death, bodily injury and property damage. Beyond these, this policy also covers theft or damage by fire. Under Third party fire & theft the cost of repairs and/or outright replacement is also covered. The policy allows you to buy additional features such as personal accident and cover for riots along with the standard features of the product.
                                        </span>
                                        <div className="flex gap-4">
                                            <span onClick={() => setIsTravelModalOpen(true)} className="w-[142px] h-[36px] bg-[#FF0226] font-semibold text-[14px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                                Insurance Features
                                            </span>
                                            <span className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold text-[14px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                                <Link to="https://ecoronation.com/motor" target='_blank' rel='noopener noreferrer'>GET A QUOTE</Link>

                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                            {isTravelModalOpen && (
                                <TheftFeature closeModal={() => setIsTravelModalOpen(false)} /> // Pass close function to the modal
                            )}

                            {/* Third Party Only Section */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <h2 className={`${isExpanded.thirdPartyOnly ? "text-black lg:text-[24px] text-[16px]" : "text-[#888991]"
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
                                        <span className="lg:w-[906px] w-[347px] h-[72px] lg:text-[16px] text-[12px] leading-[24px] font-normal text-[#888991]">
                                            It is a simple insurance product which covers the policy holder against legal liability to third parties in the event of death, bodily injury, legal cost and property damage involving the insured vehicle. Third party insurance is a mandatory requirement for all vehicles on Ghanaian roads. It became mandatory through the Motor Vehicle (third party) Insurance Act of 1958.
                                        </span>
                                        <div className="flex gap-4">
                                            <span onClick={() => setIsPartyModalOpen(true)} className="w-[142px] h-[36px] bg-[#FF0226] font-semibold text-[14px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                                Insurance Features
                                            </span>
                                            <span className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold text-[14px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                                <Link to="https://ecoronation.com/motor" target='_blank' rel='noopener noreferrer'>GET A QUOTE</Link>
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                            {isPartyModalOpen && (
                                <PartyFeature closeModal={() => setIsPartyModalOpen(false)} /> // Pass close function to the modal
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:p-20 p-4 small:p-10">
                    <div className="w-full lg:h-[450px] md:h-[500px] h-[700px]">
                        <div className="w-full h-[108px]">
                            <h2 className="text-[40px] leading-[44px] font-semibold">BENEFITS</h2>
                            <div className="flex lg:flex-row md:flex-row  flex-col lg:items-center justify-between">
                                <span className="lg:w-[518px] w-[296px] lg:h-[48px] h-[60px] text-[14px] leading-[20px] text-[#56575D]">
                                    The product has been designed with a combination of <br className="hidden lg:block" />Enhanced term life which gives you an additional benefit.
                                </span>
                                <div className="w-[122px] h-[36px] bg-[#FF0226] font-semibold text-[14px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                    <Link to="https://ecoronation.com/motor" target='_blank' rel='noopener noreferrer'>GET A QUOTE</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-4 gap-8 lg:mt-4 mt-20">
                            <div className="flex-1 flex flex-col lg:h-[300px] w-[347px] gap-4 bg-white border rounded-lg shadow-md p-4">
                                <div className="h-[192px]">
                                    <div className="lg:text-[24px] text-[18px] lg:leading-[32px] leading-[24px] font-semibold">COMPREHENSIVE INSURANCE</div>
                                    <div className="pl-6 mt-2">
                                        <ul className="list-disc flex flex-col gap-2">
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Third party bodily injury & death - unlimited</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Third party property damage limit: GHS6,000</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Reimbursement of legal fees if policy holder is prosecuted in court over an accident resulting in a valid claim</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Waives your windscreen excess</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Multi-car Discount</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link className="font-semibold text-[14px] leading-[20px] text-black mt-6">
                                    Learn More
                                </Link>
                            </div>
                            <div className="flex-1 flex flex-col lg:h-[300px] w-[347px] gap-4 bg-white border rounded-lg shadow-md p-4">
                                <div className="lg:h-[192px]">
                                    <div className="lg:text-[24px] text-[18px] lg:leading-[32px] leading-[24px] font-semibold">THIRD PARTY FIRE & THEFT</div>
                                    <div className="pl-6 mt-2">
                                        <ul className="list-disc flex flex-col gap-2">
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">No-Claim discount at renewal</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Multi-car Discount</li>
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
                    <img src={product5} alt="banner" className="hidden lg:block w-full bg-cover" />
                    <img src={motorbanner} alt="banner" className="lg:hidden block w-full bg-cover" />
                    <div className="absolute top-[48%] left-[7%] lg:text-[56px] text-[32px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                    <div className="hidden bg-[#FF0226] absolute top-[48%] right-[7%] w-[108px] h-[44px] lg:flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RedMotor