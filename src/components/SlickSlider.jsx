import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Board from "../assets/purpleabout/board2.png";
import React from "react";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";


const data = [
    {
        id: 1,
        photo: Board,
        name: "Mr. Frank Beecham",
        position: "Board Chairman",
        desc: `Mr. Frank Beecham is the Chairman of the Board of Coronation Insurance Ghana LTD. Mr. Beecham is a lawyer by profession and a past National President of the Ghana Bar Association. He has spent the greater part of his working life in banking, having joined Merchant Bank Ghana Ltd as a Banking Officer in 1977.`,
    },
    {
        id: 2,
        photo: Board,
        name: "Mr. Frank Beecham",
        position: "Board Chairman",
        desc: `Mr. Frank Beecham is the Chairman of the Board of Coronation Insurance Ghana LTD. Mr. Beecham is a lawyer by profession and a past National President of the Ghana Bar Association. He has spent the greater part of his working life in banking, having joined Merchant Bank Ghana Ltd as a Banking Officer in 1977.`,
    },
    {
        id: 3,
        photo: Board,
        name: "Mr. Frank Beecham",
        position: "Board Chairman",
        desc: `Mr. Frank Beecham is the Chairman of the Board of Coronation Insurance Ghana LTD. Mr. Beecham is a lawyer by profession and a past National President of the Ghana Bar Association. He has spent the greater part of his working life in banking, having joined Merchant Bank Ghana Ltd as a Banking Officer in 1977.`,
    },
    {
        id: 4,
        photo: Board,
        name: "Mr. Frank Beecham",
        position: "Board Chairman",
        desc: `Mr. Frank Beecham is the Chairman of the Board of Coronation Insurance Ghana LTD. Mr. Beecham is a lawyer by profession and a past National President of the Ghana Bar Association. He has spent the greater part of his working life in banking, having joined Merchant Bank Ghana Ltd as a Banking Officer in 1977.`,
    },
    // Additional board members can be added here...
];

const SlickSlider = () => {
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true, // To ensure that the next image is visible without overlapping
        centerPadding: "0", // Adjust padding to avoid content overlap
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="relative p-20">
            <div className="text-left mb-12">
                <h2 className="text-4xl font-bold leading-tight">Board of Directors</h2>
                <p className="text-lg text-gray-600 mt-2">
                    Our board consists of highly accomplished financial services experts with a combined wealth of experience spanning more than two centuries.
                </p>
            </div>
            <div className="relative">
                <Slider ref={sliderRef} {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="px-4"> {/* Add padding around each slide item */}
                            <div className="flex w-full h-[420px] shadow-lg overflow-hidden rounded-lg">
                                {/* Image Section */}
                                <div className="w-1/2 bg-[#EFEFF0]">
                                    <img
                                        src={item.photo}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Text Section */}
                                <div className="w-1/2 bg-black text-white p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                                    <p className="text-md text-gray-300 mb-4">{item.position}</p>
                                    <p className="text-sm">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* Previous Button */}
            <button
                className="absolute top-[670px] right-40 transform -translate-y-1/2 bg-[#EFEFF0] hover:bg-[#B580D1] hover:text-white text-black px-4 py-2 rounded-lg"
                onClick={() => sliderRef.current.slickPrev()}
            >
                <IoIosArrowRoundBack size={24} />
            </button>

            {/* Next Button */}
            <button
                className="absolute top-[670px] right-20 transform -translate-y-1/2 bg-[#EFEFF0] hover:bg-[#B580D1] hover:text-white text-black px-4 py-2 rounded-lg"
                onClick={() => sliderRef.current.slickNext()}
            >
                <IoIosArrowRoundForward size={24} />
            </button>
        </div>
    );
};

export default SlickSlider;
