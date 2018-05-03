const { expect } = require('chai');
const Frogger = require('../lib/Frogger.js');

require('locus');
describe('Frogger test suite', () => {
  it('should insatiate a new Frogger in the correct position', () => {
    // Setup
    const frog = new Frogger(275, 650, 50, 50);
    // Execution
    const expected = { x: 275, y: 650, width: 50, height: 50 };

    // Expectation
    expect(frog).to.deep.equal(expected);
  });

  it('should be able to move up on canvas by 50px', () => {
    // Setup
    const frog = new Frogger(275, 650, 50, 50);
    const upEvent = 'up';
    const expectedUp = 600;
    // Execution

    frog.move(upEvent);
    const actualUp = frog.y;

    // Expectation
    expect(actualUp).to.equal(expectedUp);
  });

  it('should be able to move right on canvas by 68px', () => {
    // Setup
    const frog = new Frogger(275, 650, 50, 50);
    const rightEvent = 'right';
    const expectedDown = 343;

    // Execution
    frog.move(rightEvent);
    const actualDown = frog.x;
    // Expectation

    expect(actualDown).to.equal(expectedDown);
  });

  it('should be able to move left on canvas by 68px', () => {
    // Setup
    const frog = new Frogger(275, 650, 50, 50);
    const leftEvent = 'left';
    const expectedDown = 207;

    // Execution
    frog.move(leftEvent);
    const actualDown = frog.x;
    // Expectation

    expect(actualDown).to.equal(expectedDown);
  });

  it('should be able move forward but not outside canvas', () => {
    // Setup
    const frog = new Frogger(275, 650, 50, 50);
    const upEvent = 'up';
    const expectedUp = 0;

    // Execution
    for (let i = 0; i < 13; i++) {
      frog.move(upEvent);
    }
    const actualDown = frog.y;
    // Expectation

    expect(actualDown).to.equal(expectedUp);
  });

  it('should be able move right but not outside of canvas', () => {
    // Setup
    const frog = new Frogger(275, 650, 50, 50);
    const rightEvent = 'right';
    const expectedUp = 547;

    // Execution
    for (let i = 0; i < 4; i++) {
      frog.move(rightEvent);
    }
    const actualDown = frog.x;
    // Expectation

    expect(actualDown).to.equal(expectedUp);
  });

  it('should be able move left but not outside of canvas', () => {
    // Setup
    const frog = new Frogger(275, 650, 50, 50);
    const leftEvent = 'left';
    const expectedUp = 3;

    // Execution
    for (let i = 0; i < 4; i++) {
      frog.move(leftEvent);
    }

    const actualDown = frog.x;
    // Expectation

    expect(actualDown).to.equal(expectedUp);
  });
});