import React from 'react';

function ImgProfile({ imgSrc, imgAlt, wsize, hsize, setProfile, userId }) {
  return (
    <button
      type="button"
      onClick={() => {
        setProfile({ isopen: true, userId });
      }}
    >
      <img className={`${wsize} ${hsize} rounded-full`} src={imgSrc} alt={imgAlt} />
    </button>
  );
}

export default ImgProfile;
