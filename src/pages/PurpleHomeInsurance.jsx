/* eslint-disable react/no-unescaped-entities */
import "./global.css"
import homebg from "../assets/purplehomeIns/homebg.png"
import homeIns1 from "../assets/purplehomeIns/homeIns1.png"
import homeIns2 from "../assets/purplehomeIns/homeIns2.png"
import homeIns3 from "../assets/purplehomeIns/homeIns3.png"

import { Link } from "react-router-dom"


const PurpleHomeInsurance = () => {
    return (
        <div>
            <div className="relative">
                <img src={homebg} alt="about" className="w-full bg-cover" loading="lazy" />
                <div className="absolute top-[280px] left-20 w-[858px] h-[152px]">
                    <h2 className="text-[56px] font-bold leading-[64px] text-white">Home Insurance</h2>
                    <span className="w-[681px] h-[48px] text-[16px] font-normal leading-[24px] text-white">
                        Ask yourself: do you want your home to be protected in the event of flood, fire, theft or other accidental damage?
                        Or would you rather deal with the expense and the stress on your own? Add to that the fact that some mortgage providers might require you to have building cover.
                        It’s more than a minor detail. We’ll cover your house and belongings against life’s unexpected events. We offer building and contents insurance – plus a range of added extras to make sure you get the protection you need.
                    </span>
                </div>
                <div className="absolute top-[280px] right-20 w-[300px] h-[174px] bg-black bg-opacity-40 rounded-lg shadow-md">
                    <div className="p-6">
                        <span className="text-white w-[232px] h-[32px] text-[24px] leading-[32px] font-semibold">My Insurance Account</span>
                        <p className="text-white text-[16px] leading-[24px] font-normal mt-2">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[111px] h-[35px] bg-[#B580D1] text-white rounded-lg items-center justify-center">
                            GET A QUOTE
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="w-full h-[290px] bg-black px-20 items-center py-20">
                    <div className="flex flex-col">
                        <h3 className="text-white text-[40px] leading-[44px] font-bold w-[572px]">
                            HOME INSURANCE THAT SUITS YOUR NEEDS
                        </h3>
                        <div className="flex items-center mt-4">
                            <span className="text-white text-[18px] leading-[24px] font-normal w-[703px] h-[48px]">
                                Whether it’s theft, damage by extreme weather, fire, burst pipes and other losses, we have the right cover for you.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <sction>
                <div>
                    <div className="flex w-full">
                        <div className=" flex-1 flex-col bg-[#EFEFF0] flex items-center justify-center h-[430px]">
                            <div>
                                <div className="h-[156px]">
                                    <h2 className="text-[32px] leading-[40px] font-semibold">HOMEOWNERS</h2>
                                    <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                                        Home Owners is a comprehensive insurance that covers damage to a building occasioned by flood,
                                        fire and fallen trees as well as injury to visitors to the property.
                                        The product also covers the contents of a home such as furniture & fittings, jewelries,
                                        refrigerator and so on.
                                    </p>
                                </div>
                                <Link className="text-[#B580D1]">Featured Insurance</Link>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img src={homeIns1} alt="about" className="bg-cover w-full h-[430px] object-cover" loading="lazy" />
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="flex-1">
                            <img src={homeIns2} alt="about" className="bg-cover w-full h-[430px] object-cover" loading="lazy" />
                        </div>
                        <div className="flex-1 flex-col flex items-center justify-center h-[430px]">
                            <div>
                                <div className="h-[156px]">
                                    <h2 className="text-[32px] leading-[40px] font-semibold">HOUSEHOLDERS</h2>
                                    <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                                        This policy is designed to meet the needs of the insured who do not own their
                                        home (and therefore do not require building insurance) but still desire protection for their belongings.
                                    </p>
                                </div>
                                <Link className="text-[#B580D1]">Featured Insurance</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </sction>

            <section>
                <div className="flex w-full">
                    <div className="flex-1 flex-col flex items-center justify-center">
                        <div className="w-[604px] ">
                            <h2 className="w-[558px] h-[44px] text-[48px] leading-[56px] font-bold">BENEFITS</h2>
                            <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                                The product has been designed with a combination of Enhanced term life which gives you an additional benefit.
                            </p>
                            <div className="pl-6 mt-2">
                                <ul className="list-disc flex flex-col gap-2">
                                    <li className="text-[16px] text-[#56575D]">Indemnifies in the event of damage to the structures of the house.</li>
                                    <li className="text-[16px] text-[#56575D]">Indemnifies in the event of loss due to burglary (theft) or fire</li>
                                    <li className="text-[16px] text-[#56575D]">The policy will also cover you against liability for accidental injury to third parties or damage to their property that occurs on your premises</li>
                                    <li className="text-[16px] text-[#56575D]">Can be extended to cover larceny (Theft not involving violence or forcible entry/exit is covered</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative flex items-end justify-end">
                        <div className="w-[571px] h-[600px] bg-[#B580D1] ">
                        </div>
                        <img
                            src={homeIns3} alt="about"
                            className="bg-cover h-[400px] absolute top-[100px] right-[150px]"
                            loading="lazy" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleHomeInsurance