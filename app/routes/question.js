import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return this.store.findRecord('question', params.question_id)
    },
    actions: {
        update(question, params){
            //update method here 
            //debugging
            //debugger;
            Object.keys(params).forEach(function (key){
                if(params[key] !== undefined){
                    question.set(key, params[key]);
                }
            });
            question.save();
            this.transitionTo('forum');
        },
        saveAnswer(params){
            var newAnswer = this.store.createRecord('answer',params);
            var question = params.question;
            question.get('answers').addObject(newAnswer);
            newAnswer.save().then(function(){
                return question.save();
            });
            this.transitionTo('question', question);
        },
        destroyQuestion(question){
            var answer_deletions = question.get('answers').map(function(answer){
                return answer.destroyRecord();
            });
            Ember.RSVP.all(answer_deletions).then(function(){
                return question.destroyRecord();
            });
            this.transitionTo('forum');
        },
        destroyAnswer(answer){
            console.log('question route delete button is working')
            answer.destroyRecord();
        },
        like(answer){
            var currentLikes = answer.get('likes');
            var totalLikes = (currentLikes+=1);
            answer.setProperties({
                likes: totalLikes
            });
            answer.save();
        },
        dislike(answer){
            var currentDislikes = answer.get('dislikes');
            var totalDislikes = (currentDislikes+=1);
            answer.setProperties({
                dislikes: totalDislikes
            });
            answer.save();
        }
    }
});
