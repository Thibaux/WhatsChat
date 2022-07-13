import { ChangeEventHandler, useState } from 'react';

export const useSendInput = () => {
  const [messageValue, setMessageValue] = useState("Type you're message...");

  const handleSend = () => {
    console.log('input send!');
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
