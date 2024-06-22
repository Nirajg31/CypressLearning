
/// <reference types="cypress" />
describe('This file will cover all the Simplilearn Login Test scenarios', () => {

beforeEach(()=>
{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
})
    it('Valiate radio button', () => 
    {
    cy.get('input[value="radio1"]').check().should('be.checked').and('have.value', 'radio1');//select radio1 button and check its values equal to radio1
    cy.get('input[value="radio2"]').check().should('be.checked');//select  the radio2 button  
    cy.get('input[value="radio1"]').should('not.be.checked');//check radio1 button is deselected
    })    
    it('Valiate dynamic dropdown', () => 
        {
        cy.get('.ui-autocomplete-input').type('India');
        cy.get('.ui-menu-item>div').each(($e1,index,$list)=>
        {
            
            if($e1.text() =='India')
                {
                    cy.wrap($e1).click();
                }
                cy.get('#autocomplete').should('have.value','India');


        }) 
        
        it('Valiate static dropdown', () => 
            {
          cy.get('select')
    
    
            })
        })
            

})
    
    