import Ember from 'ember';

export default Ember.Component.extend({
    addNewQuestion: true,
    actions: {
        questionFormShow(){
            this.set('addNewQuestion', false)
        },
        saveQuestion1(){
            var params = {
                author: this.get('author') ? this.get('author') : "Jon Doe",
                quiz: this.get('quiz') ? this.get('quiz') : "What's the meaning of Stone Henge?",
                content: this.get('content') ? this.get('content') : "This is a question I ask because I just really need to know the answer.",
                additionalContent: this.get('additionalContent') ? this.get('additionalContent') : "Say something..."
            };
            this.set('author', '');
            this.set('quiz', '');
            this.set('content', '');
            this.set('additionalContent', '');
            
            this.set('addNewQuestion', true);
            this.sendAction('saveQuestion2', params);
        }
    }
});
