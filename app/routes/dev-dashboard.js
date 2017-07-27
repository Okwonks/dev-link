import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('developer', params.developer_id);
  },
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental) {
      var params = {
        ownwer: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude')
      };
      this.set('updateRentalForm',false);
      this.sendAction('update', rental, params);
    }
  }
});
