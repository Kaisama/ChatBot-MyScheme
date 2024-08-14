const MinorityButtons = ({actionProvider}) => {
  return (
    <div>
        <button onClick={()=>actionProvider.handleMinorityCheck(true)}>Yes</button>
        <button onClick={()=>actionProvider.handleMinorityCheck(false)}>No</button>
    </div>
  )
}

export default MinorityButtons