/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/logo2.png"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div>
            <section className="overflow-hidden">
                <div className="bg-[#141415] w-full lg:h-[624px] h-[910px]">
                    <div className="flex lg:flex-row flex-col lg:p-24 p-4">
                        <div className="lg:w-[411px] lg:h-[263px] pt-10">
                            <img src={logo} alt="logo" className="mb-3 w-[291px] h-[32px] lg:w-[280px] lg:h-[30px]" loading="lazy" />
                            <span className="lg:w-[400px] h-[120px] lg:h-[216px] font-normal lg:text-[18px] text-[14px] lg:leading-[24px] leading-[18px] text-[#888991]">
                                At Coronation, we seek to be the most enjoyable company to do business with.
                                Our experienced underwriting and strong risk management expertise developed over the last 16 years has prepared us to serve as your lead underwriter.
                                With us, it's not just insurance; it's insurance for everything.
                            </span>
                        </div>
                        <div className="w-[869px] h-[392px] lg:pl-32 pt-10">
                            <div className="flex flex-col lg:flex-row lg:gap-16 gap-8">
                                <div className="flex">
                                    <div className="w-[199px]">
                                        <div className="mb-2 text-white">Main Service</div>
                                        <ul>
                                            <Link to="/"><li className="text-[#888991] mb-2">Motor Insurance</li></Link>
                                            <Link to="/"><li className="text-[#888991] mb-2">Marine Insurance</li></Link>
                                            <Link to="/"><li className="text-[#888991] mb-2">Fire Insurance</li></Link>
                                            <Link to="/"><li className="text-[#888991] mb-2">Accident Insurance</li></Link>
                                            <Link to="/"><li className="text-[#888991] mb-2">Engineering</li></Link>
                                            <Link to="/"><li className="text-[#888991]">Travel Insurance</li></Link>
                                        </ul>
                                    </div>
                                    <div className="w-[120px]">
                                        <div className="mb-2 text-white">Self Service</div>
                                        <ul>
                                            <Link to="/"><li className="text-[#888991] mb-2">Login</li></Link>
                                            <Link to="/"><li className="text-[#888991]">Claims</li></Link>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-[199px]">
                                        <div className="mb-2 text-white">Affiliation</div>
                                        <ul>
                                            <Link to="/"><li className="text-[#888991] mb-2">Coronation Asset Management</li></Link>
                                            <Link to="/"><li className="text-[#888991] mb-2">Coronation Insurance PLC</li></Link>
                                            <Link to="/"><li className="text-[#888991] mb-2">Coronation Life Assurance</li></Link>
                                            <Link to="/"><li className="text-[#888991] mb-2">Coronation Securities</li></Link>
                                            <Link to="/"><li className="text-[#888991] mb-2">Coronation Capital</li></Link>
                                            <Link to="/"><li className="text-[#888991] mb-2">Coronation Registrars</li></Link>
                                            <Link to="/"><li className="text-[#888991] mb-2">Coronation Trustees</li></Link>
                                            <Link to="/"><li className="text-[#888991]">Truim</li></Link>
                                        </ul>
                                    </div>
                                    <div className="w-[199px]">
                                        <div className="mb-2 text-white">Whistle Blowing</div>
                                        <ul>
                                            <Link to="/purplewhistle"><li className="text-[#888991]">Whistle Blowing: Coronation Insurance Ghana</li></Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[200px] lg:mt-0">
                        <div className="flex lg:flex-row flex-col lg:items-center justify-between lg:px-24 px-4">
                            <span className="text-white">@ 2024 Coronation. All rights reserved.</span>
                            <ul className="flex gap-4">
                                <Link to="/"><li className="text-white"><FaFacebook /></li></Link>
                                <Link to="/"><li className="text-white"><FaLinkedin /></li></Link>
                                <Link to="/"><li className="text-white"><FaInstagram /></li></Link>
                                <Link to="/"><li className="text-white"><FaTwitter /></li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer