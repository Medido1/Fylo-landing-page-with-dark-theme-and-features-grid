import logo from "../assets/images/logo.svg";
import illustrationIntro from "../assets/images/illustration-intro.png"
import "../App";

function Header() {
  return (
    <header className="px-4 py-8" >
      <div className="flex items-center justify-between mb-10">
        <img 
          className="h-6"
          src={logo} alt="log" />
        <div className="flex gap-4 text-gray-200">
          <a href="#">Features</a>
          <a href="#">Team</a>
          <a href="#">Sign In</a>
        </div>
      </div>
      <img src={illustrationIntro} alt="illustration" />
      <h1 className="font-raleway text-3xl text-white text-center font-bold mt-4">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-white text-center mt-6">
        Fylo stores all your most important files in one secure location. Access them wherever 
        you need, share and collaborate with friends family, and co-workers.
      </p>
      <button className="block mx-auto mt-8 px-18 py-2 rounded-full text-white
        bg-gradient-to-r from-teal-200 to-cyan-500">
        Get Started
      </button>
    </header>
  )
}

export default Header;