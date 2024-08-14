
const Penury = ({actionProvider}) => {
  return (
    <div>
        <button onClick={()=>actionProvider.handleFinalResult(true)}>Yes</button>
        <button onClick={()=>actionProvider.handleFinalResult(false)}>No</button>
    </div>
  )
}

export default Penury