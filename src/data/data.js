import { v4 as uuidv4 } from "uuid"

export const features = [
  {
    id: uuidv4(),
    title: "6 hours Video On Demand content",
    desc: "You will ALWAYS have access to 6 hours of instructor-led video content with examples and explanations as you move along with the course.",
    image: "./images/video.svg",
    button: "Feature 1",
  },
  {
    id: uuidv4(),
    title: "Build and deploy a Modern Hotel Website",
    desc: "You will not just build a website - you will also deploy it to the modern web, thanks to Netlify who offer free builds and hosting for your web development projects. When you're done, send the link to your friends and family and share it on your portfolio as well!",
    image: "./images/html5.svg",
    button: "Feature 2",
  },
  {
    id: uuidv4(),
    title: "Certificate of completion from Udemy",
    desc: "You will receive a certificate of completion from Udemy that gives you bragging rights amongst your peers.",
    image: "./images/certificate.svg",
    button: "Feature 3",
  },
]
