import { elements as el } from "./elements"

class Carrinho{

    visitarPaginaCarrinho(){
        cy.visit('http://localhost:3000/cart.html')
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
        cy.get(el.txtPreco)
        cy.get(el.txtQtdoUnitario)
        cy.get(el.txtvalorTotal)
    }
       
    validarCamposDadosCompra(){
        cy.get(el.txtValorTotalProduto)//valor total
        cy.get(el.txtFrete) //frete
        cy.get(el.txtValorTotalFrete)// valor total + frete

    }

    validarCampoQtdItnsProdutos(){
         cy.get('#cart-count')
          .should('be.visible')
          .and('have.text',1)
    }

}

export default new Carrinho()

