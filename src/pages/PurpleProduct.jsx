/* eslint-disable react/no-unescaped-entities */
import productbg from "../assets/purpleproduct/productbg.png"
import product1 from "../assets/purpleproduct/product1.png"
import product2 from "../assets/purpleproduct/product2.png"
import product3 from "../assets/purpleproduct/product3.png"
import product4 from "../assets/purpleproduct/product4.png"
import product5 from "../assets/purpleproduct/product5.png"

import productmob from "../assets/purpleproduct/productmob.png"
import product44 from "../assets/purpleproduct/product44.png"



import { Link } from "react-router-dom"


const PurpleProduct = () => {
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img src={productbg} alt="about" className="hidden lg:block w-full bg-cover lg:w-full" loading="lazy" />
                <img src={productmob} alt="about" className="lg:hidden block bg-cover w-full" loading="lazy" />
                <div className="absolute lg:top-[293px] top-[470px] lg:left-20 left-4 lg:w-[858px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white">Individual Insurance</h2>
                    <span className="w-full h-[72px] lg:text-[18px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white">
                        Coronation Insurance Ghana Ltd offers comprehensive insurance for your car, home, business and life - with only one telephone call. Find out more & get a quote.
                    </span>
                </div>
                <div className="absolute lg:top-[280px] top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] bg-black bg-opacity-40 rounded-lg shadow-md">
                    <div className="lg:p-6 p-4">
                        <span className="text-white lg:w-[232px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-6 font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[90px] h-[35px] bg-[#B580D1] text-white rounded-lg items-center justify-center">
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="lg:p-20 p-6 bg-black">
                    <div className="w-full lg:h-[748px]">
                        <div className="hidden lg:block">
                            <h2 className="text-[48px] font-bold leading-[56px] text-white w-[790px] h-[112px]">
                                Looking for The <br />Right Insurance for You?
                            </h2>
                            <span className="text-[16px] font-normal leading-[24px] text-[#888991] w-[846px] h-[48px]">
                                Life doesn't wait, neither should your insurance coverage. Coronation Insurance Ghana Ltd offers<br /> comprehensive plans for car, home,
                                business, and life. One call, and Total protection. Get a quote now!
                            </span>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-6 lg:mt-10 w-full lg:h-[524px] h-[1204px]">
                            <div className="w-[436px] h-full">
                                <img
                                    src={product1}
                                    alt="pic"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] rounded-[12px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Motor Insurance
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[100px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] lg:mt-4 mt-0">
                                        Our car insurance plans are designed to help protect you, your vehicle and the ones you love.
                                        We also settle claims within 48 hours leaving you free to cruise on with absolute peace of mind.
                                    </p>
                                    <div className="text-[#B580D1] font-medium text-[14px] leading-[20px]">
                                        <Link to="/purpleproductdetails/motor">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src={product2}
                                    alt="pic"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Travel Insurance
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[70px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4">
                                        Travelling should be an enjoyable experience, our plans are designed to keep it that way.
                                    </p>
                                    <div className="text-[#B580D1] font-medium text-[14px] leading-[20px]">
                                        <Link to="/purpleproductdetails/travel">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src={product3}
                                    alt="pic"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy" />
                                <div className="w-full h-[204px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Home Insurance
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[70px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4">
                                        Coronation Home Insurance protects your home inside and out, covering your building and belongings.
                                    </p>
                                    <div className="text-[#B580D1] font-medium text-[14px] leading-[20px]">
                                        <Link to="/purpleproductdetails/home">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row flex-col w-full lg:p-20">
                    <div className="flex-1">
                        <img
                            src={product4} alt="about"
                            className="hidden lg:block bg-cover w-[662px] h-[442px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                            loading="lazy" />
                        <img
                            src={product44} alt="about"
                            className="lg:hidden block bg-cover w-[662px] h-[350px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                            loading="lazy" />
                    </div>
                    <div className="flex-1 flex-col flex items-center justify-center">
                        <div className="p-4 lg:p-0">
                            <h2 className="lg:w-[558px] lg:h-[112px] lg:text-[48px] text-[24px] lg:leading-[56px] leading-[32px] font-bold">Get Insurance From CORONATION Today</h2>
                            <p className="lg:w-[560px] lg:text-[16px] text-[14px] leading-[20px] font-medium text-[#56575D] mt-4">
                                No one should have to wait more than 48 hours for their claims to be paid. That’s why we do it in less.
                            </p>
                            <div className="w-[125px] h-[44px] text-[16px] leading-[24px] font-semibold text-white bg-[#B580D1] flex items-center justify-center mt-10 rounded-lg">
                                <Link>Make a Claim</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative hidden lg:block">
                    <img src={product5} alt="banner" className="w-full bg-cover" />
                    <div className="absolute top-[48%] left-[7%] text-[56px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                    <div className="bg-white absolute top-[48%] right-[7%] w-[108px] h-[44px] flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleProduct