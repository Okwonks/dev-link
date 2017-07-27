import Ember from 'ember';



export default Ember.Route.extend({
    model: function (){
        return this.store.findAll('language');
    },
    actions: {
        upvote(language){
            var currentUpvotes = language.get('likes');
            var totalUpvotes = (currentUpvotes+=1);
            language.setProperties({
                likes: totalUpvotes
            });
            language.save();
        },
        downvote(language){
            var currentDownvotes = language.get('dislikes');
            var totalDownvotes = (currentDownvotes+=1);
            language.setProperties({
                dislikes: totalDownvotes
            });
            language.save();
        }
    }
});
