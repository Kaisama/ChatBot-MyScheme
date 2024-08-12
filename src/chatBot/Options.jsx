import { skillDevelopmentSchemes } from "./data";

const OptionsButton = (props) => {
  const options = Object.keys(skillDevelopmentSchemes);

  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => props.actionProvider.handleSchemeSelection(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionsButton;