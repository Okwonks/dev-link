import Ember from 'ember';

export default Ember.Component.extend({
    sortBy: ['likes: desc'],
    sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
    actions: {
        delete(question){
        if(confirm('delete')){
            this.sendAction('destroyQuestion', question);
        }
        },
        destroyAnswer(answer){
            this.sendAction('destroyAnswer', answer);
        },
        like(answer){
            this.sendAction('like', answer)
        },
        dislike(answer){
            this.sendAction('dislike', answer)
        }
    }
});
