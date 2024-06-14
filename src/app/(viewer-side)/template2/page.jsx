import photo from "@/assets/photo.png"
import resume from "@/data/resume"
import doFilter from "@/utils/doFilter"
import "./page.css"
import Image from "next/image"
import { randColor } from "@/utils/randColor"

// Get random colors from Tailwind colors. Pass Tailwind color variant number as parameter. ex: randColor(900) / randColor(50) / randColor(500)

// FontAwesome global import - Only Brands
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faGlobe,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons?url"
// import { faPhone } from ""
library.add(fab, faPhone, faEnvelope, faLocationDot, faGlobe, faCircleInfo)

export default function Template2({ searchParams }) {
  const { data } = resume
  const printMode = "print" in searchParams

  return (
    <div
      id="template"
      className="template2"
    >
      {/* heading */}
      <div id="heading">
        <div className="heading-text">
          <h1>{data.firstName}</h1>
          <h1>{data.lastName}</h1>
          <h5>{data.title}</h5>
        </div>
        <div className="heading-image">
          {(data.photo || photo) && (
            <a href={data.github}>
              <Image
                id="photo"
                src={data.photo || photo}
                alt="photo"
              />
            </a>
          )}
        </div>
      </div>

      {/* contact info */}
      <div id="contact-info">
        <div className="row">
          {data.phone && (
            <div className="col">
              <p className="title">
                <FontAwesomeIcon icon={`fa-solid fa-phone`} />
              </p>
              <a href={`tel:${data.phone}`}>
                <p>{data.phone}</p>
              </a>
            </div>
          )}
          {data.telephone && (
            <div className="col">
              <p className="title">
                <FontAwesomeIcon icon={`fa-solid fa-phone`} />
              </p>
              <a href={`tel:${data.telephone}`}>
                <p>{data.telephone}</p>
              </a>
            </div>
          )}
          {data.email && (
            <div className="col">
              <p className="title">
                <FontAwesomeIcon icon={`fa-solid fa-envelope`} />
              </p>
              <a href={`mailto:${data.email}`}>
                <p>{data.email}</p>
              </a>
            </div>
          )}
          {data.location && (
            <div className="col">
              <p className="title">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              </p>
              <p>{data.location}</p>
            </div>
          )}
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
              <p className="title">
                <FontAwesomeIcon icon={`fa-brands fa-${key.toLowerCase()}`} />
              </p>
              <a href={value}>
                <p>{value}</p>
              </a>
            </div>
          ))}
          <div className="col">
            <p className="title">
              <FontAwesomeIcon icon={`fa-solid fa-globe`} />
            </p>
            <a href={data.liveLink}>
              <p>Resume Live Version: {data.liveLink}</p>
            </a>
          </div>
        </div>
      </div>

      {/* about me */}
      <div id="about-me">{data.about && <p>{data.about}</p>}</div>

      {/* skills */}
      {data.skills && (
        <div id="skills">
          <div className="heading">
            <h5>Language and Libraries</h5>
          </div>
          <div className="row">
            {data.skills.map(category => (
              <div
                key={category.heading}
                className="col"
              >
                <h6>{category.heading}</h6>

                <ul className="skillset">
                  {category.data.map(skill => (
                    <li
                      key={skill}
                      style={{ "--rand-color": randColor(400) }}
                    >
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
                      {!!job.techStack?.length &&
                        job.techStack.map((item, i, arr) => (
                          // `${item}${i === arr.length - 1 ? "." : ", "}`,
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className={
                              printMode ? "pointer-events-none" : undefined
                            }
                            href={
                              !printMode
                                ? `https://www.google.com/search?q=${item}`
                                : undefined
                            }
                            key={item}
                            style={{ "--rand-color": randColor(400) }}
                          >
                            <p>{item}</p>
                          </a>
                        ))}
                    </div>

                    <div>
                      <h6>Skills:</h6>
                      <ul className="soft-skills">
                        {job.skills.map(skill => (
                          <li
                            key={skill}
                            style={{ "--rand-color": randColor(400) }}
                          >
                            <p className="bullet-item">{skill}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <div>
                      <h6>Soft Skills Acquired:</h6>
                      <ul className="soft-skills">
                        {job.skills.map((skill) => (
                          <li
                            key={skill}
                            style={{ "--rand-color": randColor(400) }}
                          >
                            <p className="bullet-item">{skill}</p>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                    <div>
                      <h6>Responsibilites:</h6>
                      <ul className="responsibilities">
                        {job.responsibilities.map(responsibility => (
                          <li
                            key={responsibility}
                            style={{ "--rand-color": randColor(400) }}
                          >
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
                          <a
                            className="date"
                            href={project.repo}
                          >
                            <small>
                              {project.repo.includes("github") && (
                                <FontAwesomeIcon icon="fa-brands fa-github" />
                              )}{" "}
                              <span className="max-xs:hidden">
                                {project.repo.replace(
                                  "https://github.com/",
                                  ""
                                )}
                              </span>
                              <span className="xs:hidden">Github</span>
                            </small>
                          </a>
                        </p>
                      )}
                      {!project.repo && (
                        <p>
                          <a
                            className="date"
                            href={project.link}
                          >
                            <small>
                              <FontAwesomeIcon icon="fa-solid fa-globe" />{" "}
                              <span className="max-xs:hidden">
                                {project.link}
                              </span>
                              <span className="xs:hidden">URL</span>
                            </small>
                          </a>
                        </p>
                      )}
                      <p className="w-full">{project.shortDescription}</p>
                    </div>

                    <div className="builders">
                      {project.builtWith.map((item, i, arr) => (
                        // `${item}${i === arr.length - 1 ? "." : ", "}`,
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className={
                            printMode ? "pointer-events-none" : undefined
                          }
                          href={
                            !printMode
                              ? `https://www.google.com/search?q=${item}`
                              : undefined
                          }
                          key={item}
                          style={{ "--rand-color": randColor(400) }}
                        >
                          <p>{item}</p>
                        </a>
                      ))}
                    </div>

                    <div className="row">
                      <h6 className="col">Features:</h6>
                      <ul className="col features">
                        {project.features.map(feature => (
                          <li
                            key={feature}
                            style={{ "--rand-color": randColor(400) }}
                          >
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
                style={{ "--rand-color": randColor(400) }}
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
                <div className="row">
                  <h5>{contribution.title}</h5>
                  <small>{contribution.description}</small>
                </div>
                <div className="projects">
                  {contribution.projects.map(project => (
                    <div
                      key={project.title}
                      className="row"
                      style={{ "--rand-color": randColor(400) }}
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

          <small className="footnote">
            <FontAwesomeIcon icon="fa-solid fa-circle-info" /> Learn more about
            them on my{" "}
            <a
              target="_blank"
              href={data.github}
            >
              Github Profile
            </a>
          </small>
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
                  style={{ "--rand-color": randColor(500) }}
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
