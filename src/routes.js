import * as main from './controlers/main';

/**
 * @swagger
 * definitions:
 *  NewNode:
 *    type: object
 *    required:
 *      - port
 *      - ip
 *      - name
 *    properties:
 *      port:
 *        type: integer
 *      name:
 *        type: string
 *      ip:
 *        type: string
 *      parentId:
 *        type: integer
 *        nullable: true
 *  Node:
 *    allOf:
 *      - $ref: '#/definitions/NewNode'
 *      - properties:
 *         id:
 *           type: integer
 *  UpdateNode:
 *    type: object
 *    required:
 *      - id
 *    properties:
 *      port:
 *        type: integer
 *      name:
 *        type: string
 *      ip:
 *        type: string
 *      id:
 *        type: integer
 *  Error:
 *    type: object
 *    properties:
 *      error:
 *        type: string
 */

export const addRoutes = (app) => {
  /**
   * @swagger
   * /nodes:
   *  get:
   *    tags:
   *      - Nodes
   *    summary: "Get nodes by parent node id"
   *    parameters:
   *       - name: parentId
   *         description: Parent node id
   *         in: query
   *         required: false
   *         type: string
   *         allowEmptyValue: true
   *    responses:
   *       200:
   *         description: Success
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/Node'
   */
  app.get('/nodes', (req, res) => main.getNodesByParentId(req, res));

  /**
   * @swagger
   * /nodes:
   *  post:
   *    tags:
   *      - Nodes
   *    summary: "Add a new node"
   *    parameters:
   *    - in: body
   *      name: body
   *      required: true
   *      schema:
   *        $ref: '#/definitions/NewNode'
   *    responses:
   *       200:
   *         description: Created node
   *         schema:
   *           $ref: '#/definitions/Node'
   *       400:
   *         description: Bad request data
   *         schema:
   *           $ref: '#/definitions/Error'
   *       500:
   *         description: Internal error
   *         schema:
   *           $ref: '#/definitions/Error'
   */
  app.post('/nodes', (req, res) => main.addNode(req, res));

  /**
   * @swagger
   * /nodes:
   *  put:
   *    tags:
   *      - Nodes
   *    summary: "Update existing node"
   *    parameters:
   *    - in: body
   *      name: body
   *      required: true
   *      schema:
   *        $ref: '#/definitions/UpdateNode'
   *    responses:
   *       200:
   *         description: Updated node
   *         schema:
   *           $ref: '#/definitions/Node'
   *       400:
   *         description: Bad request data
   *         schema:
   *           $ref: '#/definitions/Error'
   *       500:
   *         description: Internal error
   *         schema:
   *           $ref: '#/definitions/Error'
   */
  app.put('/nodes', (req, res) => main.updateNode(req, res));

  /**
   * @swagger
   * /nodes:
   *  delete:
   *    tags:
   *      - Nodes
   *    summary: "Delete node"
   *    parameters:
   *    - in: body
   *      name: body
   *      required: true
   *      schema:
   *        type: object
   *        properties:
   *          id:
   *            type: integer
   *    responses:
   *       200:
   *         description: Deleted node id
   *         schema:
   *           type: object
   *           properties:
   *             id:
   *               type: integer
   */
  app.delete('/nodes', (req, res) => main.deleteNode(req, res));

  app.get('/log', (req, res) => main.getLog(req, res));
};
