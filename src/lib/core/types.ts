import type { JsonValue } from "type-fest";

export interface IQuestionComponent<QuestionConfig = { [key: string]: any }> {
  options: QuestionConfig
};

/**
 * MultipleChoice Questions
 */

export type IUserInput_MultipleChoice_Choice = {
  id: string
  value: JsonValue
  selected: boolean
  correct: boolean | unknown
}

export interface IUserInput_MultipleChoice_ChoiceList extends IQuestionEntity {
  data: {
    choices: IUserInput_MultipleChoice_Choice[]
  },
  options: {
    userCanSelectMultiple: boolean;
    randomizeChoiceOrder: boolean;
  }
}