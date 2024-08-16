
const BPLButtons = ({actionProvider}) => {
  return (
    <div>
        <button onClick={()=>actionProvider.handleBPLCheck(true)}>Yes</button>
        <button onClick={()=>actionProvider.handleBPLCheck(false)}>No</button>
    </div>
  )
}

export default BPLButtons