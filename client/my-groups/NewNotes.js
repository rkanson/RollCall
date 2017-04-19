Template.NewNotes.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('notes');
    var id = FlowRouter.getParam('id')
    self.subscribe('singleGroup', id);
  });
});

Template.NewNotes.events({
  'click .submitNotes': function() {
    var tNotes = document.getElementById('inputNotes').value;
    var tDate = new Date();
    var id = FlowRouter.getParam('id')
    Notes.insert({date: tDate, content: tNotes, group: id});
    document.getElementById('inputNotes').value = null;
  },
  'click .fa-minus-square': function() {
    Meteor.call('deleteNote', this._id);
  },
  'change #noteByDate': function() {
    var nId = $("#noteByDate").val();
    var id = FlowRouter.getParam('id');
    FlowRouter.go('/group/'+id+'/'+nId);
  }
});

Template.NewNotes.helpers({
  notes: () => {
    var id = FlowRouter.getParam('id')
    return Notes.find({group: id}).fetch().reverse();
  }
});
