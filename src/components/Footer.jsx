import logo from "../assets/images/logo.svg";
import locationIcon from "../assets/images/icon-location.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import emailIcon from "../assets/images/icon-email.svg";
import facebookIcon from "../assets/images/facebook.svg";
import twitterIcon from "../assets/images/twitter.svg";
import instagramIcon from "../assets/images/instagram.svg";

function Footer() {
  return (
    <footer className="bg-[#03191F] p-4 lg:px-25 flex flex-col lg:pt-30">
      <img src={logo} alt="logo" className="mt-10 ml-6 self-start h-14 mb-10" />
      <div 
        className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:col-span-2">
          <div className="flex items-start gap-4 mb-4">
            <img src={locationIcon} alt="location icon" className="mt-1"/>
            <p className="text-gray-200 font-openSans ml-2 md:max-w-60 lg:max-w-80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, consectetur cum. Aliquam minus, neque blanditiis
              vel necessitatibus id ex laborum.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src={phoneIcon} alt="phone icon"/>
              <p className="text-gray-200 font-openSans">
                +1-543-123-4567
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={emailIcon} alt="email icon" />
              <p className="text-gray-200 font-openSans">
                example@fylo.com
              </p>
            </div>
          </div>
        </div>
        <div className="text-gray-200 flex flex-col gap-2 mt-10 lg:mt-0
          text-lg md:mt-0 md:grid md:grid-cols-2 md:gap-4">
          <ul className="flex flex-col gap-2 mb-6">
            <li>
              <a href="" className="cursor-pointer">About Us</a>
            </li>
            <li>
              <a href="" className="cursor-pointer">Jobs</a>
            </li>
            <li>
              <a href="" className="cursor-pointer">Press</a>
            </li>
            <li>
              <a href="" className="cursor-pointer">Blog</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="" className="cursor-pointer">Contact Us</a>
            </li>
            <li>
              <a href="" className="cursor-pointer">Terms</a>
            </li>
            <li>
              <a href="" className="cursor-pointer">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 mt-10 lg:mt-0 mx-auto  
          mb-5 md:col-span-2 lg:col-span-1">
          <img 
            className="cursor-pointer h-6 border-1 border-white p-1 rounded-[50%]"
            src={facebookIcon} alt="facebook icon"  
          />
          <img 
            className="cursor-pointer h-6 border-1 border-white p-1 rounded-[50%]"
            src={twitterIcon} alt="twitter icon"  
          />
          <img 
            className="cursor-pointer h-6 border-1 border-white p-1 rounded-[50%]"
            src={instagramIcon} alt="instagram icon"  
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer;