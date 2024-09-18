/* eslint-disable react/no-unescaped-entities */
import motorbg from "../assets/purplemotor/motorbg.png"
import "./global.css"
const PurpleMotor = () => {
    return (
        <div>
            <div>
                <div className="flex w-full h-[450px] bg-red-500 ">
                    <div className="flex-1 flex-col bg-[#EFEFF0] flex items-center justify-center">
                        <div className=" ">
                            <h2 className="text-[56px] leading-[64px] font-bold">Motor Insurance</h2>
                            <p className="w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4">
                                This is an insurance product that pays for damages to your vehicle (private or commercial) as a result of theft,
                                accident or fire. It also covers third-party injury and death,
                                property damage and legal cost. It comes in 3 variants namely Third Party, Third Party, Fire and theft & Comprehensive.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={motorbg} alt="about" className="bg-cover w-full h-full" loading="lazy" />
                    </div>
                    <div className="glass absolute bottom-[137px] right-0 w-[385px] h-[174px]">
                        <div className="p-6">
                            <span className="text-white w-[300px] h-[32px] text-[24px] leading-[32px] font-semibold">My Insurance Account</span>
                            <p className="text-white text-[16px] leading-[24px] font-normal mt-2">
                                Want to know more about our services? Let's talk
                            </p>
                            <div className="flex mt-5 w-[116px] h-[36px] bg-white font-semibold text-[14px] leading-[20px] text-black rounded-lg items-center justify-center">
                                GET A QUOTE
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="w-full h-[290px] bg-black px-28 items-center py-20">
                    <div className="flex flex-col">
                        <h3 className="text-white text-[40px] leading-[44px] font-bold w-[483px]">
                            CAR INSURANCE THAT IS CUSTOMIZED FOR YOU
                        </h3>
                        <div className="flex items-center mt-4">
                            <span className="text-white text-[18px] leading-[24px] font-normal w-[703px] h-[48px]">
                                Your car is as unique as you. This is why our plans are flexible and designed to fit your specific needs. No matter the size of your car (or pocket), we’ve got something for you.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleMotor