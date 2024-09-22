/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/logo2.png"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div>
            <section>
                <div className="bg-[#141415] w-full h-[624px]">
                    <div className="flex h-[568px] p-24">
                        <div className="w-[411px] h-[263px] pt-10">
                            <img src={logo} alt="logo" className="mb-3" loading="lazy" />
                            <span className="w-[400px] h-[216px] font-normal text-[18px] leading-[24px] text-[#888991]">
                                At Coronation, we seek to be the most enjoyable company to do business with.
                                Our experienced underwriting and strong risk management expertise developed over the last 16 years has prepared us to serve as your lead underwriter.
                                With us, it's not just insurance; it's insurance for everything.
                            </span>
                        </div>
                        <div className="w-[869px] h-[392px] pl-32 pt-10">
                            <div className="flex gap-16">
                                <div className="w-[199px]">
                                    <div className="mb-2 text-white">Main Service</div>
                                    <ul>
                                        <Link to="/"><li className="text-[#888991]">Motor Insurance</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Marine Insurance</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Fire Insurance</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Accident Insurance</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Engineering</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Travel Insurance</li></Link>
                                    </ul>
                                </div>
                                <div className="w-[120px]">
                                    <div className="mb-2 text-white">Self Service</div>
                                    <ul>
                                        <Link to="/"><li className="text-[#888991]">Login</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Claims</li></Link>
                                    </ul>
                                </div>
                                <div className="w-[199px]">
                                    <div className="mb-2 text-white">Affiliation</div>
                                    <ul>
                                        <Link to="/"><li className="text-[#888991]">Coronation Asset Management</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Coronation Insurance PLC</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Coronation Life Assurance</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Coronation Securities</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Coronation Capital</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Coronation Registrars</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Coronation Trustees</li></Link>
                                        <Link to="/"><li className="text-[#888991]">Truim</li></Link>
                                    </ul>
                                </div>
                                <div className="w-[199px]">
                                    <div className="mb-2 text-white">Whistle Blowing</div>
                                    <ul>
                                        <Link to="/"><li className="text-[#888991]">Whistle Blowing: Coronation Insurance Ghana</li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between px-24">
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