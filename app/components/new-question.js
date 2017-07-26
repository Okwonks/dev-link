import Ember from 'ember';

export default Ember.Component.extend({
    addNewQuestion: true,
    actions: {
        questionFormShow(){
            this.set('addNewQuestion', false)
        },
        saveQuestion1(){
            var params = {
                author: this.get('author'),
                quiz: this.get('quiz'),
                content: this.get('content'),
                additionalContent: this.get('additionalContent')
            };
            this.set('addNewQuestion', true);
            this.sendAction('saveQuestion2', params);
        }
    }
});
