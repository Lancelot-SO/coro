/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const executives = [
    {
        id: 1,
        name: "DR. YAW ADOM-BOATENG – MANAGING DIRECTOR",
        body:
            "Dr. Adom-Boateng is a Fellow of the Chartered Insurance Institute of Ghana (FCIIG) and the Chartered Insurance Institute of UK (FCII-UK). He is a seasoned insurance professional with over 22 years of experience in the insurance industry.",
        image: "https://via.placeholder.com/400x450"
    },
    {
        id: 2,
        name: "ABAYOMI OGUNSHOLA – HEAD, TECHNICAL OPERATIONS",
        body:
            "Mr. Abayomi Shamusideen Ogunshola, is a Fellow of the Chartered Insurance Institute of Ghana (FCIIG) and a seasoned chartered insurance professional with over twenty (20) years track record in Underwriting, Claims and Reinsurance Administration with wide experience in Risk Management and Marketing. He has handled various technical operations roles for over 20 years, demonstrating leadership and expertise.",
        image: "https://via.placeholder.com/400x450"
    },
    {
        id: 3,
        name: "ENOCK NARH – CHIEF FINANCE OFFICER",
        body:
            "Enock Narh is a Chartered Certified Accountant and a member of the Association of Chartered Certified Accountants (ACCA). He also holds a Bachelor of Commerce (B.COM) in Accounting & Finance from the University of Cape Coast.",
        image: "https://via.placeholder.com/400x450"
    }
];

export default function Executive() {
    const [expanded, setExpanded] = useState({});
    const location = useLocation();
    const isRedAbout = location.pathname === "/redabout";

    const toggleReadMore = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="w-full py-20 px-4 lg:px-20 bg-white">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left text-[20px] lg:text-4xl font-bold mb-12"
            >
                SEE OUR EXECUTIVE MANAGEMENT
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {executives.map((item) => {
                    const isLong = item.body.length > 200;
                    const isOpen = expanded[item.id];

                    const displayText = isOpen
                        ? item.body
                        : item.body.substring(0, 200);

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden bg-white"
                        >
                            {/* IMAGE */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-[350px] object-cover"
                            />

                            {/* TEXT CARD */}
                            <div className="bg-black text-white p-6 h-[330px] flex flex-col justify-between">

                                {/* NAME */}
                                <h3 className="font-semibold text-lg mb-2">
                                    {item.name}
                                </h3>

                                {/* BODY TEXT */}
                                <div className="text-sm text-gray-300 leading-relaxed overflow-y-auto pr-1 h-[190px]">
                                    {displayText}
                                    {!isOpen && isLong && " ..."}
                                </div>

                                {/* READ MORE BUTTON FIXED AT BOTTOM */}
                                {isLong && (
                                    <button
                                        className={`mt-4 p-2 font-semibold border-2 hover:underline 
                                            ${isRedAbout
                                                ? "text-[#FF0226] border-[#FF0226]"
                                                : "text-[#B580D1] border-[#B580D1]"
                                            }`}
                                        onClick={() => toggleReadMore(item.id)}
                                    >
                                        {isOpen ? "READ LESS" : "READ MORE"}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
