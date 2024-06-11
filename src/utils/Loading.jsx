import "../css/utils/loading.css";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        fontSize: "3rem",
        background: "var(--clr-bg)",
      }}
    >
      <div className="loading"></div>
    </div>
  );
};

export default Loading;
