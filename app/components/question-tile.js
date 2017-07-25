import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        like(question){
            this.sendAction('like', question);
        },
        dislike(question){
            this.sendAction('dislike', question);
        }
    }
});
