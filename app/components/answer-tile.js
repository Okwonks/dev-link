import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete(answer){
            if(confirm('delete this answer?')){
                this.sendAction('destroyAnswer', answer);
            }
        },
        like(answer){
            console.log('like')
            this.sendAction('like', answer)
        },
        dislike(answer){
            console.log('dislike')
            this.sendAction('dislike', answer)
        }
    }
});
