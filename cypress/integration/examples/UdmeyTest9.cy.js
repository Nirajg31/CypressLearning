///install iframe package
///<reference types="Cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('My second test suite', () => {

  beforeEach(()=>{
    cy.viewport(1980,1200);
  })

    it('how to handle ifram in cypress', () => 
        {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       cy.frameLoaded("#courses-iframe")
       cy.iframe().find('a[href*="mentorship"]').eq(0).click();
       cy.wait(2000)
       cy.iframe().find("h1[class*='pricing-title']").should('have.length',2);
     

        });
     })
    
  