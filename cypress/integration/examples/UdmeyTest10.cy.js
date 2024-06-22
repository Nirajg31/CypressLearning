///<reference types="Cypress"/>

describe('Calendar Test', () => {

  beforeEach(()=>{
    cy.viewport(1980,1200);
  })

    it('Verify date selection', () => 
        {
          const monthnumber = "6";
          const datenumber = "15";
          const yearnumber = "2023"; // Assuming a valid year
          const expectedList = [monthnumber, datenumber, yearnumber];          
          cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
          cy.get('input.react-date-picker__inputGroup__input').eq(1).click({ force: true });
          cy.get('.react-calendar__navigation__label').click();
          cy.get('.react-calendar__navigation__label').click();
          cy.contains('button', yearnumber).click();
          cy.get('button.react-calendar__year-view__months__month').eq(Number(monthnumber) - 1).click();
          cy.contains('abbr', datenumber).click();
          
          // // Verify the date input value
          // cy.get('input[name="month"]').invoke('val').then((month) => {
          //   expect(month).to.equal(expectedList[0]);
          // });
          
          // cy.get('input[name="day"]').invoke('val').then((day) => {
          //   expect(day).to.equal(expectedList[1]);
          // });
          
          // cy.get('input[name="year"]').invoke('val').then((year) => {
          //   expect(year).to.equal(expectedList[2]);
          // });
          // });
          
          cy.get("input.react-date-picker__inputGroup__input").each(($el,index)=>
            {
                cy.wrap($el).invoke('val').should('eq',expectedList[index]);
            })
       




        })
    
    
      })