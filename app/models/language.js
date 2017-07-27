import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    shortName: DS.attr(),
    rank: DS.attr(),
    description: DS.attr(),
    year: DS.attr(),
    linkToResources: DS.attr(),
    image: DS.attr(),
    likes: DS.attr('number'),
    dislikes: DS.attr('number')
});
