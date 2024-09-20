/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import travel5 from "../assets/purpletravel/travel5.png";
import "./globalfeature.css";

const StudentFeature = ({ closeModal }) => { // Receive closeModal as prop
    return (
        <div className="modal-overlay">
            <div className="content">
                <button className="close-button" onClick={closeModal}> {/* Close modal on click */}
                    <FaTimes size={30} />
                </button>
                <div className="flex">
                    <div className="flex-1">
                        <img src={travel5} alt="motor" className="object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1 pt-10">
                        <div className="text-[24px] leading-[32px] font-semibold">STUDENT</div>
                        <div className="pl-6 mt-2">
                            <ul className="list-disc flex flex-col gap-2">
                                <li className="text-[14px] text-[#56575D]">Accidental death</li>
                                <li className="text-[14px] text-[#56575D]">Medical expenses</li>
                                <li className="text-[14px] text-[#56575D]">Loss of property, luggage and personal effects</li>
                                <li className="text-[14px] text-[#56575D]">Covers persons aged up to 80 years</li>
                                <li className="text-[14px] text-[#56575D]">Payment of compensation for delay of flight and delay of luggage</li>
                                <li className="text-[14px] text-[#56575D]">Emergency return home following the death of a close family member</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentFeature;
