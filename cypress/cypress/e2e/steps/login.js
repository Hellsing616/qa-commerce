import menu from "../pages/menu"
import { Give, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Give('eu estou pagania de Login', ()=>{
    menu.visitarHomePage()
})

When('gitar meu email e senha registrado',()=>{
    menu.clicarLinkMinhaConta()
    cy.get('#email').type(Cypress.env.username)
    cy.get('#password').type(Cypress.env.password)
    cy.get('.btn').click()        

})

Then('eu devo acessar meu dashboard',()=>{
    
})
