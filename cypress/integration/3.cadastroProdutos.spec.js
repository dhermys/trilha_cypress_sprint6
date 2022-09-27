/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a rota /produtos da API Serverest', () => {

    it('CT42 - Validar rota de lista de produtos com sucesso', () => {
        Serverest.buscarProdutos().then(res => {
            cy.contractValidation(res, '7.get-produtos', 200)
            ValidaServerest.validarBuscaDeProdutos(res)
        })
    })

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

        it('CT45 - Validar rota de produtos com sucesso', () => {
            Serverest.cadastrarProdutoComSucesso().then(res => {
                cy.contractValidation(res, '9.post-produtos', 201)
                ValidaServerest.validarCadastroDeProdutoComSucesso(res)
            })
        })

        it('CT53 - Validar rota de exclusão de produtos com sucesso', () => {
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
    })
})