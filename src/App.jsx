import Counter from "./components/counter";
import ShowHideText from "./components/ShowHideText";
import ToggleTheme from "./components/toggleTheme";
import Fetch from "./components/Fetch";
import ColorChanger from "./components/ColorChanger";

function App() {

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  };

  return (
    <>

      <Counter />
      <ToggleTheme />
      <ShowHideText />
      <Fetch />
      <ColorChanger />

      {/* Scroll Buttons */}
      <div className="position-fixed bottom-0 end-0 p-4 d-flex flex-column gap-2">
        <button className="btn btn-primary rounded-circle py-2 px-3 shadow" onClick={scrollUp}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        <button className="btn btn-dark rounded-circle py-2 px-3 shadow" onClick={scrollDown}>
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>

    </>
  )
}

export default App