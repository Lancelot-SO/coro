/* eslint-disable react/no-unescaped-entities */
import "./global.css"
import motorbg from "../assets/purplemotor/motorbg.png"
import student from "../assets/purpletravel/student1.png"
import travelguy from "../assets/purpletravel/travelguy.png"

import StudentFeature from "../features/StudentFeature";
import { useState } from "react";
import IndividualFeature from "../features/IndividualFeature";

import travelmob from "../assets/purpletravel/travelmob.png"
import travelbenefit from "../assets/purpletravel/travelbenefit.png"
import { Link } from "react-router-dom";

const PurpleTravel = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isIndModalOpen, setIsIndModalOpen] = useState(false);



    return (
        <div className="overflow-hidden">
            <div className="flex lg:flex-row flex-col-reverse w-full lg:h-[450px] h-[678px]">
                <div className="flex-1 flex-col bg-[#EFEFF0] flex lg:items-center justify-center">
                    <div className="p-4">
                        <h2 className="lg:text-[56px] text-[32px] lg:leading-[64px] leading-[40px] font-bold">Travel Insurance</h2>
                        <p className="lg:w-[560px] md:w-[600px] w-[319px] lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4">
                            Travel insurance provides cover for risks associated with travelling out of your country of residence on a temporary basis.
                            This cover includes medical expenses as a result of accident or illness, cost of repatriation and financial
                            compensation to your beneficiaries in the event of unfortunate case of death while under cover and many more.
                        </p>
                    </div>
                </div>
                <div className="">
                    <img src={motorbg} alt="about" className="hidden lg:flex bg-cover w-full h-full" loading="lazy" />
                    <img src={travelmob} alt="about" className="flex lg:hidden md:h-[500px] bg-cover w-full h-[458px]" loading="lazy" />
                </div>
                <div className="glass absolute lg:bottom-[137px] md:bottom-[235px] small:bottom-[305px]
                 xxsm:bottom-[216px] nsm:bottom-[268px] msm:bottom-[112px] rsm:bottom-[287px]
                 xsm:bottom-[39px] bottom-[268px] right-0 lg:w-[385px] w-[243px] lg:h-[164px] h-[140px]">
                    <div className="lg:p-4 p-2">
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

            <section>
                <div className="w-full h-[250px] bg-black lg:px-28 px-4 items-center lg:py-12 md:py-20 py-10">
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
                <div className="w-full lg:h-[630px] md:h-[500px] h-[900px] lg:px-28 px-4 lg:py-20 py-10">
                    <div className="flex lg:flex-row md:flex-row flex-col gap-6 lg:w-[1280px] h-full">
                        <div className="lg:w-[627px] w-[347px] lg:h-[540px] h-[404px] p-4 border border-b-4 border-b-[#B580D1] bg-white rounded-lg shadow-lg">
                            <img
                                src={student} alt="hero"
                                className="lg:w-[580px] w-[343px] lg:h-[280px] h-[220px] rounded-lg bg-cover"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                    STUDENT
                                </h3>
                                <p className="w-full lg:h-[72px] h-[50px] font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] text-[#56575d] lg:mt-6 mt-4">
                                    Protection for students that study outside their country or travel for school excursion.
                                </p>
                                <div onClick={() => setIsModalOpen(true)} className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center lg:mt-6">
                                    Insurance Features
                                </div>
                            </div>
                        </div>
                        {isModalOpen && (
                            <StudentFeature closeModal={() => setIsModalOpen(false)} /> // Pass close function to the modal
                        )}
                        <div className="lg:w-[627px] w-[347px] lg:h-[540px] h-[404px] p-4 border border-b-4 border-b-[#B580D1] bg-white rounded-lg shadow-lg">
                            <img
                                src={travelguy} alt="hero"
                                className="lg:w-[580px] w-[343px] lg:h-[280px] h-[220px] rounded-lg bg-cover"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                    INDIVIDUALS
                                </h3>
                                <p className="w-full lg:h-[72px] h-[50px] font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] text-[#56575d] lg:mt-6 mt-4">
                                    Traveling abroad? Solo or with people? Business or leisure, we’ve got something to make the journey better.
                                </p>
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
                <div className="lg:p-20">
                    <div className="flex lg:flex-row flex-col w-full lg:h-[510px] md:h-[630px] h-[784px]">
                        <div className="flex-1 h-full">
                            <img src={travelbenefit} alt="travel" className="object-cover lg:h-full h-[320px] w-full" loading="lazy" />
                        </div>
                        <div className="flex-1 h-full flex lg:items-center justify-center p-4 lg:p-0">
                            <div className=" lg:w-[604px] lg:h-[380px] flex flex-col items-start justify-center gap-4">
                                <h2 className="text-black lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-semibold">
                                    BENEFITS
                                </h2>
                                <span className="lg:w-[518px] lg:h-[48px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-semibold text-[#56575D]">
                                    The product has been designed with a combination of Enhanced term life which gives you an additional benefit.
                                </span>

                                <div className="pl-6">
                                    <ul className="list-disc flex flex-col gap-2">
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Payment of medical assistance for illness or accident sustained while travelling</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Provides transport or repatriation for medical reasons for the insured and/or family members travelling with the insured</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Provides transport or repatriation of mortal remains of insured</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Communication of urgent messages related to any event covered in the policy</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Payment of compensation for in-flight loss of checked-in luggage</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Payment of compensation for delay of flight and delay of luggage.</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Emergency return home following the death of a close family member</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleTravel