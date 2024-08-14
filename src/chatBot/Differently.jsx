
const DifferentlyButton = ({actionProvider}) => {
  return (
    <div>
        <button onClick={()=>actionProvider.handleDifferntialCheck(true)}>Yes</button>
        <button onClick={()=>actionProvider.handleDifferntialCheck(false)}>No</button>
    </div>
  )
}

export default DifferentlyButton