import { motion } from "framer-motion";
import { SetStateAction, useState } from "react";
import { AppState } from "../hooks/useAppState";
import { Emotion } from "../types";

interface EmotionSelectorProps {
  emotions: Emotion[];
  appState: AppState;
  selectedEmotion: Emotion | null;
  setSelectedEmotion: React.Dispatch<SetStateAction<Emotion | null>>;
}

export default function EmotionSelector({
  emotions,
  appState,
  selectedEmotion,
  setSelectedEmotion,
}: EmotionSelectorProps) {
  const [previousEmotions, setPreviousEmotions] = useState<Array<Emotion>>([]);

  // Resets the EmotionSelector AppState to 'initial'. Fired when Reset button pressed.
  const reset = () => {
    setSelectedEmotion(null);
    setPreviousEmotions([]);
  };

  // Go back to the previous emotion select screen. Fired when back button pressed
  const goBack = () => {
    if (!previousEmotions.length) return;
    if (previousEmotions.length === 1) {
      reset();
      return;
    }

    setSelectedEmotion(previousEmotions[previousEmotions.length - 2]);
    setPreviousEmotions((prev) => prev.slice(0, 1));
  };

  return (
    <motion.div
      layout
      className={`main ${previousEmotions[0]?.text.toLowerCase()}`}
    >
      {appState === "initial" || appState === "active" ? (
        <motion.h1 layout="position">How are you feeling today?</motion.h1>
      ) : (
        <h1>Are you feeling?</h1>
      )}

      {appState !== "end" && (
        <ul>
          {appState === "initial" &&
            emotions.map((emotion) => {
              return (
                <li key={emotion.text}>
                  <button
                    onClick={() => {
                      setSelectedEmotion(emotion);
                      setPreviousEmotions([...previousEmotions, emotion]);
                    }}
                    className={emotion.text.toLowerCase()}
                  >
                    {emotion.text}
                  </button>
                </li>
              );
            })}

          {appState === "active" &&
            selectedEmotion!.subEmotions?.map((emotion) => {
              return (
                <motion.li layout key={emotion.text}>
                  <button
                    onClick={() => {
                      setSelectedEmotion(emotion);
                      setPreviousEmotions([...previousEmotions, emotion]);
                    }}
                    className="shadow"
                  >
                    {emotion.text}
                  </button>
                </motion.li>
              );
            })}
        </ul>
      )}

      {appState === "active" && (
        <button onClick={goBack} className="back-button">
          Back
        </button>
      )}

      {appState === "end" && (
        <div className="end-state">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {selectedEmotion!.text.toUpperCase()}
          </motion.p>
          <button onClick={reset} className="back-button">
            Start Over
          </button>
        </div>
      )}
    </motion.div>
  );
}
