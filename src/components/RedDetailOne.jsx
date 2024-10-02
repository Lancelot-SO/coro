/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";

import brochureUrl from "../assets/purpleinsight/Staying_ahead_of_the_storm.pdf"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

import storm from "../assets/purpleinsight/storm.png"
import { MdOutlineFileDownload } from "react-icons/md";


import Insight13 from "../assets/purpleinsight/insight13.png"
import Insight6 from "../assets/purpleinsight/insight6.png"
import strate from "../assets/purpleinsight/strate.png"

import insightbanner from "../assets/purpleinsight/insightbanner.png"




const RedDetailOne = () => {
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img src={storm} alt="about" className="w-full h-[400px] bg-cover" loading="lazy" />
                <div className="absolute top-[20px] lg:left-20 left-4 w-[858px] h-[152px]">
                    <div className="text-white flex items-center gap-1 mb-2"><IoIosArrowBack /><Link to="/redinsights">Back</Link></div>
                    <span className="w-[681px] h-[48px] lg:text-[40px] text-[24px] font-normal leading-[24px] text-white">
                        Staying ahead of the storm
                    </span>
                    <div className="flex gap-8 mt-3">
                        <h3 className="text-[12px] text-[#888991]">Insurance</h3>
                        <ul className="list-disc">
                            <li className="text-[12px] text-[#888991]">Oct 27, 2023</li>
                        </ul>
                    </div>
                </div>
                <div className="absolute lg:top-[50px] top-[110px] lg:right-20 md:right-[82%] right-[65%] rounded-lg shadow-md">

                    <a href={brochureUrl} download className="flex mt-5 w-[120px] h-[35px] text-[12px] gap-2 bg-white text-black rounded-lg items-center justify-center">
                        <MdOutlineFileDownload size={20} />
                        GET A QUOTE
                    </a>
                </div>
            </div>

            <section>
                <div className="lg:p-20 p-4">
                    <div className="lg:w-[1280px] lg:h-[1672px] flex lg:flex-row md:flex-col flex-col gap-10">
                        <div className="lg:w-[827px] md:w-full w-[347px] h-full flex flex-col gap-4 ">
                            <div className="lg:w-[803px] lg:h-[264px] flex flex-col gap-6">
                                <p className="font-normal text-[16px] leading-[24px] text-[#56575D]">
                                    In today's age of global warming, characterised by a rise in the frequency and severity of floods and fires,
                                    the significance of taking preventive measures cannot be overstated.
                                    Ghana, in particular, experiences periodic flooding attributed to various factors such as heavy rainfall,
                                    inadequate drainage systems, and human activities like improper waste management and urbanisation.
                                    Urban areas of the country are particularly susceptible to frequent flooding during moderate to heavy rainfalls.
                                </p>
                                <p className="font-normal text-[16px] leading-[24px] text-[#56575D]">
                                    The consequences of flooding can be severe, including loss of lives, displacement of people,
                                    property damage, and more. Therefore, it is crucial to identify strategies that can mitigate these impacts.
                                    As we approach the rainy season, it is advisable to take immediate steps to avoid, prevent,
                                    or minimize the adverse effects and costs of flooding.
                                </p>
                            </div>
                            <div className="lg:w-[803px] lg:h-[72px] border-4 border-t-0 border-b-0 border-r-0 border-[#FF0226] flex items-center p-4">
                                <p className="W-[771px] font-medium text-[16px] leading-[24px]">
                                    “With a same-day/24-hour claims payout policy on all household and business covers, Coronation Insurance ensures prompt assistance in times of need through its dedicated account managers.”
                                </p>
                            </div>
                            <div className="lg:W-[771px] lg:h-[72px]">
                                <p className="font-normal text-[16px] leading-[24px] text-[#56575D]">
                                    We have partnered with highly regarded global institutions to build Nigeria's first fully integrated technology-enabled investment platform, thus allowing us to become one of the region's fastest-growing fund managers.
                                </p>
                            </div>
                            <div>
                                <img src={storm} alt="about" className="lg:w-[803px] h-[320px] bg-cover" loading="lazy" />
                            </div>

                            <div className="lg:w-[803px] lg:h-[120px] flex flex-col gap-6">
                                <p className="font-normal text-[16px] leading-[24px] text-[#56575D]">
                                    Although developing a strategy for flood or fire may seem complex,
                                    an insurance product will simplify the process significantly.
                                    It is advisable to consult with risk experts to tailor insurance coverage to
                                    specific risks and working with a reputable and qualified insurer may just be the icing on the cake.
                                    Even more important, is getting a claim paid out when a loss occurs. Coronation Insurance stands out in Ghana for its effective, comprehensive, and speedy claims payment.
                                </p>
                            </div>

                            <div className="lg:w-[803px] lg:h-[264px] flex flex-col gap-2">
                                <h2 className="font-medium text-[24px] leading-8">Here are some key aspects of home insurance:</h2>
                                <ul className="text-[#56575D] text-[16px] leading-6 font-normal list-decimal pl-6 flex flex-col gap-2">
                                    <li>Protects the structure of your home, including its foundation, walls, roof, and attached structures like garages or decks</li>
                                    <li>Covers your personal belongings, such as furniture, appliances, electronics, clothing, and valuables against damage</li>
                                    <li>Provides 3rd party liability cover for events that occur within your premises.</li>
                                    <li>Provides compensation for the cost of alternative accommodation in the event that flood, fire, or other incidents require you to move out of your home during repairs</li>
                                    <li>Provides personal accident cover</li>
                                </ul>
                            </div>

                            <div className="lg:w-[803px] lg:h-[264px] flex flex-col gap-2">
                                <h2 className="font-medium text-[24px] leading-8">Regarding fire risks, it is crucial to adhere to some of the tips below:</h2>
                                <ul className="text-[#56575D] text-[16px] leading-6 font-normal list-decimal pl-6 flex flex-col gap-2">
                                    <li>Address faulty electrical wiring, which remains a significant cause of fires in Ghana.</li>
                                    <li>Employ professionally qualified electricians who are knowledgeable about building and wiring requirements.</li>
                                    <li>Ensure all electrical repairs adhere to statutory building and wiring codes.</li>
                                    <li>Report Illegal electricity connections to the relevant authorities, as they pose a danger to the entire neighborhood.</li>
                                    <li>Avoid accumulating flammable materials on the premises. Flammable goods should be stored in safe and fire-protected buildings or storage areas.</li>
                                    <li>Practise responsible personal behaviour, such as switching off electrical equipment when not in use and unplugging them.</li>
                                    <li>Proper handling of gas, including turning it off when not in use and storing gas cylinders in purpose-built protective structures or using approved cylinders for internal domestic use and storage.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-[413px] h-full flex flex-col gap-10">
                            <div className="w-full h-[120px] bg-[#F7F7F8] flex flex-col gap-4 rounded-md">
                                <h3 className="text-[16px] font-normal leading-[24px] text-[#56575D]">Connect with us</h3>
                                <ul className="flex gap-4">
                                    <Link to="/"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full"><FaFacebook size={24} /></li></Link>
                                    <Link to="/"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full"><FaLinkedin size={24} /></li></Link>
                                    <Link to="/"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full"><FaInstagram size={24} /></li></Link>
                                    <Link to="/"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full"><FaTwitter size={24} /></li></Link>
                                </ul>
                            </div>

                            <div className="w-full lg:h-[1196px] flex lg:flex-col flex-row gap-5 overflow-x-auto lg:overflow-x-visible">
                                <div className="w-full max-w-sm flex-shrink-0">
                                    <img
                                        src={Insight13}
                                        alt="heading"
                                        className="w-full h-[200px] object-cover rounded-lg"
                                    />
                                    <div className="p-4">
                                        <div className="text-sm text-[#999881] flex gap-8 mb-2">
                                            <span className="text-[12px]">June 05, 2024</span>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                            A Strategy for Resilience: The Role of Insurance in Your Retail Business's Long-Term Plan
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Life in retail is full of rewards, but it also comes with its share of risks.
                                        </p>
                                        <Link href="/" className="text-[#FF0226] font-semibold">
                                            Read More
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-full max-w-sm flex-shrink-0">
                                    <img
                                        src={Insight6}
                                        alt="heading"
                                        className="w-full h-[200px] object-cover rounded-lg"
                                    />
                                    <div className="p-4">
                                        <div className="text-sm text-[#999881] flex gap-8 mb-2">
                                            <span className="text-[12px]">June 05, 2024</span>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                            Revolutionising customer experience
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Regardless of industry or sector, almost all businesses today are seeking to digitalise their operations to improve customer experience.
                                        </p>
                                        <Link href="/" className="text-[#FF0226] font-semibold">
                                            Read More
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-full max-w-sm flex-shrink-0">
                                    <img
                                        src={strate}
                                        alt="heading"
                                        className="w-full h-[200px] object-cover rounded-lg"
                                    />
                                    <div className="p-4">
                                        <div className="text-sm text-[#999881] flex gap-8 mb-2">
                                            <span className="text-[12px]">June 05, 2024</span>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                            A Strategy for Resilience: The Role of Insurance in Your Retail Business's Long-Term Plan...
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Life in retail is full of rewards, but it also comes with its share of risks.
                                        </p>
                                        <Link href="/" className="text-[#FF0226] font-semibold">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
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

export default RedDetailOne