import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('developer');
    },
    actions: {
        saveDeveloper(params) {
            var newDeveloper = this.store.createRecord('developer', params);
            newDeveloper.save();
            this.transitionTo('developer');
        }
    }
});