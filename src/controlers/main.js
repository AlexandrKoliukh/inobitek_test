const tableName = 'nodes';

const getData = (req, res, db) => {
  db.select('*').from(tableName)
    .then((items) => {
      if (items.length) {
        res.json({ data: items });
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch(() => res.status(400).json({ dbError: true }));
};

const postData = (req, res, db) => {
  const {
    ip, port, name, parentId,
  } = req.body;
  db(tableName).insert({
    ip, port, name, parent_id: parentId,
  })
    .returning('*')
    .then((item) => {
      res.json(item);
    })
    .catch(() => res.status(400).json({ dbError: true }));
};

const putData = (req, res, db) => {
  const {
    id, port, name, ip,
  } = req.body;
  db(tableName).where({ id }).update({
    port, name, ip,
  })
    .returning('*')
    .then((item) => {
      res.json(item);
    })
    .catch(() => res.status(400).json({ dbError: true }));
};

const deleteData = (req, res, db) => {
  const { id } = req.body;
  db(tableName).where({ id }).del()
    .then(() => {
      res.json({ delete: true });
    })
    .catch(() => res.status(400).json({ dbError: true }));
};

export {
  getData,
  postData,
  putData,
  deleteData,
};
