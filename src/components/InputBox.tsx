import React, { useState } from 'react';
import { postURL } from '../services/api';

function InputBox() {
  const [URL, setURL] = useState(String);

  const [link, setLink] = useState("");
  const [error, serError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setURL(value);
  };

  const shortenURL = (event: React.FormEvent) => {
    event.preventDefault();
    postURL(URL)
      .then(response => {
        console.log('Success:', response);
        setLink(response.shortURL)
        serError("")
      })
      .catch(error => {
        console.error('Error:', error);
        serError(error.response.data.error.msg)
        setLink("")
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
      <a href={link}>{link}</a>
      <p color='red'>{error}</p>
    </div>
  );
}

export default InputBox;
