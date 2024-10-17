/* eslint-disable react/no-unescaped-entities */
import { Link, useParams } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";

import brochureUrl from "../assets/purpleinsight/Staying_ahead_of_the_storm.pdf"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

import storm from "../assets/purpleinsight/storm.png"
import { MdOutlineFileDownload } from "react-icons/md";


// import Insight13 from "../assets/purpleinsight/insight13.png"
// import Insight6 from "../assets/purpleinsight/insight6.png"
// import strate from "../assets/purpleinsight/strate.png"

import insightbanner from "../assets/purpleinsight/insightbanner.png"
import { useEffect, useState } from "react";


import DOMPurify from 'dompurify';


const RedDetailOne = () => {

    const { id } = useParams(); // Get the blog id from the URL
    const [articleDetails, setArticleDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const [insightLatestData, setInsightLatestData] = useState([]);

    useEffect(() => {
        const fetchCardLatestData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/published-blogs/cards/latest-two');
                const data = await response.json();
                console.log('purple cardlatest Data:', data);
                setInsightLatestData(data); // Set the entire data array
            } catch (error) {
                console.error('Error fetching card latest data:', error);
            }
        };
        fetchCardLatestData();
    }, []);


    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const response = await fetch(`https://coronation-cms.interactivedigital.com.gh/api/blog/${id}/details`);
                const data = await response.json();
                setArticleDetails(data[0]);
                console.log(data)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching article details:', error);
                setLoading(false);
            }
        };

        fetchArticleDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!articleDetails) {
        return <div>No details available for this article.</div>;
    }

    const sanitizedCaption = DOMPurify.sanitize(articleDetails.caption, {
        ALLOWED_TAGS: ['h1', 'h2', 'h3', 'p', 'a', 'strong', 'em', 'ul', 'li'],  // Allow specific tags
        ALLOWED_ATTR: ['href', 'target'],  // Allow only necessary attributes, excluding `style`
    });
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img src={storm} alt="about" className="w-full h-[400px] bg-cover" loading="lazy" />
                <div className="absolute top-[20px] lg:left-20 left-4 w-[858px] h-[152px]">
                    <div className="text-white flex items-center gap-1 mb-2"><IoIosArrowBack /><Link to="/redinsights">Back</Link></div>
                    <div
                        className="lg:w-[800px] lg:h-[48px] lg:text-[40px] text-[18px] font-normal leading-[24px] text-[#ffffff]"
                        dangerouslySetInnerHTML={{ __html: sanitizedCaption }}
                    />

                    <div className="flex gap-8 mt-3">
                        <h3 className="text-[12px] text-[#888991]"
                            dangerouslySetInnerHTML={{ __html: articleDetails.category }} />
                        <ul className="list-disc">
                            <li className="text-[12px] text-[#888991]">
                                {new Date(articleDetails.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="absolute lg:top-[50px] top-[110px] lg:right-20 md:right-[82%] right-[65%] rounded-lg shadow-md">

                    <a href={brochureUrl} download className="flex mt-5 w-[120px] h-[35px] text-[12px] gap-2 bg-white text-black rounded-lg items-center justify-center">
                        <MdOutlineFileDownload size={20} />
                        Download
                    </a>
                </div>
            </div>

            <section>
                <div className="lg:p-20 p-4">
                    <div className="lg:w-[1280px] lg:h-[1672px] flex lg:flex-row flex-col gap-10">
                        <div className="lg:w-[827px] md:w-full w-[347px] h-full flex flex-col gap-4 ">
                            <div className="lg:w-[803px] lg:h-[264px] flex flex-col gap-6">
                                <p className="font-normal text-[16px] leading-[24px] text-[#56575D]"
                                    dangerouslySetInnerHTML={{ __html: articleDetails.body }} />
                            </div>
                            {/* <div>
                                <img src={storm} alt="about" className="lg:w-[803px] h-[320px] bg-cover" loading="lazy" />
                            </div> */}
                        </div>
                        <div className="lg:w-[413px] h-full flex flex-col gap-10">
                            <div className="w-full h-[120px] bg-[#F7F7F8] flex flex-col gap-4 rounded-md">
                                <h3 className="text-[16px] font-normal leading-[24px] text-[#56575D]">Connect with us</h3>
                                <ul className="flex gap-4">
                                    <Link to="/"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full"><FaFacebook size={24} /></li></Link>
                                    <Link to="/"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full"><FaLinkedin size={24} /></li></Link>
                                    <Link to="/"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full"><FaInstagram size={24} /></li></Link>
                                    <Link to="/"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full"><FaTwitter size={24} /></li></Link>
                                </ul>
                            </div>

                            <div className="w-full flex lg:flex-col flex-row gap-5 overflow-x-auto lg:overflow-x-visible">
                                {insightLatestData.slice(0, 2).map((article, index) => (
                                    <div key={index} className="w-full bg-[#f4f4f2] max-w-sm flex-shrink-0">
                                        <img
                                            src={article?.main_image ? `https://coronation-cms.interactivedigital.com.gh/${article.main_image}` : "assets/purplemotor/motorbg.png"}
                                            alt="heading"
                                            className="w-full h-[200px] object-cover rounded-lg"
                                        />
                                        <div className="p-4 h-[170px]">
                                            <div className="text-sm text-[#999881] flex gap-8 mb-2">
                                                <h3 className="text-[12px] text-[#888991]">
                                                    {article.category}
                                                </h3>
                                                <span className="text-[12px]">
                                                    {new Date(article.created_at).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric"
                                                    })}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2 text-gray-800"
                                                dangerouslySetInnerHTML={{ __html: article.caption }} />
                                            <p className="text-gray-600 text-sm mb-4"
                                                dangerouslySetInnerHTML={{ __html: article.excerpt }} />
                                            {/* <Link to={`/purpleinsights/${article.id}`} className="text-[#B580D1] font-semibold">
                                                Read More
                                            </Link> */}
                                        </div>
                                    </div>
                                ))}


                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={insightbanner} alt="banner" className="w-full lg:h-[284px] h-[120px] bg-cover" />
                    <div className="absolute lg:top-[25%] top-2 left-[7%] lg:text-[56px] text-[24px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                    <div className="bg-white absolute lg:top-[60%] top-16 left-[7%] w-[108px] h-[44px] flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RedDetailOne