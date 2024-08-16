import { skillDevelopmentSchemes } from "./data";

const OptionsButton = (props) => {

  return (
    <div>
      {skillDevelopmentSchemes.map((scheme) => (
        <button
          key={scheme.heading}
          onClick={() => props.actionProvider.handleSchemeSelection(scheme.heading)}
        >
          {scheme.heading}
        </button>
      ))}
    </div>
  );
};

export default OptionsButton;