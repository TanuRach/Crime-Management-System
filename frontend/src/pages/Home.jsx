import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg text-center w-full">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="mt-4 space-y-4">
          <button
            onClick={() => navigate("/report")}
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Report
          </button>
          <button
            onClick={() => navigate("/about")}
            className="w-full px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            About Us
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="w-full px-6 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Contact
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
