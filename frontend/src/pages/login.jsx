export default function Login({ name }) {
  return (
    <>
      <p>Welcome {name}</p>
      <input type="text" aria-label="Username" />
      <input type="text" aria-label="Password" />
      <button>Login</button>
    </>
  );
}
