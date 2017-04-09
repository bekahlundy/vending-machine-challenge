export default class Person {
  constructor() {
    this.state = {
      credits: 500,
      selection: ''
    }
  }

  reset() {
    this.constructor()
  }

  insertCredits(credits) {
    this.state.credits -= credits
    return credits
  }

  makeSelection(selection) {
    this.state.selection = selection
    return selection
  }

}
