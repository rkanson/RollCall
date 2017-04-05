Template.Groups.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('groups');
  });
});

Template.Groups.helpers({
  groups: ()=> {
    return Groups.find({});
  }
});
