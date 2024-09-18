/* eslint-disable react/no-unescaped-entities */
import productbg from "../assets/purpleproduct/productbg.png"
import product1 from "../assets/purpleproduct/product1.png"
import product2 from "../assets/purpleproduct/product2.png"
import product3 from "../assets/purpleproduct/product3.png"
import product4 from "../assets/purpleproduct/product4.png"
import product5 from "../assets/purpleproduct/product5.png"


import { Link } from "react-router-dom"


const PurpleProduct = () => {
    return (
        <div>
            <div className="relative">
                <img src={productbg} alt="about" className="w-full bg-cover" loading="lazy" />
                <div className="absolute top-[293px] left-20 w-[858px] h-[152px]">
                    <h2 className="text-[56px] font-bold leading-[64px] text-white">Individual Insurance</h2>
                    <span className="w-[681px] h-[48px] text-[18px] font-normal leading-[24px] text-white">
                        Coronation Insurance Ghana Ltd offers comprehensive insurance for your car,<br /> home, business and life -
                        with only one telephone call. Find out more & get a quote.
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
                <div className="p-20 bg-black">
                    <div className="w-full h-[748px]">
                        <div className="">
                            <h2 className="text-[48px] font-bold leading-[56px] text-white w-[790px] h-[112px]">
                                Looking for The <br />Right Insurance for You?
                            </h2>
                            <span className="text-[16px] font-normal leading-[24px] text-[#888991] w-[846px] h-[48px]">
                                Life doesn't wait, neither should your insurance coverage. Coronation Insurance Ghana Ltd offers<br /> comprehensive plans for car, home,
                                business, and life. One call, and Total protection. Get a quote now!
                            </span>
                        </div>
                        <div className="flex gap-6 mt-10 w-full h-[524px]">
                            <div className="w-[436px] h-full">
                                <img
                                    src={product1}
                                    alt="pic"
                                    className="w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full h-[204px] mt-4">
                                    <h2 className="w-[394px] h-[32px] text-[32px] leading-[32px] font-semibold text-white">
                                        Motor Insurance
                                    </h2>
                                    <p className="w-[370px] h-[120px] text-[16px] leading-[24px] font-normal text-[#888991] mt-4">
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
                                    className="w-full object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full h-[204px] mt-4">
                                    <h2 className="w-[394px] h-[32px] text-[32px] leading-[32px] font-semibold text-white">
                                        Travel Insurance
                                    </h2>
                                    <p className="w-[370px] h-[120px] text-[16px] leading-[24px] font-normal text-[#888991] mt-4">
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
                                    className="w-full object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy" />
                                <div className="w-full h-[204px] mt-4">
                                    <h2 className="w-[394px] h-[32px] text-[32px] leading-[32px] font-semibold text-white">
                                        Home Insurance
                                    </h2>
                                    <p className="w-[370px] h-[120px] text-[16px] leading-[24px] font-normal text-[#888991] mt-4">
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
                <div className="flex w-full p-20">
                    <div className="flex-1">
                        <img
                            src={product4} alt="about"
                            className="bg-cover w-[662px] h-[442px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                            loading="lazy" />
                    </div>
                    <div className="flex-1 flex-col flex items-center justify-center">
                        <div>
                            <h2 className="w-[558px] h-[112px] text-[48px] leading-[56px] font-bold">Get Insurance From CORONATION Today</h2>
                            <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
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
                <div className="relative">
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