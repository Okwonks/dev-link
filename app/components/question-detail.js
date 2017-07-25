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
            console.log('components delete button is working')
        },
        like(answer){
            this.sendAction('like', answer)
            console.log('components like button is working')
        },
        dislike(answer){
            this.sendAction('dislike', answer)
            console.log('components  dislike is working')
        }
    }
});
