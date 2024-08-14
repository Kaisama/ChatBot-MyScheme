
const BPLButtons = ({actionProvider}) => {
  return (
    <div>
        <button onClick={()=>actionProvider.handlePenuryCheck(true)}>Yes</button>
        <button onClick={()=>actionProvider.handlePenuryCheck(false)}>No</button>
    </div>
  )
}

export default BPLButtons