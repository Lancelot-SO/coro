/* eslint-disable react/no-unescaped-entities */
import 'react-phone-number-input/style.css';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import PhoneInput, { isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input';

import contactbg from "../assets/contact/contactBg.png";
import contactbanner from "../assets/contact/contactbanner.png"

import { format } from 'date-fns';

import ghana from "../assets/contact/ghana.png"
import nigeria from "../assets/contact/nigeria.png"


import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMarkEmailUnread, MdOutlineLocationOn } from "react-icons/md";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker CSS
import { useRef, useState } from 'react';

const PurpleContact = () => {
    const form = useRef();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedDate, setSelectedDate] = useState(null); // State for DatePicker

    const sendEmail = (e) => {
        e.preventDefault();

        const formattedDate = selectedDate ? format(selectedDate, 'MM/dd/yyyy, HH:mm') : '';

        emailjs
            .sendForm('service_lw4pyej', 'template_0vf2k2b', form.current, {
                publicKey: 'od2vIhbdFel9_otjO',
                from_name: 'Coronation Insurance',
                time: formattedDate, // Pass the formatted date/time
            })
            .then(
                () => {
                    toast.success('Message sent successfully!');
                },
                // eslint-disable-next-line no-unused-vars
                (error) => {
                    toast.error('Failed to send message. Please try again.');
                },
            );
        e.target.reset();
        setPhoneNumber(''); // Reset phone number
        setSelectedDate(null); // Reset DatePicker
    };

    return (
        <div>
            <ToastContainer />
            <div className="relative">
                <img src={contactbg} alt="about" className="w-full bg-cover" loading="lazy" />
                <div className="absolute top-[293px] left-20 w-[858px] h-[152px]">
                    <h2 className="text-[56px] w-[511px] h-[128px] font-bold leading-[64px] text-white">HOW MAY WE BE OF SERVICE?</h2>
                    <span className="text-[18px] font-normal leading-[24px] text-white">
                        We would love to get to know you better! Please fill in your details below so we can<br /> connect you with the right member of our team.
                    </span>
                </div>
            </div>

            <section>
                <div className="flex flex-col md:flex-row items-center justify-center p-6 min-h-screen ml-[70px]">
                    <div className="w-full md:w-1/2 p-6 bg-white text-black rounded-lg shadow-card">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-black">First name</label>
                                    <input type="text" name='first_name' placeholder="First name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black" />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-black">Last name</label>
                                    <input type="text" name='last_name' placeholder="Last name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Email</label>
                                <input type="email" name='user_email' placeholder="you@company.com" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black" />
                            </div>
                            <div className=''>
                                <label className="block text-sm font-medium text-black">Phone number</label>
                                <PhoneInput
                                    defaultCountry='GH'
                                    required
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                    placeholder="233 54868650"
                                    className={`flex w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm text-black 
                        ${phoneNumber && isPossiblePhoneNumber(phoneNumber) ? 'border-customPurple' : 'border-gray-300 dark:border-gray-700'}
                        ${phoneNumber && isValidPhoneNumber(phoneNumber) ? 'text-customPurple' : ''}`}
                                />
                                {/* Hidden input field for phone number */}
                                <input type="hidden" name="user_phone" value={phoneNumber} className='focus:outline-none' />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Request Related</label>
                                <select name='user_request' className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black">
                                    <option>Select at least one option</option>
                                    <option>Abandoned call</option>
                                    <option>Call dropped</option>
                                    <option>Product and Services</option>
                                    <option>Request for Cancellation of Policy</option>
                                    <option>Request for Car Tracker</option>
                                    <option>Request for Claim form</option>
                                    <option>Request for Claims payment </option>
                                    <option>Request to Increase Sum Assured</option>
                                    <option>Request for Last payment date</option>
                                    <option>Request for link to digital channels (mobile app, retail portal, website etc.)</option>
                                    <option>Request for Outstanding premium</option>
                                    <option>Request for Part payment</option>
                                    <option>Request for Payment schedule</option>
                                    <option>Request for Policy validation</option>
                                    <option>Request for Proposal form</option>
                                    <option>Request for Quote </option>
                                    <option>Request for Receipt of payment</option>
                                    <option>Request for Relationship Manager</option>
                                    <option>Request for Renewal certificate</option>
                                    <option>Request for Renewal schedule</option>
                                    <option>Request for Termination procedure</option>
                                    <option>Request for USSD code</option>
                                    <option>Request for Coronation Insurance Account Details</option>
                                    <option>Request for Coronation Insurance slogan</option>
                                    <option>Request for Payment Refund</option>
                                    <option>Request for Travel Insurance Certificate</option>
                                    <option>Request for Correction of Name on Insurance Certificate</option>
                                    <option>First Notice of Loss (FNOL) </option>
                                    <option>Other Request</option>

                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Enquiry related</label>
                                <select name='user_enquiry' className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black">
                                    <option>Select at least one option</option>
                                    <option>Enquiry on Bancassurance partnership</option>
                                    <option>Enquiry on Claims procedure</option>
                                    <option>Enquiry on Contact details (Email, Telephone number)</option>
                                    <option>Enquiry on Other branches</option>
                                    <option>Enquiry on Policy termination procedure</option>
                                    <option>Enquiry on Products and Services</option>
                                    <option>FNOL enquiry</option>
                                    <option>Other Enquiry</option>
                                    <option>Policy Renewal on Coronation Insurance Mobile App</option>
                                    <option>Policy Renewal on Online  Portal</option>
                                    <option>Online Portal Enquiries</option>
                                    <option>Travel Insurance Procedure</option>
                                    <option>Coronation payment platform</option>
                                    <option>Company Enquiry</option>

                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-black">Complaint Related</label>
                                <select name='user_complaint' className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black">
                                    <option>Select at least one option</option>
                                    <option>Claims substantiating document issue</option>
                                    <option>Non reciept of Discharge Voucher </option>
                                    <option>Delay in Claims Settlement </option>
                                    <option>Delay in conducting inspection/survey</option>
                                    <option>Delay in receiving Feedback </option>
                                    <option>Disputed Claim offer</option>
                                    <option>Excess buy back issue</option>
                                    <option>Error in Policy document </option>
                                    <option>First Notice of Loss (FNOL) complaint</option>
                                    <option>Hard Copy Policy document not received </option>
                                    <option>Non Receipt of SMS/E-mail notifications</option>
                                    <option>Policy not uploaded on MID portal Online Portal Enquiries</option>
                                    <option>Unable to access online portal</option>
                                    <option>Unable to access mobile app</option>
                                    <option>Unable to access website</option>
                                    <option>Unable to access USSD code</option>
                                    <option>Wrong Debit</option>
                                    <option>Wrong Statement of Account/Account reconciliation</option>
                                    <option>Non Receipt of Travel Insurance Certificate</option>
                                    <option>Other Complaint</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Message</label>
                                <textarea name='message' rows="4" placeholder="Enter your Message" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black " required></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-black">Preferred Date and Time</label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    showTimeSelect
                                    timeIntervals={15}
                                    dateFormat="Pp"
                                    placeholderText="MM/DD/YYYY, HH:MM"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm text-black"
                                />
                                <input type="hidden" name="time" value={selectedDate ? format(selectedDate, 'MM/dd/yyyy, HH:mm') : ''} />
                            </div>

                            <div className="flex items-start">
                                <input type="checkbox" id="privacy" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-500">You agree to our friendly <Link to="/privacy" className="text-[#B580D1] hover:underline">privacy policy</Link>.</label>
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-[#B580D1] text-white font-semibold rounded-md shadow-card hover:bg-[#a258ca] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">SEND MESSAGE</button>
                        </form>
                    </div>

                </div>
            </section>

            <section>
                <div className='p-20'>
                    <div className='w-[1280px] h-[608px] flex gap-6'>
                        <div className='w-[628px] h-[608px] border rounded-lg shadow-md bg-[#E9EAEC]'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.715074559653!2d-0.19685382525451506!3d5.609034194371856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bae79bae68f%3A0xb8969a3fa0ca5a02!2s35%20Aviation%20Rd%2C%20Accra!5e0!3m2!1sen!2sgh!4v1726821871869!5m2!1sen!2sgh"
                                title="Google Maps Location"
                                height="360"
                                style={{ border: '0' }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='lg:w-[628px] w-[280px] rounded-lg'
                            ></iframe>
                            <div className='bg-[#141415] w-full h-[90px] flex items-center gap-6 px-6'>
                                <img src={ghana} alt='ghana' className='bg-cover' loading='lazy' />
                                <h2 className='text-white font-semibold text-[24px] leading-[32px]'>Ghana</h2>
                            </div>
                            <div className=' px-6'>
                                <div className='flex items-center gap-2'>
                                    <BiPhoneCall size={24} />
                                    <div>
                                        <span className='text-[12px] font-medium leading-[24px] text-black'>Call uS</span>
                                        <p className='text-[12px] font-normal leading-[24px] text-[#56575D]'>0302772606 / 0308249068</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <MdOutlineMarkEmailUnread size={24} />
                                    <div>
                                        <span className='text-[12px] font-medium leading-[24px] text-black'>Email</span>
                                        <p className='text-[12px] font-normal leading-[24px] text-[#56575D]'>infoghana@coronationinsurance.com.ng</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <MdOutlineLocationOn size={24} />
                                    <div>
                                        <span className='text-[12px] font-medium leading-[24px] text-black'>Head Office</span>
                                        <p className='text-[12px] font-normal leading-[24px] text-[#56575D]'>35, Aviation Road, Airport Residential Area</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[628px] h-[608px] border rounded-lg shadow-md bg-[#E9EAEC]'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6043676377985!2d3.4222550747525275!3d6.44481589354647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d470073e31%3A0x1bed2f1a92ae38de!2s119%20Awolowo%20Rd%2C%20Ikoyi%2C%20Lagos%20106104%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sgh!4v1726824339546!5m2!1sen!2sgh" title="Google Maps Location"
                                height="360"
                                style={{ border: '0' }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='lg:w-[628px] w-[280px] rounded-lg'
                            ></iframe>
                            <div className='bg-[#141415] w-full h-[90px] flex items-center gap-6 px-6'>
                                <img src={nigeria} alt='ghana' className='bg-cover' loading='lazy' />
                                <h2 className='text-white font-semibold text-[24px] leading-[32px]'>Nigeria</h2>
                            </div>
                            <div className=' px-6'>
                                <div className='flex items-center gap-2'>
                                    <BiPhoneCall size={24} />
                                    <div>
                                        <span className='text-[12px] font-medium leading-[24px] text-black'>Call uS</span>
                                        <p className='text-[12px] font-normal leading-[24px] text-[#56575D]'>0302772606 / 0308249068</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <MdOutlineMarkEmailUnread size={24} />
                                    <div>
                                        <span className='text-[12px] font-medium leading-[24px] text-black'>Email</span>
                                        <p className='text-[12px] font-normal leading-[24px] text-[#56575D]'>info@coronationinsurance.com.ng</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <MdOutlineLocationOn size={24} />
                                    <div>
                                        <span className='text-[12px] font-medium leading-[24px] text-black'>Head Office</span>
                                        <p className='text-[12px] font-normal leading-[24px] text-[#56575D]'>No. 119, Awolowo Road, LAGOS, Lagos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={contactbanner} alt="banner" className="w-full h-[284px] bg-cover" />
                    <div className="absolute top-[35%] left-[7%] text-[56px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PurpleContact;