import Ember from 'ember';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state, attrs) => {
  console.log('attrs', attrs);
  return {
    users: state.users
  };
};

var dispatchToActions = (dispatch) => {
  return {
    remove: (id) => dispatch({type: 'REMOVE_USER', id: id})
  };
};

var UserListComponent = Ember.Component.extend({
  tagName: ''
});

export default connect(stateToComputed, dispatchToActions)(UserListComponent);
