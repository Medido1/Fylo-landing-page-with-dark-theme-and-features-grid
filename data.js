import acessAnywhere from "./src/assets/images/icon-access-anywhere.svg";
import security from "./src/assets/images/icon-security.svg";
import collaboration from "./src/assets/images/icon-collaboration.svg";
import anyFile from "./src/assets/images/icon-any-file.svg"

const features = [
  {
    id:1,
    image :acessAnywhere,
    title: "Access your files, anywhere",
    description: `The ability to use a smartphone, tablet, or computer to access your account means your 
      files follow you everywhere.`,
  },
  {
    id:2,
    image :security,
    title: "Security you can trust",
    description: `2-factor authentication and user-controlled encryption are just a couple of the security 
      features we allow to help secure your files.`,
  },
  {
    id:3,
    image :collaboration,
    title: "Real-time collaboration",
    description: `Securely share files and folders with friends, family and colleagues for live collaboration. 
      No email attachments required.`,
  },
  {
    id:4,
    image :anyFile,
    title: "Store any type of file",
    description: `Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
      file types to be securely stored and shared.`,
  }
]

export {features};