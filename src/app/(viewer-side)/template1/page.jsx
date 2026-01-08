import photoFormal from "@/assets/photo-formal.jpg"
import resume from "@/data/resume"
import doFilter from "@/utils/doFilter"
import "./page.css"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons?url"
import { library } from "@fortawesome/fontawesome-svg-core"
library.add(faCircleInfo)
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
        {(data.photo || photoFormal) && (
          <a target="_blank"
            className="heading-image"
            href={data.github}
          >
            <Image
              id="photo"
              src={data.photo || photoFormal}
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
              <a target="_blank"
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
          <div className="col">
            <p className="title">
              Location:
            </p>
            <p>{data.location}</p>
          </div>
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
              <a target="_blank" href={value}>
                <p>{value}</p>
              </a>
            </div>
          ))}
        </div>
        <div className="col -ms-2">
          <p className="title">Resume Live Version:</p>
          <a target="_blank" href={data.liveLink}>
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

                    <div className="tech-stack">
                      {/* <h6 className="">Tech Stack: </h6> */}
                      {!!job.techStack?.length &&
                        job.techStack.map(item => (
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

                    <div>
                      <h6>Skills:</h6>
                      <ul className="soft-skills">
                        {job.skills.map(skill => (
                          <li key={skill}>
                            <p className="bullet-item">{skill}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
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
                      <a target="_blank" href={project.link}>
                        <h5>{project.title}</h5>
                      </a>
                      <p>
                        {/* <h6 className="inline">Repository: </h6> */}
                        <a target="_blank"
                          className="date"
                          href={project.repo || project.link}
                        >
                          <small className="leading-5">
                            {project.repo || project.link}
                          </small>
                        </a>
                      </p>
                      <p className="w-full">
                        {"=>"} {project.shortDescription}
                      </p>
                    </div>

                    <div className="builders">
                      {/* <h6 className="">Built With: </h6> */}
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
                      {/* <h6 className="col">Features:</h6> */}
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

      {/* Contributions */}
      {data.contributions && data.contributions.length && (
        <div id="contributions">
          <div className="heading">
            <h5>Contributions</h5>
          </div>
          <ul className="content">
            {data.contributions.map(contribution => (
              <li
                key={contribution.title}
                className="type"
              >
                {/* <div className="row">
                  <h5>{contribution.title}</h5>
                  <small>{contribution.description}</small>
                </div> */}
                <div className="projects">
                  {contribution.projects.map(project => (
                    <div
                      key={project.title}
                      className="row"
                    >
                      <div className="col title">
                        <p className="bullet-item">
                          <a
                            target="_blank"
                            href={project.url}
                          >
                            {project.title}
                          </a>
                        </p>
                      </div>
                      <div className="col installs">
                        <small>{project.installs} installs</small>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* <small className="footnote">
            <FontAwesomeIcon icon="fa-solid fa-circle-info" /> Learn more about
            them on my{" "}
            <a
              target="_blank"
              href={data.github}
            >
              Github Profile
            </a>
          </small> */}
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
