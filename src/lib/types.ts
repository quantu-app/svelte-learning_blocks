import type { JsonValue } from "type-fest";

/**
 * Multiple Choice Questions  
 **/

export type IChoice = {
    id: number;
    userSelected: boolean;
    value: JsonValue;
}

export type IAnsweredChoice = IChoice & {
    correct: boolean;
}

export type IChoiceListOptions = {
    userCanSelectMultiple: boolean;
    randomizeChoiceOrder: boolean;
}

export type IChoiceList = {
    choices: IChoice[];
    options: IChoiceListOptions;
}

export type IAnsweredChoiceList = {
    choices: IAnsweredChoice[];
    options: IChoiceListOptions;
}

/**
 * True/False Questions
 **/

export type ITrueFalse_Choice = {
    id: number;
    userSelected: boolean;
}

export type ITrueFalse_TrueDisplayValue = "true" | "yes" | JsonValue;
export type ITrueFalse_FalseDisplayValue = "false" | "no" | JsonValue;

export type ITrueFalse_DEFAULT_TRUE_VALUE = "true";
export type ITrueFalse_DEFAULT_FALSE_VALUE = "false";

export type ITrueFalse_Options = {
    randomizeChoiceOrder?: boolean;
    choiceTrueDisplayValue: ITrueFalse_TrueDisplayValue;
    choiceFalseDisplayValue: ITrueFalse_FalseDisplayValue;
}

export type ITrueFalse = {
    choiceTrue: ITrueFalse_Choice,
    choiceFalse: ITrueFalse_Choice,
    options: ITrueFalse_Options
}

/**
 * Text Input Questions
 */
export type ResponseChecker = string | RegExp;
export type IMatchTextInput = {
    correctResponses: ResponseChecker[],
    useRegex: boolean;
}

/**
 * Content Rendering
 **/

export type IStepDisplayType = "none" | "number" | "name";

export type Step = {
    value: JsonValue;
    name?: string;
}

export type IStepwiseContentDisplay = {
    steps: Step[];
    options: {
        startWithFirstStepShown?: boolean;
        stepDisplayType?: IStepDisplayType;
    }
}