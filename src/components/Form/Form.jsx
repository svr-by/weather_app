import { useState } from 'react';

import { generateId } from '../../services/generalServices';
import './Form.css';

export default function Form({isLoading, onSubmit}) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const MAX_LENGTH = 300;

  const onChange = (e) => {
    const {value} = e.target;

    setText(value);
    if (value.length > MAX_LENGTH) {
      setError(`The maximum note length is ${MAX_LENGTH} chars`);
    } else if (error) {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(text.length === 0) return;

    if (!error) {
      setText('');
      const id = generateId();
      const note = {
        id,
        message: text,
        time: new Date().getTime(),
      };
      onSubmit(note);
    }
  };

  return (
    <div className={'form' + (error ? ' form--error' : '')}>
      <h3 className="form__title">Add note...</h3>
      <form onSubmit={handleSubmit} >
        <input 
          className="form__input" 
          type="text" 
          value={text} 
          onChange={onChange} 
          disabled={isLoading} 
        />
        {error && <p className="form__input-msg">{error}</p>}
      </form>
    </div>
  );
}