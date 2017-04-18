Template.NewGroup.events({
  'click .fa-close': function() {
    Session.set('newGroup', false);
  }
});
