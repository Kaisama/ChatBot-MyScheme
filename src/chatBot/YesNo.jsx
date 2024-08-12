
const YesNo = ({actionProvider}) => {
  return (
    <div>
        <button onClick={actionProvider.handleHelpMore}>Help More ? </button>
        <button onClick={actionProvider.handleEndChat}>No Need</button>
    </div>
  )
}

export default YesNo