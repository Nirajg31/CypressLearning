describe("My first test suite",function()
{
    beforeEach(() => 
        {
        cy.viewport(1280, 720)
       })

    it("My first test case",function()
    {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//in selenium get hit the url ,in cypresss get act like findelement by css selector
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
//parent child chaning
cy.get('.products').as('productlocator');
cy.get('@productlocator').find('.product').should('have.length',4)
cy.get('@productlocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
{
  console.log('write something on console log');

})
 //iteration of the product list 
 cy.get('@productlocator').find('.product').each(($e1,index,$list)=>
    {
    const prodname= $e1.find('h4.product-name').text();
    if(prodname.includes('Carrot'))
        {
           cy.wrap($e1) .find('button').click
        }
        

    })
    cy.get('.brand').should('have.text','GREENKART');
cy.get('.brand').then(function(logoelement)
{

    cy.log(logoelement.text());
})
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())



})
   
})