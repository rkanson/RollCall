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
  },
  deleteNote: function(id) {
    Notes.remove(id);
  }
});
