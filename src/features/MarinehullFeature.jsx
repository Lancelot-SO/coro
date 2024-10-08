/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import marinemainbg from "../assets/marine/marinemainbg.png"
import "./globalfeature.css";

const MarinehullFeature = ({ closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="content lg:h-[580px] h-[680px]">
                <button className="close-button absolute lg:top-[10px] top-[15px] lg:right-[10px] right-[15px]" onClick={closeModal}>
                    <FaTimes size={30} className="lg:text-black text-white" />
                </button>
                <div className="flex lg:flex-row flex-col">
                    <div className="flex-1">
                        <img src={marinemainbg} alt="motor" className="object-cover w-full lg:h-[548px] h-[180px]" loading="lazy" />
                    </div>
                    <div className="flex-1 pt-3">
                        <div className="text-[24px] leading-[32px] font-semibold">
                            Marine Hull
                        </div>
                        <div className="pl-6 mt-2">
                            <ul className="list-disc flex flex-col gap-2">
                                <li className="text-[14px] text-[#56575D]">
                                    Accidental death
                                </li>
                                <li className="text-[14px] text-[#56575D]">Medical expenses</li>
                                <li className="text-[14px] text-[#56575D]">Loss of property, luggage and personal effects</li>
                                <li className="text-[14px] text-[#56575D]">Covers persons aged up to 80 years</li>
                                <li className="text-[14px] text-[#56575D]">
                                    Payment of compensation for delay of flight and delay of luggage
                                </li>
                                <li className="text-[14px] text-[#56575D]">
                                    Emergency return home following the death of a close family member
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarinehullFeature;
