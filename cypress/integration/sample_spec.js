describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test', () => {
  it('Mile High Movies', () => {
    cy.visit('http://localhost:3000/')
  })
})
