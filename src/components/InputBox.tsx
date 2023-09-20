import React, { useState } from 'react';
import { postURL } from '../services/api';

function InputBox() {
  const [URL, setURL] = useState(String);

  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setURL(value);
  };

  const shortenURL = (event: React.FormEvent) => {
    event.preventDefault();
    postURL(URL)
      .then(response => {
        console.log('Success:', response);
        setMessage(response.shortURL)
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage(error.response.data.error.msg)
      });
  };

  return (
    <div>
      <form onSubmit={shortenURL}>
        <div>
          <label>URL:</label>
          <input
            type="text"
            name="URL"
            value={URL}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message}
    </div>
  );
}

export default InputBox;
