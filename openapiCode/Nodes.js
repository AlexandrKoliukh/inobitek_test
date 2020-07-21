/** @module Nodes */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get nodes by parent node id
 *
 * @param {object} options Optional options
 * @param {string} [options.parentId] Parent node id
 * @return {Promise<module:types.Node[]>} Success
 */
export function getNodes(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      parentId: options.parentId
    }
  }
  return gateway.request(getNodesOperation, parameters)
}

/**
 * Add a new node
 *
 * @param {module:types.NewNode} body
 * @return {Promise<module:types.Node>} Created node
 */
export function postNodes(body) {
  const parameters = {
    body: {
      body
    }
  }
  return gateway.request(postNodesOperation, parameters)
}

const getNodesOperation = {
  path: '/nodes',
  method: 'get'
}

const postNodesOperation = {
  path: '/nodes',
  method: 'post'
}
