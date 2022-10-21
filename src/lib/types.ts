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