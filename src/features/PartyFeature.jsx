/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import motor5 from "../assets/purplemotor/motor5.png";
import "./globalfeature.css";

const PartyFeature = ({ closeModal }) => { // Receive closeModal as prop
    return (
        <div className="modal-overlay">
            <div className="content lg:h-[580px] h-[680px]">
                <button className="close-button absolute lg:top-[10px] top-[15px] lg:right-[10px] right-[15px]" onClick={closeModal}> {/* Close modal on click */}
                    <FaTimes size={30} className="lg:text-black text-white" />
                </button>
                <div className="flex lg:flex-row flex-col">
                    <div className="flex-1">
                        <img src={motor5} alt="motor" className="object-cover  w-full lg:h-[548px] h-[180px]" loading="lazy" />
                    </div>
                    <div className="flex-1 pt-10">
                        <div className="text-[24px] leading-[32px] font-semibold">THIRD PARTY FIRE & THEFT</div>
                        <div className="pl-6 mt-2">
                            <ul className="list-disc flex flex-col gap-2">
                                <li className="text-[14px] text-[#56575D]">Third party bodily injury & death - unlimited</li>
                                <li className="text-[14px] text-[#56575D]">Third-party property damage limit: GHS6,000</li>
                                <li className="text-[14px] text-[#56575D]">Reimbursement of legal fees if policy holder is prosecuted in court over an accident resulting in a valid claim</li>
                                <li className="text-[14px] text-[#56575D]">Personal Accident for Insured / Driver: GHS7,000</li>
                                <li className="text-[14px] text-[#56575D]">Passenger liability: as stated in our policy document</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartyFeature;
