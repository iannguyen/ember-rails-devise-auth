import Ember from 'ember';
import Session from "ember-simple-auth/services/session";

export default Session.extend({
  store: Ember.inject.service(),

  // insert the store service in esa-session

  // setCurrentUser: Ember.observer('isAuthenticated', function() {
  //   console.log('service working');
  //   if (this.get('isAuthenticated')) {
  //     this.get('store').findAll('user', {}).then((user) => {
  //       this.set('currentUser', user);
  //       this.getUser();
  //     });
  //   }
  // }),
  
  setCurrentUser: Ember.observer('isAuthenticated', function() {
    console.log('service working');
    if (this.get('isAuthenticated')) {

      Ember.$.ajax({
        method: 'get',
        url: '/users'
      }).then((users) => {
        this.set('currentUser', users[0]);
      });

      // this.set('currentUser');

    }
  }),
});
