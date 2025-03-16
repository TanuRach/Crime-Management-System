import { useNavigate } from "react-router-dom";

export default function report() {
  const navigate = useNavigate();

  return (
    <>
      <center>
        <h4>REPORT CRIME HERE</h4>
        <button
          onClick={() => navigate("/home")}
          className=" px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg"
        >
          Back
        </button>
      </center>
    </>
  );
}
