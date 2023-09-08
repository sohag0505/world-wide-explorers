import { FaFacebook, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/travel-logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-sky-500 text-base-content">
        <div className="text-white ml-20">
          <span className="text-xl font-bold">Discover</span>

          <Link to="/about">About Us</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="text-white ml-20">
          <span className="text-xl font-bold mb-3">Payment Methods</span>
          <div className="flex items-center gap-3">
            <img
              src="https://www.bssnews.net/assets/news_photos/2022/10/18/image-88652-1666090591.jpg"
              alt=""
              className="object-cover h-14 w-14 avter rounded-md"
            />
            <img
              src="https://st2.depositphotos.com/1102480/7110/i/950/depositphotos_71103589-stock-photo-visa-logo-printed-on-paper.jpg"
              alt=""
              className="object-cover h-14 w-14 avter rounded-md"
            />
            <img
              src="data:image/png;base64,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"
              alt=""
              className="object-cover h-14 w-14 avter rounded-md"
            />
          </div>
        </div>
        <div className="text-white ml-20">
          <span className="text-xl font-bold">Need help?</span>
          <p>
            We are Always here for you! Knock <br /> us on Messenger anytime or{" "}
            call <br /> our Hotline (10AM - 10PM).
          </p>
        </div>
        <div className="text-white ml-20">
          <span className="text-xl font-bold">Contact</span>
          <p>sohaghossain0505@gmail.com</p>
          <p>+880 1721853600</p>
          <div className="flex items-center gap-6 mt-6 text-2xl">
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaWhatsappSquare />
            </p>
            <p>
              <FaLinkedin />
            </p>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-sky-600 text-base-content border-sky-600">
        <div className="items-center grid-flow-col md:ml-0 ml-12">
          <img src={logo} alt="" className="h-12 w-12" />
          <p className="text-white">
            World Wide Explorers <br />
            Publish since 2023
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end md:ml-0 ml-12">
          <div className="grid grid-flow-col gap-4">
            <small className="text-white">
              © Copyright World Wide Explorers Ltd.
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
