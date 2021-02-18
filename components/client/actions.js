const Client = require('./model')

const createClient = (req, res) => {
  const newClient = new Client(req.body)
  newClient.save((error, clientSaved) => {
    if (error) {
      console.error('Error saving client ', error)
      res.status(500).send(error)
    } else {
      res.status(201).send(clientSaved)
    }
  })
}

const getClient = async (req, res) => {
  const params = req.params;
  const clientId = params.id;
  await Client.findById(clientId)
    .then((client) => res.status(200).send(client))
    .catch(() => response.status(404).send({}))
}

const updateClient = async (req, res) => {
  const body = req.body;
  const clientId = req.params.id;
  await Client.updateOne({ _id: req.params.id }, req.body)
  .then((client) => res.status(200).send(client))
  .catch((error) => res.status(500).send(error))
}

const deleteClient = async (req, res) => {
  const params = req.params;
  const clientId = params.id;
  await Client.deleteOne({ _id: clientId })
    .then(() => {
      const response = {
        message: "Client successfully deleted",
        id: clientId
      };
      res.status(200).send(response)
    })
    .catch((error) => res.status(500).send(error))
}

module.exports = { createClient, getClient, updateClient, deleteClient }
