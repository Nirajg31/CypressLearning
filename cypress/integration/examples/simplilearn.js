describe('This file will cover all the Simplilearn Login Test scenarios', () => {

    beforeEach(() => 
        {
            cy.visit('https://www.simplilearn.com/');
        })

    it('Validate Login Success', () => {
        cy.wait(2000);
        cy.get('a.login').click();
        cy.get('input.email').type('abc@xyz.com');
        cy.get('input#password').type('Abcd123');
        cy.get('input#remember-me').click();
        cy.get('input[title="Login"]').click();
      })
    
    it('Validate Login Failure', () => {
        cy.wait(2000);
        cy.get('a.login').click();
        cy.get('input.email').type('abc@xyz.com');
        cy.get('input#password').type('Abcd@123');
        cy.get('input#remember-me').click();
        cy.get('input[title="Login"]').click();
        cy.get('div#msg_box').contains('The email or password you have entered is invalid.');
      })    
    })
    
    