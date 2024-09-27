/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import insightmainbg from "../assets/purpleinsight/insightmain.png"
import whistle from "../assets/whistle/whistleimg.png"
import whistle1 from "../assets/whistle/whistle1.png"
import { Link } from "react-router-dom"

const WhistleBlowing = () => {
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img src={insightmainbg} alt="about" className="w-full bg-cover lg:w-full lg:h-[600px] h-[500px]" loading="lazy" />
                <div className="absolute lg:top-[380px] top-[300px] lg:left-20 left-4 lg:w-[858px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white">Whistle Blowing</h2>
                    <span className="w-full h-[72px] lg:text-[18px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white">
                        Whistleblowing is an essential part of Coronation Insurance Ghana's overall approach to preventing and detecting misconduct,
                        as well as to foster and maintain ethics where everyone adheres to the Company’s policies, as well as applicable laws and regulations.                    </span>
                </div>
            </div>
            <section>
                <div className="flex lg:flex-row flex-col w-full lg:p-20">
                    <div className="flex-1">
                        <img
                            src={whistle} alt="about"
                            className="bg-cover lg:w-[662px] h-[300px] lg:h-[342px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                            loading="lazy" />
                    </div>
                    <div className="flex-1 flex-col flex lg:items-center lg:justify-center mt-4 lg:mt-0">
                        <div className="p-4 lg:p-0">
                            <h2 className="lg:w-[558px] w-[347px] lg:text-[48px] text-[24px] lg:leading-[56px] leading-[32px] font-bold">Who can make a report?</h2>
                            <p className="lg:w-[560px] w-[347px] lg:text-[16px] text-[12px] leading-[20px] font-medium text-[#56575D] lg:mt-4 mt-2">
                                Any person with a valid reason can make a report. All reports must be based on facts, and any allegations contained in it must be true and verifiable.                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
                    <div className="flex flex-col gap-6 lg:w-[950px] w-full lg:h-[544px] h-[600px] lg:p-20 p-4">
                        <h2 className="lg:w-[515px] w-[347px] lg:h-[88px] h-[64px] lg:text-[40px] text-[24px] font-bold lg:leading-[44px] leading-8">What are the Company’s whistleblowing channels?</h2>
                        <div className="w-[781px] h-[440px] flex flex-col gap-3">
                            <span className="lg:text-[16px] text-[12px] w-[347px] lg:w-full font-normal lg:leading-[24px] leading-5 text-[#56575D]">
                                The Company is committed to ensuring the confidentiality of whistleblowing reports. Whistleblowers may report a concern directly to the Chief Compliance officer through:
                            </span>
                            <span className="lg:text-[16px] text-[12px] font-medium lg:leading-[24px] leading-5">+233 (0) 268 312 065</span>
                            <span className=" w-[347px] lg:w-full lg:text-[16px] text-[12px] font-normal lg:leading-[24px] leading-5 text-[#56575D]">
                                Whistleblowers may choose to make anonymous reports by not disclosing their identities when making reports. Reports can also be made by sending an email or logging the issue on the web-link below:
                            </span>
                            <div className="">
                                <div className="flex gap-1">
                                    <span className="lg:text-[16px] text-[12px]">Email:</span>
                                    <span className="text-[#B580D1] lg:text-[16px] text-[12px]">kpmgethicsline@nh.kpmg</span>
                                </div>
                                <div className="flex gap-1">
                                    <span>Weblink:</span>
                                    <Link to="Weblink: https://apps.ng.kpmg.com/ethics" target="_blank" rel="noopener noreferrer" className="text-[#B580D1]">https://apps.ng.kpmg.com/ethics</Link>
                                </div>
                            </div>
                            <div>
                                <p className="lg:text-[16px] text-[14px] w-[347px] lg:w-full font-medium lg:leading-[24px] leading-5">
                                    Alternatively, reports can be made by calling any of the KPMG ethics line:
                                </p>
                                <div className="flex lg:flex-row flex-col lg:gap-8 gap-0 pl-6 mb-4">
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
                                <p className="lg:text-[16px] text-[14px] w-[347px] lg:w-full font-medium lg:leading-[24px] leading-5">
                                    If you want your identity to be disclosed, then you need to give a written consent to that effect.                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end h-[250px] lg:h-full">
                        <img src={whistle1} alt="whistle" className="bg-cover h-full" loading="lazy" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default WhistleBlowing