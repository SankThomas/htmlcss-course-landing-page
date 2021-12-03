import BuyCourse from "../buttons/BuyCourse"
import CourseDiscussion from "../buttons/CourseDiscussion"

export default function Header() {
  return (
    <>
      <header className="bg-white shadow p-5 flex justify-center flex-col sm:items-center sm:flex-row sm:justify-between 2xl:fixed 2xl:top-0 2xl:w-full">
        <div>
          <h2 className="font-bold text-gray-800 text-4xl mb-5 sm:mb-0">
            Sankara
          </h2>
        </div>

        <nav>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li className="text-center">
              <BuyCourse />
            </li>
            <li className="text-center">
              <CourseDiscussion />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
