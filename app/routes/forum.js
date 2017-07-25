import Ember from 'ember';

export default Ember.Route.extend({
    sortBy: ['likes: desc'],
    sortedQuestions: Ember.computed.sort('model.questions', 'sortBy'),
    //my model hook here
    model(){
        return Ember.RSVP.hash({
            questions: this.store.findAll('question'),
            answers: this.store.findAll('answer')
        }) 
    },
    actions: {
        saveQuestion3(params){
            var newQuestion = this.store.createRecord('question', params);
            newQuestion.save();
            this.transitionTo('forum');
        },
        like(question){
            var currentLikes = question.get('likes');
            var totalLikes = (currentLikes += 1);
            question.setProperties({
                likes: totalLikes
            });
            question.save(); 
        },
        dislike(question){
            var currentLikes = question.get('dislikes');
            var totalLikes = (currentLikes += 1);
            question.setProperties({
                dislikes: totalLikes
            });
            question.save(); 
        }
    }
});
