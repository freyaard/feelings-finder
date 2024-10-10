import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import SelectWheelButton from "./components/SelectWheelButton";

interface Emotion {
  text: string;
  subEmotions?: Emotion[];
}
export type WheelVersion = "wilcox" | "roberts";

const ROBERTS_EMOTIONS: Emotion[] = [
  {
    text: "Happy",
    subEmotions: [
      {
        text: "Playful",
        subEmotions: [{ text: "Aroused" }, { text: "Cheeky" }],
      },
      {
        text: "Content",
        subEmotions: [{ text: "Free" }, { text: "Joyful" }],
      },
      {
        text: "Interested",
        subEmotions: [{ text: "Curious" }, { text: "Inquisitive" }],
      },
      {
        text: "Proud",
        subEmotions: [{ text: "Successful" }, { text: "Confident" }],
      },
      {
        text: "Accepted",
        subEmotions: [{ text: "Respected" }, { text: "Valued" }],
      },
      {
        text: "Powerful",
        subEmotions: [{ text: "Courageous" }, { text: "Creative" }],
      },
      {
        text: "Peaceful",
        subEmotions: [{ text: "Loving" }, { text: "Thankful" }],
      },
      {
        text: "Trusting",
        subEmotions: [{ text: "Sensitive" }, { text: "Intimate" }],
      },
      {
        text: "Optimistic",
        subEmotions: [{ text: "Hopeful" }, { text: "Inspired" }],
      },
    ],
  },
  {
    text: "Sad",
    subEmotions: [
      {
        text: "Lonely",
        subEmotions: [{ text: "Isolated" }, { text: "Abandoned" }],
      },
      {
        text: "Vulnerable",
        subEmotions: [{ text: "Victimized" }, { text: "Fragile" }],
      },
      {
        text: "Despair",
        subEmotions: [{ text: "Grief" }, { text: "Powerless" }],
      },
      {
        text: "Guilty",
        subEmotions: [{ text: "Ashamed" }, { text: "Remorseful" }],
      },
      {
        text: "Depressed",
        subEmotions: [{ text: "Empty" }, { text: "Inferior" }],
      },
      {
        text: "Hurt",
        subEmotions: [{ text: "Disappointed" }, { text: "Embarrassed" }],
      },
    ],
  },
  {
    text: "Disgusted",
    subEmotions: [
      {
        text: "Repelled",
        subEmotions: [{ text: "Hesitant" }, { text: "Horrified" }],
      },
      {
        text: "Awful",
        subEmotions: [{ text: "Detestable" }, { text: "Nauseated" }],
      },
      {
        text: "Disappointed",
        subEmotions: [{ text: "Revolted" }, { text: "Appalled" }],
      },
      {
        text: "Disapproving",
        subEmotions: [{ text: "Embarrassed" }, { text: "Judgemental" }],
      },
    ],
  },
  {
    text: "Angry",
    subEmotions: [
      {
        text: "Critical",
        subEmotions: [{ text: "Dismissive" }, { text: "Skeptical" }],
      },
      {
        text: "Distant",
        subEmotions: [{ text: "Withdrawn" }, { text: "Numb" }],
      },
      {
        text: "Frustrated",
        subEmotions: [{ text: "Infuriated" }, { text: "Annoyed" }],
      },
      {
        text: "Aggressive",
        subEmotions: [{ text: "Provoked" }, { text: "Hostile" }],
      },
      {
        text: "Mad",
        subEmotions: [{ text: "Furious" }, { text: "Jealous" }],
      },
      {
        text: "Bitter",
        subEmotions: [{ text: "Indignant" }, { text: "Violated" }],
      },
      {
        text: "Humiliated",
        subEmotions: [{ text: "Disrespected" }, { text: "Ridiculed" }],
      },
      {
        text: "Let Down",
        subEmotions: [{ text: "Betrayed" }, { text: "Resentful" }],
      },
    ],
  },
  {
    text: "Fearful",
    subEmotions: [
      {
        text: "Threatened",
        subEmotions: [{ text: "Nervous" }, { text: "Exposed" }],
      },
      {
        text: "Rejected",
        subEmotions: [{ text: "Excluded" }, { text: "Persecuted" }],
      },
      {
        text: "Weak",
        subEmotions: [{ text: "Worthless" }, { text: "Insignificant" }],
      },
      {
        text: "Insecure",
        subEmotions: [{ text: "Inadequate" }, { text: "Inferior" }],
      },
      {
        text: "Anxious",
        subEmotions: [{ text: "Overwhelmed" }, { text: "Worried" }],
      },
      {
        text: "Scared",
        subEmotions: [{ text: "Helpless" }, { text: "Frightened" }],
      },
    ],
  },
  {
    text: "Bad",
    subEmotions: [
      {
        text: "Bored",
        subEmotions: [{ text: "Indifferent" }, { text: "Apathetic" }],
      },
      {
        text: "Busy",
        subEmotions: [{ text: "Pressured" }, { text: "Rushed" }],
      },
      {
        text: "Stressed",
        subEmotions: [{ text: "Overwhelmed" }, { text: "Out of Control" }],
      },
      {
        text: "Tired",
        subEmotions: [{ text: "Sleepy" }, { text: "Unfocused" }],
      },
    ],
  },
  {
    text: "Surprised",
    subEmotions: [
      {
        text: "Startled",
        subEmotions: [{ text: "Shocked" }, { text: "Dismayed" }],
      },
      {
        text: "Confused",
        subEmotions: [{ text: "Disillusioned" }, { text: "Perplexed" }],
      },
      {
        text: "Amazed",
        subEmotions: [{ text: "Astonished" }, { text: "Awe" }],
      },
      {
        text: "Excited",
        subEmotions: [{ text: "Eager" }, { text: "Energetic" }],
      },
    ],
  },
];

