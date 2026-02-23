import { elements as el } from "./elements"

class Carrinho{

    visitarPaginaHome(){
        cy.visit('http://localhost:3000')
    }

    clickBtnAdicionarCarrinho(){
        cy.get(el.adicionarCarrinho).click()
    }

    clickBtnCarrinho(){
        cy.get(el.carrinho).click() 
    }

    selecionarQtdProduto(){

    }

    limparCarrinho(){
        
    }

    validarCamposValorProduto(){
        //Campos de validacao
        cy.get().should('Valor total + Frete fixo: R$68.90')
        cy.get().should('Preço: R$49.00')
        cy.get()//total
    }
    
    //'Quantidade: 1'
    //'Total: R$49.00'
    //'Valor total do(s) Produto(s): R$49.00'
    //'Frete: R$19.90'
    //'Valor total + Frete fixo: R$68.90'

    validarCamposDadosCompra(){
        cy.get()//valor total
        cy.get() //frete
        cy.get()// valor total + frete

    }

    validarCampoQtdItnsProdutos(){
         cy.get('#cart-count')
          .should('be.visible')
          .and('have.text',1)
    }

}

export default new Carrinho()

