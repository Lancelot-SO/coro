/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import engineerbg from "../assets/engineer/engineerbg.png";
import "./globalfeature.css";

const PlantRiskFeature = ({ closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="content lg:h-[580px] h-[680px]">
                <button className="close-button absolute lg:top-[10px] top-[15px] lg:right-[10px] right-[15px]" onClick={closeModal}>
                    <FaTimes size={30} className="lg:text-black text-white" />
                </button>
                <div className="flex lg:flex-row flex-col">
                    <div className="flex-1">
                        <img src={engineerbg} alt="motor" className="object-cover w-full lg:h-[548px] h-[180px]" loading="lazy" />
                    </div>
                    <div className="flex-1 pt-3">
                        <div className="text-[24px] leading-[32px] font-semibold">
                            Plant All - Risk
                        </div>
                        <div className="pl-6 mt-2">
                            <ul className="list-disc flex flex-col gap-2">
                                <li className="text-[14px] text-[#56575D]">
                                    Third party bodily injury & death as stated in our policy document
                                </li>
                                <li className="text-[14px] text-[#56575D]">Fire damage to the insured vehicle</li>
                                <li className="text-[14px] text-[#56575D]">Theft of the vehicle</li>
                                <li className="text-[14px] text-[#56575D]">Accidental damage to insured's vehicle</li>
                                <li className="text-[14px] text-[#56575D]">
                                    Personal Accident for Insured / Driver: GHS7,000
                                </li>
                                <li className="text-[14px] text-[#56575D]">
                                    Deductible/excess except where buy back is applicable
                                </li>
                                <li className="text-[14px] text-[#56575D]">Depreciation rate: as applicable</li>
                                <li className="text-[14px] text-[#56575D]">
                                    Towing charges: not exceed 20% of total repairs bill
                                </li>
                                <li className="text-[14px] text-[#56575D]">
                                    Loss of personal effect: as stated in the policy schedule
                                </li>
                                <li className="text-[14px] text-[#56575D]">
                                    Authorized repair limit: as stated in our policy document
                                </li>
                                <li className="text-[14px] text-[#56575D]">
                                    Passenger liability: as stated in our policy document
                                </li>
                                <li className="text-[14px] text-[#56575D]">
                                    Third-party liabilities Within (ECOWAS) Countries
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantRiskFeature;
