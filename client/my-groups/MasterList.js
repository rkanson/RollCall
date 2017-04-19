Template.MasterList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('groups');
  });
});

Template.MasterList.helpers({
  groups: ()=> {
    return Groups.find({inMasterList: true});
  },
  groupAdmin: function() {
    if(Meteor.userId() == this.administrator) {
      return true;
    }
    else {
      return false;
    }
  }
});

Template.MasterList.events({
  'click .toggle-menu': function() {
      Meteor.call('toggleMenuItem', this._id, this.inMasterList);
  }
});

Template.MasterListItem.onCreated(function() {
  this.editMode = new ReactiveVar(false);
});

Template.MasterListItem.helpers({
  updateGroupID: function() {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  }
});

Template.MasterListItem.events({
  'click .fa-trash': function() {
    Meteor.call('deleteGroup', this._id);
  },
  'click .fa-pencil': function(event, template) {
    template.editMode.set(!template.editMode.get());
  }
});
