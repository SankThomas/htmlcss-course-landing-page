import { useState } from "react"
import { features } from "../data/data"

export default function Features() {
  const [tabs] = useState(features)
  const [value, setValue] = useState(0)

  const { id, title, desc, image } = tabs[value]

  return (
    <>
      <section className="px-5 pb-10 2xl:container 2xl:mx-auto">
        <h2 className="text-3xl text-gray-900 mb-10 md:text-4xl">
          Included in the purchase
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:items-center xl:px-10">
          <article className="lg:flex flex-row-reverse">
            <div className="lg:ml-16 xl:ml-20">
              <h3 className="text-2xl mb-2 text-gray-900 md:text-3xl">
                {title}
              </h3>
              <div className="bg-red-500 h-1 w-16 mb-1"></div>
              <p className="mt-5">{desc}</p>
            </div>

            <div className="flex items-center justify-evenly mt-5 lg:grid grid-cols-1 gap-5 lg:mt-0">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`h-12 w-12 p-1 rounded-full border-2 border-red-500 font-bold ${
                    index === value && "bg-red-500 text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </article>

          <article className="mt-10">
            <img
              src={image}
              alt={title}
              title={title}
              className="w-full xl:w-9/12 xl:w-full tabs__image"
            />
          </article>
        </div>
      </section>
    </>
  )
}
