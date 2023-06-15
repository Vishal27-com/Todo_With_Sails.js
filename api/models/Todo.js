/**
 * Todo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const Todo={
  attributes: {
    title:{type:'string',required:true},
    completed:{type:'boolean',defaultsTo:false},
    description:{type:'string',defaultsTo:'No Description'}
}
};

module.exports = Todo