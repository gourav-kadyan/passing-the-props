import "./Welcome.css";
const Welcome = ({ name, show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="container">
      <h1>Hey ! {name} </h1>
      <h2>Welcome to Lovely Professional University</h2>
    </div>
  );
};

export default Welcome;
