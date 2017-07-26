import Ember from 'ember';

export default Ember.Component.extend({
  modalIsOpen: false,//this opens the modal by ember which has a slight error
  newDeveloper: false,//Once the modal can work, this won't be needed.
  actions: {
    showDeveloperForm() {
      this.set('modalIsOpen', true);
    //   Ember.$('.modal').modal(); //this is meant to trigger the modal by materialize using jquery
    this.set('newDeveloper', true);
    },
    cancelForm() {
        this.set('newDeveloper', false);
    },

    saveDeveloper() {
      var params = {
        firstName: this.get('firstName') ? this.get('firstName') : "Anonymous", //puttin the code after the question mark allows the field to be left empty.
        lastName: this.get('lastName') ? this.get('lastName') : "Doe",
        email: this.get('email') ? this.get('email') : "email@address.com",
        github: this.get('github') ? this.get('github') : "undefined"
      };
      /** This will return the fields to empty **/
      this.set('firstName', '');
      this.set('lastName', '');
      this.set('email', '');
      this.set('github', '');
      
      this.set('newDeveloper', false);
      this.sendAction('saveDeveloper', params);
    }
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> d2b9ac79051ffdb4bca3be3da0f7ce72c7ab3e28
