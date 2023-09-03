function App() {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  const resumeOnlyMode = params.get("resumeonly")

  return (
    <div className={!resumeOnlyMode ? "flex justify-center py-16" : ""}>
      {/* {!resumeOnlyMode && <div id="other-body-stuff">Hi stuff goes here</div>} */}
      <div id="pdf">
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <h4>Hello World</h4>
        <h5>Hello World</h5>
        <h6>Hello World</h6>
        <p>Hello World</p>
        <small>Hello World</small>
      </div>
    </div>
  )
}

export default App
