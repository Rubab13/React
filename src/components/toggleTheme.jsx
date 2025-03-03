import { useState } from "react";

function ToggleTheme() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`container d-flex flex-column align-items-center justify-content-center vh-100 ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <h1 className="mb-4 text-primary fw-bold">Toggle Theme</h1>
      <button className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} mx-2 px-4 py-2 fw-bold`} onClick={toggle}>
        Toggle
      </button>
      <h2 className={`display-4 fw-bold ${theme === "dark" ? "text-light" : "text-dark"}`}>
        {theme}
      </h2>
    </div>
  );
}

export default ToggleTheme;
