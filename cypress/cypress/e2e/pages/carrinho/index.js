class Carrinho{

    visitarPaginaHome(){
        cy.visit('http://localhost:3000')
    }

    clickBtnAdicionarCarrinho(){
        cy.get(':nth-child(4) > .card > .card-body > .btn').click()
    }

    clickBtnCarrinho(){
        cy.get(':nth-child(2) > .nav-link').click() 
    }

    selecionarQtdProduto(){

    }

   limparCarrinho(){
    
   }


}

