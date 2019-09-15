const getSelectNodesQuery = col => `SELECT ${col} FROM nodes`;
const getAddNodeQuery = ({ ip, name, port, parentId = null }) => `INSERT INTO nodes (name, ip, port, parent_id) VALUES ('${name}', '${ip}', ${port}, ${parentId})`;
const getDeleteNodeQuery = id => `DELETE FROM nodes WHERE id = ${id}`;
const getUpdateNodeQuery = ({ id, ip: newIp, name: newName, port: newPort }) => `UPDATE nodes SET name = ${newName}, ip = ${newIp}, port = ${newPort} WHERE id = ${id}`;

export {
  getSelectNodesQuery,
  getAddNodeQuery,
  getDeleteNodeQuery,
  getUpdateNodeQuery,
};
