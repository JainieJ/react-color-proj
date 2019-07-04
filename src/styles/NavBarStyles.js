export default {
  NavBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh"
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: `"Roboto", sans-serif`,
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle,.rc-slider-handle:focus,.rc-slider-handle:hover": {
      background: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none"
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    }
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  }
};
