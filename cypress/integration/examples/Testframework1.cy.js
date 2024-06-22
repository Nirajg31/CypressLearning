/// <reference types="Cypress" />
import Homepage  from "../pageobjects/Homepage";
import Productpage from "../pageobjects/Productpage";

describe('My second test suite',()=>
{
    before(()=>
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data;

        })

    })

    it('My first test case',function()
    {
        const homepage=new Homepage();
        const productpage= new Productpage();
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homepage.getEditBox().type(this.data.name);
        homepage.getGendar().select(this.data.gendar);
        homepage.getTwowayDataBinding().should('have.value',this.data.name);
        homepage.getEditBox().should('have.attr','minlength',2);
        homepage.getEnterprenurRadiotbutton().should('be.disabled');
        homepage.getShoptab().click({force:true});
        Cypress.config('defaultCommandTimeout',8000);
        this.data.productName.forEach(function(element) 
        {
            cy.selectProduct(element)
        });
      
            productpage.getCheckout().click({force:true})
            productpage.getCheckoutbutton().click({force:true});
            productpage.getCountry().type('India');
            Cypress.config('defaultCommandTimeout',12000);
            productpage.getsuggestion().click();
            // productpage.getsuggestion().click();
            productpage.getCheckbox().click({force:true});
            productpage.getsubmitbutton().click();


    })

})