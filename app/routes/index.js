import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      developers: this.store.query('developer', {
        orderBy: 'github',
        limitToFirst: 6
      }),
      questions: this.store.query('question', {
          orderBy: 'author',
          limitToLast: 4
      })
    })
  }
});
