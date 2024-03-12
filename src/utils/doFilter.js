import resume from "@/data/resume"

const doFilter = (...args) =>
  Object.entries(resume.data).filter(
    ([key, value]) => [...args].includes(key) && value !== null && value !== "",
  )

export default doFilter
