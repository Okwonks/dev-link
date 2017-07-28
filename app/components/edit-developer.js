import Ember from 'ember';

export default Ember.Component.extend({
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
            this.sendAction('saveChanges', params);
        },
        cancel() {
            this.set('editDevDetails', false);
        }
    }
});
