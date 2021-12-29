const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', {useNewUrlParser: true })
mongoose.Error.messages.general.required = "O atributo '{PATH}' e obrigatorio."
mongoose.Error.messages.Number.min = "O '{VALUE}' Informado e menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado e maior que o limite maximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' nao e valido para o atributo '{PATH}'."