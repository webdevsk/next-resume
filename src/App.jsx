import { Suspense, lazy } from "react"
const defaultTemplate = "Template2"
const loadComponent = (name) => lazy(() => import(`./templates/${name}.jsx`))

const resumeTemplates = [
  ["Classic", "Template1"],
  ["Modern", "Template2"],
]

function App() {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  const printMode = params.get("printonly") ?? false
  const template = params.get("template") ?? defaultTemplate
  const Template = loadComponent(template)
  document.body.classList.toggle("bg-slate-200", !printMode)

  return (
    <>
      {!printMode && (
        <div className="container mt-12">
          <div className="flex flex-wrap items-center justify-center gap-4 [&_a:hover]:underline">
            <h5>Choose Template: </h5>
            {resumeTemplates.map((template) => (
              <a
                key={template[1]}
                href={`?template=${template[1]}`}
                className={`text-base font-semibold`}
              >
                {template[0]}
              </a>
            ))}
          </div>
        </div>
      )}
      <div className={!printMode ? "pdf-container" : ""}>
        <div id="pdf" className={printMode ? "mx-auto" : ""}>
          <Suspense fallback={<div>Loading</div>}>
            <Template printMode={printMode} />
          </Suspense>
        </div>
      </div>

      {!printMode && (
        <div className="container" id="other-body-stuff">
          <div className="my-4 text-center">
            <a
              className="text-lg font-bold  underline transition-colors hover:text-sky-500"
              href={"?printonly=true" + "&template=" + template}
            >
              Print Mode
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default App
