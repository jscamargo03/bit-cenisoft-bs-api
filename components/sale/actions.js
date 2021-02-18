const Sale = require('./model')

const createSale = async (req, res) => {
    const newSale = new Sale(req.body)
    await newSale.save()
        .then((SaleSaved) => {
            res.status(201).send(SaleSaved)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
}

const getSale = async (req, res) => {
    const params = req.params;
    const saleId = params.id;
    await Sale.findById(saleId)
        .then((sale) => res.status(200).send(sale))
        .catch(() => response.status(404).send({}))
}

const getSales = async (req, res) => {
    await Sale.find({})
        .then((sales) => res.status(200).send(sales))
        .catch((error) => response.status(404).send(error))
}

const updateSale = async (req, res) => {
    const body = req.body;
    const saleId = req.params.id;
    await Sale.updateOne({ _id: saleId }, body)
        .then((client) => res.status(200).send(client))
        .catch((error) => res.status(500).send(error))
}

const deleteSale = async (req, res) => {
    const params = req.params;
    const saleId = params.id;
    await Sale.deleteOne({ _id: saleId })
        .then(() => {
            const response = {
                message: "Sale successfully deleted",
                id: saleId
            };
            res.status(200).send(response)
        })
        .catch((error) => res.status(500).send(error))
}

module.exports = { createSale, getSale, getSales, updateSale, deleteSale }
