import React, { useState } from 'react';
import Picker, { IEmojiData } from 'emoji-picker-react';
 
// import { Container } from './styles';

const KeyboardEmoji: React.FC = () => {
  const [chosenEmoji, setChosenEmoji] = useState<IEmojiData>();
 
  const onEmojiClick = (event:MouseEvent, emojiObject:IEmojiData) => {
    console.log("clicado");
    
    setChosenEmoji(emojiObject);
    console.log(emojiObject)
  };
 
  return (
    <div>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};


export default KeyboardEmoji;