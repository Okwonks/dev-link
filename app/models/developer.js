import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    image: DS.attr(),
    bio: DS.attr(),
    email: DS.attr(),
    github: DS.attr()
});
