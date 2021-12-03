import BuyCourse from "../buttons/BuyCourse"
import CourseDiscussion from "../buttons/CourseDiscussion"

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10 px-5 flex justify-center flex-col flex-wrap sm:grid grid-cols-2 gap-5">
        <div>
          <h2 className="font-bold text-2xl">Instructor: Thomas Sankara</h2>
        </div>

        <ul className="md:grid grid-cols-2 gap-5">
          <li className="text-center mb-5 md:mb-0">
            <BuyCourse />
          </li>
          <li className="text-center">
            <CourseDiscussion />
          </li>
        </ul>
      </footer>
    </>
  )
}
