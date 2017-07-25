import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    quiz: DS.attr(), 
    content:  DS.attr(),
    additionalContent: DS.attr(),
    likes: DS.attr('number'),
    dislikes: DS.attr('number'),
    answers: DS.hasMany('answer', {async: true})
});
