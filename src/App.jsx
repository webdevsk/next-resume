import Template2 from "./templates/Template2"

function App() {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  const printMode = params.get("printonly") ? true : false

  return (
    <>
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
          <div className="my-4 text-center">
            <a
              className="underline transition-colors hover:text-blue-500"
              href={url + "?printonly=true"}
            >
              <h5>Print Mode</h5>
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default App
