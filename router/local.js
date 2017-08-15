const USERS = 'USERS';
export default {
  //获取所有的用户
  getUsers(){
    let users = localStorage.getItem(USERS);
    return users?JSON.parse(users):[];
  },
  //获取单个用户
  getUser(id){

  },
  //增加一个新的用户
  addUser(user){
    user.id = Date.now();
    let users = this.getUsers();
    users.push(user);
    localStorage.setItem(USERS,JSON.stringify(users));
  },
  //删除一个用户
  delUser(id){

  },
}