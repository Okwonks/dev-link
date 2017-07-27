import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),

actions: {
      signUp(){
      var controller = this.get('controller');
      var firstName = controller.firstName;
      var lastName = controller.lastName;
      var email = controller.email;
      var password = controller.password;
      var github = controller.github;
      var ref = this.get('firebaseApp').auth();

      ref.createUserWithEmailAndPassword(email, password).then((userData) => {
      var developer = this.store.createRecord('developer', {
      id: userData.uid,
      firstName: firstName,
      lastName: lastName,
      email: email,
      github:github
      });
      developer.save()
      .then(() =>{
      this.transitionTo('login');
      });
      });
    }
  }
});
