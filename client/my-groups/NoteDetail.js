Template.NoteDetail.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('notes');
  });
});

Template.NoteDetail.helpers({
  notes: () => {
    var gID = FlowRouter.getParam('group');
    var nID = FlowRouter.getParam('noteid');
    return Notes.find({group: gID, _id: nID});
  }
});

Template.NoteDetail.events({
  'click .fa-trash': function() {
    var nID = FlowRouter.getParam('noteid');
    console.log(nID);
    Meteor.call('deleteNote', nID);
  }
});
