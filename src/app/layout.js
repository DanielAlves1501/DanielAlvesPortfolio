import "./globals.css";
import { open_sans, inter } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DanielAlv - Front End Developer ",
  description:
    "Hi! I’m a passionate Front-End Developer based in Venezuela. I love creating intuitive and engaging user experiences and excel at learning new technologies quickly. Let's build something great together",
  author: "Daniel Alves",
  keywords: [
    "Front End Developer",
    "Web Development",
    "Html",
    "CSS",
    "JavaScript",
    "React",
    "Next Js",
    "Responsive Design",
    "Interface Development",
    "API Integration",
    "Front End Frameworks ",
    "Git and Version Control",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${open_sans.variable} ${inter.variable} bg-primary text-gray`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
