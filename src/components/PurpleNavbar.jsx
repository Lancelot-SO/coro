import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const PurpleNavbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname === '/' ? 'individual' : 'institution');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            {/* First Navbar */}
            <div className="flex bg-[#F7F7F8] w-full h-[44px] items-center justify-between px-10">
                <div className="flex gap-4">
                    <Link
                        to="/"
                        onClick={() => handleLinkClick('individual')}
                        className={`text-[14px] leading-[20px] font-medium ${activeLink === 'individual' ? 'text-purple-600 font-bold' : 'text-[#888991]'}`}
                    >
                        Individual
                        {activeLink === 'individual' && (
                            <div className="w-full h-[4px] bg-purple-600 mt-2" />
                        )}
                    </Link>
                    <Link
                        to="/redhome"
                        onClick={() => handleLinkClick('institution')}
                        className={`text-[14px] leading-[20px] font-medium ${activeLink === 'institution' ? 'text-red-600 font-bold' : 'text-[#888991]'}`}
                    >
                        Institution
                        {activeLink === 'institution' && (
                            <div className="w-full h-[4px] bg-red-600 mt-2" />
                        )}
                    </Link>
                </div>
                <div className="flex gap-1">
                    <span className="text-[#888991] text-[14px] leading-[20px] font-medium">
                        Working Hours
                    </span>
                    <span className="text-[#56575d] text-[14px] leading-[20px] font-normal">
                        Mon-Fri: 08:00AM - 05:00PM
                    </span>
                </div>
            </div>

            {/* Conditional Second Navbar */}
            {activeLink === 'individual' ? (
                <div className="flex w-full h-[60px] items-center justify-between px-10">
                    <div className="flex gap-8">
                        <img src={logo} alt="logo" className="bg-cover" loading="lazy" />
                        <ul className="flex flex-row gap-4">
                            <Link to="/purpleabout"><li className="text-[#56575d] text-[14px] leading-[20px]">About</li></Link>
                            <Link to="/purpleproduct"><li className="text-[#56575d] text-[14px] leading-[20px]">Product & Solutions</li></Link>
                            <Link to="/purpleinsights"><li className="text-[#56575d] text-[14px] leading-[20px]">Insights</li></Link>
                            <Link to="/purplecareers"><li className="text-[#56575d] text-[14px] leading-[20px]">Careers</li></Link>
                            <Link to="/purplecontact"><li className="text-[#56575d] text-[14px] leading-[20px]">Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center w-[112px] h-[44px] rounded-lg bg-[#B580D1] text-white">
                        <Link to="/purpleservices">Self Service</Link>
                    </div>
                </div>
            ) : (
                <div className="flex w-full h-[60px] items-center justify-between px-10">
                    <div className="flex gap-8">
                        <img src={logo} alt="logo" loading="lazy" />
                        <ul className="flex flex-row gap-4">
                            <Link to="/redabout"><li className="text-[#56575d] text-[14px] leading-[20px]">About</li></Link>
                            <Link to="/redproduct"><li className="text-[#56575d] text-[14px] leading-[20px]">Product & Solutions</li></Link>
                            <Link to="/redinsights"><li className="text-[#56575d] text-[14px] leading-[20px]">Insights</li></Link>
                            <Link to="/redcareers"><li className="text-[#56575d] text-[14px] leading-[20px]">Careers</li></Link>
                            <Link to="/redcontact"><li className="text-[#56575d] text-[14px] leading-[20px]">Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center w-[112px] h-[44px] bg-[#FF0226] text-white">
                        <Link to="/redservices">Self Service</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PurpleNavbar;
