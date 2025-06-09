import { features, testimonials} from "../../data"; 
import Feature from "./Feature";
import stayProductive from "../assets/images/illustration-stay-productive.png";
import arrowIcon from "../assets/images/icon-arrow.svg";
import Testimonial from "./Testimonial";
import bgQuotes from "../assets/images/bg-quotes.png"

function Main() {
   return (
    <main className="px-4 py-6 flex-grow mt-20">
      <ul className="flex flex-col gap-20 mb-30">
        {features && features.map(feature => (
          <Feature 
            key={feature.id}
            data = {feature}
          />
        ))}
      </ul>
      <img src={stayProductive} alt="stay productive illustration" />
      <h3 className="font-bold text-white text-lg my-4">
        Stay productive, wherever you are
      </h3>
      <p className="text-white mb-4">
        Never let location be an issue when accessing your files. Fylo has you 
        covered for all of your file torage needs.
      </p>
      <p className="text-white">
        Securely share files and folders with friends, family and colleagues 
        for live collaboration. No email attachments required.
      </p>
      <a href="#">
        <div className="flex gap-2 items-center mt-6 w-[46%] mb-1">
          <p className="text-cyan-300 text-sm">See how Fylo works</p>
          <img src={arrowIcon} alt="arrow icon" />
        </div>
        <div 
          className="h-0.5 bg-cyan-300 w-[46%]">
        </div>
      </a>
      <ul className="relative flex flex-col gap-8 mt-20">
        {testimonials && testimonials.map(item => (
          <Testimonial key={item.id} data={item}/>
        ))}
        <img src={bgQuotes} className="absolute -top-6 h-6" />
      </ul>
      <div className="mt-20 bg-[#1b2230] px-4 py-8 flex flex-col items-center">
        <p className="text-white text-xl font-bold text-center">
          Get early access today
        </p>
        <p className="text-gray-200 text-center mt-4">
          It only takes a minute to sign up and our free starter tier is extremely generous. 
          If you have any questions, our support team would be happy to help you.
        </p>
        <div>
          <label htmlFor="email" className="sr-only">Email Adress</label>
          <input 
            className="rounded-full bg-white px-6 py-4 mt-6 mb-4 "
            type="email" placeholder="email@example.com" id="email"
            required
          />
        </div>
        <button className="bg-gradient-to-r from-teal-200 to-cyan-500
          text-white px-16 py-4 mt-2 rounded-full cursor-pointer">
          Get Started For Free
        </button>
      </div>
    </main>
   )
}

export default Main;