/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre o fluxo de compra da API Serverest', () => {

    context('Deve realizar login de administrador com sucesso', () => {
        beforeEach('Logar', () => {
            Serverest.buscarAdministradorParaLogin()
            cy.get('@usuarioLogin').then(usuario => {
                Serverest.logar(usuario).then(res => {
                    cy.contractValidation(res, '1.Login', 200)
                    ValidaServerest.validarLoginComSucesso(res)
                    Serverest.salvarBearer(res)
                })
            })
        })

        it('Deve buscar todos os usuários cadastrados', () => {
            Serverest.buscarUsuarios().then(res => {
                cy.contractValidation(res, '2.get-usuarios', 200)
                ValidaServerest.validarBuscaDeUsuarios(res)
            })
        })

        it('Deve postar um novo usuário com sucesso', () => {
            Serverest.postarUsuarioValido().then(res => {
                cy.contractValidation(res, '4.post-usuarios', 201)
                ValidaServerest.validarCadastroDeUsuarioComSucesso(res)
            })
        })

        it('Deve alterar um usuário com sucesso', () => {
            Serverest.alterarUsuarioCadastrado().then(res => {
                cy.contractValidation(res, '6.put-usuarios-by-id', 200)
                ValidaServerest.validarAlteracaoDeUsuarioComSucesso(res)
            })
        })

        it('Deve deletar um usuário com sucesso', () => {
            Serverest.deletarUsuarioCadastrado().then(res => {
                cy.contractValidation(res, '5.delete-usuarios-by-id', 200)
                ValidaServerest.validarExclusaoDeProdutoComSucesso(res)
            })
        })

        it('Deve buscar todos os produtos cadastrados', () => {
            Serverest.buscarProdutos().then(res => {
                cy.contractValidation(res, '7.get-produtos', 200)
                ValidaServerest.validarBuscaDeProdutos(res)
            })
        })

        it('Deve postar um novo produto com sucesso', () => {
            Serverest.cadastrarProdutoComSucesso().then(res => {
                ValidaServerest.validarCadastroDeProdutoComSucesso(res)
            })
        })

        it('Deve alterar um produto com sucesso', () => {
            Serverest.alterarProdutoCadastrado().then(res => {
                cy.contractValidation(res, '11.put-produtos-by-id', 200)
                ValidaServerest.validarAlteracaoDeProdutoComSucesso(res)
            })
        })

        it('Deve deletar um produto com sucesso', () => {
            Serverest.deletarProdutoCadastrado().then(res => {
                cy.contractValidation(res, '10.delete-produtos-by-id', 200)
                ValidaServerest.validarExclusaoDeProdutoComSucesso(res)
            })
        })

        it('Deve buscar carrinho cadastrado', () => {
            Serverest.buscarCarrinho().then(res => {
                cy.contractValidation(res, '12.get-carrinhos', 200)
                ValidaServerest.validarBuscaDeCarrinho(res)
            })
        })
    })
})

