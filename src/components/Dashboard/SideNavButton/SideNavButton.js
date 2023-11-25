import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function SideNavButton({ title, path, selected, onClick }) {
  return (
    <>
      <Button
        component={Link}
        to={path}
        sx={{
          color: selected ? "#000000" : "#E8F9FD",
          marginBottom: "10px",
          backgroundColor: selected ? "#E8F9FD" : "transparent",
        }}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  );
}

SideNavButton.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

export default SideNavButton;
