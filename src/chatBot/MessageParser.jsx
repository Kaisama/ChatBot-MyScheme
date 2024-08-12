import { cloneElement } from "react";
import { Children } from "react";

const MessageParser = ({ children, actions, state }) => {
  const { askingForDistrict, askingForAge } = state || {};
console.log("askingForDistrict",askingForDistrict);

  const parse = (message) => {
    const lowerCaseMsg = message.toLowerCase();
    if (children.props.state.askingForDistrict) {
      actions.handleDistrictCheck(lowerCaseMsg);
    } else if (children.props.state.askingForAge) {
      actions.handleAgeCheck(message);
     }
    //else if(children.props.state.showingOptions){
    //         actions.handleSchemeSelection(message)
    // }
  };

  return (
    <div>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
