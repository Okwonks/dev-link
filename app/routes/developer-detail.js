import config from '../config/environment';
import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    var key = 'e7f7c50800fd4bd7620f8eaa9719708bcc8b1346';


    var url2 = 'https://api.github.com/users/d-kahara/repos?access_token=' + key;
    return Ember.RSVP.hash({
       repos: Ember.$.getJSON(url2).then(function(responseJSON) {
         return responseJSON;
       })
     }
   )},

  model2() {
    var url = 'https://api.github.com/users/d-kahara?access_token=e7f7c50800fd4bd7620f8eaa9719708bcc8b1346';
    return Ember.RSVP.hash({
        users: Ember.$.getJSON(url2).then(function(responseJSON) {
        return responseJSON;

      })
  }
)}
});
