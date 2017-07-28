import Ember from 'ember';

export default Ember.Component.extend({
    heading: Ember.computed('question.author', 'question.quiz', function() {
        return this.get('question.quiz') + ' - by ' + this.get('question.author');
    }),
    actions: {
        like(question){
            this.sendAction('like', question);
        },
        dislike(question){
            this.sendAction('dislike', question);
        }
    }
});