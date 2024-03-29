import photo from "@/assets/photo.png"
import resume from "@/data/resume"
import doFilter from "@/utils/doFilter"
import "./page.css"
import Image from "next/image"

export default function Template1({ searchParams }) {
  const { data } = resume
  const printMode = "print" in searchParams

  return (
    <div
      id="template"
      className="template1"
    >
      {/* heading */}
      <div id="heading">
        <div className="heading-text">
          <h1>{data.firstName}</h1>
          <h1>{data.lastName}</h1>
          <h5>{data.title}</h5>
        </div>
        {(data.photo || photo) && (
          <a
            className="heading-image"
            href={data.github}
          >
            <Image
              id="photo"
              src={data.photo || photo}
              alt="photo"
            />
          </a>
        )}
      </div>

      {/* contact info */}
      <div id="contact-info">
        <div className="row">
          {doFilter("phone", "email", "telephone").map(([key, value]) => (
            <div
              key={key}
              className="col"
            >
              <p className="title">{key}:</p>
              <a
                href={`${
                  key === "phone" || key === "telephone"
                    ? "tel:"
                    : key === "email"
                      ? "mailto:"
                      : ""
                }${value}`}
              >
                <p>{value}</p>
              </a>
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
            "instagram"
          ).map(([key, value]) => (
            <div
              key={key}
              className="col"
            >
              <p className="title">{key}:</p>
              <a href={value}>
                <p>{value}</p>
              </a>
            </div>
          ))}
        </div>
        <div className="col -ms-2">
          <p className="title">Resume Live Version:</p>
          <a href={data.liveLink}>
            <p>{data.liveLink}</p>
          </a>
        </div>
      </div>

      {/* about me */}
      <div id="about-me">{data.about && <p>{data.about}</p>}</div>

      {/* skills */}
      {data.skills && (
        <div id="skills">
          <div className="row">
            {data.skills.map(category => (
              <div
                key={category.heading}
                className="col"
              >
                <h6>{category.heading}</h6>

                <ul className="skillset">
                  {category.data.map(skill => (
                    <li key={skill}>
                      <p className="bullet-item">{skill}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* work experience */}
      {data.experiences && data.experiences.some(exp => exp.enabled) && (
        <div id="experiences">
          <div className="heading">
            <h5>Work Experience</h5>
          </div>
          <ul className="content">
            {data.experiences.map(
              job =>
                job.enabled && (
                  <li
                    key={job.position}
                    className="sections"
                  >
                    <div className="row">
                      <div className="position">
                        {job.position.split(",").map(title => (
                          <h5 key={title}>{title.trim()}</h5>
                        ))}
                      </div>
                      <div className="details">
                        <div className="company">
                          {job.company && <h6>{job.company}</h6>}
                        </div>
                        <div className="date">
                          {(job.dateFrom || job.dateTo) && (
                            <small>
                              {job.dateFrom}{" "}
                              {job.dateFrom && job.dateTo && " - "}
                              {job.dateTo}
                            </small>
                          )}
                        </div>
                        {job.location && <small>{job.location}</small>}
                      </div>
                    </div>
                    {/* <div>
                      <h6>Soft Skills Acquired:</h6>
                      <ul className="soft-skills">
                        {job.skills.map((skill) => (
                          <li key={skill}>
                            <p className="bullet-item">{skill}</p>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                    <div>
                      <h6>Responsibilites:</h6>
                      <ul className="responsibilities">
                        {job.responsibilities.map(responsibility => (
                          <li key={responsibility}>
                            <p className="bullet-item">
                              {responsibility}
                              {responsibility.at(-1) !== "." && "."}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      )}

      {/* projects */}
      {data.projects && data.projects.some(proj => proj.enabled) && (
        <div id="projects">
          <div className="heading">
            <h5>Project Experience</h5>
          </div>
          <ul className="content">
            {data.projects.map(
              project =>
                project.enabled && (
                  <li
                    key={project.title}
                    className="sections"
                  >
                    <div className="title-section">
                      <a href={project.link}>
                        <h5>{project.title}</h5>
                      </a>
                      {project.repo && (
                        <p>
                          {/* <h6 className="inline">Repository: </h6> */}
                          <a
                            className="date"
                            href={project.repo}
                          >
                            <small className="leading-5">{project.repo}</small>
                          </a>
                        </p>
                      )}
                      <p className="w-full">
                        {"=>"} {project.shortDescription}
                      </p>
                    </div>

                    <div className="builders">
                      <h6 className="">Built With: </h6>
                      {project.builtWith.map(item => (
                        // `${item}${i === arr.length - 1 ? "." : ", "}`,
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className={
                            printMode ? "pointer-events-none" : undefined
                          }
                          href={
                            !printMode &&
                            `https://www.google.com/search?q=${item}`
                          }
                          key={item}
                        >
                          <p>{item}</p>
                        </a>
                      ))}
                    </div>

                    <div className="row">
                      <h6 className="col">Features:</h6>
                      <ul className="col features">
                        {project.features.map(feature => (
                          <li key={feature}>
                            <p className="bullet-item">
                              {feature}
                              {feature.at(-1) === "." ? "" : "."}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      )}

      {/* Education and Certifications */}
      {data.educations && data.educations.length !== 0 && (
        <div id="education">
          <div className="heading">
            <h5>Education and Certifications</h5>
          </div>
          <ul className="content">
            {data.educations.map(education => (
              <li
                key={education.title}
                className="row"
              >
                <div className="col info">
                  <small className="bullet-item">
                    <h6 className="inline">{education.title}</h6>
                    {education.institute && `, ${education.institute}`}
                    {education.location && `, ${education.location}`}.
                  </small>
                </div>
                <div className="col date">
                  <small>
                    {education.dateFrom} - {education.dateTo}
                  </small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.spokenLanguages && data.spokenLanguages.length && (
        <div id="spoken-languages">
          <div className="heading">
            <h5>Spoken Languages</h5>
          </div>
          <div className="content">
            <ul className="langs">
              {data.spokenLanguages.map(lang => (
                <li
                  key={lang}
                  className="bullet-item"
                >
                  <p>{lang}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
