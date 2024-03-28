import React from "react";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rating = ({ starCount }) => {
  const [currRating, setCurrRating] = React.useState(0);

  const onHover = (value) => {
    setCurrRating(value);
  };

  const onClick = (value) => {
    if (value === currRating) {
      setCurrRating(value - 1);
    }
  };

  return (
    <Box>
      {[...Array(starCount).keys()].map((index) => (
        <img
          key={index}
          onMouseOver={() => onHover(index + 1)}
          onClick={() => onClick(index + 1)}
          className="star"
          src={index + 1 <= currRating ? StarIcon : StarBorderIcon}
          alt={index + 1 <= currRating ? "filled star" : "empty star"}
        />
      ))}
    </Box>
  );
};

export default Rating;
