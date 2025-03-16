import { useNavigate } from "react-router-dom";

export default function about() {
  const navigate = useNavigate();

  return (
    <h2>
      <center>
        About Page
        <h3>CRIME MANAGEMENT SYSTEM TEAM</h3>
        <button
          onClick={() => navigate("/home")}
          className=" px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg"
        >
          Back
        </button>
      </center>
    </h2>
  );
}
