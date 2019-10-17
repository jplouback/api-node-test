const Item = require('./item')

// Metodos
Item.methods(['get', 'post', 'put', 'delete'])

// retorna metodos post/put atualizados
Item.updateOptions( { new: true, runValidators: true } )

module.exports = Item