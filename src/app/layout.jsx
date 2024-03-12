import Link from "next/link"
import { Inter } from "next/font/google"
import "./index.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Resume - Salman Khan",
}

export default function RootLayout({ children }) {
  const printMode = false
  //   const resumeTemplates = [
  //     ["Classic", "template1"],
  //     ["Modern", "template2"],
  //   ]

  // const defaultTemplate = resumeTemplates[1][1]

  return (
    <html lang="en">
      <body className={inter.className}>
        {!printMode && (
          <div className="container mt-12">
            <div className="flex flex-wrap items-center justify-center gap-4 [&_a:hover]:underline">
              <h5>Choose Template: </h5>
              {/* {resumeTemplates.map((template) => (
              <Link
                key={template[1]}
                href={`/${template[1]}`}
                className={`text-base font-semibold ${
                  template[1] === currentTemplate
                    ? "pointer-events-none text-gray-600"
                    : ""
                }`}
              >
                {template[0]}
              </Link>
            ))} */}
            </div>
          </div>
        )}
        <div className={!printMode ? "pdf-container" : ""}>
          <div
            id="pdf"
            className={printMode ? "mx-auto" : ""}
          >
            {children}
          </div>
        </div>

        {!printMode && (
          <div
            className="container"
            id="other-body-stuff"
          >
            <div className="my-4 text-center">
              {/* <a
              className="text-lg font-bold  underline transition-colors hover:text-sky-500"
              href={"?printonly=true" + "&template=" + currentTemplate}
            >
              Print Mode
            </a> */}
            </div>
          </div>
        )}
      </body>
    </html>
  )
}
