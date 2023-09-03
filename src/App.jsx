function App() {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  const resumeOnlyMode = params.get("resumeonly")

  return (
    <div className={!resumeOnlyMode ? "flex justify-center" : ""}>
      {/* {!resumeOnlyMode && <div id="other-body-stuff">Hi stuff goes here</div>} */}
      <div id="pdf">Hello World</div>
    </div>
  )
}

export default App
