const dbName = 'inobitek_test';

const getTableData = (req, res, db) => {
  db.select('*').from(dbName)
    .then((items) => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const postTableData = (req, res, db) => {
  const {
    first, last, email, phone, location, hobby,
  } = req.body;
  const added = new Date();
  db(dbName).insert({
    first, last, email, phone, location, hobby, added,
  })
    .returning('*')
    .then((item) => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const putTableData = (req, res, db) => {
  const {
    id, first, last, email, phone, location, hobby,
  } = req.body;
  db(dbName).where({ id }).update({
    first, last, email, phone, location, hobby,
  })
    .returning('*')
    .then((item) => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const deleteTableData = (req, res, db) => {
  const { id } = req.body;
  db(dbName).where({ id }).del()
    .then(() => {
      res.json({ delete: 'true' });
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

export {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData,
};
