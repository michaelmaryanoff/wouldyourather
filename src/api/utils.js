import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(question) {
    return _saveQuestionAnswer(question)
}