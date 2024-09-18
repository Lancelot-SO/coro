/* eslint-disable react/no-unescaped-entities */
import "./global.css"
import motorbg from "../assets/purplemotor/motorbg.png"
import hero1 from "../assets/purplehome/hero1.png"

const PurpleTravel = () => {
    return (
        <div>
            <div className="flex w-full h-[450px] bg-red-500 ">
                <div className="flex-1 flex-col bg-[#EFEFF0] flex items-center justify-center">
                    <div className=" ">
                        <h2 className="text-[56px] leading-[64px] font-bold">Travel Insurance</h2>
                        <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                            Travel insurance provides cover for risks associated with travelling out of your country of residence on a temporary basis.
                            This cover includes medical expenses as a result of accident or illness, cost of repatriation and financial
                            compensation to your beneficiaries in the event of unfortunate case of death while under cover and many more.
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

            <section>
                <div className="w-full h-[290px] bg-black px-28 items-center py-20">
                    <div className="flex flex-col">
                        <h3 className="text-white text-[40px] leading-[44px] font-bold w-[572px]">
                            WHY CHOOSE CORONATION INSURANCE GHANA LTD?
                        </h3>
                        <div className="flex items-center mt-4">
                            <span className="text-white text-[18px] leading-[24px] font-normal w-[703px] h-[48px]">
                                No matter where you are in the world, you’ll enjoy the support and cover you need. There’s a reason we’re one of Africa’s most respected insurance companies.                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[800px] px-28 py-20">
                    <div className="flex gap-6 w-[1280px] h-full">
                        <div className="w-[627px] h-[640px] p-4 border border-b-4 border-b-[#B580D1] bg-white rounded-lg shadow-lg">
                            <img
                                src={hero1} alt="hero"
                                className="rounded-lg bg-cover "
                                loading="lazy" />
                            <div>
                                <h3 className="w-full h-[40px] font-semibold text-[32px] leading-[40px] mt-2">
                                    STUDENT
                                </h3>
                                <p className="w-full h-[72px] font-normal text-[16px] leading-[24px] text-[#56575d] mt-6">
                                    Protection for students that study outside their country or travel for school excursion.
                                </p>
                                <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold text-[14px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                    Insurance Features
                                </div>
                            </div>
                        </div>
                        <div className="w-[627px] h-[640px] p-4 border border-b-4 border-b-[#B580D1] bg-white rounded-lg shadow-lg">
                            <img
                                src={hero1} alt="hero"
                                className="rounded-lg bg-cover "
                                loading="lazy" />
                            <div>
                                <h3 className="w-full h-[40px] font-semibold text-[32px] leading-[40px] mt-2">
                                    INDIVIDUALS
                                </h3>
                                <p className="w-full h-[72px] font-normal text-[16px] leading-[24px] text-[#56575d] mt-6">
                                    Traveling abroad? Solo or with people? Business or leisure, we’ve got something to make the journey better.
                                </p>
                                <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold text-[14px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                    Insurance Features
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