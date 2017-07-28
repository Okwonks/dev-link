import Ember from 'ember';

export default Ember.Route.extend({
  name: Ember.computed('model.firstName', 'model.lastName', function() {
        return this.get('model.firstName') + ' ' + this.get('model.lastName');
    }),
  model: function (params) {
    return this.store.find('developer', params.developer_id);
  },


});
