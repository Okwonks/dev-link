import Ember from 'ember';

export default Ember.Component.extend({
    name: Ember.computed('developer.firstName', 'developer.lastName', function() {
        return this.get('developer.firstName') + ' ' + this.get('developer.lastName');
    })
});
