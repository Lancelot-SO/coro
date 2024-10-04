/* eslint-disable react/no-unescaped-entities */
import "./global.css"
import motorbg from "../assets/purplemotor/motorbg.png"
import hero1 from "../assets/redmotor/redmotor.png"
import hero2 from "../assets/engineer/engineer3.png"
import engineer6 from "../assets/engineer/engineer6.png"
import StudentFeature from "../features/StudentFeature";
import { useState } from "react";
import IndividualFeature from "../features/IndividualFeature";

import travelmob from "../assets/purpletravel/travelmob.png"
import travelbenefit from "../assets/purpletravel/travelbenefit.png"
import { Link } from "react-router-dom"

const Engineer = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isIndModalOpen, setIsIndModalOpen] = useState(false);



    return (
        <div className="overflow-hidden">
            <div className="flex lg:flex-row flex-col-reverse w-full lg:h-[450px] h-[678px]">
                <div className="flex-1 flex-col bg-[#EFEFF0] flex lg:items-center justify-center">
                    <div className="p-4">
                        <h2 className="lg:text-[56px] text-[32px] lg:leading-[64px] leading-[40px] font-bold">Engineering Insurance</h2>
                        <p className="lg:w-[560px] md:w-[700px] w-[319px] lg:text-[16px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4">
                            This is a product that covers the risk of accidental, physical loss or damage in respect to contract works,
                            during the execution of a civil project. It also covers legal liability falling on the insured's contractor
                            as a result of bodily injury or property damage belonging to a third party. It also covers“All risks” of theft,
                            loss or accidental damage to property insured subject to terms, exceptions and conditions of the policy.
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={motorbg} alt="about" className="hidden lg:flex bg-cover w-full h-full" loading="lazy" />
                    <img src={travelmob} alt="about" className="flex lg:hidden bg-cover w-full h-[458px]" loading="lazy" />
                </div>
                <div className="glass absolute bg-[#FF0226] bg-opacity-70 lg:bottom-[112px] md:bottom-[200px] msm:bottom-[146px]
                nsm:bottom-[262px] small:bottom-[298px] xsm:bottom-[33px] xxsm:bottom-[210px] rsm:bottom-[282px]
                bottom-[220px] right-0 lg:w-[385px] w-[243px] lg:h-[164px] h-[140px]">
                    <div className="lg:p-4 p-2">
                        <span className="text-white w-[300px] h-[32px] lg:text-[24px] leading-[32px] font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[12px] leading-[24px] font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex lg:mt-5 mt-2 lg:w-[116px] w-[95px] h-[36px] bg-black font-semibold lg:text-[14px] text-[10px] leading-[20px] text-white items-center justify-center">
                            GET A QUOTE
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="w-full h-[250px] bg-black lg:px-20 px-4 items-center lg:py-12 md:py-20 py-10">
                    <div className="flex flex-col">
                        <h3 className="text-white lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-bold lg:w-[572px]">
                            WHY CHOOSE CORONATION INSURANCE GHANA LTD?
                        </h3>
                        <div className="flex items-center mt-4">
                            <span className="text-white lg:text-[18px] md:text-[16px] text-[14px] leading-[24px] font-normal w-[703px] h-[48px]">
                                No matter where you are in the world, you’ll enjoy the support and cover you need. There’s a reason we’re one of Africa’s most respected insurance companies.                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full lg:h-[800px] md:h-[900px] h-[1600px] lg:px-28 px-4 small:p-10 lg:py-20 py-10">
                    <div className="flex lg:flex-row md:flex-row flex-col gap-6 lg:w-[1280px] h-full">
                        <div className="lg:w-[627px] w-[347px] lg:h-[770px] md:h-[790px] h-[690px] p-4 border border-b-4 border-b-[#FF0226] bg-white rounded-lg shadow-lg">
                            <img
                                src={hero1} alt="hero"
                                className="lg:w-full w-[343px] lg:h-[280px] h-[220px] rounded-lg bg-cover"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                    Plant All - Risk
                                </h3>
                                <div className="pl-6 mt-2">
                                    <ul className="list-disc flex flex-col gap-2">
                                        <li className="text-[14px] text-[#56575D]">Indemnifies in the event of Short-circuit, disruption, electrical overpressure</li>
                                        <li className="text-[14px] text-[#56575D]">Failure of operation of safety devices</li>
                                        <li className="text-[14px] text-[#56575D]">Structural defects, material defects or defects of assembly.</li>
                                        <li className="text-[14px] text-[#56575D]">Fortuitous working accidents such as vibration, maladjustment</li>
                                        <li className="text-[14px] text-[#56575D]">Loosening of parts, abnormal stresses, fatigue, centrifugal force, excessive speed</li>
                                        <li className="text-[14px] text-[#56575D]">Defective or accidental lack of lubrication, water, seizure or local overheating</li>
                                        <li className="text-[14px] text-[#56575D]">Falling, impact, collision or similar occurrences</li>
                                        <li className="text-[14px] text-[#56575D]">Obstruction or the entry of foreign</li>
                                    </ul>
                                </div>
                                <div onClick={() => setIsModalOpen(true)} className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer 
                                shadow-md text-black flex items-center justify-center lg:mt-32 md:mt-24 mt-4">
                                    Insurance Features
                                </div>
                            </div>
                        </div>
                        {isModalOpen && (
                            <StudentFeature closeModal={() => setIsModalOpen(false)} /> // Pass close function to the modal
                        )}
                        <div className="lg:w-[627px] w-[347px] lg:h-[770px] md:h-[790px] h-[750px] p-4 border border-b-4 border-b-[#FF0226] bg-white rounded-lg shadow-lg">
                            <img
                                src={hero2} alt="hero"
                                className="lg:w-full w-[343px] lg:h-[280px] h-[220px] rounded-lg bg-cover"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                    Contractors All - Risk
                                </h3>
                                <div className="pl-6 mt-2">
                                    <ul className="list-disc flex flex-col gap-2">
                                        <li className="text-[14px] text-[#56575D]">This insurance provides an ‘all risk ‘cover for contract work. All perils are covered unless specifically excluded</li>
                                        <li className="text-[14px] text-[#56575D]">This Policy can also extend the policy to cover:</li>
                                        <li className="text-[14px] text-[#56575D]">Temporary buildings and contents on the worksite,Temporary buildings and contents on the worksite,</li>
                                        <li className="text-[14px] text-[#56575D]">The policyholder’s existing property</li>
                                        <li className="text-[14px] text-[#56575D]">Contractors’ plant and equipment brought onto the site</li>
                                        <li className="text-[14px] text-[#56575D]">Clearance of debris,</li>
                                        <li className="text-[14px] text-[#56575D]">Professional advisers’ fees</li>
                                        <li className="text-[14px] text-[#56575D]">Off-site storage cover</li>
                                        <li className="text-[14px] text-[#56575D]">Covers damages or loss of materials in transit</li>
                                        <li className="text-[14px] text-[#56575D]">Covers loss or damage to properties in</li>
                                    </ul>
                                </div>
                                <div onClick={() => setIsIndModalOpen(true)} className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                    Insurance Features
                                </div>
                            </div>
                        </div>
                        {isIndModalOpen && (
                            <IndividualFeature closeModal={() => setIsIndModalOpen(false)} /> // Pass close function to the modal
                        )}
                    </div>
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row flex-col lg:mt-40 mt-0 lg:px-28 px-0 lg:gap-10 gap-6">
                    <div>
                        <img src={travelbenefit} alt="engineer" className="w-[628px] md:ml-[70px] lg:ml-0 ml-0 h-[452px]" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="lg:w-[467px] md:w-[650px] w-[375px] lg:h-[328px] md:h-[300px] h-[400px] px-4 lg:px-0">
                            <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                Machinery Breakdown
                            </h3>
                            <p className="mt-2">
                                This policy is designed to indemnify the insured against damage to the machinery (already fixed and in use) caused by breakdown,
                                principally from the sources within the machinery It covers unforeseen and sudden physical loss of or damage to the insured items,
                                necessitating their repair or replacement. The breakdown could result to the machinery while Working or at rest Being dismantled,
                                moved or re-erected for the purposes of cleaning, inspection, repair or installation in another position within the premises stated in the policy.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-white flex items-center justify-center mt-6">
                                    Insurance Features
                                </div>
                                <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                    Request & Pay
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row flex-col-reverse items-center justify-between lg:px-32 px-0 lg:mt-40 mt-4 lg:gap-10 gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="lg:w-[467px] md:w-[650px] w-[375px] lg:h-[328px] md:h-[300px] h-[400px] px-4 lg:px-0">
                            <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                Erection All - Risk
                            </h3>
                            <div className="pl-6 mt-2">
                                <ul className="list-disc flex flex-col gap-2">
                                    <li className="text-[14px] text-[#56575D]">Indemnifies in the event of fire, lightning, explosion, aircraft damage, riot, strike, malicious act, flood, inundation, storm, cyclone and allied perils</li>
                                    <li className="text-[14px] text-[#56575D]">Indemnifies in the event of landslide, subsidence and rockslide</li>
                                    <li className="text-[14px] text-[#56575D]">Indemnifies in the event of burglary and/or theft of the subject matter</li>
                                </ul>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-white flex items-center justify-center mt-6">
                                    Insurance Features
                                </div>
                                <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                    Request & Pay
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={travelbenefit} alt="engineer" className="w-[628px] h-[452px]" />
                    </div>
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row flex-col lg:mt-40 mt-0 lg:px-28 px-0 lg:gap-10 gap-6">
                    <div>
                        <img src={engineer6} alt="engineer" className="w-[628px] md:ml-[70px] lg:ml-0 ml-0 h-[452px]" />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="lg:w-[467px] md:w-[650px] w-[375px] lg:h-[328px] md:h-[300px] h-[430px] px-4 lg:px-0 mt-4 lg:mt-0">
                            <h3 className="lg:w-[437PX] w-[307px] lg:h-[88px] h-[50px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                Electronic Equipment Computer All - Risk
                            </h3>
                            <p className="mt-2">
                                A Computer All Risk Policy seeks to cover electronic equipment risks ranging from all sudden and unforeseen physical losses,
                                which are not subject of exclusions, listed in insurance conditions
                            </p>
                            <div className="pl-6 mt-2">
                                <ul className="list-disc flex flex-col gap-2">
                                    <li className="text-[14px] text-[#56575D]">This insurance provides an ‘all risk ‘cover for electronic equipments. All perils are covered unless specifically excluded The electronic equipment may range from industrial to IT related equipment e.g. Servers, routers, UPS, Stabilizers etc.</li>
                                    <li className="text-[14px] text-[#56575D]">It provides cover for increase cost of working as result of loss.</li>
                                </ul>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-white flex items-center justify-center mt-6">
                                    Insurance Features
                                </div>
                                <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                    Request & Pay
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:p-20 p-4 small:p-10">
                    <div className="w-full lg:h-[450px] md:h-[550px] h-[900px]">
                        <div className="w-full h-[108px]">
                            <h2 className="text-[40px] leading-[44px] font-semibold">BENEFITS</h2>
                            <div className="flex lg:flex-row flex-col lg:items-center justify-between mt-2">
                                <span className="lg:w-[518px] md:w-[400px] w-[296px] lg:h-[48px] h-[60px] text-[14px] leading-[20px] text-[#56575D]">
                                    The product has been designed with a combination of Enhanced term life which gives you an additional benefit.                                </span>
                            </div>
                        </div>
                        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-4 gap-8 lg:mt-4 mt-10">
                            <div className="flex-1 flex flex-col lg:h-[350px] md:h-[350px] h-[600px] w-[347px] gap-4 bg-white border-4 border-t-1 border-x-0 border-b-[#FF0226] rounded-lg shadow-md p-4">
                                <div className="lg:h-[252px] h-full">
                                    <div className="lg:text-[24px] text-[18px] lg:leading-[32px] leading-[24px] font-semibold">COMPREHENSIVE INSURANCE</div>
                                    <div className="pl-6 mt-2">
                                        <ul className="list-disc flex flex-col gap-2">
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Free tracker for vehicles with value GHS100,000</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">No-Claim discount at renewal</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Reimbursement of legal fees if policy holder is prosecuted in court over an accident resulting in a valid claim</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Nil depreciation on total write off for a brand new vehicle of less than twelve months</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Waives your windscreen excess</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Foreign Use (Ecowas Countries) for additional premium</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Multi-car Discount</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link className="font-semibold text-[14px] leading-[20px] text-black lg:mt-6 md:mt-0">
                                    Learn More
                                </Link>
                            </div>
                            <div className="flex-1 flex flex-col lg:h-[350px] h-[350px] w-[347px] gap-4 bg-white border-4 border-t-1 border-x-0 border-b-[#FF0226] rounded-lg shadow-md p-4">
                                <div className="lg:h-[252px]">
                                    <div className="lg:text-[24px] text-[18px] lg:leading-[32px] leading-[24px] font-semibold">THIRD PARTY FIRE & THEFT</div>
                                    <div className="pl-6 mt-2">
                                        <ul className="list-disc flex flex-col gap-2">
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Free tracker for vehicles with value GHS100,000</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">No-Claim discount at renewal</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Reimbursement of legal fees if policy holder is prosecuted in court over an accident resulting in a valid claim</li>
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]">Foreign Use (Ecowas Countries) for additional premium</li>
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
        </div>
    )
}

export default Engineer