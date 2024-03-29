import Link from "next/link"
import CurriculumResumeSvgrepoCom from "@/assets/curriculum-resume-svgrepo-com.svg"

export default function SideBar() {
  return (
    <aside className="fixed left-0 top-0 h-dvh border-r-2 bg-gray-50 shadow-md">
      <div className="h-lvh w-64 overflow-y-auto bg-inherit *:rounded-md">
        <div className="flex flex-col items-center bg-yellow-50 py-8">
          <CurriculumResumeSvgrepoCom
            width={96}
            height="auto"
            className="h-auto"
          />
          <h1 className="py-2 text-lg font-semibold text-gray-800">
            Resume Templates
          </h1>
        </div>
        <div className="mt-8 flex flex-col divide-y">
          {["template1", "template2"].map(item => (
            <Link
              key={item}
              href={`/${item}`}
              className={`px-4 py-2 text-base font-semibold capitalize transition-colors hover:bg-gray-200 ${
                0 ? "pointer-events-none text-gray-600" : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
