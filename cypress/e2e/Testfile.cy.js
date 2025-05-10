
describe('Example Test', () => {
    it('Testing custom commands POM', () => {
        cy.visit('/');
        cy.clickSignUpButton()
      cy. typeInBasicDetailsAndRegNumber()
       //cy.clickNextButton(),
         cy.chooseAnyOptionalField()
        cy.clickHowYouHeardAboutUsDropdown('Facebook') 
        cy.typeInPassword()
        cy.clickSignUp()
        cy.pleaseEnterCodeBelowTextShouldExist()
        
    });
});
            