/* eslint-disable react/no-unescaped-entities */
import careerbg from "../assets/career/careerbg.png"
import redcareer1 from "../assets/career/redcareer1.png"
import redcareer2 from "../assets/career/redcareer2.png"


import career1 from "../assets/career/career1.png"
import career2 from "../assets/career/career2.png"


import careermob from "../assets/career/careermob.png"


import { Link } from "react-router-dom"

const RedCareers = () => {
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img src={careerbg} alt="about" className="hidden lg:block w-full bg-cover lg:w-full h-[600px]" loading="lazy" />
                <img src={careermob} alt="about" className="block lg:hidden w-full bg-cover lg:w-full lg:h-[600px] md:h-[850px]" loading="lazy" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute lg:top-[363px] md:top-[600px] top-[500px] lg:left-20 left-4 lg:w-[858px] md:w-[600px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white">Careers at Coronation</h2>
                    <span className="w-full h-[72px] lg:text-[18px] md:text-[16px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white">
                        Taking you where you want to go. We are always on the lookout for best-in-class talent who enjoy a challenge. In exchange, we provide an environment that fosters the actualization of goals, and career fulfillment for our people while providing transformational solutions for Africa’s challenges.
                    </span>
                </div>
                <div className="absolute lg:top-[350px] top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] bg-[#FF0226] bg-opacity-70 rounded-lg shadow-md">
                    <div className="lg:p-6 p-4">
                        <span className="text-white lg:w-[232px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-6 font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[90px] h-[35px] text-[12px] bg-black text-white rounded-lg items-center justify-center">
                            GET A QUOTE
                        </div>
                    </div>
                </div>
            </div>

            <sction>
                <div>
                    <div className="flex lg:flex-row flex-col-reverse w-full">
                        <div className="flex-1 flex-col flex items-center justify-center h-[430px]">
                            <div>
                                <div className="lg:h-[156px] h-[350px] md:w-[600px] w-[347px] lg:w-full md:pt-14 lg:pt-0 pt-0">
                                    <h2 className="lg:text-[40px] md:text-[32px] text-[24px] lg:w-[494px] md:w-[380px] w-[267px] lg:h-[88px] lg:leading-[44px] leading-[32px] font-semibold mb-2">Investing in You<br />(We are Interested in You)</h2>
                                    <span className="lg:text-[16px] text-[18px] leading-[20px] font-semibold text-black">
                                        CORONATION ACADAMICS
                                    </span>
                                    <p className="lg:w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D]">
                                        Coronation Insurance Ghana Ltd Academies seeks to enhance careers, attract top talent, and support key tenets of the firm’s mission and culture by delivering cutting-edge learning resources. Our vision is that the Coronation Academies will be a competitive differentiator to attract and retain the best talent. Whether your desire is in technology,
                                        management or strategy, wherever you are; your strengths and interests will influence your career and you have plenty of choice with us. Five Academies, one successful career!
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="flex-1 lg:p-10 p-0">
                            <img src={redcareer1} alt="about" className="bg-cover lg:w-[640px] w-full lg:h-[410px] h-[320px] lg:rounded-lg object-cover" loading="lazy" />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full mt-4 lg:mt-0 h-[570px]">
                        <div className="flex-1 py-10 lg:pl-20 pl-0">
                            <img src={redcareer2} alt="about" className="bg-cover lg:w-[640px] w-full lg:h-[410px] h-[320px] lg:rounded-lg object-cover" loading="lazy" />
                        </div>
                        <div className="flex-1 flex-col flex lg:items-center justify-center lg:h-[430px]">
                            <div className="pl-4 md:pl-20 lg:pl-0">
                                <div className="lg:h-[156px] h-[350px] w-[200px] lg:w-full">
                                    <h2 className="text-[32px] leading-[40px] font-semibold">Culture</h2>
                                    <p className="lg:w-[500px] md:w-[520px] w-[347px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
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
                <div className="bg-black w-full lg:h-[1169px] h-[400px] lg:p-20">
                    <div className="lg:w-[1280px] w-full lg:h-[1008px] h-[400px] flex flex-row py-8 lg:py-0 lg:flex-col gap-6 overflow-x-scroll overflow-y-hidden lg:overflow-hidden">
                        <div className="flex w-full h-[492px] gap-6">
                            <div className="bg-[#1D1E20] hidden lg:h-full h-[336px] rounded-lg shadow-lg lg:flex">
                                <div className="flex-1 hidden lg:flex">
                                    <img src={career1} alt="career" className="bg-cover w-[631px] h-full rounded-l-md" loading="lazy" />
                                </div>
                                <div className="flex-1 border-b-4 border-b-[#FF0226] flex items-center justify-center">
                                    <div className="lg:w-[357px] h-[220px]">
                                        <div className="mb-4 pl-4 lg:pl-0">
                                            <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]">Life at CORONATION</h2>
                                            <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[18px]">
                                                Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation.
                                                Explore Life at Coronation…
                                            </p>
                                        </div>
                                        <Link className="text-[#FF0226] pl-4 lg:pl-0">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] hidden lg:block lg:w-[424px] w-[300px] h-[336px] p-4 lg:p-0 lg:h-full border-b-4 border-b-[#FF0226] rounded-md shadow-md">
                                <img src={career2} alt="career" className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full" />
                                <div className="p-4">
                                    <div className="lg:mt-4 mt-0">
                                        <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]">Satisfy Your Curosity</h2>
                                        <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2">
                                            Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation.
                                            Explore Life at Coronation…
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="lg:hidden flex gap-6">
                                <div className="bg-[#1D1E20] lg:w-[410px] w-[276px] lg:h-[492px] h-[336px] border-b-4 border-b-[#FF0226] rounded-md shadow-md">
                                    <img src={career1} alt="career" className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full" />
                                    <div className="p-4">
                                        <div className="mt-4">
                                            <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]">Life at CORONATION</h2>
                                            <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2">
                                                Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation. Explore Life at Coronation…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1D1E20] lg:w-[410px] w-[276px] lg:h-[492px] h-[336px] border-b-4 border-b-[#FF0226] rounded-md shadow-md">
                                    <img src={career2} alt="career" className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full" />
                                    <div className="p-4">
                                        <div className="mt-4">
                                            <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]">Satisfy Your Curosity</h2>
                                            <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2">
                                                Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation. Explore Life at Coronation…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] lg:w-[410px] w-[276px] lg:h-[492px] h-[336px] border-b-4 border-b-[#FF0226] rounded-md shadow-md">
                                <img src={career2} alt="career" className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full" />
                                <div className="p-4">
                                    <div className="mt-4">
                                        <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]">Find Your Crown</h2>
                                        <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2">
                                            Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation.
                                            Explore Life at Coronation…
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] lg:w-[410px] w-[276px] lg:h-[492px] h-[336px] border-b-4 border-b-[#FF0226] rounded-md shadow-md">
                                <img src={career2} alt="career" className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full" />
                                <div className="p-4">
                                    <div className="mt-4">
                                        <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]">Our Value Stays With You</h2>
                                        <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2">
                                            Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation.
                                            Explore Life at Coronation…
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] lg:w-[410px] w-[276px] lg:h-[492px] h-[336px] border-b-4 border-b-[#FF0226] rounded-md shadow-md">
                                <img src={career2} alt="career" className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full" />
                                <div className="p-4">
                                    <div className="mt-4">
                                        <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]">Come as You Are</h2>
                                        <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2">
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
                <div className="w-full h-[164px] bg-[#FF0226] flex lg:flex-row flex-col lg:items-center lg:justify-between lg:pr-40 lg:pl-20 pr-0 pl-4 py-14 lg:py-0 gap-2 lg:gap-0">
                    <h2 className="text-white w-[343px] lg:w-full h-[40px]  font-bold lg:text-[40px] text-[32px] lg:leading-[44px] leading-[40px]">Get Insured Today</h2>
                    <div className="w-[110px] h-[44px]  bg-white flex items-center justify-center p-2 lg:p-2 rounded-lg text-[16px] leading-[24px] font-semibold">
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RedCareers