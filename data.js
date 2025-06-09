import acessAnywhere from "./src/assets/images/icon-access-anywhere.svg";
import security from "./src/assets/images/icon-security.svg";
import collaboration from "./src/assets/images/icon-collaboration.svg";
import anyFile from "./src/assets/images/icon-any-file.svg";

import satishAvatar from "./src/assets/images/profile-1.jpg";
import bruceAvatar from "./src/assets/images/profile-2.jpg";
import ivaAvatar from "./src/assets/images/profile-3.jpg";

const features = [
  {
    id:1,
    image :acessAnywhere,
    title: "Access your files, anywhere",
    description: `The ability to use a smartphone, tablet, or computer to access your 
      account means your files follow you everywhere.`,
  },
  {
    id:2,
    image :security,
    title: "Security you can trust",
    description: `2-factor authentication and user-controlled encryption are just a 
      couple of the security features we allow to help secure your files.`,
  },
  {
    id:3,
    image :collaboration,
    title: "Real-time collaboration",
    description: `Securely share files and folders with friends, family and colleagues 
      for live collaboration. No email attachments required.`,
  },
  {
    id:4,
    image :anyFile,
    title: "Store any type of file",
    description: `Whether you're sharing holidays photos or work documents, 
      Fylo has you covered allowing for all file types to be securely stored and shared.`,
  }
]

const testimonials = [
  {
    id:1,
    text: `Fylo has improved our team productivity by an order of magnitude. 
      Since making the switch our team has become a well-oiled collaboration machine.`,
    avatar: satishAvatar,
    name: "Satish Patel",
    jobTitle:"Founder & CEO, Huddle",
  },
  {
    id:2,
    text: `Fylo has improved our team productivity by an order of magnitude.
     Since making the switch our team has become a well-oiled collaboration machine.`,
    avatar: bruceAvatar,
    name: "Bruce McKenzie",
    jobTitle:"Founder & CEO, Huddle",
  },
  {
    id:3,
    text: `Fylo has improved our team productivity by an order of magnitude.
     Since making the switch our team has become a well-oiled collaboration machine.`,
    avatar: ivaAvatar,
    name: "Iva Boyd",
    jobTitle:"Founder & CEO, Huddle",
  }
]

export {features, testimonials};