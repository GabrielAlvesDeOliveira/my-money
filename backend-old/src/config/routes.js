const express = require('express')
const auth = require('./auth')

module.exports = function(server){

    const protectApi = express.Router()
    server.use('/api', protectApi)

    protectApi.use(auth)

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectApi, '/billingCycles')

    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')

    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}