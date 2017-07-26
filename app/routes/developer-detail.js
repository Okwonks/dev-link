import Ember from 'ember';

export default Ember.Route.extend({
    modal(params) {
        return this.store.findRecord('developer', params.developer_id);
    }
});
