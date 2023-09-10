import Template2 from "./templates/Template2"

function App() {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  const printMode = params.get("printonly") ? true : false

  return (
    <div className={!printMode ? "container" : ""}>
      <div className={!printMode ? "pdf-container" : ""}>
        <div
          id="pdf"
          className={printMode ? "mx-auto" : ""}
          // className="mx-auto my-4 border border-black p-[--pdf-margin] print:mx-0 print:my-0 print:border-none print:p-0"
        >
          <Template2 printMode={printMode} />
        </div>
      </div>

      {!printMode && (
        <div className="container" id="other-body-stuff">
          <a
            className="ms-auto rounded-sm bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-600"
            href={url + "?printonly=true"}
          >
            Print Mode
          </a>
        </div>
      )}
    </div>
  )
}

export default App
