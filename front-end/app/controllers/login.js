import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate(){
      this.get('session').authenticate('authenticator:devise', this.get('email'), this.get('password'));
      // this.getUser();
    }
  },
  getUser: function() {
    Ember.$.ajax({
      method: 'get',
      url: '/users',
      success: function(users) {
        console.log(users);
      }
    });
  }
});
