/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import homebg from "../assets/purplehome/purplehomebg.png"
import hero1 from "../assets/purplehome/hero1.png"
import hero2 from "../assets/purplehome/hero2.png"
import bannerbg from "../assets/purplehome/bannerbg.png"


import heroInsight from "../assets/purplehome/homeInsight1.png"
import heroInsight3 from "../assets/purplehome/homeInsight3.png"




const PurpleHome = () => {
    return (
        <div className="">
            <div className="w-full flex">
                <div className="flex flex-1 bg-black items-center pl-20">
                    <div className="w-[545px] h-[228px]">
                        <h1 className="text-white w-[522px] h-[128px] text-[56px] leading-[64px] font-semibold">Your Partner in Ghana Prosperity</h1>
                        <p className="w-[543px] text-white h-[84px] text-opacity-80 text-[20px] font-medium leading-[28px] mt-2">
                            We are a leading African financial services partner that helps build financial independence and enduring legacies that lead to sustainable wealth creation in Africa
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={homebg} alt="home" className="w-full h-[540px] bg-cover" loading="lazy" />
                </div>
            </div>
            <div className="flex w-full h-[120px] bg-[#B580D1] items-center justify-between px-20">
                <div className="text-[32px] font-semibold leading-[40px] text-white">
                    My Insurance Account
                </div>
                <div className="flex text-[16px] leading-[30px] font-semibold w-[120px] h-10 bg-white rounded-lg items-center justify-center">
                    <Link to="/" >Request & Pay</Link>
                </div>
            </div>
            <section>
                <div className="w-full h-[800px] px-24 py-20">
                    <div className="flex gap-6 w-[1280px] h-full">
                        <div className="w-[630px] h-[640px]">
                            <img
                                src={hero1} alt="hero"
                                className="rounded-lg bg-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full h-[40px] font-semibold text-[32px] leading-[40px] mt-2">
                                    Products & Solutions for The Individual
                                </h3>
                                <p className="w-full h-[72px] font-normal text-[16px] leading-[24px] text-[#56575d] mt-6">
                                    Get a wide range of financial solutions with Coronation. We offer superior customer service, innovative product solutions, excellent financial advice and more. Let’s be your prosperity partner today.
                                </p>
                                <div className="w-[111px] h-[44px] bg-[#B580D1] shadow-md text-white flex items-center justify-center rounded-xl mt-8">
                                    <Link to="/">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-[630px] h-[640px]">
                            <img
                                src={hero2} alt="hero"
                                className="rounded-lg bg-cover transition-transform duration-500 ease-in transform hover:scale-10"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full h-[40px] font-semibold text-[32px] leading-[40px] mt-2">
                                    Our Company Overview
                                </h3>
                                <p className="w-full h-[72px] font-normal text-[16px] leading-[24px] text-[#56575d] mt-6">
                                    Live your best life with Coronation Insurance. Make a decision to protect those that matter to you.
                                </p>
                                <div className="flex gap-6">
                                    <div className="w-[111px] h-[44px] bg-[#B580D1] shadow-md text-white flex items-center justify-center rounded-xl mt-8">
                                        <Link to="/">Learn More</Link>
                                    </div>
                                    <div className="w-[111px] h-[44px] bg-[#F7F7F8] shadow-md text-[#141415] flex items-center justify-center rounded-xl mt-8">
                                        <Link to="/">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[700px] bg-[#F4F5F7] p-20">
                    <div className="flex flex-col w-full h-[588px]">
                        <div className="w-full h-[88px]">
                            <h3 className="text-[40px] font-semibold leading-[44px] text-[141415]">
                                Our Insights
                            </h3>
                            <div className="flex items-center justify-between">
                                <span className="text-[20px] font-medium leading-[28px] text-[#888991]">
                                    Hear the latest trends from our industry experts
                                </span>
                                <div className="w-[97px] h-[44px] bg-[#B580D1] rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center">
                                    <Link>See more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-10 mt-4 pl-3">
                            <div className="w-[416px] h-[452px] shadow-lg rounded-md bg-white p-4">
                                <img src={heroInsight} alt="heroins" className="bg-cover" loading="lazy" />
                                <h3 className="w-[384px] h-[32px] text-[24px] leading-[32px] font-semibold mt-2">
                                    Staying Ahead of the Storm
                                </h3>
                                <p className="w-[384px] h-[48px] text-[18px] leading-[24px] font-normal text-[#56575D] mt-2">
                                    In today's age of global warming, characterised by a rise in the frequency and severity of flood...
                                </p>
                                <div className="mt-6 text-[#B580D1]">
                                    <Link to="/">Read More</Link>
                                </div>
                            </div>
                            <div className="w-[416px] h-[452px] shadow-lg rounded-md bg-white p-4">
                                <img src={heroInsight} alt="heroins" className="bg-cover" loading="lazy" />
                                <h3 className="w-[384px] h-[32px] text-[22px] leading-[32px] font-semibold mt-2">
                                    Revolutionising Customer Experience
                                </h3>
                                <p className="w-[384px] h-[48px] text-[18px] leading-[24px] font-normal text-[#56575D] mt-2">
                                    Regardless of industry or sector, almost all businesses today are seeking to digitalise their...
                                </p>
                                <div className="mt-6 text-[#B580D1]">
                                    <Link to="/">Read More</Link>
                                </div>
                            </div>
                            <div className="w-[416px] h-[452px] shadow-lg rounded-md bg-white p-4">
                                <img src={heroInsight3} alt="heroins" className="bg-cover" loading="lazy" />
                                <h3 className="w-[384px] h-[32px] text-[24px] leading-[32px] font-semibold mt-2">
                                    A Strategy For Resilience
                                </h3>
                                <p className="w-[384px] h-[48px] text-[18px] leading-[24px] font-normal text-[#56575D] mt-2">
                                    The Role of Insurance in Your Retail Business's Long-Term Plan
                                </p>
                                <div className="mt-6 text-[#B580D1]">
                                    <Link to="/">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[248px] bg-black px-28 items-center py-20">
                    <div className="flex flex-col">
                        <h3 className="text-white text-[40px] leading-[44px] font-bold">
                            We are affiliated to the Group
                        </h3>
                        <div className="flex items-center justify-between">
                            <span className="text-white text-[20px] leading-[28px] font-medium">
                                We are affiliated to our mother company in Nigeria
                            </span>
                            <div className="w-[97px] h-[44px] bg-white rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center">
                                <Link to="/">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={bannerbg} alt="banner" className="w-full bg-cover" />
                    <div className="absolute top-[48%] left-[7%] text-[56px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PurpleHome