
///<reference types="Cypress"/>
describe('My second test suite', () => {

    it('How to handle tab  and child window', () => 
        {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('#opentab').then((e1)=>
    {
        const url=e1.prop('href');
        cy.visit(url);
      //  cy.origin('enter thw url on which you have to navigate ',()={'test case should be writtent inside this block'})
        cy.origin(url,()=>
        {
            cy.get('div.sub-menu-bar a[href*="about"]').click();

        });
     })
    
})
        


       })



  
  
  