import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Groups = new Mongo.Collection('groups');

Groups.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

GroupSchema = new SimpleSchema({
  name: {
      type: String,
      label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  administrator: {
    type: String,
    label: "Group Administrator",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  inMasterList: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  toggleMenuItem: function(id, currentState) {
    Groups.update(id, {
      $set: {
        inMasterList: !currentState
      }
    });
  },
  deleteGroup: function(id) {
    Groups.remove(id);
  }
});

Groups.attachSchema(GroupSchema);
