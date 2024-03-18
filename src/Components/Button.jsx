import launchConfetti from "../Actions/launchConfetti";
import "./Buttons.css";

function checkId(id) {
  if (id === "") {
    console.error(
      "Button id is empty. Please provide a unique id for the button."
    );
  }
  // TODO: Add different checks to return different button structures as needed.
}

const Button = ({
  text,
  onClick,
  type = "button",
  id = "",
  disabled = false,
  withConfetti = false, // Prop to control confetti effect
}) => {
  checkId(id);

  const handleClick = (e) => {
    onClick && onClick(e);
    withConfetti && launchConfetti(e);
  };

  return (
    <div className={`button-container-${id}`}>
      <button type={type} id={id} onClick={handleClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  onClick: (e) => {
    e.preventDefault();
    console.log("Button clicked. This is the default onClick prop.");
  },
};

export default Button;
