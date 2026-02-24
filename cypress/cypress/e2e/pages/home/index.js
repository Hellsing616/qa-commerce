import { elements as el } from "./elements"

class Home {

      clickBtnAdicionarCarrinho(){

        cy.get(el.adicionarCarrinho).click()
                      
    }
      
    selecionarQtdProtudoCarrinho(){
        cy.get(el.selecionarQtdProduto).type('1')
    }
}

export default new Home()