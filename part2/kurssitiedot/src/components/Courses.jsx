const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.courseName}</h2>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts

  return (
    <div>
      <Part parts={parts} />
      {/* <Part part={first.name} exercises={first.exercises} />
      <Part part={second.name} exercises={second.exercises} />
      <Part part={third.name} exercises={third.exercises} /> */}
    </div>
  )
}

const Total = (props) => {
  const parts = props.parts
  const total = parts.reduce((sum, part) => sum + part.exercises,0)

  return (
    <div>
      <b>Total {total} exercises</b>
    </div>
  )
}

const Part = (props) => {
  const parts = props.parts
  return (
    <div>
      {parts.map(part => 
        <p key={part.id} >
          {part.name} {part.exercises}
        </p>
      )}
    </div>
  )
}

const Course = (props) => {
  const courses = props.courses

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <Header courseName={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  )
}

export default Course