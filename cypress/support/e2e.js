
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-fill-command'
import './custom-command/homepage'
import'./custom-command/signupPage'
import './custom-command/common-actions'


beforeEach(() =>{
cy.on('uncaught:exception',()=>{
    return false
    
})

})
            