import React, { useState } from 'react';

function InputBox() {
  const [URL, setURL] = useState(String);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setURL(value);
  };

  const shortenURL = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with data:', URL);
  };

  return (
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
  );
}

export default InputBox;
