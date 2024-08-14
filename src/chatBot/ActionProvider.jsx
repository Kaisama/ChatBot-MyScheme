import { Children, cloneElement } from "react";
import { areas, categories, districts, genders, skillDevelopmentSchemes } from "./data";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleNameCheck = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(name)) {
      const message = createChatBotMessage("Please enter only words without any numbers or special characters.");
      updateState(message);
    } else {
      const messages = [
        createChatBotMessage(`Hello ${name}`),
        createChatBotMessage("Please Enter your Email ID ")
      ];
      messages.forEach(updateState);
      setState((prev) => ({
        ...prev,
        askingForName: false,
        askingForEmail: true
      }));
    }
  };

  const handleEmailCheck = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const message = createChatBotMessage("Please enter a valid email address");
      updateState(message);
    } else {
      const messages = [
        createChatBotMessage("Thank you for your Email"),
        createChatBotMessage("Choose your Gender", {
          widget: "GenderOptions"
        })
      ];
      messages.forEach(updateState);
      setState((prev) => ({
        ...prev,
        askingForEmail: false,
        askingForGender: true,
      }));
    }
  };

  const handleGenderCheck = (gender) => {
    if (genders.includes(gender.toLowerCase())) {
      const messages = [
        createChatBotMessage("Thank you!"),
        createChatBotMessage("Please select your district")
      ];
      messages.forEach(updateState);
      setState((prev) => ({
        ...prev,
        askingForDistrict: true,
        askingForGender: false
      }));
    } else {
      const message = createChatBotMessage("Please enter a valid gender [Male, Female, Transgender]");
      updateState(message);
    }
  };

  const handleDistrictCheck = (district) => {
    if (districts.includes(district)) {
      const messages = [
        createChatBotMessage(`Yes, ${district} is present in Uttarakhand.`),
        createChatBotMessage("What is your age?")
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
    const numAge = Number(age);
    if (isNaN(numAge)) {
      const message = createChatBotMessage("Please enter only a number for your age.");
      updateState(message);
    } else if (numAge <= 18 || numAge >= 60) {
      const message = createChatBotMessage("Your age must be between 18 and 60 years old.");
      updateState(message);
    } else {
      const message = createChatBotMessage("Please select your area of residence", {
        widget: 'AreaOptions'
      });
      updateState(message);
      setState((prev) => ({
        ...prev,
        askingForAge: false,
        askingForArea: true,
      }));
    }
  };

  const handleCheckArea = (area) => {
    if (areas.includes(area.toLowerCase())) {
      const messages = [
        createChatBotMessage(`You are from ${area} area`),
        createChatBotMessage('You belong to which category', {
          widget: "CategoryOptions"
        })
      ];
      messages.forEach(updateState);
      setState((prev) => ({
        ...prev,
        askingForArea: false,
        askingForCategory: true
      }));
    } else {
      const message = createChatBotMessage('Please enter a valid area');
      updateState(message);
    }
  };

  const handleCategoryCheck = (category) => {
    const normalizedCategory = category.trim().toLowerCase();
    if (categories.map(c => c.toLowerCase()).includes(normalizedCategory)) {      const messages = [
        createChatBotMessage(`Great! You belong to ${category} category`),
        createChatBotMessage('Are you differently abled ?', {
          widget: "DifferentlyButton"
        })
      ];
      messages.forEach(updateState);
      setState((prev) => ({
        ...prev,
        askingForCategory: false,
        askingForDifferent: true,
      }));
    } else {
      const message = createChatBotMessage('Please enter valid details');
      updateState(message);
    }
  };

  const handleDifferntialCheck = (isDisabled) => {
    if (isDisabled) {
      const message = createChatBotMessage('What is your differently abled percentage?');
      updateState(message);
      setState((prev) => ({
        ...prev,
        askingForDifferent: false,
        askingForDifferentPercentage: true
      }));
    } else {
      const message = createChatBotMessage('Do you belong to minority?',{
        widget:'MinorityButtons'
      });
      updateState(message);
      setState((prev) => ({
        ...prev,
        askingForDifferent: false,
        askingForMinority: true
      }));
    }
  };

  const handleMinorityCheck=(isMinor)=>{
       if(isMinor){
        handleStudentCheck()
       }
       else{
        handleStudentCheck();
       }
  }

  const handleDiffPercentage = (percentage) => {
    const numPercentage = Number(percentage);
    if (isNaN(numPercentage) || numPercentage < 0 || numPercentage > 100) {
      const message = createChatBotMessage('Please enter a valid percentage between 0 and 100');
      updateState(message);
    } else {
      const message = createChatBotMessage('Are you student?', {
        widget: 'StudentButton'
      });
      updateState(message);
      setState((prev) => ({
        ...prev,
        askingForDifferentPercentage: false,
        askingForStudent: true
      }));
    }
  };

  const handleStudentCheck = (isStudent) => {
    if (isStudent) {
      const message = createChatBotMessage("Great! We'll consider student-specific schemes for you.");
      updateState(message);
    } else {
      const message = createChatBotMessage("Understood. Let's continue with the next question.");
      updateState(message);
    }
    setState((prev) => ({
      ...prev,
      askingForStudent: false,
      askingForBPL: true
    }));
    handleBPLCheck();
  };

  const handleBPLCheck = () => {
    const message = createChatBotMessage('Do you belong to BPL category?', {
      widget: 'BPLButtons'
    });
    updateState(message);
    setState((prev) => ({
      ...prev,
      askingForBPL: false,
      askingForPenury: true,
    }));
  };

  const handlePenuryCheck = (isBpl) => {
    if (isBpl) {
      const message = createChatBotMessage("Are you in any of the following condition - Destitute / Penury / Extreme Hardship / Distress", {
        widget: "Penury"
      });
      updateState(message);
      setState((prev) => ({
        ...prev,
        askingForPenury: false,
        askingForFinalResult: true,
      }));
    } else {
      const message = createChatBotMessage("What is your family's annual income?");
      updateState(message);
      setState((prev) => ({
        ...prev,
        askingForPenury: false,
        askingForAnnualIncome: true,
      }));
    }
  };

  const handleAnnualIncome = (income) => {
    const numIncome = Number(income);
    if (isNaN(numIncome) || numIncome < 0) {
      const message = createChatBotMessage("Please enter a valid annual income (a positive number).");
      updateState(message);
    } else {
      const message = createChatBotMessage("Based on your annual income, here are the available schemes:", {
      widget: 'optionsButton'})
      updateState(message);
    setState((prev) => ({
      ...prev,
      askingForAnnualIncome: false,
      showingOptions: true,
    }));
    }
  };

  const handleFinalResult = (isPenury) => {
    if (isPenury) {
      const message = createChatBotMessage("Based on your situation, you may be eligible for special assistance. Here are the available schemes:", {
        widget: 'optionsButton'
      });
      updateState(message);
    } else {
      const message = createChatBotMessage("According to the data you provided, here are the schemes you may be eligible for:", {
        widget: 'optionsButton'
      });
      updateState(message);
    }
    setState((prev) => ({
      ...prev,
      showingOptions: true,
    }));
  };

  const handleSchemeSelection = (scheme) => {
    const schemes = skillDevelopmentSchemes[scheme];
    
    if (schemes) {
      const messages = [
        createChatBotMessage(`Here are the ${scheme} schemes:\n ${schemes.join('\n')}`),
        createChatBotMessage("Is there anything else you would like to know or another scheme you are interested in?", {
          widget: 'yesNo'
        })
      ];
      messages.forEach(updateState);
      setState((prev) => ({
        ...prev,
        showingOptions: false,
      }));
    } else {
      const message = createChatBotMessage("Sorry, I couldn't find any schemes related to that. Please try selecting a different scheme.");
      updateState(message);
    }
  };

  const handleHelpMore = () => {
    const message = createChatBotMessage("What scheme would you like to know more about?", {
      widget: 'optionsButton'
    });
    updateState(message);
    setState((prev) => ({
      ...prev,
      showingOptions: true,
    }));
  };

  const handleEndChat = () => {
    const message = createChatBotMessage("Thank you! Have a great day!");
    updateState(message);
  };

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
            handleNameCheck,
            handleEmailCheck,
            handleGenderCheck,
            handleDistrictCheck,
            handleAgeCheck,
            handleCheckArea,
            handleCategoryCheck,
            handleDifferntialCheck,
            handleDiffPercentage,
            handleStudentCheck,
            handleBPLCheck,
            handlePenuryCheck,
            handleAnnualIncome,
            handleFinalResult,
            handleSchemeSelection,
            handleHelpMore,
            handleEndChat,
            handleMinorityCheck
          }
        });
      })}
    </>
  );
};

export default ActionProvider;
