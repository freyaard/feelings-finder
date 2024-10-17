import { SetStateAction } from "react";
import { WheelVersion } from "../types";

interface SelectWheelButtonProps {
  wheelVersion: WheelVersion;
  setWheelVersion: React.Dispatch<SetStateAction<WheelVersion>>;
}

export default function SelectWheelButton({
  wheelVersion,
  setWheelVersion,
}: SelectWheelButtonProps) {
  const buttonPressed = () => {
    if (wheelVersion === "roberts") setWheelVersion("wilcox");
    if (wheelVersion === "wilcox") setWheelVersion("roberts");
  };

  let buttonText = "Extended";
  if (wheelVersion === "wilcox") buttonText = "Original";

  return (
    <button onClick={buttonPressed} style={{ backgroundColor: "transparent" }}>
      {buttonText}
    </button>
  );
}
