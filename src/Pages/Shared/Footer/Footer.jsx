import { Link } from "react-router-dom";
import logo from "../../../assets/logo/juno-logo.png";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import { FaGlobeEurope, FaEnvelope, FaPhoneSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#212529] text-neutral-content">
                <div>
                    <img src={logo} alt="juno-toy-marketplace-footer-logo" />
                    <div>
                        <strong className="font-bolder text-2xl">Juno Toys & Games</strong><br />Providing quality & enjoyable toys <br />for your kids since 1992.
                    </div>
                    <div>
                        <div className="flex gap-1 items-center text-sm">
                            <FaGlobeEurope /><strong>Address:</strong>
                        </div>
                        <div>
                            <p>
                                24/1, Downing Street, USA-2744.  
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-1 items-center text-sm">
                            <FaEnvelope /><strong>Email:</strong>
                        </div>
                        <div>
                            <p>
                                info@juno.com  
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-1 items-center text-sm">
                            <FaPhoneSquare /><strong>Phone:</strong>
                        </div>
                        <div>
                            <p>
                                (+1) 234-567-89  
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>

                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

                <div>
                    <span className="footer-title">Social</span>
                    <p className="font-bold text-xl">
                        Find Us on Social Medias:
                    </p>
                    <div className="grid grid-flow-col gap-3">
                        <Link to="https://www.facebook.com" target="_blank"><button className="btn btn-lg bg-red-600 text-white"><FaFacebookSquare className="text-4xl" /></button></Link>
                        <Link to="https://www.twitter.com" target="_blank"><button className="btn btn-lg bg-red-600 text-white"><FaTwitterSquare className="text-4xl" /></button></Link>
                        <Link to="https://www.linkedin.com" target="_blank"><button className="btn btn-lg bg-red-600 text-white"><FaLinkedin className="text-4xl" /></button></Link>
                        <Link to="https://www.youtube.com" target="_blank"><button className="btn btn-lg bg-red-600 text-white"><FaYoutubeSquare className="text-4xl" /></button></Link>
                    </div>
                </div>
            </footer>

            <div className="footer footer-center pt-2 px-10 pb-4 bg-neutral text-neutral-content">
                <div>
                    <p className="text-xl">Copyright &copy; 2023 | <Link href="https://toy-marketplace-juno.web.app" className="text-orange-500 font-bold">Juno - Toys & Games</Link> by <Link href="https://github.com/csmahmud99" target="_blank" className="text-orange-500 font-bold">CS Mahmud</Link> | All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;