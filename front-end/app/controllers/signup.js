import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    register() {
      var _this = this;
      var data = this.getProperties("email", "password", "password_confirmation");
      Ember.$.ajax({
        method: 'post',
        url: '/users',
        dataType: 'json',
        data: data
      }).then(function(response) {
          _this.get('session').authenticate('authenticator:devise', data.email, data.password);
      });
    }
  }
});
