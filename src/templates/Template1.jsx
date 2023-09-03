import resume from "../resume"
const { data } = resume
import photo from "../assets/photo.png"
import { useEffect, useRef } from "react"

const Template1 = () => {
  const nameColRef = useRef(null)
  const imageRef = useRef(null)

  const doFilter = (...args) =>
    Object.entries(data).filter(
      ([key, value]) =>
        [...args].includes(key) && value !== null && value !== "",
    )

  useEffect(() => {
    const handleSize = () => {
      const size = nameColRef.current.getBoundingClientRect().height
      imageRef.current.style.height = `${size}px`
    }
    //At mount
    handleSize()

    addEventListener("resize", handleSize)
    return () => {
      removeEventListener("resize", handleSize)
    }
  }, [])

  return (
    <div className="flex flex-col gap-2">
      {/* heading */}
      <div id="heading">
        <div ref={nameColRef}>
          <h1>{data.firstName}</h1>
          <h1>{data.lastName}</h1>
          <h5>{data.title}</h5>
        </div>
        <div>
          <img id="photo" ref={imageRef} src={photo} alt="photo" />
        </div>
      </div>

      {/* contact info */}
      <div id="contact-info">
        <div className="row">
          {doFilter("phone", "email", "telephone").map(([key, value]) => (
            <div key={key} className="col">
              <p className="title">{key}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <div className="row">
          {doFilter("github", "linkedin").map(([key, value]) => (
            <div key={key} className="col">
              <p className="title">{key}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <div className="row">
          {doFilter("facebook", "twitter", "youtube", "instagram").map(
            ([key, value]) => (
              <div key={key} className="col">
                <p className="title">{key}</p>
                <p>{value}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Template1
