import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useLocation } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
    const sliderRef = React.useRef(null);
    const location = useLocation();
    const isRedAbout = location.pathname === "/redabout";

    const [data, setData] = useState([]);

    // Fetch API
    useEffect(() => {
        const fetchBoardMembers = async () => {
            try {
                const res = await fetch("https://coronation-cms.interactivedigital.com.gh/api/bod/fetch");

                if (!res.ok) throw new Error("Failed to fetch board data");

                const json = await res.json();
                console.log("BOD Response:", json);

                setData(json); // API returns array directly
            } catch (error) {
                console.error("BOD API Error:", error);
            }
        };

        fetchBoardMembers();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",

        // ⭐ NEW — AUTOPLAY SETTINGS ⭐
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1, dots: true },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <div className="relative lg:p-20 p-4 lg:h-[700px] h-[850px]">
            <div className="text-left mb-12">
                <h2 className="lg:text-4xl text-[20px] font-bold leading-tight">
                    Board of Directors
                </h2>
                <p className="lg:text-lg text-[14px] text-gray-600 mt-2">
                    Our board consists of highly accomplished financial services experts
                </p>
            </div>

            {/* Slider */}
            <Slider key={data.length} ref={sliderRef} {...settings}>
                {data.map((item) => (
                    <div key={item.id} className="lg:px-4">
                        <div className="flex lg:flex-row flex-col w-full lg:h-[420px] shadow-lg overflow-hidden rounded-lg">

                            {/* Image section */}
                            <div className="lg:w-1/2 bg-[#EFEFF0]">
                                <img
                                    src={`https://coronation-cms.interactivedigital.com.gh/${item.image}`}
                                    alt={item.name}
                                    className="lg:w-full lg:h-full w-[350px] h-[280px] md:object-center md:object-fill"
                                />
                            </div>

                            {/* Text section */}
                            <div className="lg:w-1/2 h-[300px] lg:h-full bg-black text-white lg:p-8 p-2 flex flex-col justify-center">
                                <h3
                                    className="lg:text-2xl text-[20px] font-semibold mb-2"
                                    dangerouslySetInnerHTML={{ __html: item.name }}
                                />

                                <p
                                    className="text-md text-gray-300 mb-4"
                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                />

                                <p
                                    className="text-sm"
                                    dangerouslySetInnerHTML={{ __html: item.body }}
                                />
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>

            {/* Prev Button */}
            <button
                className={`absolute lg:top-[670px] top-[780px] lg:right-40 right-52 px-4 py-2 rounded-lg 
                    ${isRedAbout ? "bg-[#EFEFF0] hover:bg-[#FF0226]" : "bg-[#EFEFF0] hover:bg-[#B580D1]"}`}
                onClick={() => sliderRef.current.slickPrev()}
            >
                <IoIosArrowRoundBack size={24} />
            </button>

            {/* Next Button */}
            <button
                className={`absolute lg:top-[670px] top-[780px] lg:right-20 px-4 py-2 rounded-lg 
                    ${isRedAbout ? "bg-[#EFEFF0] hover:bg-[#FF0226]" : "bg-[#EFEFF0] hover:bg-[#B580D1]"}`}
                onClick={() => sliderRef.current.slickNext()}
            >
                <IoIosArrowRoundForward size={24} />
            </button>
        </div>
    );
};

export default SlickSlider;
