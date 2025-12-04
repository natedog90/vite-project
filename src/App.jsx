import "./App.css";
import profileImage from "./assets/DSC_4789.jpg";
import LogCard from "./components/LogCard";

function App() {
  return (
    <>
      <LogCard />

      <nav className="navbar">
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              linked in
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <aside className="sidebar">
          <img
            className="profile-img"
            src={profileImage}
            alt="Nathan Jimenez"
          />
          <h1>About Me</h1>
          <p>
            Hi, I am Nathan I am currently an intern at IC stars chicago as an
            aspiring web developer.
          </p>
        </aside>

        <main className="main-content">
          <h2 id="main-title">Welcome to my developement log</h2>

          <div id="dev-log">
            <p>Hello, my name is Nathan Jimenez</p>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
