import { ChangeEventHandler, useState } from 'react';
import { useChatStore } from '../../../../store/store';

export const useSendInput = () => {
  const { addMessage } = useChatStore();
  const [messageValue, setMessageValue] = useState("Type you're message...");

  const handleSend = () => {
    addMessage({
      id: 6,
      sender: 'jan',
      message: messageValue,
    });
  };

  const handleTextChange: ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const text = event?.target.value;

    setMessageValue(text);
  };

  return {
    messageValue,
    handleSend,
    handleTextChange,
  };
};
