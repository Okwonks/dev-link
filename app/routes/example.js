import Ember from 'ember';
import ModalRouteMixin from 'ember-routable-modal/mixins/route';

export default Ember.Route.extend(ModalRouteMixin, {
    // model() {
    //     return this.store.findAll('developer');
    // },
  actions: {
    saveDeveloper() {
      var params = {
        firstName: this.get('firstName') ? this.get('firstName') : "Anonymous",
        lastName: this.get('lastName') ? this.get('lastName') : "Doe",
        email: this.get('email') ? this.get('email') : "email@address.com",
        github: this.get('github') ? this.get('github') : "undefined"
      };
    this.set('firstName', '');
    this.set('lastName', '');
    this.set('email', '');
    this.set('github', '');

    var newDeveloper = this.store.createRecord('developer', params);
    newDeveloper.save();
    }
  }
});
