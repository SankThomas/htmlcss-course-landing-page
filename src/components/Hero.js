import hero from "../images/hero.svg"
import { AiFillStar } from "react-icons/ai"
import { BsStarHalf } from "react-icons/bs"

export default function Hero() {
  return (
    <>
      <section className="flex flex-col-reverse md:grid grid-cols-2 gap-10 md:items-center mt-10 px-5 2xl:pt-24 pb-20 2xl:container 2xl:mx-auto">
        <article className="mt-10 md:mt-0">
          <h1 className="font-bold text-5xl text-gray-800 mb-3">
            HTML and CSS Course
          </h1>
          <div className="h-1 w-24 bg-red-500 mb-5"></div>
          <p className="text-gray-600 mb-5">
            In this course we are going to build a Hotel Website and attempt to
            implement the best practices of the modern web, which include using
            semantic tags, and representing items in the containers that
            correspond to them, such as buttons. I hope you enjoy the course and
            you learn something new - enough for you to kickstart your journey
            as a web developer.
          </p>
          <p className="text-gray-600 mb-5 md:mb-10">
            Don't forget to implement the same practices into your own projects!
            Thank you.
          </p>

          <div className="flex flex-wrap items-center">
            <a
              href="https://www.udemy.com/course/tsbdesigns-web-development-course/learn/?couponCode=DECEMBER"
              target="_blank"
              rel="noopenner noreferrer"
              className="bg-red-500 text-white font-bold py-2 px-6 rounded shadow border-2 border-red-500 hover:bg-transparent hover:text-red-500 duration-500 transition-all"
            >
              Buy the course for $14.99
            </a>
            <p className="md:ml-2 text-gray-600">
              Course Rating: 4.3
              <ul className="flex items-center">
                <li>
                  <AiFillStar className="text-yellow-400 text-xl" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-xl" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-xl" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-xl" />
                </li>
                <li>
                  <BsStarHalf className="text-yellow-400 text-lg" />
                </li>
              </ul>
            </p>
          </div>

          <p className="mt-3 text-gray-600">
            Or use the Coupon Code:{" "}
            <strong className="text-gray-900">DECEMBER</strong> for 25% off for
            the next 30 days.
          </p>
        </article>

        <article>
          <img
            src={hero}
            alt="HTML and CSS Course Landing Page"
            title="Thomas Sankara HTML and CSS Course Landing Page"
          />
        </article>
      </section>
    </>
  )
}
