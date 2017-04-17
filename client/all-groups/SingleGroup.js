Template.SingleGroup.onCreated(function() {
  this.editMode = new ReactiveVar(false);
})

Template.SingleGroup.events({
  'click .toggle-menu': function() {
      Meteor.call('toggleMenuItem', this._id, this.inMasterList);
  },
  'click .fa-trash': function() {
    Meteor.call('deleteGroup', this._id);
  },
  'click .fa-pencil': function(event, template) {
    template.editMode.set(!template.editMode.get());
  }
});

Template.SingleGroup.helpers({
  updateGroupID: function() {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  }
});
