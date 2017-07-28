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
        image: this.get('image') ? this.get('image') : "https://dealmarkaz.pk/oc-content/themes/DealMarkaz/images/user-default-profile-pict.jpg",
        bio: this.get('bio') ? this.get('bio') : "No bio added yet.",
        email: this.get('email') ? this.get('email') : "email@address.com",
        github: this.get('github') ? this.get('github') : "undefined"
      };
      /** This will return the fields to empty **/
      this.set('firstName', '');
      this.set('lastName', '');
      this.set('email', '');
      this.set('github', '');
      this.set('image', '');
      this.set('bio', '');
      
      this.set('newDeveloper', false);
      this.sendAction('saveDeveloper', params);
    }
  }
});
