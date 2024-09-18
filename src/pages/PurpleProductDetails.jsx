import { Link, Route, Routes, useLocation } from "react-router-dom";
import PurpleMotor from "./PurpleMotor";
import PurpleTravel from "./PurpleTravel";
import PurpleHomeInsurance from "./PurpleHomeInsurance";

const PurpleProductDetails = () => {
    const location = useLocation();

    // Function to check if a link is active based on the current path
    const isActive = (path) => location.pathname === path;

    return (
        <div>
            <div className="px-10">
                <ul className="flex gap-4">
                    <li>
                        <Link
                            to="/purpleproductdetails/motor"
                            className={`${isActive("/purpleproductdetails/motor")
                                ? "text-purple-500 border-b-4 border-purple-500 font-bold"
                                : "text-gray-500"
                                } pb-2`}
                        >
                            Motor Insurance
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/purpleproductdetails/travel"
                            className={`${isActive("/purpleproductdetails/travel")
                                ? "text-purple-500 border-b-4 border-purple-500 font-bold"
                                : "text-gray-500"
                                } pb-2`}
                        >
                            Travel Insurance
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/purpleproductdetails/home"
                            className={`${isActive("/purpleproductdetails/home")
                                ? "text-purple-500 border-b-4 border-purple-500 font-bold"
                                : "text-gray-500"
                                } pb-2`}
                        >
                            Home Insurance
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mt-6">
                <Routes>
                    <Route path="motor" element={<PurpleMotor />} />
                    <Route path="travel" element={<PurpleTravel />} />
                    <Route path="home" element={<PurpleHomeInsurance />} />
                </Routes>
            </div>
        </div>
    );
};

export default PurpleProductDetails;
