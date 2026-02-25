# language: pt
Funcionalidade: Adicionar Produto ao Carrinho

  Como cliente da loja
  Quero adicionar produtos ao carrinho
  Para revisar os dados antes da compra
      
Funcionalidade: Gerenciamento do Carrinho de Compras

  Cenário: Adicionar produto ao carrinho com sucesso
    Dado que estou na página inicial da loja
    Quando adiciono o produto "Na minha máquina funciona" ao carrinho
    E acesso a página do carrinho
    Então devo visualizar os detalhes do produto e os cálculos corretos:
      | produto      | Moletom com capuz "Na minha máquina funciona" |
      | preco        | Preço: R$59.00                                |
      | quantidade   | Quantidade: 1                                 |
      | total_item   | Total: R$59.00                                |
      | total_prod   | Valor total do(s) Produto(s): R$59.00         |
      | frete        | Frete: R$19.90                                |
      | total_final  | Valor total + Frete fixo: R$78.90             |
    E a URL deve ser "http://localhost:3000/cart.html"


 Esquema do Cenário: Adicionar múltiplos produtos ao carrinho

    Dado que estou na página inicial da loja
    Quando adiciono o produto "<produto>" com quantidade "<quantidade>"
    E acesso o carrinho
    Então devo visualizar o nome do produto "<produto>"
    E devo visualizar a quantidade "<quantidade>"
    E devo visualizar o valor unitário "<precoUnitario>"
    E devo visualizar o valor total do produto "<totalProduto>"
    
  Exemplos:
    | produto                                                     | quantidade | precoUnitario | totalProduto |
    | Moletom com capuz "Na minha máquina funciona"               | 1          | R$59.00       | R$59.00      |
    | Moletom com capuz "Se você acha que nada é impossível..."   | 1          | R$59.00       | R$59.00      |


 Esquema do Cenário: Incrementar múltiplos itens no Cart Counter

    Dado que estou na página inicial da loja
    Quando adiciono o produto "<produto>" com quantidade "<quantidade>"
    E acesso o carrinho
    Então devo visualizar o nome do produto "<produto>"
    E devo visualizar a quantidade "<quantidade>"
    E devo visualizar o valor unitário "<precoUnitario>"
    E devo visualizar o valor total do produto "<totalProduto>"
    E devo visualizar "<cartCounter>" com a im=ncremetacao correta
    
  Exemplos:
    | produto                                                     | quantidade | precoUnitario | totalProduto | cartCounter |
    | Moletom com capuz "Na minha máquina funciona"               | 1          | R$59.00       | R$59.00      |      1      |
    | Moletom com capuz "Se você acha que nada é impossível..."   | 1          | R$59.00       | R$59.00      |      2      |
    | Moletom com capuz "Se você acha que nada é impossível..."   | 1          | R$59.00       | R$59.00      |      3      |


  Esquema do Cenário: Validar cálculos e frete no carrinho de compras

    Dado que estou na página inicial da loja
    Quando adiciono o produto "<produto>" com quantidade "<quantidade>"
    E acesso a página do carrinho
    Então devo visualizar o nome do produto "<produto>"
    E a quantidade deve ser "<quantidade>"
    E o valor unitário deve ser "<precoUnitario>"
    E o valor total do item deve ser "<totalItem>"
    E o subtotal dos produtos deve ser "<subtotal>"
    E o valor do frete deve ser "<frete>"
    E o valor total final com frete deve ser "<totalFinal>"

    Exemplos:
    | produto                                     | quantidade | precoUnitario | totalItem | subtotal | frete   | totalFinal |
    | "Moletom Na minha máquina funciona"         | 1          | R$59.00       | R$59.00   | R$59.00  | R$19.90 | R$78.90    |
    | "Moletom Se você acha que nada é..."        | 2          | R$59.00       | R$118.00  | R$118.00 | R$19.90 | R$137.90   |


  Esquema do Cenário: Remover produtos do carrinho de compras

    Dado que estou na página inicial da loja
    Quando adiciono o produto "<produto>" com quantidade "<quantidade>"
    E acesso a página do carrinho
    E devo visualizar o nome do produto "<produto>"
    Então devo poder remover o produto do carrinho
    E devo poder visualizar o "<textInformatico>"

    Exemplos:
    | produto                                     | textInformatico             | 
    | "Moletom Na minha máquina funciona"         | "Seu carrinho está vazio."  | 
   



