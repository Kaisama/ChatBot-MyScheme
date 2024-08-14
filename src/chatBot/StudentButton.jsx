
const StudentButton = ({actionProvider}) => {
  return (
    <div>
        <button onClick={()=>actionProvider.handleStudentCheck(true)}>Yes</button>
        <button onClick={()=>actionProvider.handleStudentCheck(false)}>No</button>
    </div>
  )
}

export default StudentButton