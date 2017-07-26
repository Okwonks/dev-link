import Ember from 'ember';

export default Ember.Route.extend({
    age: 30,
    actions: {
        pressed: function (){
            Ember.$('#test').fadeOut('slow');
        }
    }
});
