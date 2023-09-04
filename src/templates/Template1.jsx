import resume from "../resume"
const { data } = resume
import photo from "../assets/photo.png"
import { useEffect, useRef } from "react"
import doFilter from "../utils/doFilter"
import "./Template1.css"

const Template1 = () => {
  const nameColRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const handleSize = () => {
      if (!data.photo && !photo) return
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
          {(data.photo || photo) && (
            <img
              id="photo"
              ref={imageRef}
              src={data.photo || photo}
              alt="photo"
            />
          )}
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
      {data.skills && (
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
      )}

      {/* projects */}
      {data.projects.length !== 0 && (
        <div id="projects">
          <div className="heading">
            <h4>Project Experience</h4>
          </div>
          <ul className="content">
            {data.projects.map((project) => (
              <li key={project.title}>
                <div className="row">
                  <h5>{project.title}</h5>
                  <a className="link">{project.link}</a>
                </div>
                <div className="row">
                  <h5>Skills:</h5>
                  <p>{project.skillset}</p>
                </div>
                <ul className="responsibilities">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* work experience */}
      {data.experiences.length !== 0 && (
        <div id="experiences">
          <div className="heading">
            <h4>Work Experience</h4>
          </div>
          <ul className="content">
            {data.experiences.map((job) => (
              <li key={job.title}>
                <div className="row">
                  <h5>{job.title}</h5>
                  <h5>{job.company}</h5>
                  <small>{job.location}</small>
                  <small>{job.dateFrom}</small>
                  <small>{job.dateTo}</small>
                </div>
                <div className="row">
                  <h5>Soft Skills Acquired:</h5>
                  <p>{job.skillset}</p>
                </div>
                <ul className="responsibilities">
                  {job.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Template1
