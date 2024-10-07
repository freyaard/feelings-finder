import { useState } from 'react'
import './App.css'

interface Emotion {
  text: string
  subEmotions?: Emotion[] 
}

const EMOTIONS: Emotion[] = [
  {
    text: "Happy",
    subEmotions: [
      {
        text: "Playful",
        subEmotions: [
          { text: "Aroused" },
          { text: "Cheeky" }
        ]
      },
      {
        text: "Content",
        subEmotions: [
          { text: "Free" },
          { text: "Joyful" }
        ]
      },
      {
        text: "Interested",
        subEmotions: [
          { text: "Curious" },
          { text: "Inquisitive" }
        ]
      },
      {
        text: "Proud",
        subEmotions: [
          { text: "Successful" },
          { text: "Confident" }
        ]
      },
      {
        text: "Accepted",
        subEmotions: [
          { text: "Respected" },
          { text: "Valued" }
        ]
      },
      {
        text: "Powerful",
        subEmotions: [
          { text: "Courageous" },
          { text: "Creative" }
        ]
      },
      {
        text: "Peaceful",
        subEmotions: [
          { text: "Loving" },
          { text: "Thankful" }
        ]
      },
      {
        text: "Trusting",
        subEmotions: [
          { text: "Sensitive" },
          { text: "Intimate" }
        ]
      },
      {
        text: "Optimistic",
        subEmotions: [
          { text: "Hopeful" },
          { text: "Inspired" }
        ]
      }
    ]
  },
  {
    text: 'Sad',
    subEmotions: [
      {
        text: "Lonely",
        subEmotions: [
          { text: "Isolated" },
          { text: "Abandoned" }
        ]
      },
      {
        text: "Vulnerable",
        subEmotions: [
          { text: "Victimized" },
          { text: "Fragile" }
        ]
      },
      {
        text: "Despair",
        subEmotions: [
          { text: "Grief" },
          { text: "Powerless" }
        ]
      },
      {
        text: "Guilty",
        subEmotions: [
          { text: "Ashamed" },
          { text: "Remorseful" }
        ]
      },
      {
        text: "Depressed",
        subEmotions: [
          { text: "Empty" },
          { text: "Inferior" }
        ]
      },
      {
        text: "Hurt",
        subEmotions: [
          { text: "Disappointed" },
          { text: "Embarrassed" }
        ]
      }
    ]
  },
  {
    text: 'Disgusted',
    subEmotions: [
      {
        text: "Repelled",
        subEmotions: [
          { text: "Hesitant" },
          { text: "Horrified" }
        ]
      },
      {
        text: "Awful",
        subEmotions: [
          { text: "Detestable" },
          { text: "Nauseated" }
        ]
      },
      {
        text: "Disappointed",
        subEmotions: [
          { text: "Revolted" },
          { text: "Appalled" }
        ]
      },
      {
        text: "Disapproving",
        subEmotions: [
          { text: "Embarrassed" },
          { text: "Judgemental" }
        ]
      }
    ]
  },
  {
    text: 'Angry',
    subEmotions: [
      {
        text: "Critical",
        subEmotions: [
          { text: "Dismissive" },
          { text: "Skeptical" }
        ]
      },
      {
        text: "Distant",
        subEmotions: [
          { text: "Withdrawn" },
          { text: "Numb" }
        ]
      },
      {
        text: "Frustrated",
        subEmotions: [
          { text: "Infuriated" },
          { text: "Annoyed" }
        ]
      },
      {
        text: "Aggressive",
        subEmotions: [
          { text: "Provoked" },
          { text: "Hostile" }
        ]
      },
      {
        text: "Mad",
        subEmotions: [
          { text: "Furious" },
          { text: "Jealous" }
        ]
      },
      {
        text: "Bitter",
        subEmotions: [
          { text: "Indignant" },
          { text: "Violated" }
        ]
      },
      {
        text: "Humiliated",
        subEmotions: [
          { text: "Disrespected" },
          { text: "Ridiculed" }
        ]
      },
      {
        text: "Let Down",
        subEmotions: [
          { text: "Betrayed" },
          { text: "Resentful" }
        ]
      }
    ]
  },
  {
    text: 'Fearful',
    subEmotions: [
      {
        text: "Threatened",
        subEmotions: [
          { text: "Nervous" },
          { text: "Exposed" }
        ]
      },
      {
        text: "Rejected",
        subEmotions: [
          { text: "Excluded" },
          { text: "Persecuted" }
        ]
      },
      {
        text: "Weak",
        subEmotions: [
          { text: "Worthless" },
          { text: "Insignificant" }
        ]
      },
      {
        text: "Insecure",
        subEmotions: [
          { text: "Inadequate" },
          { text: "Inferior" }
        ]
      },
      {
        text: "Anxious",
        subEmotions: [
          { text: "Overwhelmed" },
          { text: "Worried" }
        ]
      },
      {
        text: "Scared",
        subEmotions: [
          { text: "Helpless" },
          { text: "Frightened" }
        ]
      }
    ]
  },
  {
    text: 'Bad',
    subEmotions: [
      {
        text: "Bored",
        subEmotions: [
          { text: "Indifferent" },
          { text: "Apathetic" }
        ]
      },
      {
        text: "Busy",
        subEmotions: [
          { text: "Pressured" },
          { text: "Rushed" }
        ]
      },
      {
        text: "Stressed",
        subEmotions: [
          { text: "Overwhelmed" },
          { text: "Out of Control" }
        ]
      },
      {
        text: "Tired",
        subEmotions: [
          { text: "Sleepy" },
          { text: "Unfocused" }
        ]
      }
    ]
  },
  {
    text: 'Surprised',
    subEmotions: [
      {
        text: "Startled",
        subEmotions: [
          { text: "Shocked" },
          { text: "Dismayed" }
        ]
      },
      {
        text: "Confused",
        subEmotions: [
          { text: "Disillusioned" },
          { text: "Perplexed" }
        ]
      },
      {
        text: "Amazed",
        subEmotions: [
          { text: "Astonished" },
          { text: "Awe" }
        ]
      },
      {
        text: "Excited",
        subEmotions: [
          { text: "Eager" },
          { text: "Energetic" }
        ]
      }
    ]
  }
];

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion>();

  // if no emotion selected
  const isInitialState = !selectedEmotion;
  
  // if emotion selected AND there ARE subEmotions
  const isActiveState = !!selectedEmotion && !!selectedEmotion.subEmotions

  // if emotion selected AND there NO subEmotions
  const isEndState = !!selectedEmotion && !selectedEmotion.subEmotions;

  const reset = () => {
    setSelectedEmotion(undefined);
  }
  
  return (
    <>
    {(isInitialState || isActiveState) ? 
      <h1>How are you feeling today?</h1> : 
      <h1>Are you feeling <span>{selectedEmotion!.text.toUpperCase()}</span>?</h1>
    }

      { isInitialState && EMOTIONS.map((emotion) => <button onClick={() => setSelectedEmotion(emotion)} className='shadow' key={emotion.text}>{emotion.text}</button>)}
      { isActiveState && selectedEmotion.subEmotions?.map((emotion) => <button onClick={() => setSelectedEmotion(emotion)} className='shadow' key={emotion.text}>{emotion.text}</button>)}
      { isEndState && <> 
        <p>{selectedEmotion.text}</p>
        <button onClick={reset}>Start Over</button>
      </>}
    </>
  )
}

export default App
