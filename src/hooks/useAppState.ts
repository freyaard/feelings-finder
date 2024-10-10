import { Emotion } from "../App";


export default function useAppState(selectedEmotion: Emotion | null) {
  // if no emotion selected
  if (!selectedEmotion) return 'initial';
  
  // if emotion selected AND there NO subEmotions OR there is ONLY ONE subEmotion
  if (!!selectedEmotion && (!selectedEmotion.subEmotions || selectedEmotion.subEmotions.length === 1)) return 'end'

  // if emotion selected AND there ARE subEmotions
  if (!!selectedEmotion && !!selectedEmotion.subEmotions) return 'active';

  return 'initial'
}