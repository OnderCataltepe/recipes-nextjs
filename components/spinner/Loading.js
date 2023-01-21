import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <Spinner
        style={{
          backgroundColor: "transparent",
          width: "5rem",
          height: "5rem",
        }}
        animation="border"
        variant="light"
        role="status"
      ></Spinner>
    </div>
  );
};

export default Loading;
