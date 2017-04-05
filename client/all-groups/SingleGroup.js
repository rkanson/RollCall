Template.SingleGroup.events({
  'click .toggle-menu': function() {
      Meteor.call('toggleMenuItem', this._id, this.inMasterList);
  },
  'click .fa-trash': function() {
    Meteor.call('deleteGroup', this._id);
  }
});
