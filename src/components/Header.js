export default function Header() {
  return (
    <>
      <header className="bg-white shadow flex items-center justify-between p-5">
        <div>
          <h2 className="font-bold text-gray-800 text-4xl xl:text-6xl">
            Sankara
          </h2>
        </div>

        <nav>
          <ul className="flex items-center justify-between">
            <li className="mr-5">
              <a
                href="https://www.udemy.com/course/tsbdesigns-web-development-course/learn/?couponCode=NOVEMBER"
                target="_blank"
                rel="noopenner noreferrer"
                className="bg-red-500 text-white font-bold py-2 px-6 rounded shadow border-2 border-red-500 hover:bg-transparent hover:text-red-500 duration-500 transition-all"
              >
                Buy the course
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/tsbdesigns-web-development-course/learn/lecture/25270392#questions"
                target="_blank"
                rel="noopenner noreferrer"
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 transition-all"
              >
                Course discussion
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
