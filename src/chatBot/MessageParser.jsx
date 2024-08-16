import { cloneElement, Children } from "react";

const MessageParser = ({ children, actions, state }) => {
  const parse = (message) => {
    const lowerCaseMsg = message.toLowerCase();

    if (children.props.state.askingForName) {
      actions.handleNameCheck(lowerCaseMsg);
    } else if (children.props.state.askingForEmail) {
      actions.handleEmailCheck(lowerCaseMsg);
    } else if (children.props.state.askingForGender) {
      actions.handleGenderCheck(lowerCaseMsg);
    } else if (children.props.state.askingForDistrict) {
      actions.handleDistrictCheck(lowerCaseMsg);
    } else if (children.props.state.askingForAge) {
      actions.handleAgeCheck(message);
    } else if (children.props.state.askingForArea) {
      actions.handleCheckArea(message);
    } else if (children.props.state.askingForCategory) {
      actions.handleCategoryCheck(message);
    } else if (children.props.state.askingForDifferent) {
      actions.handleDifferntialCheck(message);
    } else if (children.props.state.askingForDifferentPercentage) {
      actions.handleDiffPercentage(message);
    } else if (children.props.state.askingForMinority) {
      actions.handleMinorityCheck(message);
    } else if (children.props.state.askingForStudent) {
      actions.handleStudentCheck(message);
    } else if (children.props.state.askingForBPL) {
      actions.handleBPLCheck(message);
    } else if (children.props.state.askingForPenury) {
      actions.handlePenuryCheck(message);
    } else if (children.props.state.askingForAnnualIncome) {
      actions.handleAnnualIncome(message);
    } else if (children.props.state.askingForFinalResult) {
      actions.handleFinalResult(message);
    }
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
