const USERS = 'USERS';
export default {
  //获取所有的用户
  getUsers(){
    let users = localStorage.getItem(USERS);
    return users?JSON.parse(users):[];
  },
  //获取单个用户
  getUser(id){
    let users = this.getUsers();//得到老的用户数组
    let user = users.find(item=>item.id == id);//再得到对应的对象
    return user;
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
    let users = this.getUsers();
    users = users.filter(user=>user.id!=id);
    localStorage.setItem(USERS,JSON.stringify(users));
    return users;
  },
}