require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const VendingMachine = require('../vendingMachine').default
const Person = require('../person').default

describe('Vending Machine', () => {

  const vendingMachine = new VendingMachine()
  const bugs = new Person("Bugs", 100)

  afterEach(() => {
    vendingMachine.reset();
  });

  it('should accept credits and change status idle to credited', () => {
      assert.equal(vendingMachine.state.status, 'idle');

      vendingMachine.addCredits(bugs.insertCredits(100));

      assert.equal(vendingMachine.state.status, 'credited');
      assert.equal(vendingMachine.state.credits, 100);
    });

  it('should save selection and credits if 100 credits are added', () => {
    assert.equal(vendingMachine.state.status, 'idle');

    vendingMachine.addCredits(bugs.insertCredits(100));
    vendingMachine.setSelection(bugs.makeSelection('A1'));

    assert.equal(vendingMachine.state.selection, 'A1');
    assert.equal(vendingMachine.state.credits, 100);

  })

  it('should save selection and credits if 50 credits are added', () => {
    assert.equal(vendingMachine.state.status, 'idle');

    vendingMachine.addCredits(bugs.insertCredits(50));
    vendingMachine.setSelection(bugs.makeSelection('D1'));

    assert.equal(vendingMachine.state.selection, 'D1');
    assert.equal(vendingMachine.state.credits, 50);

  })

  it('should return state hasItem false if there is no item in stock', () => {
    assert.equal(vendingMachine.state.status, 'idle');

    vendingMachine.addCredits(bugs.insertCredits(100));
    vendingMachine.setSelection(bugs.makeSelection('D3'));

    assert.equal(vendingMachine.state.selection, '');
    assert.equal(vendingMachine.state.credits, 100);
    assert.equal(vendingMachine.state.hasItem, false)

  })

  it('should return state hasItem true if item is in stock', () => {
    assert.equal(vendingMachine.state.status, 'idle');

    vendingMachine.addCredits(bugs.insertCredits(100));
    vendingMachine.setSelection(bugs.makeSelection('D1'));

    assert.equal(vendingMachine.state.selection, 'D1');
    assert.equal(vendingMachine.state.credits, 100);
    assert.equal(vendingMachine.state.hasItem, true)

  })

});

describe('vendingMachine methods', () => {
  const vendingMachine = new VendingMachine()

  afterEach(function() {
    vendingMachine.reset();
  });

  it('should have an addCredits() method', () => {
    vendingMachine.addCredits(200)
    assert.equal(vendingMachine.state.credits, 200)
    assert.equal(vendingMachine.state.status, 'credited')
  })



  xit('should have a setSelection() method', () => {
    vendingMachine.treats = {
      B5: [{name: 'Mango', price: 75}]
    }
    vendingMachine.setSelection('B5')
    assert.equal(vendingMachine.state.selection, 'B5')
  })
})

describe('person methods', () => {
  const bugs = new Person()

  afterEach(() => {
    bugs.reset();
  });

  it('should have an insertCredits() method', () => {
    bugs.insertCredits(100)
    assert.equal(bugs.state.credits, 400)
  })



  it('should have a makeSelection() method', () => {
    bugs.makeSelection('B5')
    assert.equal(bugs.state.selection, 'B5')
  })

})
