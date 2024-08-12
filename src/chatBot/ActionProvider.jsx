import { cloneElement } from "react";
import { Children } from "react";
import { districts, skillDevelopmentSchemes } from "./data";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleDistrictCheck = (district) => {
    if (districts.includes(district)) {
      const messages = [
        createChatBotMessage(`Yes, ${district} is present in Uttarakhand.`),
        createChatBotMessage("What is your age?"),
      ];
      messages.forEach(updateState);
      setState((prev) => ({
        ...prev,
        askingForDistrict: false,
        askingForAge: true,
      }));
    } else {
      const message = createChatBotMessage("This district is not present in Uttarakhand. Please try again.");
      updateState(message);
    }
  };

  const handleAgeCheck = (age) => {
    if (isNaN(age)) {
      const message = createChatBotMessage("Please enter only a number for your age.");
      updateState(message);
    } else {
      const message = createChatBotMessage("Great! Here are some skill development options for you:",{
        widget:'optionsButton'
      });
      updateState(message);
      setState((prev) => ({
        ...prev,
        askingForAge: false,
        showingOptions: true,
      }));
    }
  };

  const handleSchemeSelection=(scheme)=>{
    const schemes=skillDevelopmentSchemes[scheme];
    const messages=[createChatBotMessage(`Here are the ${scheme} schemes:\n ${schemes.join('/n')}`),
        createChatBotMessage("Is there anything else you would like to know or another scheme you are interested in?",{
            widget:'yesNo'
        })
    ];
    messages.forEach(updateState)
  }

  const handleHelpMore=()=>{
    const message = createChatBotMessage("What scheme would you like to know more about?",{
        widget:'optionsButton'
    });
    updateState(message);
    setState((prev)=>({
        ...prev,
        showingOptions:true,
    }))
  }

  const handleEndChat=()=>{
    const message=createChatBotMessage("Thank you! Have a great day!");
    updateState(message)
  }

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          actions: {
            handleDistrictCheck,
            handleAgeCheck,
            handleSchemeSelection,
            handleHelpMore,
            handleEndChat
          },
        });
      })}
    </>
  );
};

export default ActionProvider;
