import type { JsonValue } from "type-fest";

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