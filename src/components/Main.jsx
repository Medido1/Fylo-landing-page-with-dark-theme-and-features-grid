import { features } from "../../data"; 
import Feature from "./Feature";
import stayProductive from "../assets/images/illustration-stay-productive.png";
import arrowIcon from "../assets/images/icon-arrow.svg";

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
    </main>
   )
}

export default Main;