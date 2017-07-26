//import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var key = "e7f7c50800fd4bd7620f8eaa9719708bcc8b1346"
    var userName = "d-kahara"
    var url = 'https://api.github.com/users/'+ userName +'/repos?access_token=' + key;
        return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON;

      })
  }

});
