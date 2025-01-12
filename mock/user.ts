function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-11e8-977b-73845b8cc4bb.jpg',
      username: 'admin',
      password: '123456',
      desc: '超级管理员',
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-11e8-977b-73845b8cc4bb.jpg',
      username: 'system',
      password: '123456',
      desc: '系统管理员',
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System Token',
    },
  ]
}

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      if (!checkUser) {
        return {
          code: 201,
          data: { message: '用户名或密码错误' },
        }
      }
      const { token } = checkUser
      return {
        code: 200,
        data: { token },
      }
    },
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: ({ request }) => {
      const { token } = request.headers.token
      const checkUser = createUserList().find((item) => item.token === token)
      if (!checkUser) {
        return {
          code: 201,
          data: { message: '用户信息获取失败' },
        }
      }
      return {
        code: 200,
        data: checkUser,
      }
    },
  },
]
