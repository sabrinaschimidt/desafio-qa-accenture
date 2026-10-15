# language: pt
Funcionalidade: Web Tables - Gestão Dinâmica de Registros

  Cenário: Criar e deletar 12 novos registros dinamicamente
    Dado que acesso a página de Web Tables
    Quando crio 12 novos registros na tabela de forma dinâmica
    Então a tabela deve conter todos os 12 novos registros
    Quando deleto todos os novos registros criados
    Então nenhum dos novos registros deve estar presente na tabela