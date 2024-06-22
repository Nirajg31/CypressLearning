import { LoginFunction } from "./CommonFunc.cy.js";

describe('Para blank Account summary test scenario', () => {
  
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.viewport(1280, 720)
  })
  it('Validate account summary', () => {
    
    LoginFunction('testuser','password');
    cy.get('h2').contains('Account Services');
    cy.xpath("(//td[text()='$515.50'])[1]").contains('$515.50')

  })
})