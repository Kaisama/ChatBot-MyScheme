import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import UserAvatar from './UserAvatar';
import YesNo from './YesNo';
import GenderOptions from './GenderOptions';
import AreaOptions from './AreaOptions';
import CategoryOptions from './CategoryOptions';
import DifferentlyButton from './Differently';
import StudentButton from './StudentButton';
import BPLButtons from './BPLButtons';
import Penury from './Penury';
import MinorityButtons from './MinorityButtons';
import LinkComponent from './LinkComponent';
import { skillDevelopmentSchemes } from './data';
import OptionsButton from './OptionsButton';

const config = {
  botName: "MyScheme Bot",
  initialMessages: [createChatBotMessage('Enter Your Full Name')],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  state: {
    askingForName: true,
    askingForEmail: false,
    askingForGender: false,
    askingForDistrict: false,
    askingForAge: false,
    showingOptions: false,
    askingForArea: false,
    askingForCategory: false,
    askingForDifferent: false,
    askingForNoDifferent: false,
    askingForDifferentPercentage: false,
    askingForStudent: false,
    askingForMinority: false,
    askingForBPL: false,
    askingForPenury: false,
    askingForFinalResult: false,
    askingForAnnualIncome: false,
    skillDevelopmentSchemes: skillDevelopmentSchemes,
  },
  widgets: [
    {
      widgetName: 'optionsButton',
      widgetFunc: (props) => <OptionsButton {...props} />,
    },
    {
      widgetName: 'yesNo',
      widgetFunc: (props) => <YesNo {...props} />,
    },
    {
      widgetName: 'GenderOptions',
      widgetFunc: (props) => <GenderOptions {...props} />,
    },
    {
      widgetName: 'AreaOptions',
      widgetFunc: (props) => <AreaOptions {...props} />,
    },
    {
      widgetName: 'CategoryOptions',
      widgetFunc: (props) => <CategoryOptions {...props} />,
    },
    {
      widgetName: 'DifferentlyButton',
      widgetFunc: (props) => <DifferentlyButton {...props} />,
    },
   
    {
      widgetName: 'StudentButton',
      widgetFunc: (props) => <StudentButton {...props} />,
    },
    {
      widgetName: 'BPLButtons',
      widgetFunc: (props) => <BPLButtons {...props} />,
    },
    {
      widgetName: 'Penury',
      widgetFunc: (props) => <Penury {...props} />,
    },
    {
      widgetName: 'MinorityButtons',
      widgetFunc: (props) => <MinorityButtons {...props} />,
    },
    {
      widgetName: 'linkComponent',
      widgetFunc: (props) => <LinkComponent {...props} />,
    },
  ],
};

export default config;
