# language: pt
Funcionalidade: Adicionar Produto ao Carrinho

  Como cliente da loja
  Quero adicionar produtos ao carrinho
  Para revisar os dados antes da compra
      
  Cenário: Adicionar produto ao carrinho com sucesso
    Dado que estou na página inicial da loja
    Quando adiciono o produto "Moletom com capuz Na minha máquina funciona" com quantidade "1"
    E acesso o carrinho
    Então devo visualizar o nome do produto "Moletom com capuz Na minha máquina funciona"
    E devo visualizar a quantidade "1"
    E devo visualizar o valor unitário "R$59,00"
    E devo visualizar o valor do frete "R$10,00"
    E devo visualizar o valor total "R$69,00"


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
   



