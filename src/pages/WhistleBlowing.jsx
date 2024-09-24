/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import insightmainbg from "../assets/purpleinsight/insightmain.png"
import whistle from "../assets/whistle/whistleimg.png"
import whistle1 from "../assets/whistle/whistle1.png"
import { Link } from "react-router-dom"

const WhistleBlowing = () => {
    return (
        <div>
            <div className="relative">
                <img src={insightmainbg} alt="about" className="w-full bg-cover" loading="lazy" />
                <div className="absolute top-[260px] left-20 w-[858px] h-[152px]">
                    <h2 className="text-[56px] w-[720px] font-bold leading-[64px] mb-4 text-white">Whistle Blowing</h2>
                    <span className="w-[681px] h-[48px] text-[18px] font-normal leading-[24px] text-white">
                        Whistleblowing is an essential part of Coronation Insurance Ghana's overall approach to preventing and detecting misconduct, as well as to foster and maintain ethics where everyone adheres to the Company’s policies, as well as applicable laws and regulations.                        </span>
                </div>
            </div>
            <section>
                <div className="flex w-full p-20">
                    <div className="flex-1">
                        <img
                            src={whistle} alt="about"
                            className="bg-cover w-[662px] h-[342px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                            loading="lazy" />
                    </div>
                    <div className="flex-1 flex-col flex items-center justify-center">
                        <div>
                            <h2 className="w-[558px] text-[48px] leading-[56px] font-bold">Who can make a report?</h2>
                            <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                                Any person with a valid reason can make a report. All reports must be based on facts, and any allegations contained in it must be true and verifiable.                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-6 w-[950px] h-[544px] p-20">
                        <h2 className="w-[515px] h-[88px] text-[40px] font-bold leading-[44px]">What are the Company’s whistleblowing channels?</h2>
                        <div className="w-[781px] h-[440px] flex flex-col gap-3">
                            <span className="text-[16px] font-normal leading-[24px] text-[#56575D]">
                                The Company is committed to ensuring the confidentiality of whistleblowing reports. Whistleblowers may report a concern directly to the Chief Compliance officer through:
                            </span>
                            <span className="text-[16px] font-medium leading-[24px]">+233 (0) 268 312 065</span>
                            <span className="text-[16px] font-normal leading-[24px] text-[#56575D]">
                                Whistleblowers may choose to make anonymous reports by not disclosing their identities when making reports. Reports can also be made by sending an email or logging the issue on the web-link below:
                            </span>
                            <div className="">
                                <div className="flex gap-1">
                                    <span>Email:</span>
                                    <span className="text-[#B580D1]">kpmgethicsline@nh.kpmg</span>
                                </div>
                                <div className="flex gap-1">
                                    <span>Weblink:</span>
                                    <Link to="Weblink: https://apps.ng.kpmg.com/ethics" target="_blank" rel="noopener noreferrer" className="text-[#B580D1]">https://apps.ng.kpmg.com/ethics</Link>
                                </div>
                            </div>
                            <div>
                                <p className="text-[16px] font-medium leading-[24px]">
                                    Alternatively, reports can be made by calling any of the KPMG ethics line:
                                </p>
                                <div className="flex gap-8 pl-6 mb-4">
                                    <ul className="list-disc">
                                        <li className="text-black">(+234) 0703-000-0026</li>
                                        <li className="text-black">(+234) 0808-822-8888</li>
                                        <li className="text-black">(+234) 0809-933-6366</li>
                                    </ul>
                                    <ul className="list-disc">
                                        <li className="text-black">(+234) 0703-000-0027</li>
                                        <li className="text-black">(+234) 0708-060-1222</li>
                                        <li className="text-black">(+234) 0705-889-0140</li>
                                    </ul>
                                </div>
                                <p className="text-[16px] font-medium leading-[24px]">
                                    If you want your identity to be disclosed, then you need to give a written consent to that effect.                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <img src={whistle1} alt="whistle" className="bg-cover" loading="lazy" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default WhistleBlowing