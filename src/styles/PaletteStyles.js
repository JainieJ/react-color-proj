export default {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  paletteColors: {
    height: "90%"
  },
  goBack: {
    height: "50%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    opacity: 1,
    background: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      transition: "0.5s",
      textDecoration: "none"
    }
  }
};
