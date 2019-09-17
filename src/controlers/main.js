import knex from 'knex';
import { databaseConfig } from '../config';

const tableName = 'nodes';
const db = knex(databaseConfig);

const getAllNodes = (req, res) => {
  db.select('*').from(tableName)
    .then((items) => {
      if (items.length) {
        res.json({ data: items, dbError: false });
      } else {
        res.json({ dataExists: 'false', dbError: false });
      }
    })
    .catch(() => res.status(400).json({ dbError: true }));
};

const getNodeById = (req, res) => {
  db(tableName).where({ id: req.params.id }).select('*')
    .then((items) => {
      if (items.length) {
        res.json({ data: items[0], dbError: false });
      } else {
        res.json({ dataExists: false, dbError: false });
      }
    })
    .catch(() => res.status(400).json({ dbError: true }));
};

const getNodeByName = (req, res) => {
  db(tableName).where({ name: req.params.name }).select('*')
    .then((items) => {
      if (items.length) {
        res.json({ data: items[0], dbError: false });
      } else {
        res.json({ dataExists: false, dbError: false });
      }
    })
    .catch(() => res.status(400).json({ dbError: true }));
};

const postNode = (req, res) => {
  const {
    ip, port, name, parentId,
  } = req.body;

  db(tableName).insert({
    ip, port, name, parent_id: parentId,
  })
    .returning('*')
    .then(() => res.status(302).json({ dbError: false }))
    .catch(() => res.status(400).json({ dbError: true }));
};

const putNode = (req, res) => {
  const {
    id, port, name, ip,
  } = req.body;
  db(tableName).where({ id }).update({
    port, name, ip,
  })
    .returning('*')
    .then(() => {
      res.status(204);
      res.json({ dbError: false });
    })
    .catch(() => res.status(400).json({ dbError: true }));
};

const deleteNode = (req, res) => {
  const { id } = req.body;
  db(tableName).where({ id }).del()
    .then(() => {
      res.status(204);
      res.json({ dbError: false });
    })
    .catch(() => res.status(400).json({ dbError: true }));
};

export {
  getAllNodes,
  getNodeById,
  getNodeByName,
  postNode,
  putNode,
  deleteNode,
};
