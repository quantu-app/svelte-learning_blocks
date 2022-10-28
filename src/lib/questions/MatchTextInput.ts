
export type UserInputTransformer = (userInput: string) => string;

export function inputTextChecker(
  userInput: string,
  correctInputValues: (string | RegExp)[],
  userInputProcessors?: UserInputTransformer[]
): boolean;

export function inputTextChecker(
  userInput: string,
  correctInputValues: (string | RegExp)[],
  userInputProcessors?: UserInputTransformer[]): boolean {
  for (let i = 0; i < correctInputValues.length; i++) {
    const correctInputValue = correctInputValues[i];
    if (userInputProcessors) {
      for (let i = 0; i < userInputProcessors.length; i++) {
        userInput = userInputProcessors[i](userInput);
      }
    }

    if (typeof correctInputValue === 'string') {
      if (correctInputValue === userInput) {
        return true;
      }
    } else {
      if (correctInputValue.test(userInput)) {
        return true;
      }
    }
  }
  return false;
}