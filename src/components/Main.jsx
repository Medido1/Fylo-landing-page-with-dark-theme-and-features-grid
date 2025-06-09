import { features } from "../../data"; 
import Feature from "./Feature";

function Main() {
   return (
    <main className="px-2 py-4 flex-grow mt-20">
      <ul className="flex flex-col gap-20 mb-20">
        {features && features.map(feature => (
          <Feature 
            key={feature.id}
            data = {feature}
          />
        ))}
      </ul>
    </main>
   )
}

export default Main;