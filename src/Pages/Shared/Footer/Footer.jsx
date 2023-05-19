import { Link } from "react-router-dom";
import logo from "../../../assets/logo/juno-logo.png";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#212529] text-neutral-content">
                <div>
                    <img src={logo} alt="juno-toy-marketplace-footer-logo" />
                    <p><strong className="font-bolder text-2xl">Juno Toys & Games</strong><br />Providing quality & enjoyable toys <br />for your kids since 1992.</p>
                </div>

                <div>
                    <span className="footer-title">Social</span>
                    <p className="font-bold text-xl">
                        Find Us on Social Medias:
                    </p>
                    <div className="grid grid-flow-col gap-3">
                        <Link to="https://www.facebook.com" target="_blank"><button className="btn btn-lg btn-error text-white"><FaFacebookSquare className="text-4xl" /></button></Link>
                        <Link to="https://www.twitter.com" target="_blank"><button className="btn btn-lg btn-error text-white"><FaTwitterSquare className="text-4xl" /></button></Link>
                        <Link to="https://www.linkedin.com" target="_blank"><button className="btn btn-lg btn-error text-white"><FaLinkedin className="text-4xl" /></button></Link>
                        <Link to="https://www.youtube.com" target="_blank"><button className="btn btn-lg btn-error text-white"><FaYoutubeSquare className="text-4xl" /></button></Link>
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
            </footer>

            <div className="footer footer-center pt-2 px-10 pb-4 bg-neutral text-neutral-content">
                <div>
                    <p className="text-xl">Copyright &copy; 2023 | <Link href="http://localhost:5173" className="text-orange-500 font-bold">Juno - Toys & Games</Link> by <Link href="https://github.com/csmahmud99" target="_blank" className="text-orange-500 font-bold">CS Mahmud</Link> | All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;