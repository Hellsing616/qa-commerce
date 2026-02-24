import { elements as el } from "./elements"

class Menu{

    visitarHomePage(){
        cy.visit('http://localhost:3000/')
    }

    clicarLinkHome(){
        cy.get(':nth-child(1) > .nav-link').click
    }

    clicarLinkCarrinho(){
        cy.get(':nth-child(2) > .nav-link').click
    }
    
    clicarLinkMinhaConta(){
        cy.get('#account-link').click
    }
}


export default new Menu()