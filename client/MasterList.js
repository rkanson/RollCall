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
