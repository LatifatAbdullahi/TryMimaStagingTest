let homepage
let signup
import {fakerEN_NG as faker } from "@faker-js/faker"


before(()=>{
    cy.fixture('elements').then(sel=>{
        homepage = sel.elements.homepage
        signup = sel.elements.signupPage

    })
})



Cypress.Commands.add('typeInAnyValue', (field, text) =>{
    cy.get(field).type(text)
   })
   Cypress.Commands.add('clickAnyButtonwithText',(text) =>{
    cy.get('button').contains(text).click()
   })
   Cypress.Commands.add('clickAnyLinkWithText',  (text) => {
    cy.get('a').contains(text).click()
       
    })

   Cypress.Commands.add('clickHowYouHeardAboutUsDropdown',  (text) => {
     cy.get(signup.howYouHeardAboutUs).click()
     cy.get('#scrollableDiv').contains(text).click()
        
     })
     

    Cypress.Commands.add('typeInBasicDetailsAndRegNumber', ()=>{
        const inputs =  [
            faker.person.fullName(),
            faker.company.buzzNoun(),
            faker.internet.email({provider: '@maildrop.cc'}),
            faker.phone.number({style: 'international'}) ,
            faker.string.numeric({length: {min:5, max:7}})
        ]

        cy.get('input').each(($el, index)=>{
            cy.wrap($el).fill(inputs[index])
        })

        cy.clickAnyButtonwithText('Next')
     //cy.clickNextButton()
    })

     Cypress.Commands.add('chooseAnyOptionalField', ()=>{
       cy.get(signup.instagramField).faker.person.buzzNoun()
          
    })

    Cypress.Commands.add('typeInPassword',  ()=>{
        cy.get(signup.passwordField).type('Quiinnxee40&')
    })

    Cypress.Commands.add('clickSignUp',  ()=>{
        cy.get(signup.signUpSubmit).within(()=>{
            cy.contains('Sign Up').click()
        })
    })
   Cypress.Commands.add('pleaseEnterCodeBelowTextShouldExist', ()=>{
    cy.contains('Please enter the code below').should(exist)
   })

  

