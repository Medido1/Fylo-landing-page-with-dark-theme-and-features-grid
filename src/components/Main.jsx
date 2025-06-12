import { features, testimonials} from "../../data"; 
import Feature from "./Feature";
import stayProductive from "../assets/images/illustration-stay-productive.png";
import arrowIcon from "../assets/images/icon-arrow.svg";
import Testimonial from "./Testimonial";
import bgQuotes from "../assets/images/bg-quotes.png"
import { useState } from "react";
import { useEffect } from "react";

function Main() {
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");

  function handleSumbit(e) {
    e.preventDefault();

    let email = e.target.email.value;

    if (!email) {
      setErrorMsg("Please enter a valid email adress!");
      return;
    }
  }

  useEffect(() => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (isValid) {
      setErrorMsg("")
    };
  }, [email])
   return (
    <main className="px-4 py-6 flex-grow mt-20 relative">
      <ul className="flex flex-col gap-20 mb-28
        sm:grid sm:grid-cols-2">
        {features && features.map(feature => (
          <Feature 
            key={feature.id}
            data = {feature}
          />
        ))}
      </ul>
      <div className="lg:flex lg:justify-center lg:gap-8 lg:items-center ">
        <img 
          className="sm:w-[50%] lg:w-[40%]"
          src={stayProductive} alt="stay productive illustration" />
        <div className="lg:w-[40%]">
          <h3 className="font-bold text-white text-lg sm:text-xl
           lg:text-3xl sm:w-[80%] lg:w-[60%] my-4"> 
            Stay productive, wherever you are
          </h3>
          <p className="text-white mb-4 lg:max-w-[70%]">
            Never let location be an issue when accessing your files. Fylo has you
            covered for all of your file torage needs.
          </p>
          <p className="text-white lg:max-w-[70%]">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href="#" className="group">
            <div className="flex gap-2 items-center mt-6 w-[46%] mb-1">
              <p className="text-cyan-300 group-hover:text-white text-sm">See how Fylo works</p>
              <img src={arrowIcon} alt="arrow icon"/>
            </div>
            <div
              className="h-0.5 bg-cyan-300 group-hover:bg-white w-[46%] lg:w-[24%]">
            </div>
          </a>
        </div>
      </div>
      <ul className="relative flex flex-col gap-8 mt-20
        sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:between mx-auto 
         sm:pb-80 max-w-[1100px]">
        {testimonials && testimonials.map(item => (
          <Testimonial key={item.id} data={item}/>
        ))}
        <img src={bgQuotes} className="absolute -top-6 h-6" />
      </ul>
      <div className="mt-20 bg-[#1b2230] px-4 py-8 flex flex-col items-center 
        sm:w-[500px] sm:absolute sm:-bottom-[2%] lg:-bottom-[6%] sm:left-[10%] md:left-[18%]
        lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-[1000px] lg:px-28">
        <p className="text-white text-xl lg:text-2xl font-bold text-center">
          Get early access today
        </p>
        <p className="text-gray-200 text-center mt-4">
          It only takes a minute to sign up and our free starter tier is extremely generous. 
          If you have any questions, our support team would be happy to help you.
        </p>
        <form 
          onSubmit={(e) => handleSumbit(e)}
          className="lg:flex lg:items-center lg:w-full">
          <div className="w-full">
            <label htmlFor="email" className="sr-only">Email Adress</label>
            <input
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="rounded-full bg-white px-6 py-4 mt-6 mb-4 lg:w-[80%] "
              type="email" placeholder="email@example.com" id="email"
              autoComplete="off"
            />
            <p className="text-red-400 -mt-2 ml-2">{errorMsg}</p>
          </div>
          <button 
            type="submit"
            className="bg-gradient-to-r from-teal-200 to-cyan-500
            text-white px-16 py-4 mt-2 rounded-full cursor-pointer
            lg:w-[50%] lg:text-sm hover:from-teal-400 hover:to-cyan-700">
            Get Started For Free
          </button>
        </form>
      </div>
    </main>
   )
}

export default Main;