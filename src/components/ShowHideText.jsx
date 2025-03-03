import { useState } from "react";

function ShowHideText () {

  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow(
      (mode) => (
        mode ? setShow(false) : setShow(true)
      )
    );
  }

  return <div className={`container d-flex flex-column align-items-center justify-content-center vh-100`}>
    <h1 className="mb-4 text-primary fw-bold">Show Hide Text</h1>
    <button type="button" className="btn btn-success mx-2 px-4 py-2 fw-bold" onClick={toggle}>Show Text</button>
    {show && <p className="mt-3 w-75 border shadow rounded my-5 p-2">In a quiet town where nothing exciting ever happened, Olivia discovered an old, dusty book in her grandmother’s attic. The cover was worn, its title barely visible: *The Key to Elsewhere*. Curiosity sparked, she flipped through the pages, only to find them blank—until words began appearing before her eyes. "Speak your wish," the book whispered. Heart pounding, she hesitated, then murmured, "Take me somewhere new." In an instant, the walls dissolved into golden mist, and she found herself standing in a moonlit forest where the trees whispered secrets and shadows moved with purpose. Adventure had finally found her.</p>}
  </div>
}

export default ShowHideText;