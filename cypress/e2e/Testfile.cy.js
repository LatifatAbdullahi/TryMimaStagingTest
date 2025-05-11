
describe('Complete SignUp flow', () => {
    it('Sign up with Facebook', () => {
      
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardAboutUsDropdown('Facebook') 
       // cy.typeInPassword()
        //cy.clickSignUp()
       // cy.pleaseEnterCodeBelowTextShouldExist()
        
    });

    it('Sign up with Twitter', () => {
    
      cy.typeInBasicDetailsAndRegNumber()
      cy.clickHowYouHeardAboutUsDropdown('Twitter') 
     // cy.typeInPassword()
      //cy.clickSignUp()
     // cy.pleaseEnterCodeBelowTextShouldExist()
      
  });

  it('Sign up with Webinar/Seminar', () => {
    cy.typeInBasicDetailsAndRegNumber()
    cy.clickHowYouHeardAboutUsDropdown('Webinar/Seminar') 
   // cy.typeInPassword()
    //cy.clickSignUp()
   // cy.pleaseEnterCodeBelowTextShouldExist()
    
});

it('Sign up with Google Search', () => {
  cy.typeInBasicDetailsAndRegNumber()
  cy.clickHowYouHeardAboutUsDropdown('Google Search') 
 // cy.typeInPassword()
  //cy.clickSignUp()
 // cy.pleaseEnterCodeBelowTextShouldExist()
  
});
it('Sign up with Friends & Family', () => {
  cy.typeInBasicDetailsAndRegNumber()
  cy.clickHowYouHeardAboutUsDropdown('Friends & Family') 
 // cy.typeInPassword()
  //cy.clickSignUp()
 // cy.pleaseEnterCodeBelowTextShouldExist()
  
});

it('Sign up with Mima Sales Agent', () => {
  cy.typeInBasicDetailsAndRegNumber()
  cy.clickHowYouHeardAboutUsDropdown('Mima Sales Agent') 
 // cy.typeInPassword()
  //cy.clickSignUp()
 // cy.pleaseEnterCodeBelowTextShouldExist()
  
});

it('Sign up with Others', () => {
  cy.typeInBasicDetailsAndRegNumber()
  cy.clickHowYouHeardAboutUsDropdown('Others') 
 // cy.typeInPassword()
  //cy.clickSignUp()
 // cy.pleaseEnterCodeBelowTextShouldExist()
  
});


});
            