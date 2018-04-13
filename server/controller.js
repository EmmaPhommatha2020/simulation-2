module.exports = {

  create: (req, res, next) => {
    const db = req.app.get('db');
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;

    db.createHouse([name, address, city, state, zip, img, mortgage, rent])
      .then((house) => res.status(200).send(house))
      .catch((err) => res.status(500).send("create--->", err));
  },


  read: (req, res, next) => {
    const db = req.app.get('db');

    db.readHouses()
      .then(houses => res.status(200).send(houses))
      .catch(() => res.status(500).send("getAll--->", err));
  },

  
  delete: (req, res, next) => {
    const db = req.app.get('db');
    const { params } = req;

    db.deleteHouse([params.id])
      .then((house) => res.status(200).send(house))
      .catch(() => res.status(500).send("delete--->", err));
  }
};