var users = ((state = [{name:'a'}, {name:'b'}], action) => {
  console.log('users', action);
  return state;
});

export default {
  users
}
