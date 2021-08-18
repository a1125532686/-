import Mock from 'mockjs'

//拦截AJAX请求，返回后面这个数据
Mock.mock("/mock/banners", "get",{
  code:200,
  "data|4-8":[
    {
      "id|+1":1,
      imgUrl:Mock.Random.image('730x450',Mock.Random.color(),Mock.Random.color(),'png','@ctitle'),
      imgName:'@cname'
    }
  ]

})