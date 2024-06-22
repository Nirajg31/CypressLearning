import { LoginFunction } from "./CommonFunc.cy.js";
describe('Para bank Login Scenarios', () => {
  
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.viewport(1280, 720)
  })
  
  it('Login with valid', () => {
    
    LoginFunction('testuser','password');
    cy.get('h2').contains('Account Services');

  })
  it('Login with invalid creds', () => {
    
    LoginFunction('testuser','password12')
    cy.get('p.error').contains('The username and password could not be verified.');

  })

})
