/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import travel6 from "../assets/purpletravel/travel6.png";
import "./globalfeature.css";

const IndividualFeature = ({ closeModal }) => { // Receive closeModal as prop
    return (
        <div className="modal-overlay">
            <div className="content">
                <button className="close-button" onClick={closeModal}> {/* Close modal on click */}
                    <FaTimes size={30} />
                </button>
                <div className="flex">
                    <div className="flex-1">
                        <img src={travel6} alt="motor" className="object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1 pt-3">
                        <div className="text-[24px] leading-[32px] font-semibold">Individual</div>
                        <div className="pl-6 mt-2">
                            <ul className="list-disc flex flex-col gap-2">
                                <li className="text-[14px] text-[#56575D]">Third party bodily injury & death - unlimited</li>
                                <li className="text-[14px] text-[#56575D]">Reimbursement of legal fees if policy holder is prosecuted in court over an accident resulting in a valid claim</li>
                                <li className="text-[14px] text-[#56575D]">Fire damage to the insured vehicle</li>
                                <li className="text-[14px] text-[#56575D]">Theft of the vehicle</li>
                                <li className="text-[14px] text-[#56575D]">Personal Accident for Insured / Driver: GHS7,000</li>
                                <li className="text-[14px] text-[#56575D]">Deductible/excess</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualFeature;
