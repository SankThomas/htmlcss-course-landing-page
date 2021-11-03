import hero from "../images/hero.svg"

export default function Hero() {
  return (
    <>
      <section className="flex flex-col-reverse md:grid grid-cols-2 gap-10 md:items-center xl:max-w-7xl xl:mx-auto mt-10">
        <article className="mt-10 md:mt-0">
          <h1 className="font-bold text-5xl text-gray-800 xl:text-7xl mb-3">
            HTML and CSS Course
          </h1>
          <p className="text-gray-600 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            cumque, molestiae sequi in delectus error.
          </p>
          <a
            href="https://www.udemy.com/course/tsbdesigns-web-development-course/learn/?couponCode=NOVEMBER"
            target="_blank"
            rel="noopenner noreferrer"
            className="bg-red-500 text-white font-bold py-2 px-6 rounded shadow border-2 border-red-500 hover:bg-transparent hover:text-red-500 duration-500 transition-all"
          >
            Buy the course for $14.99
          </a>
          <p className="mt-3 text-gray-600">
            Or use the Coupon Code:{" "}
            <strong className="text-gray-900">NOVEMBER</strong> for 25% off for
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
