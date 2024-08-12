import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import UserAvatar from './UserAvatar';
import OptionsButton from './Options';
import YesNo from './YesNo';

const config = {
  botName: "MyScheme Bot",
  initialMessages: [createChatBotMessage(`In which district do you live in Uttarakhand?`)],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  state: {
    askingForDistrict: true,
    askingForAge: false,
    showingOptions: false,
  },
  widgets: [
  {
    widgetName:'optionsButton',
    widgetFunc:(props)=><OptionsButton {...props}/>
  },
  {
    widgetName:'yesNo',
    widgetFunc:(props)=><YesNo {...props}/>
  }
  ],
};

export default config;
