import resume from "../resume"
const { data } = resume
import photo from "../assets/photo.png"
import { useEffect, useRef } from "react"
import doFilter from "../utils/doFilter"

const Template1 = () => {
  const nameColRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const handleSize = () => {
      const size = nameColRef.current.getBoundingClientRect().height
      imageRef.current.style.height = `${size}px`
    }
    //On mount
    handleSize()

    addEventListener("resize", handleSize)
    return () => {
      removeEventListener("resize", handleSize)
    }
  }, [])

  return (
    <div id="template">
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
              <p className="title">{key}:</p>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <div className="row">
          {doFilter(
            "github",
            "linkedin",
            "facebook",
            "twitter",
            "youtube",
            "instagram",
          ).map(([key, value]) => (
            <div key={key} className="col">
              <p className="title">{key}:</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* about me */}
      <div id="about-me">{data.about && <p>{data.about}</p>}</div>

      {/* skills */}
      <div id="skills">
        <div className="row">
          {data.skills.map((category) => (
            <div key={category.heading} className="col">
              <h6>{category.heading}</h6>

              <ul className="skillset">
                {category.data.map((skill) => (
                  <li key={skill}>
                    <p>{skill}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Template1
