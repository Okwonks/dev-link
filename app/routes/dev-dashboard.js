import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('developer', params.developer_id);
  },
  editDevDetails: false,
  actions: {
    editDevDetails() {
      this.set('editDevDetails', true);
    },
    saveChanges() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        github: this.get('github'),
        password: this.get('password')
      };
      this.set('editDevDetails', false);
      this.sendAction('update', rental, params);
    }
  }
});
