import { useNavigate } from "react-router-dom";

export default function contact() {
  const navigate = useNavigate();

  return (
    <>
      <center>
        Contact Page
        <h3>HELP-LINE NUMBER : 1234567</h3>
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
