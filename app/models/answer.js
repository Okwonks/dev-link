import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    content: DS.attr(),
    subject: DS.attr(),
    likes: DS.attr('number'),
    dislikes: DS.attr('number'),
    question: DS.belongsTo('question', {async: true})
});
