Accounts.onLogin(function() {
  FlowRouter.go('all-groups');
});

Accounts.onLogout(function() {
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context, redirect) {
  if (!Meteor.userId()) {
    FlowRouter.go('home')
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('all-groups');
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/all-groups', {
  name: 'all-groups',
  action() {
    BlazeLayout.render('MainLayout', {main: 'AllGroups'});
  }
});

FlowRouter.route('/group/:id', {
  name: 'group',
  action() {
    BlazeLayout.render('MainLayout', {main: 'GroupDetail'});
  }
});

FlowRouter.route('/my-groups', {
  name: 'my-groups',
  action() {
    BlazeLayout.render('MainLayout', {main: 'MasterList'});
  }
});
