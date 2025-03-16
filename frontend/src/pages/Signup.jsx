import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.elements["password"].value;
    const confirmPassword = form.elements["confirmPassword"].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    navigate("/home"); // Redirect after signup
  };

  return (
    <center>
      <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-lg w-80">
        <p className="text-xl font-light">Sign Up</p>
        <form onSubmit={handleSignup} className="w-full">
          <input
            className="border-2 p-2 w-full rounded mb-2"
            type="text"
            name="email"
            placeholder="Email"
            aria-label="Email"
            required
          />
          <input
            className="border-2 p-2 w-full rounded mb-2"
            type="text"
            name="username"
            placeholder="Username"
            aria-label="Username"
            required
          />
          <input
            className="border-2 p-2 w-full rounded mb-2"
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            required
          />
          <input
            className="border-2 p-2 w-full rounded mb-4"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            aria-label="Confirm Password"
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 w-full mb-2"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full"
        >
          Back to Login
        </button>
      </div>
    </center>
  );
}
