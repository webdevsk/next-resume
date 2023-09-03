import resume from "./resume"
const { data } = resume

function App() {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  const resumeOnlyMode = params.get("resumeonly")

  return (
    <div className={!resumeOnlyMode ? "flex justify-center py-16" : ""}>
      {/* {!resumeOnlyMode && <div id="other-body-stuff">Hi stuff goes here</div>} */}
      <div id="pdf">
        <h1>{data?.firstName}</h1>
        <h1>{data?.lastName}</h1>
      </div>
    </div>
  )
}

export default App
