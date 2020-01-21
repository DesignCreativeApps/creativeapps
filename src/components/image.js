import React, { useState, useEffect } from "react";
import imageStyles from './image.module.css';

const Image = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected,
  onClick
}) => {
  console.log(onClick);
  return (
      <img
        onClick={onClick}
        className={imageStyles.image}
        alt={photo.title}
        {...photo}
      />

  );
};

export default Image;
