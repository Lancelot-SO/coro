/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import home6 from "../assets/purplehomeIns/home6.png";
import "./globalfeature.css";

const HouseHolderFeature = ({ closeModal }) => { // Receive closeModal as prop
    return (
        <div className="modal-overlay">
            <div className="content">
                <button className="close-button" onClick={closeModal}> {/* Close modal on click */}
                    <FaTimes size={30} />
                </button>
                <div className="flex">
                    <div className="flex-1">
                        <img src={home6} alt="motor" className="object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1 pt-10">
                        <div className="text-[24px] leading-[32px] font-semibold">HOUSEHOLDERS</div>
                        <div className="pl-6 mt-2">
                            <ul className="list-disc flex flex-col gap-2">
                                <li className="text-[14px] text-[#56575D]">Covers the loss of rent or the additional cost of alternative accommodation in case of fire</li>
                                <li className="text-[14px] text-[#56575D]">Covers replacement of stolen items (based on inventory provided)</li>
                                <li className="text-[14px] text-[#56575D]">Covers contents while temporarily removed for cleaning, renovating, repairs or similar purpose</li>
                                <li className="text-[14px] text-[#56575D]">Covers public liability up to GHS20,000</li>
                                <li className="text-[14px] text-[#56575D]">Covers personal accident uo to GHS20,000 for the houshold, maximum 5 occupants</li>
                                <li className="text-[14px] text-[#56575D]">All risk coverage is for laptops, jewelry, and other moveable items. Customer cannot take insurancecover for all risk items alone. It must be taken along side Home owners cover.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseHolderFeature;
