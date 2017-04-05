Template.GroupDetail.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id')
    self.subscribe('singleGroup', id);
  });
});

Template.GroupDetail.helpers({
  group: ()=> {
    var id = FlowRouter.getParam('id')
    return Groups.findOne({_id: id});
  }
});
