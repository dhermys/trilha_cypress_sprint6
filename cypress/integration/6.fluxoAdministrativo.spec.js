/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a área administrativa da API Serverest', () => {

    context('CT01 - Validar rota de login com sucesso', () => {
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

        it('CT18 - Validar rota de lista de usuários', () => {
            Serverest.buscarUsuarios().then(res => {
                cy.contractValidation(res, '2.get-usuarios', 200)
                ValidaServerest.validarBuscaDeUsuarios(res)
            })
        })

        it('CT23 - Validar rota de criação de usuário com sucesso', () => {
            Serverest.postarUsuarioValido().then(res => {
                cy.contractValidation(res, '4.post-usuarios', 201)
                ValidaServerest.validarCadastroDeUsuarioComSucesso(res)
            })
        })

        it('CT30 - Validar rota de alteração de usuário com sucesso', () => {
            Serverest.alterarUsuarioCadastrado().then(res => {
                cy.contractValidation(res, '6.put-usuarios-by-id', 200)
                ValidaServerest.validarAlteracaoDeUsuarioComSucesso(res)
            })
        })

        it('CT38 - Validar rota de exclusão de usuário com sucesso', () => {
            Serverest.deletarUsuarioCadastrado().then(res => {
                cy.contractValidation(res, '5.delete-usuarios-by-id', 200)
                ValidaServerest.validarExclusaoDeProdutoComSucesso(res)
            })
        })

        it('CT38 - Validar rota de lista de produtos com sucesso', () => {
            Serverest.buscarProdutos().then(res => {
                cy.contractValidation(res, '7.get-produtos', 200)
                ValidaServerest.validarBuscaDeProdutos(res)
            })
        })

        it('CT45 - Validar rota de cadastro de produtos com sucesso', () => {
            Serverest.cadastrarProdutoComSucesso().then(res => {
                cy.contractValidation(res, '9.post-produtos', 201)
                ValidaServerest.validarCadastroDeProdutoComSucesso(res)
            })
        })

        it('CT53 - Validar rota de alteração de produto com sucesso', () => {
            Serverest.alterarProdutoCadastrado().then(res => {
                cy.contractValidation(res, '11.put-produtos-by-id', 200)
                ValidaServerest.validarAlteracaoDeProdutoComSucesso(res)
            })
        })

        it('CT62 - Validar rota de exclusão de produtos com sucesso', () => {
            Serverest.deletarProdutoCadastrado().then(res => {
                cy.contractValidation(res, '10.delete-produtos-by-id', 200)
                ValidaServerest.validarExclusaoDeProdutoComSucesso(res)
            })
        })

        it('CT68 - Validar rota de lista de carrinhos', () => {
            Serverest.buscarCarrinho().then(res => {
                cy.contractValidation(res, '12.get-carrinhos', 200)
                ValidaServerest.validarBuscaDeCarrinho(res)
            })
        })
    })
})

