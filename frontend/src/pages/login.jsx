import { useNavigate } from "react-router-dom";

export default function Login({ name }) {
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-lg w-80">
        <p className="text-xl font-light">{name}</p>

        <form onSubmit={handleSubmit} className="w-full">
          <input
            className="border-2 p-2 w-full rounded mb-2"
            type="text"
            placeholder="Username"
            aria-label="Username"
            required
          />
          <input
            className="border-2 p-2 w-full rounded mb-4"
            type="password"
            placeholder="Password"
            aria-label="Password"
            required
          />
          <button
            type="submit"
            className="bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-800 w-full mb-2"
          >
            Login
          </button>
        </form>
        <button
          onClick={() => navigate("/signup")} // Fixed route case
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
