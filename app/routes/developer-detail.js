import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Route.extend({

  model(params) {
    var usr = "d-kahara"
    return Ember.RSVP.hash({
      developer: this.store.findRecord('developer', params.developer_id),
      repos: Ember.$.getJSON('https://api.github.com/users/' + usr + '/repos?access_token=' + "e7f7c50800fd4bd7620f8eaa9719708bcc8b1346").then(function(reposs) {
        console.log(reposs);
        return reposs
      })

    })
  }

});
