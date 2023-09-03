import resume from "../resume"
const { data } = resume

const Template1 = () => {
  return (
    <>
      <h1>{data.firstName}</h1>
      <h1>{data.lastName}</h1>
    </>
  )
}

export default Template1
