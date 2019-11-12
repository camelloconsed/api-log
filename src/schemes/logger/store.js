const schema = {
  user: { type: 'string', empty: false },
  idMachine: { type: 'string', empty: false },
  message: { type: 'string', empty: false },
  method: { type: 'string', empty: false },
  apiId: { type: 'string', empty: false },
  type: { type: 'string', empty: false },
  actionType: { type: 'string', empty: false },
};

export default schema;
