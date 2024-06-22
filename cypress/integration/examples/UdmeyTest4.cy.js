describe("My first second Test suite",function()
{
    
    it("My first test case",function()
    {
      
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#alertbtn').click();
      cy.get('#confirmbtn').click();
    cy.on('window:alert',(str)=>
    {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')//mocha
    })    
    cy.on('window:confirm',(str)=>
    {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')//mocha

    })  
  })

})