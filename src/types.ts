export interface Emotion {
  text: string;
  subEmotions?: Emotion[];
}

export type WheelVersion = "wilcox" | "roberts";

export const ROBERTS_EMOTIONS: Emotion[] = [
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

export const WILCOX_EMOTIONS: Emotion[] = [
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
