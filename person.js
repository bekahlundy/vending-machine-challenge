export default class Person {
  constructor() {
    this.state = {
      credits: 500,
      selection: '',
      change: ''
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

  getChange(change) {
    this.state.change = change
    return change
  }

}
