import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";

interface Emotion {
  text: string;
  subEmotions?: Emotion[];
}

const EMOTIONS: Emotion[] = [
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

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [previousEmotions, setPreviousEmotions] = useState<Array<Emotion>>([]);

  // if no emotion selected
  const isInitialState = !selectedEmotion;

  // if emotion selected AND there ARE subEmotions
  const isActiveState = !!selectedEmotion && !!selectedEmotion.subEmotions;

  // if emotion selected AND there NO subEmotions
  const isEndState = !!selectedEmotion && !selectedEmotion.subEmotions;

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
            EMOTIONS.map((emotion) => {
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
  );
}

export default App;
