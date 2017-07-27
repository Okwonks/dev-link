import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete(answer){
            if(confirm('delete this answer?')){
                this.sendAction('destroyAnswer', answer);
            }
        },
        like(answer){
            this.sendAction('like', answer)
        },
        dislike(answer){
            this.sendAction('dislike', answer)
        }
    }
});
