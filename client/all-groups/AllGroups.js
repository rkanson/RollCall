Template.AllGroups.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('groups');
  });
});

Template.AllGroups.helpers({
  groups: ()=> {
    return Groups.find({});
  }
});
