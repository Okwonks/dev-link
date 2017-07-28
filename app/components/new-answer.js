import Ember from 'ember';

export default Ember.Component.extend({
    /** This is in charge of the new */
    addNewAsnwer: false,
    actions: {
        answerFormShow(){
            this.set('addNewAnswer', true);
        },
        saveAnswer(){
            var params = {
                author: this.get('author') ? this.get('author') : "Anonymous",
                subject: this.get('subject') ? this.get('subject') : "No subject added",
                content: this.get('content') ? this.get('content') : "No content added",
                question: this.get('question')
            };
            this.set('author', '');
            this.set('subject', '');
            this.set('content', '');
            console.log('processing data');
            this.set('addNewAnswer', false);
            console.log('saving data');
            this.sendAction('saveAnswer', params);
        }
    }
});
