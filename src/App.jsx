import Template1 from "./templates/Template1"

function App() {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  const resumeOnlyMode = params.get("resumeonly")

  return (
    <div
      className={
        !resumeOnlyMode ? "flex flex-wrap justify-center gap-y-8 py-16" : ""
      }
    >
      {!resumeOnlyMode && (
        <div className="w-full" id="other-body-stuff">
          <div className="container">
            <a
              className="rounded-sm bg-gray-400 p-4 text-white transition-colors hover:bg-gray-600"
              href={url + "?resumeonly=true"}
            >
              Resume Only Mode
            </a>
          </div>
        </div>
      )}

      <div id="pdf">
        <Template1 />
      </div>
    </div>
  )
}

export default App
