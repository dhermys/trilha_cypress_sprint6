/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a rota /login da API Serverest', () => {

    it('CT01 - Validar rota de login com sucesso', () => {
        Serverest.buscarUsuarioParaLogin()
        cy.get('@usuarioLogin').then(usuario => {
            Serverest.logar(usuario).then(res => {
                cy.contractValidation(res, '1.login', 200)
                ValidaServerest.validarLoginComSucesso(res)
                Serverest.salvarBearer(res)
            })
        })
    })

    it('CT02 - Validar rota de login email não cadastrado', () => {
        Serverest.logarUsuarioFalso().then(res => {
            cy.contractValidation(res, '1.login', 400)
            ValidaServerest.validarLoginSemSucesso(res)
        })
    })

    it('CT03 - Validar rota de login com senha incorreta', () => {
        Serverest.buscarUsuarioParaLoginComSenhaInvalida()
        cy.get('@usuarioLogin').then(usuario => {
            Serverest.logar(usuario).then(res => {
                cy.contractValidation(res, '1.login', 400)
                ValidaServerest.validarLoginSemSucesso(res)
            })
        })
    })
})