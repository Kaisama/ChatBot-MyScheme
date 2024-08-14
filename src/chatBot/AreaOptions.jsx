import { areas } from "./data";

const AreaOptions = (props) => {
  return (
    <div>
      {areas.map((area) => (
        <button
          key={area}
          onClick={() => props.actionProvider.handleCheckArea(area)}
        >
          {area.charAt(0).toUpperCase() + area.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default AreaOptions;