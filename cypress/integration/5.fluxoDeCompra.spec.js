/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre o fluxo de compra da API Serverest', () => {

    it('CT23 - Validar rota de criação de usuário com sucesso', () => {
        Serverest.postarUsuarioValido().then(res => {
            cy.contractValidation(res, '4.post-usuarios', 201)
            ValidaServerest.validarCadastroDeUsuarioComSucesso(res)
        })
    })

    context('CT01 - Validar rota de login com sucesso', () => {
        beforeEach('Logar', () => {
            Serverest.buscarUsuarioParaLogin()
            cy.get('@usuarioLogin').then(usuario => {
                Serverest.logar(usuario).then(res => {
                    cy.contractValidation(res, '1.Login', 200)
                    ValidaServerest.validarLoginComSucesso(res)
                    Serverest.salvarBearer(res)
                })
            })
        })

        it('CT42 - Validar rota de lista de produtos com sucesso', () => {
            Serverest.buscarProdutos().then(res => {
                cy.contractValidation(res, '7.get-produtos', 200)
                ValidaServerest.validarBuscaDeProdutos(res)
            })
        })

        it('CT73 - Validar rota de criação de carrinho com sucesso', () => {
            Serverest.buscarProdutoParaCarrinho()
            cy.get('@produtoCarrinho').then(produto => {
                Serverest.adicionarProdutoAoCarrinho(produto).then(res => {
                    cy.contractValidation(res, '14.post-carrinhos', 201)
                    ValidaServerest.validarCadastroDeCarrinhoComSucesso(res)
                })
            })
        })

        it('CT68 - Validar rota de lista de carrinhos', () => {
            Serverest.buscarCarrinho().then(res => {
                cy.contractValidation(res, '12.get-carrinhos', 200)
                ValidaServerest.validarBuscaDeCarrinho(res)
            })
        })

        it('CT84 - Validar rota de exclusão de carrinho ao concluir compra', () => {
            Serverest.concluirCompra().then(res => {
                cy.contractValidation(res, '15.delete-carrinhos-concluir-compra', 200)
                ValidaServerest.validarExclusaoDeCarrinhoComSucesso(res)
            })
        })

    })
})

