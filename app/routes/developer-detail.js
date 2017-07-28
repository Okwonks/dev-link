import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Route.extend({
    model(params) {
      return this.store.findRecord('developer',params.developer_id)
    },

      showClicked: false,
 actions: {
   getRepos(model) {
     this.set('showClicked', true);
     var key = "e7f7c50800fd4bd7620f8eaa9719708bcc8b1346"
      var userName = model.get('github')
      console.log(userName);
     var url = 'https://api.github.com/users/' + userName + '/repos?access_token=' + key;
     console.log(url);
     return Ember.$.getJSON(url).then(function(reposs){
        reposs.forEach(function(repos) {
          console.log(repos.name);
          return repos
  });
     })
   }
  }
});
