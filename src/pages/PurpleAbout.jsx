/* eslint-disable react/no-unescaped-entities */
import aboutbg from "../assets/purpleabout/aboutbg.png"
import about1 from "../assets/purpleabout/about1.png"
import about2 from "../assets/purpleabout/about2.png"
import { Link } from "react-router-dom"
import SlickSlider from "../components/SlickSlider"

const PurpleAbout = () => {
    return (
        <div>
            <div className="relative">
                <img src={aboutbg} alt="about" className="w-full bg-cover" loading="lazy" />
                <div className="absolute top-[293px] left-20 w-[858px] h-[152px]">
                    <h2 className="text-[56px] font-bold leading-[64px] text-white">About Us</h2>
                    <span className="w-full h-[72px] text-[18px] font-normal leading-[24px] text-white">
                        We are a leading Ghanaian insurance company offering a diverse range of products and
                        services covering general and special risk businesses. We are licensed to underwrite all classes of non-life insurance, such as motor insurance, marine insurance, fire and special perils, goods-in-transit, all risks insurance, etc.
                    </span>
                </div>
                <div className="absolute top-[280px] right-20 w-[300px] h-[174px] bg-black bg-opacity-40 rounded-lg shadow-md">
                    <div className="p-6">
                        <span className="text-white w-[232px] h-[32px] text-[24px] leading-[32px] font-semibold">My Insurance Account</span>
                        <p className="text-white text-[16px] leading-[24px] font-normal mt-2">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[90px] h-[35px] bg-[#B580D1] text-white rounded-lg items-center justify-center">
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="p-20">
                    <div className="w-[560px] h-[188px]">
                        <h2 className="text-[40px] leading-[44px] font-semibold">ABOUT CORONATION INSURANCE GHANA LTD</h2>
                        <p className="text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                            Coronation Insurance Group stands as a pinnacle in West Africa,
                            a dynamic multi-line insurance company committed to securing the life, general, and special risks of our valued partners.
                        </p>
                    </div>

                    <div className="flex gap-10 w-[1280px] h-[254px] mt-4">
                        <div className="">
                            <span className="h-[32px] text-[24px] font-semibold leading-[32px]">2008</span>
                            <p className="w-[600px] h-[168px] text-[16px] font-semibold leading-[24px] text-[#56575D]">
                                Our establishing in Ghana in 2008 as a general insurer, our journey has been fueled by a mission to evolve into a versatile financial services institution,
                                ensuring sustainable value for our customers and stakeholders while spearheading industry transformation. In the realm of rapid growth, we distinguish ourselves by consistently delivering excellence to our customers. At Coronation, we seek to be the most enjoyable company to do business with.
                            </p>
                        </div>
                        <div>
                            <span className="h-[32px] text-[24px] font-semibold leading-[32px]">Present</span>
                            <p className="w-[600px] h-[168px] text-[16px] font-semibold leading-[24px] text-[#56575D]">
                                Our experienced underwriting and strong risk management expertise developed over the last 16 years has prepared us to serve as your lead underwriter. Coronation is not just an insurance provider; we are architects of a unique value proposition. Built upon the pillars of robust corporate governance,
                                a formidable capital base, exceptional customer service, and a winning suite of product solutions, we envision a future where your risks are not just managed but transformed into opportunities for growth and success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <sction>
                <div>
                    <div className="flex w-full h-[488px]">
                        <div className=" flex-1 flex-col bg-[#EFEFF0] flex items-center justify-center">
                            <h2 className="text-[32px] leading-[40px] font-semibold">What We Do</h2>
                            <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                                We are an insurance company in Ghana offering a variety of coverage options for individuals and businesses.
                                We design our policies to be affordable and comprehensive, protecting your assets and providing peace of mind.
                                Our local expertise and use of technology make it convenient to get the insurance you need and manage your policies easily.
                            </p>
                        </div>
                        <div className="flex-1">
                            <img src={about1} alt="about" className="bg-cover w-full h-full" loading="lazy" />
                        </div>
                    </div>
                    <div className="flex w-full h-[488px]">
                        <div className="flex-1">
                            <img src={about2} alt="about" className="bg-cover w-full h-full" loading="lazy" />
                        </div>
                        <div className="flex-1 flex-col flex items-center justify-center">
                            <h2 className="text-[32px] leading-[40px] font-semibold">Our Offering</h2>
                            <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                                We offer a range of financial solutions to professionals, institutions, and individuals in Ghana.
                                We design our policies to be affordable and comprehensive, protecting your assets and providing peace of mind.
                                Our local expertise and use of technology make it convenient to get the insurance you need and manage your policies easily. Our aim is to help more and more people attain financial well-being and prosperity
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="py-20 px-20 bg-[#EFEFF0]">
                            <h2 className="text-[32px] leading-[40px] font-semibold">History</h2>
                            <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
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
                <div className="w-full h-[248px] bg-black px-20 items-center py-20">
                    <div className="flex flex-col">
                        <h3 className="text-white text-[40px] leading-[44px] font-bold">
                            We are affiliated to the Group
                        </h3>
                        <div className="flex items-center justify-between">
                            <span className="text-white text-[20px] leading-[28px] font-medium">
                                We are affiliated to our mother company in Nigeria
                            </span>
                            <div className="w-[97px] h-[44px] bg-[#B580D1] text-white rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center">
                                <Link to="/">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleAbout