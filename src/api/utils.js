import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(response) {
    return _saveQuestionAnswer(response)
}