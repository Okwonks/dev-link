import Ember from 'ember';

export default Ember.Component.extend({
    updateQuestion: true,

    actions: {
        updateQuestion(){
             this.set('updateQuestion', false);
        },
            update(question){
                var params = {
                author: this.get('author'),
                quiz: this.get('quiz'),
                content: this.get('content'),
                additionalContent: this.get('additionalContent')
            };
            this.set('updateQuestion', true);
            this.sendAction('update',question, params);
            }
        }
});
