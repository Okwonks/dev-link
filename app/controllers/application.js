import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveDeveloper(params) {
      var newDeveloper = this.store.createRecord('developer', params);
      newDeveloper.save();
      this.transitionTo('developer');
    }
  }
});
