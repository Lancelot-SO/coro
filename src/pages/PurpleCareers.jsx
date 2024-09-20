/* eslint-disable react/no-unescaped-entities */
import insightbg from "../assets/purpleinsight/insightbg.png"
import insight1 from "../assets/purpleinsight/insight1.png"

import career1 from "../assets/career/career1.png"
import career2 from "../assets/career/career2.png"


import { Link } from "react-router-dom"

const PurpleCareers = () => {
    return (
        <div>
            <div className="relative">
                <img src={insightbg} alt="about" className="w-full bg-cover" loading="lazy" />
                <div className="absolute top-[293px] left-20 w-[858px] h-[152px]">
                    <h2 className="text-[56px] font-bold leading-[64px] text-white">Careers at Coronatione</h2>
                    <span className="w-[681px] h-[48px] text-[18px] font-normal leading-[24px] text-white">
                        Taking you where you want to go. We are always on the lookout for best-in-class talent who enjoy a challenge. In exchange, we provide an environment that fosters the actualization of goals, and career fulfillment for our people while providing transformational solutions for Africa’s challenges.
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

            <sction>
                <div>
                    <div className="flex w-full">
                        <div className=" flex-1 flex-col flex items-center justify-center h-[430px]">
                            <div>
                                <div className="h-[156px]">
                                    <h2 className="text-[40px] w-[494px] h-[88px] leading-[44px] font-semibold mb-2">Investing in You<br />(We are Interested in You)</h2>
                                    <span className="text-[16px] leading-[20px] font-semibold text-black">
                                        CORONATION ACADAMICS
                                    </span>
                                    <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D]">
                                        Coronation Insurance Ghana Ltd Academies seeks to enhance careers, attract top talent, and support key tenets of the firm’s mission and culture by delivering cutting-edge learning resources. Our vision is that the Coronation Academies will be a competitive differentiator to attract and retain the best talent. Whether your desire is in technology,
                                        management or strategy, wherever you are; your strengths and interests will influence your career and you have plenty of choice with us. Five Academies, one successful career!
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="flex-1 p-10">
                            <img src={insight1} alt="about" className="bg-cover w-[640px] h-[410px] rounded-lg object-cover" loading="lazy" />
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="flex-1 py-10 pl-20">
                            <img src={insight1} alt="about" className="bg-cover w-[640px] h-[410px] rounded-lg object-cover" loading="lazy" />
                        </div>
                        <div className="flex-1 flex-col flex items-center justify-center h-[430px]">
                            <div>
                                <div className="h-[156px]">
                                    <h2 className="text-[32px] leading-[40px] font-semibold">Culture</h2>
                                    <p className="w-[500px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                                        Our culture is what brings us together and enables our people and organization to thrive.
                                        We seek to hire people who believe in the pursuit of our standards, known as the Coronation Values & Attributes.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </sction>

            <section>
                <div className="bg-black w-full h-[1169px] p-20">
                    <div className="w-[1280px] h-[1008px] flex flex-col gap-6">
                        <div className="flex w-full h-[492px] gap-6">
                            <div className="bg-[#1D1E20] w-[845px] h-full rounded-lg shadow-lg flex">
                                <div className="flex-1">
                                    <img src={career1} alt="career" className="bg-cover h-full rounded-l-md" loading="lazy" />
                                </div>
                                <div className="flex-1 border-b-4 border-b-[#B580D1] flex items-center justify-center">
                                    <div className="w-[357px] h-[220px]">
                                        <div className="mb-4">
                                            <h2 className="text-white text-[24px] font-semibold leading-[32px]">Life at CORONATION</h2>
                                            <p className="text-[#888991] text-[16px] font-normal leading-[24px]">
                                                Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation.
                                                Explore Life at Coronation…
                                            </p>
                                        </div>
                                        <Link className="text-[#B580D1]">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] w-[424px] h-full border-b-4 border-b-[#B580D1] rounded-md shadow-md">
                                <img src={career2} alt="career" className="bg-cover rounded-t-md w-full h-[280px]" />
                                <div className="p-4">
                                    <div className="mt-4">
                                        <h2 className="text-white text-[24px] font-semibold leading-[32px]">Satisfy Your Curosity</h2>
                                        <p className="text-[#888991] text-[16px] font-normal leading-[24px] mt-2">
                                            Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation.
                                            Explore Life at Coronation…
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-6">
                            <div className="bg-[#1D1E20] w-[410px] h-[492px] border-b-4 border-b-[#B580D1] rounded-md shadow-md">
                                <img src={career2} alt="career" className="bg-cover rounded-t-md w-full h-[280px]" />
                                <div className="p-4">
                                    <div className="mt-4">
                                        <h2 className="text-white text-[24px] font-semibold leading-[32px]">Find Your Crown</h2>
                                        <p className="text-[#888991] text-[16px] font-normal leading-[24px] mt-2">
                                            Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation.
                                            Explore Life at Coronation…
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] w-[410px] h-[492px] border-b-4 border-b-[#B580D1] rounded-md shadow-md">
                                <img src={career2} alt="career" className="bg-cover rounded-t-md w-full h-[280px]" />
                                <div className="p-4">
                                    <div className="mt-4">
                                        <h2 className="text-white text-[24px] font-semibold leading-[32px]">Our Value Stays With You</h2>
                                        <p className="text-[#888991] text-[16px] font-normal leading-[24px] mt-2">
                                            Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation.
                                            Explore Life at Coronation…
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] w-[410px] h-[492px] border-b-4 border-b-[#B580D1] rounded-md shadow-md">
                                <img src={career2} alt="career" className="bg-cover rounded-t-md w-full h-[280px]" />
                                <div className="p-4">
                                    <div className="mt-4">
                                        <h2 className="text-white text-[24px] font-semibold leading-[32px]">Come as You Are</h2>
                                        <p className="text-[#888991] text-[16px] font-normal leading-[24px] mt-2">
                                            Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation.
                                            Explore Life at Coronation…
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[164px] bg-[#B580D1] flex flex-row items-center justify-between pr-40 pl-20">
                    <h2 className="text-white font-bold text-[40px] leading-[44px]">Get Insured Today</h2>
                    <div className="w-[110px] h-[44px] bg-white flex items-center justify-center rounded-lg text-[16px] leading-[24px] font-semibold">
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleCareers