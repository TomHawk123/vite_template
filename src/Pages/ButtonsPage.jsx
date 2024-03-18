import { React } from "react";
import Button from "../Components/Button";
import ConfettiButton from "../Actions/launchConfetti";

const ButtonsPage = () => {
  return (
    <>
      <Button text="Click Here" id="vite" />
      <Button text="Click Here" id="gpt1" />
      <Button text="Click Here" id="primary" />
      <Button text="Click Here" id="secondary" />
      <Button text="Success" id="success" />
      <Button text="Danger" id="danger" />
      <Button text="Gradient Glow" id="gradient-glow" />
      <Button text="3D Press" id="three-d-press" />
      <Button text="Shimmering" id="amazing-button" />
      <Button text="The Twist" id="twist" withConfetti="true" />
    </>
  );
};

export default ButtonsPage;
