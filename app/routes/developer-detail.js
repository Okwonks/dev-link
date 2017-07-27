import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Route.extend({
    model(params) {
      return this.store.findRecord('developer',params.developer_id)
    }
// actions: {
//
//   developer.get('github')
// }  //   var key = "e7f7c50800fd4bd7620f8eaa9719708bcc8b1346"
  //   //var userName = this.store.findRecord('developer', params.github)
  //   var userName = developer.get('github')
  //
  //   console.log(userName);
  //   var url = 'https://api.github.com/users/'+ userName +'/repos?access_token=' + key;
  //  return Ember.RSVP.hash({
  //    repos: Ember.$.getJSON(url).then(function(responseJSON) {
  //    return responseJSON;
  //  })
  //  })
  //       return
  // }

});
