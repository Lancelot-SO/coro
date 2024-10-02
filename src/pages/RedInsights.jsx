/* eslint-disable react/no-unescaped-entities */
import insightmainbg from "../assets/purpleinsight/insightmain.png"
import insight3 from "../assets/purpleinsight/insight3.png"
import insight4 from "../assets/purpleinsight/insight4.png"
import RedArticles from "../components/RedArticles"
import insightbanner from "../assets/purpleinsight/insightbanner.png"
import { Link } from "react-router-dom"
import "./global.css"
const RedInsights = () => {
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img src={insightmainbg} alt="about" className="w-full bg-cover h-[600px]" loading="lazy" />
                <div className="absolute lg:top-[350px] top-[350px] lg:left-20 left-4 lg:w-[858px] md:w-[600px] h-[152px] ">
                    <h2 className="lg:text-[56px] text-[32px] lg:w-[720px] md:w-[500px] w-[328px] lg:h-[128px] md:h-[100px] h-[120px] font-bold lg:leading-[64px] leading-10 mb-4 md:mb-0 lg:mb-4 text-white">We guarantee the future of the things you care about!</h2>
                    <span className="lg:w-[681px] w-[100px] lg:h-[48px] h-[60px] lg:text-[18px] md:text-[20px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white">
                        Our award winning content provides research and insights that enables<br className="hidden lg:block" /> you navigate Africa's unique challenges.
                    </span>
                </div>
                <div className="glass bg-[#FF0226] bg-opacity-70 absolute lg:top-[360px] top-5 lg:right-20 right-5 lg:w-[300px] w-[250px] lg:h-[174px] h-[160px] rounded-lg shadow-md">
                    <div className="lg:p-6 p-4">
                        <span className="text-white w-[232px] h-[32px] lg:text-[24px] text-[18px] lg:leading-[32px] leading-[24px] font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal mt-2">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[111px] h-[35px] bg-black text-white items-center justify-center">
                            <Link to="https://coronation.ng/contact-us/" target='_blank' rel='noopener noreferrer'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="lg:p-20 p-4">
                    <div className="w-[1280px] lg:h-[800px] flex flex-col lg:gap-12">
                        <h2 className="w-full h-[44px] lg:text-[40px] text-[24px] font-bold lg:leading-[44px] leading-[32px]">Read all our articles</h2>

                        <div className="w-full lg:h-[708px] md:h-[500px] h-[380px] flex flex-col lg:gap-6 md:gap-10 gap-4">
                            <div className="w-full lg:h-[342px] h-[200px] flex flex-row">
                                <div className="lg:flex-1">
                                    <img src={insight3} alt="insight" className="object-cover rounded-md lg:w-[630px] md:w-[400px] w-[167px] lg:h-[342px] md:h-[220px] h-[170px]" />
                                </div>
                                <div className="lg:flex-1 h-[170px] lg:h-[342px] md:h-[220px] w-[167px] flex flex-col gap-2 lg:items-center md:items-center md:justify-center lg:justify-center px-2">
                                    <div className="lg:pl-8 md:pl-64 pl-0 py-2 lg:py-0">
                                        <div className="flex lg:flex-row  md:flex-row flex-col lg:gap-10 md:gap-8">
                                            <h3 className="text-[12px] text-[#888991]">Thought leadership articles</h3>
                                            <ul className="lg:list-disc md:list-disc">
                                                <li className="text-[12px] text-[#888991]">Nov 22, 2022</li>
                                            </ul>
                                        </div>
                                        <h2 className="lg:w-[512px] md:w-[400px] w-[160px] h-auto md:h-[60px] text-left md:text-left">
                                            Insurance customer experience: meeting the expectations of today's customers (part 1)
                                        </h2>
                                        <span className="hidden lg:flex lg:w-[512px] w-[347px] h-auto md:h-[60px] text-[#888991] text-[12px] lg:text-[16px] text-center md:text-left">
                                            The service landscape evolved over the last two decades. New service delivery frontiers
                                            have emerged in response to significant socio-economic changes e.g., advancements in digital, the rise of start-ups etc.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:h-[342px] h-[200px] flex flex-row">
                                <div className="lg:flex-1">
                                    <img src={insight4} alt="insight" className="object-cover rounded-md lg:w-[630px] md:w-[400px] w-[167px] lg:h-[342px] md:h-[220px] h-[170px]" />
                                </div>
                                <div className="lg:flex-1 h-[170px] lg:h-[342px] md:h-[220px] w-[167px] flex flex-col gap-2 lg:items-center md:items-center md:justify-center lg:justify-center px-2">
                                    <div className="lg:pl-8 md:pl-64 pl-0 py-2 lg:py-0">
                                        <div className="flex lg:flex-row  md:flex-row flex-col lg:gap-10 md:gap-8">
                                            <h3 className="text-[12px] text-[#888991]">Thought leadership articles</h3>
                                            <ul className="lg:list-disc md:list-disc">
                                                <li className="text-[12px] text-[#888991]">Nov 22, 2022</li>
                                            </ul>
                                        </div>
                                        <h2 className="lg:w-[512px] md:w-[400px] w-[160px] h-auto md:h-[60px] text-left md:text-left">
                                            Insurance customer experience: meeting the expectations of today's customers (part 1)
                                        </h2>
                                        <span className="hidden lg:flex lg:w-[512px] w-[347px] h-auto md:h-[60px] text-[#888991] text-[12px] lg:text-[16px] text-center md:text-left">
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
                <div className="lg:p-20">
                    <div className="w-[1280px] md:w-full">
                        <RedArticles />
                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={insightbanner} alt="banner" className="w-full lg:h-[284px] h-[120px] bg-cover" />
                    <div className="absolute lg:top-[25%] top-2 left-[7%] lg:text-[56px] text-[24px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                    <div className="bg-[#FF0226] text-white absolute lg:top-[60%] top-16 left-[7%] w-[108px] h-[44px] flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RedInsights