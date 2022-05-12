import React, { useState } from 'react';

const Catalog = () => {
  const [state, setState] = useState({
    file: '',
  });

  const handleImageChange = e => {
    const { files } = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setState({ ...state, file: reader.result });
      }
    };
    if (
      files[0]['type'].split('/')[0] === 'image' ||
      files[0]['type'].split('/')[0] === 'video'
    ) {
      reader.readAsDataURL(files[0]);
    } else {
      setState({ ...state, file: '' });
    }
  };

  const handleClick = e => {
    let { paused } = e.target;
    if (paused) {
      e.target.play();
    } else {
      e.target.pause();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <>
      {state.file && (
        <img
          src={state.file}
          width={300}
          height={300}
          alt={'art that I enjoy'}
        />
      )}
      {state.file && (
        <video width={300} height={300} onClick={handleClick}>
          <source src={state.file} type="video/mp4" />
        </video>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="videoInput"
          onChange={handleImageChange}
          accept="image/*, video/*"
        />
        <button>Submit</button>
      </form>
      <h1>Catalog</h1>
    </>
  );
};

export default Catalog;
