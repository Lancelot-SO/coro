/* eslint-disable react/no-unescaped-entities */
import insightmainbg from "../assets/purpleinsight/insightmain.png"
import insight3 from "../assets/purpleinsight/insight3.png"
import insight4 from "../assets/purpleinsight/insight4.png"
import Articles from "../components/Articles"
import insightbanner from "../assets/purpleinsight/insightbanner.png"
import { Link } from "react-router-dom"

const PurpleInsights = () => {
    return (
        <div>
            <div className="relative">
                <img src={insightmainbg} alt="about" className="w-full bg-cover" loading="lazy" />
                <div className="absolute top-[260px] left-20 w-[858px] h-[152px]">
                    <h2 className="text-[56px] w-[720px] h-[128px] font-bold leading-[64px] mb-4 text-white">We guarantee the future of the things you care about!</h2>
                    <span className="w-[681px] h-[48px] text-[18px] font-normal leading-[24px] text-white">
                        Our award winning content provides research and insights that enables<br /> you navigate Africa's unique challenges.</span>
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
                <div className="p-20">
                    <div className="w-[1280px] h-[800px] flex flex-col gap-12">
                        <h2 className="w-full h-[44px] text-[40px] font-bold leading-[44px]">Read all our articles</h2>

                        <div className="w-full h-[708px] flex flex-col gap-6">
                            <div className="w-full h-[342px] flex">
                                <div className="flex-1">
                                    <img src={insight3} alt="insight" />
                                </div>
                                <div className="flex-1 flex flex-col gap-2 items-center justify-center px-2">
                                    <div className="pl-8">
                                        <div className="flex gap-10">
                                            <h3 className="text-[12px] text-[#888991]">Thought leadership articles</h3>
                                            <ul className="list-disc">
                                                <li className="text-[12px] text-[#888991]">Nov 22, 2022</li>
                                            </ul>
                                        </div>
                                        <h2 className="w-[512px] h-[60px]">Insurance customer experience: meeting the expectations of today's customers (part 1)</h2>
                                        <span className="w-[512px] h-[60px] text-[#888991]">
                                            The service landscape evolved over the last two decades. New service delivery frontiers
                                            have emerged in response to significant socio-economic changes e.g., advancements in digital, the rise of start-ups etc.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[342px] flex">
                                <div className="flex-1">
                                    <img src={insight4} alt="insight" />
                                </div>
                                <div className="flex-1 flex flex-col gap-2 items-center justify-center px-2">
                                    <div className="pl-10">
                                        <div className="flex gap-10">
                                            <h3 className="text-[12px] text-[#888991]">Thought leadership articles</h3>
                                            <ul className="list-disc">
                                                <li className="text-[12px] text-[#888991]">Nov 22, 2022</li>
                                            </ul>
                                        </div>
                                        <h2 className="w-[512px] h-[60px]">Insurance customer experience: meeting the expectations of today's customers (part 1)</h2>
                                        <span className="w-[512px] h-[60px] text-[#888991]">
                                            The service landscape evolved over the last two decades. New service delivery frontiers
                                            have emerged in response to significant socio-economic changes e.g., advancements in digital, the rise of start-ups etc.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="p-20">
                    <div className="w-[1280px]">
                        <Articles />
                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={insightbanner} alt="banner" className="w-full h-[284px] bg-cover" />
                    <div className="absolute top-[25%] left-[7%] text-[56px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                    <div className="bg-white absolute top-[70%] left-[7%] w-[108px] h-[44px] flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleInsights