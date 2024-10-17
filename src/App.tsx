import { useState } from "react";
import "./App.css";
import EmotionSelector from "./components/EmotionSelector";
import InfoPopup from "./components/InfoPopup";
import SelectWheelButton from "./components/SelectWheelButton";
import useAppState from "./hooks/useAppState";
import {
  Emotion,
  ROBERTS_EMOTIONS,
  WheelVersion,
  WILCOX_EMOTIONS,
} from "./types";

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [wheelVersion, setWheelVersion] = useState<WheelVersion>("roberts");

  const emotions =
    wheelVersion === "roberts" ? ROBERTS_EMOTIONS : WILCOX_EMOTIONS;

  const appState = useAppState(selectedEmotion);

  // Removes the need to choose an emotion when there's only a single option. For Wilcox wheel.
  if (selectedEmotion?.subEmotions?.length === 1) {
    setSelectedEmotion(selectedEmotion.subEmotions[0]);
  }

  return (
    <>
      {appState === "initial" && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <SelectWheelButton
            wheelVersion={wheelVersion}
            setWheelVersion={setWheelVersion}
          />
          <InfoPopup />
        </div>
      )}
      <EmotionSelector
        emotions={emotions}
        appState={appState}
        selectedEmotion={selectedEmotion}
        setSelectedEmotion={setSelectedEmotion}
      />
    </>
  );
}

export default App;
