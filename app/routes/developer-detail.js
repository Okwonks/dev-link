import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
    var key = "e7f7c50800fd4bd7620f8eaa9719708bcc8b1346"
    var userName = "developer_id"
    var url = 'https://api.github.com/users/' + userName + '/repos?access_token=' + key;
    return Ember.RSVP.hash({
      redirectDeveloper: this.store.findRecord('developer', params.developer_id),
      findReposMethod: Ember.$.getJSON(url).then(function (responseJSON) {
        return responseJSON;
      })
    })
  }
});
