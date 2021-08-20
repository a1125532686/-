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

}),
Mock.mock("/mock/floors", "get",{
  code:200,
  "data|2-4":[
    {
      "id|+1":1,
      title:'@ctitle',
      'navList|7':[
        {
          url:'#',
          name:'@cname',
        }
      ],
      'keywords|6':['@ctitle(4.6)'],
      img:{
        imgUrl:Mock.Random.image('207x246',Mock.Random.color(),Mock.Random.color(),'png','@ctitle'),
        imgName:'@cname',
      },
      'carouselList|3-6':[
        {
          "id|+1":1,
           imgUrl:Mock.Random.image('330x360',Mock.Random.color(),Mock.Random.color(),'png','@ctitle'),
           imgName:'@cname'
        }
      ],
      'imgList|4':[
        {
          "id|+1":1,
           imgUrl:Mock.Random.image('220x180',Mock.Random.color(),Mock.Random.color(),'png','@ctitle'),
           imgName:'@cname'
        }
      ],
      bigImg:{
           imgUrl:Mock.Random.image('220x360',Mock.Random.color(),Mock.Random.color(),'png','@ctitle'),
           imgName:'@cname'
      }
    }
  ]

})