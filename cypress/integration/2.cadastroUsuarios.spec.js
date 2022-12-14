/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a rota /usuarios da API Serverest', () => {

    it('CT18 - Validar rota de lista de usuários', () => {
        Serverest.buscarUsuarios().then(res => {
            cy.contractValidation(res, '2.get-usuarios', 200)
            ValidaServerest.validarBuscaDeUsuarios(res)
        })
    })

    it('CT20 - Validar rota de busca de usuário por id com sucesso', () => {
        Serverest.buscarUsuarioPorId().then(res => {
            cy.contractValidation(res, '3.get-usuarios-by-id', 200)
            ValidaServerest.validarBuscaDeUsuariosPorId(res)
        })
    })

    it('CT23 - Validar rota de criação de usuário com sucesso', () => {
        Serverest.postarUsuarioValido().then(res => {
            cy.contractValidation(res, '4.post-usuarios', 201)
            ValidaServerest.validarCadastroDeUsuarioComSucesso(res)
        })
    })

    it('CT29 - Validar rota de não criação de usuário com email já cadastrado', () => {
        cy.postarUsuarioSemSucesso().then(res => {
            cy.contractValidation(res, '4.post-usuarios', 400)
            ValidaServerest.validarCadastroDeUsuarioSemSucesso(res)
        })
    })

    it('CT30 - Validar rota de alteração de usuário com sucesso', () => {
        Serverest.alterarUsuarioCadastrado().then(res => {
            cy.contractValidation(res, '6.put-usuarios-by-id', 200)
            ValidaServerest.validarAlteracaoDeUsuarioComSucesso(res)
        })
    })

    it('CT31 - Validar rota de criação de usuário ao tentar alterar usuário inexistente', () => {
        Serverest.cadastrarUsuarioAoTentarAlterar().then(res => {
            cy.contractValidation(res, '6.put-usuarios-by-id', 201)
            ValidaServerest.validarCadastroDeUsuarioComSucesso(res)
        })
    })

    it('CT38 - Validar rota de exclusão de usuário com sucesso', () => {
        Serverest.deletarUsuarioCadastrado().then(res => {
            cy.contractValidation(res, '5.delete-usuarios-by-id', 200)
            ValidaServerest.validarExclusaoDeUsuarioComSucesso(res)
        })
    })
})