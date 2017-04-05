Template.MasterList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('groups');
  });
});

Template.MasterList.helpers({
  groups: ()=> {
    return Groups.find({inMasterList: true});
  }
});

Template.MasterList.events({
  'click .toggle-menu': function() {
      Meteor.call('toggleMenuItem', this._id, this.inMasterList);
  }
});
