import { PuffLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PuffLoader color="#36d7b7" speedMultiplier={4} />
    </div>
  );
}

export default Loader;
