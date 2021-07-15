const MacAddressValidation = (req, res, next) => {
  if (!req.body.macaddress) {
    return res.status(400).json({ error: 'macaddress é obrigatório' })
  }
  return next()
}

module.exports = MacAddressValidation
