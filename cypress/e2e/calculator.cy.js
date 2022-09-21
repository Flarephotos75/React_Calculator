describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('Should update the running total on screen when using the number and operator buttons', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '7')
  })

  it('Should show the correct running total using multiple operators chained', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('.display').should('contain', '21')
  })

  it('Should be able to show a negative number', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('.display').should('contain', '-3')
  })

  it('Should be able to show a float number', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '7.5')
  })

  it('Should be able to show a very large number', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('.display').should('contain', '996005996001')
  })

  it('Should not display Infinity if dividing by zero', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', 'Error')
  })

})