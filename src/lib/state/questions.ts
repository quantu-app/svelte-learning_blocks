import { writable } from "svelte/store";

export type IQuestionState = {
  answerSubmitted: boolean
  answerGraded: boolean
  explained: boolean
  feedbackGiven: boolean
}

export const questionState = writable<IQuestionState>({
  answerSubmitted: false,
  answerGraded: false,
  explained: false,
  feedbackGiven: false
})