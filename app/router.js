import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('about');
  this.route('contact');
  this.route('forum');
  this.route('developer');
  this.route('developer-detail', { path: '/developer-detail/:developer_id' });
  this.route('question', { path: '/question/:question_id' });
  this.route('protected');
  this.route('dev-dashboard', { path: '/dev-dashboard/:developer_id' });
  this.route('login');
  this.route('signup');
  this.route('languages');
  this.route('blog');
});

export default Router;