const WILCOX_EMOTIONS: Emotion[] = [
  {
    text: "Peaceful",
    subEmotions: [
      {
        text: "Content",
        subEmotions: [{ text: "Pensive" }],
      },
      {
        text: "Thoughtful",
        subEmotions: [{ text: "Relaxed" }],
      },
      { text: "Intimate", subEmotions: [{ text: "Responsive" }] },
      {
        text: "Loving",
        subEmotions: [{ text: "Serene" }],
      },
      {
        text: "Trusting",
        subEmotions: [{ text: "Sentimental" }],
      },
      { text: "Nurturing", subEmotions: [{ text: "Thankful" }] },
    ],
  },
  {
    text: "Powerful",
    subEmotions: [
      {
        text: "Faithful",
        subEmotions: [{ text: "Confident" }],
      },
      {
        text: "Important",
        subEmotions: [{ text: "Intelligent" }],
      },
      { text: "Hopeful", subEmotions: [{ text: "Worthwhile" }] },
      {
        text: "Respected",
        subEmotions: [{ text: "Satisfied" }],
      },
      {
        text: "Proud",
        subEmotions: [{ text: "Cheerful" }],
      },
      { text: "Appreciated", subEmotions: [{ text: "Valuable" }] },
    ],
  },
  {
    text: "Joyful",
    subEmotions: [
      {
        text: "Aware",
        subEmotions: [{ text: "Delightful" }],
      },
      {
        text: "Creative",
        subEmotions: [{ text: "Extravagant" }],
      },
      { text: "Playful", subEmotions: [{ text: "Amused" }] },
      {
        text: "Energetic",
        subEmotions: [{ text: "Stimulating" }],
      },
      {
        text: "Vibrant",
        subEmotions: [{ text: "Fascinating" }],
      },
      { text: "Excited", subEmotions: [{ text: "Daring" }] },
    ],
  },
  {
    text: "Scared",
    subEmotions: [
      {
        text: "Rejected",
        subEmotions: [{ text: "Bewildered" }],
      },
      {
        text: "Confused",
        subEmotions: [{ text: "Discouraged" }],
      },
      { text: "Helpless", subEmotions: [{ text: "Insignificant" }] },
      {
        text: "Submissive",
        subEmotions: [{ text: "Weak" }],
      },
      {
        text: "Insecure",
        subEmotions: [{ text: "Foolish" }],
      },
      { text: "Anxious", subEmotions: [{ text: "Embarassed" }] },
    ],
  },
  {
    text: "Mad",
    subEmotions: [
      {
        text: "Hurt",
        subEmotions: [{ text: "Jealous" }],
      },
      {
        text: "Hostile",
        subEmotions: [{ text: "Selfish" }],
      },
      { text: "Angry", subEmotions: [{ text: "Frustrated" }] },
      {
        text: "Rage",
        subEmotions: [{ text: "Furious" }],
      },
      {
        text: "Hateful",
        subEmotions: [{ text: "Irritated" }],
      },
      { text: "Critical", subEmotions: [{ text: "Skeptical" }] },
    ],
  },
  {
    text: "Sad",
    subEmotions: [
      {
        text: "Guilty",
        subEmotions: [{ text: "Bashful" }],
      },
      {
        text: "Ashamed",
        subEmotions: [{ text: "Stupid" }],
      },
      { text: "Depressed", subEmotions: [{ text: "Miserable" }] },
      {
        text: "Lonely",
        subEmotions: [{ text: "Inadequate" }],
      },
      {
        text: "Bored",
        subEmotions: [{ text: "Inferior" }],
      },
      { text: "Sleepy", subEmotions: [{ text: "Apathetic" }] },
    ],
  },
];

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [previousEmotions, setPreviousEmotions] = useState<Array<Emotion>>([]);
  const [wheelVersion, setWheelVersion] = useState<WheelVersion>("roberts");

  const emotions =
    wheelVersion === "roberts" ? ROBERTS_EMOTIONS : WILCOX_EMOTIONS;

  // if no emotion selected
  const isInitialState = !selectedEmotion;

  // if emotion selected AND there NO subEmotions OR there is ONLY ONE subEmotion
  const isEndState =
    !!selectedEmotion &&
    (!selectedEmotion.subEmotions || selectedEmotion.subEmotions.length === 1);

  // if emotion selected AND there ARE subEmotions
  const isActiveState =
    !!selectedEmotion && !!selectedEmotion.subEmotions && !isEndState;

  if (selectedEmotion?.subEmotions?.length === 1) {
    setSelectedEmotion(selectedEmotion.subEmotions[0]);
  }

  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const reset = () => {
    setSelectedEmotion(null);
    setPreviousEmotions([]);
  };

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
    <>
      {isInitialState && (
        <motion.div layout style={{ display: "flex" }}>
          <SelectWheelButton
            wheelVersion={wheelVersion}
            setWheelVersion={setWheelVersion}
          />
        </motion.div>
      )}
      <motion.div
        layout
        className={`main ${previousEmotions[0]?.text.toLowerCase()}`}
      >
        {isInitialState || isActiveState ? (
          <motion.h1 layout="position">How are you feeling today?</motion.h1>
        ) : (
          <h1>Are you feeling?</h1>
        )}

        {!isEndState && (
          <ul>
            {isInitialState &&
              emotions.map((emotion) => {
                return (
                  <motion.li>
                    <motion.button
                      {...fadeAnimation}
                      onClick={() => {
                        setSelectedEmotion(emotion);
                        setPreviousEmotions([...previousEmotions, emotion]);
                      }}
                      className={emotion.text.toLowerCase()}
                      key={emotion.text}
                    >
                      {emotion.text}
                    </motion.button>
                  </motion.li>
                );
              })}

            {isActiveState &&
              selectedEmotion.subEmotions?.map((emotion) => {
                return (
                  <li>
                    <motion.button
                      {...fadeAnimation}
                      onClick={() => {
                        setSelectedEmotion(emotion);
                        setPreviousEmotions([...previousEmotions, emotion]);
                      }}
                      className="shadow"
                      key={emotion.text}
                    >
                      {emotion.text}
                    </motion.button>
                  </li>
                );
              })}
          </ul>
        )}

        {isActiveState && (
          <button onClick={goBack} className="back-button">
            Back
          </button>
        )}

        {isEndState && (
          <div className="end-state">
            <motion.p {...fadeAnimation}>
              {selectedEmotion.text.toUpperCase()}
            </motion.p>
            <button onClick={reset} className="back-button">
              Start Over
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default App;
