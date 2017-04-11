export default class VendingMachine {
  constructor() {
    // status can be ["idle", "credited", "vending"]
    this.state = {
      status: "idle",
      credits: 0,
      change: 0,
      selection: '',
      hasItem: true
    }
  }

  reset() {
    this.constructor()
  }

  addCredits(credits){
    this.state.credits += credits
    this.state.status = 'credited'
  }

  setSelection(selection) {
    this.state.selection = selection
    if(Object.keys(treats).includes(selection)) {
      if (treats[selection].length === 0) {
        this.state.hasItem = false
        this.state.selection = 'out of stock'
      } else if (this.state.credits < treats[selection][0].price) {
        console.log('did not enter enough money')
      }
   } else {
     return this.state.selection = 'error, bad code'
   }
  }

  checkChange(selection) {
    let itemName = this.state.selection
    this.state.credits = treats[itemName][0].price
}

}

const treats = {
  A1: [{name: 'Apple', price: 75}],
  A2: [{name: 'Carrot', price: 75}],
  A3: [{name: 'Celery', price: 75}],
  A4: [{name: 'Pineapple', price: 75}],
  B1: [{name: 'Sweet Potato', price: 75}],
  B2: [{name: 'Normal Potato', price: 75}],
  B3: [{name: 'Parsley', price: 75}],
  B4: [{name: 'Chicken', price: 75}],
  C1: [{name: 'Grape', price: 75}],
  C2: [{name: 'Blackberry', price: 75}],
  C3: [{name: 'Strawberry', price: 75}],
  C4: [{name: 'Banana', price: 75}],
  D1: [{name: 'Kale', price: 75}],
  D2: [{name: 'Kiwi', price: 75}],
  D3: [],
  D4: [{name: 'Pepper', price: 75}],
}
