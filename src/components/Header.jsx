import logo from "../assets/images/logo.svg";
import illustrationIntro from "../assets/images/illustration-intro.png"
import "../App";

function Header() {
  return (
    <header className="px-4 py-8 lg:px-8 lg:py-16" >
      <div className="flex items-center justify-between mb-10">
        <img 
          className="h-6"
          src={logo} alt="log" />
        <div className="flex gap-4 text-gray-200">
          <a href="#" className="hover:underline hover:font-bold">Features</a>
          <a href="#" className="hover:underline hover:font-bold">Team</a>
          <a href="#" className="hover:underline hover:font-bold">Sign In</a>
        </div>
      </div>
      <img 
        className="md:w-[50%] lg:w-[40%] mx-auto mb-10"
        src={illustrationIntro} alt="illustration" />
      <div className="sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] mx-auto">
        <h1 className="font-raleway text-3xl text-white text-center font-bold mt-4">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-white text-center mt-6">
          Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.
        </p>
      </div>
      <button className="block mx-auto mt-8 px-18 py-2 lg:py-4 rounded-full text-white
        bg-gradient-to-r from-teal-200 to-cyan-500 cursor-pointer
      hover:from-teal-400 hover:to-cyan-700">
        Get Started
      </button>
    </header>
  )
}

export default Header;