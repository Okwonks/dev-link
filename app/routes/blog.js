import Ember from 'ember';
export default Ember.Route.extend({
    model(){
        var url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=4e8acb59908c4382b657f635887fb46d'
        var url1 = 'https://newsapi.org/v1/articles?source=hacker-news&apiKey=4e8acb59908c4382b657f635887fb46d'
        return Ember.RSVP.hash({
             tech: Ember.$.getJSON(url1).then(function(res){
                return res.articles;
                }),
             crunch: Ember.$.getJSON(url).then(function(res){
                 return res.articles;
             })
        })

    }
});
