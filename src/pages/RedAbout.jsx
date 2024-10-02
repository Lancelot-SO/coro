/* eslint-disable react/no-unescaped-entities */
import aboutbg from "../assets/purpleabout/aboutbg.png"
import about1 from "../assets/purpleabout/about1.png"
import about2 from "../assets/purpleabout/about2.png"
import { Link } from "react-router-dom"
import SlickSlider from "../components/SlickSlider"

const RedAbout = () => {
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img src={aboutbg} alt="about" className="w-full bg-cover lg:w-full h-[600px]" loading="lazy" />
                <div className="absolute lg:top-[293px] top-[370px] lg:left-20 left-4 lg:w-[858px] md:w-[500px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white">About Us</h2>
                    <span className="w-full h-[72px] lg:text-[18px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white">
                        We are a leading Ghanaian insurance company offering a diverse range of products and
                        services covering general and special risk businesses. We are licensed to underwrite all classes of non-life insurance, such as motor insurance, marine insurance, fire and special perils, goods-in-transit, all risks insurance, etc.
                    </span>
                </div>
                <div className="absolute lg:top-[280px] top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] bg-[#FF0226] bg-opacity-70 rounded-lg shadow-md">
                    <div className="lg:p-6 p-4">
                        <span className="text-white lg:w-[232px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-6 font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[90px] h-[35px] bg-black text-white rounded-lg items-center justify-center">
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="lg:p-20 p-4">
                    <div className="w-[560px] lg:h-[188px] h-[150px]">
                        <h2 className="w-[347px] md:w-[450px] lg:w-[500px] lg:h-[90px] h-[64px] lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-semibold">ABOUT CORONATION INSURANCE GHANA LTD</h2>
                        <p className="w-[347px] md:w-[550px] h-[80px] lg:text-[16px] text-[14px] leading-[20px] lg:font-medium font-normal text-[#56575D] mt-4">
                            Coronation Insurance Group stands as a pinnacle in West Africa,
                            a dynamic multi-line insurance company committed to securing the life, general, and special risks of our valued partners.
                        </p>
                    </div>

                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-10 gap-4 lg:w-[1280px] lg:h-[254px] md:h-[400px] h-[500px] mt-8">
                        <div className="">
                            <span className="h-[32px] lg:text-[24px] text-[20px] lg:font-semibold font-medium leading-[32px]">2008</span>
                            <p className="lg:w-[600px] w-[347px] h-[180px] lg:h-[168px] lg:text-[16px] text-[12px] font-semibold lg:leading-[24px] leading-5 text-[#56575D]">
                                Our establishing in Ghana in 2008 as a general insurer, our journey has been fueled by a mission to evolve into a versatile financial services institution,
                                ensuring sustainable value for our customers and stakeholders while spearheading industry transformation. In the realm of rapid growth, we distinguish ourselves by consistently delivering excellence to our customers. At Coronation, we seek to be the most enjoyable company to do business with.
                            </p>
                        </div>
                        <div>
                            <span className="h-[32px] lg:text-[24px] text-[20px] lg:font-semibold font-medium leading-[32px]">Present</span>
                            <p className="lg:w-[600px] w-[347px] h-[200px] lg:h-[168px] lg:text-[16px] text-[12px] font-semibold lg:leading-[24px] leading-5 text-[#56575D]">
                                Our experienced underwriting and strong risk management expertise developed over the last 16 years has prepared us to serve as your lead underwriter. Coronation is not just an insurance provider; we are architects of a unique value proposition. Built upon the pillars of robust corporate governance,
                                a formidable capital base, exceptional customer service, and a winning suite of product solutions, we envision a future where your risks are not just managed but transformed into opportunities for growth and success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <sction>
                <div>
                    <div className="flex lg:flex-row flex-col-reverse w-full h-[488px]">
                        <div className=" flex-1 flex-col px-4 lg:px-0 bg-[#EFEFF0] flex items-center justify-center">
                            <h2 className="lg:text-[32px] text-[24px] leading-[40px] font-semibold">What We Do</h2>
                            <p className="lg:w-[560px] md:h-[100px] lg:text-[16px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4">
                                We are an insurance company in Ghana offering a variety of coverage options for individuals and businesses.
                                We design our policies to be affordable and comprehensive, protecting your assets and providing peace of mind.
                                Our local expertise and use of technology make it convenient to get the insurance you need and manage your policies easily.
                            </p>
                        </div>
                        <div className="flex-1">
                            <img src={about1} alt="about" className="bg-cover w-full h-full md:h-[400px]" loading="lazy" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col w-full h-[488px] ">
                        <div className="flex-1">
                            <img src={about2} alt="about" className="bg-cover w-full h-full md:h-[400px]" loading="lazy" />
                        </div>
                        <div className="flex-1 flex-col px-4 lg:px-0 flex items-center justify-center">
                            <h2 className="lg:text-[32px] text-[24px] leading-[40px] font-semibold">Our Offering</h2>
                            <p className="lg:w-[560px] lg:text-[16px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4">
                                We offer a range of financial solutions to professionals, institutions, and individuals in Ghana.
                                We design our policies to be affordable and comprehensive, protecting your assets and providing peace of mind.
                                Our local expertise and use of technology make it convenient to get the insurance you need and manage your policies easily. Our aim is to help more and more people attain financial well-being and prosperity
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="lg:py-20 py-4 md:mt-12 lg:mt-0 mt-0 lg:px-20 px-4 bg-[#EFEFF0]">
                            <h2 className="text-[32px] leading-[40px] font-semibold">History</h2>
                            <p className="lg:w-[560px] lg:text-[16px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4">
                                Having established a 30-year record of achievements in financial services across Africa and beyond,
                                our founders established a Pan-African platform focused on building a better financial future for Africa.
                                We understand the need to protect the interests of individuals and businesses, therefore we ventured into insurance, to provide risk advisory, risk management and risk transfer solutions for all. In Ghana, we are a leading insurance company offering a diverse range of products and services covering general and special risk businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </sction>

            <section>
                <SlickSlider />
            </section>

            <section>
                <div className="w-full h-[248px] bg-black lg:px-20 px-4 items-center lg:py-20 md:py-20 py-4">
                    <div className="flex flex-col">
                        <h3 className="text-white lg:text-[40px] text-[32px] lg:leading-[44px] leading-[40px] font-bold">
                            We are affiliated to the Group
                        </h3>
                        <div className="flex md:flex-row lg:flex-row flex-col lg:items-center justify-between">
                            <span className="text-white text-[20px] leading-[28px] font-medium">
                                We are affiliated to our mother company in Nigeria
                            </span>
                            <div className="w-[97px] h-[44px] bg-[#FF0226] text-white rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center">
                                <Link to="https://coronation.ng/contact-us/" target='_blank' rel='noopener noreferrer'>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RedAbout