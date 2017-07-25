import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    content: DS.attr(),
    subject: DS.attr(),
    likes: DS.attr(),
    dislikes: DS.attr(),
    question: DS.belongsTo('question', {async: true})
});
