import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function () {
      var controller = this.get('controller');
      var email = controller.get('email');
      var password = controller.get('password');
      this.get('session').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(function () {
        this.transitionTo('protected');
      }.bind(this));
      this.set('email', '');
      this.set('password', '');
    }
  }
});
