//引入mock.js
import Mock from 'mockjs'

//三、Mock.Random API (是一个工具类，用于生成各种随机数据)
/**
 *  它下面有很多可生成的随机数据类型
 *      Basic
 *      Date
 *      Image
 *      Color
 *      Text
 *      Name
 *      Web
 *      Address
 *      Helper
 *      Miscellaneous
 */
const Random = Mock.Random
let backData = []     //表格数据
let endData = []      //表格数据
let statistic=[]      //条状统计图数据
let circleStatistic=[] //饼状统计图数据

//mock一组数据 生成假数据
for (let i = 0; i < 10; i++) {
  //定义数据模板
  //其中模板由三部分组成：属性名，生成规则，属性值 'name|role':value
  //其中value值可以是：
  /**
   *      字符串：String
   *      数字：Number
   *      布尔类型：Boolean
   *      对象：Object
   *      数组：Array
   *      函数：Function
   *      正则表达式：RegExp
   *
   */
  console.log('使用mockjs')
  let data = {
    'isReceived': Random.boolean, // 可以生成基本数据类型
    'source': Random.natural(0, 4), // 生成1到100之间自然数
    'payType': Random.integer(0, 1),
    'type': Random.natural(0, 5), // 生成1到100之间自然数
    'isAll': Random.integer(0, 1), // 生成1到100之间的整数
    'create_date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    'end_date': Random.date(),
    'name': Random.cname(), // 生成姓名
    'cname': Random.cname(),  //角色名
    'pictureUrl': Random.image(),
    'address': Random.province(),// 生成地址
    'isFreeShipping': Random.natural(0, 1),
    'front_money': Random.float(0, 30, 2, 2),
    'postage': Random.float(0, 12, 2, 2),
    'money': Random.float(0, 100, 2, 2),
    'unit_price': Random.float(0, 30, 2, 2),
    'number': Random.integer(1, 10)
  }
  endData.push(data)

  let statisticData = {
    'create_date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    'money': Random.float(0, 100, 2, 2),
  }
  statistic.push(statisticData)


  let template = {
    'boolean': Random.boolean, // 可以生成基本数据类型
    'natural': Random.natural(5, 10), // 生成1到100之间自然数
    'integer': Random.integer(5, 100), // 生成1到100之间的整数
    'float': Random.float(0, 100, 0, 3), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    'character': Random.character(), // 生成随机字符串,可加参数定义规则
    'string': Random.string(2, 10), // 生成2到10个字符之间的字符串
    'range': Random.range(0, 10, 2), // 生成一个随机数组
    'create_date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    'end_date': Random.date(),
    'color': Random.color(), // 生成一个颜色随机值
    'paragraph': Random.paragraph(4, 5), //生成2至5个句子的文本
    'name': Random.cname(), // 生成姓名
    'url': Random.url(), // 生成web地址
    'pictureUrl': Random.image('300*500', '谷子图片'),
    'address': Random.province() // 生成地址
  }
  backData.push(template)
}


for (let i = 0; i < 5; i++) {
  let data={
    'cname': Random.cname(),  //角色名
    'money': Random.float(0, 100, 2, 2) //总价
  }

  circleStatistic.push(data);
}



console.log('我是mock数据：' + backData)

//一、Mock.mock() API (根据数据模板生成模拟数据)
Mock.mock('/data', /post|get/i, backData)
Mock.mock('/data/test/table', /post|get/i, endData)
Mock.mock('/data/test/statistic', /post|get/i, statistic)
Mock.mock('/data/test/circleStatistic', /post|get/i, circleStatistic)


export default Mock
/**
 * Mock.mock( rurl?, rtype?, template|function( options ) )
 *  有以下几种写法：
 *    1. Mock.mock(template) -》 直接生成模板数据
 *    2. Mock.mock(url,template) -》 当拦截匹配url的ajax请求时，将根据template生成的数据作为响应数据返回
 *    3. Mock.mock(url,function(options)) -》 当拦截到匹配 url 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回
 *    4. Mock.mock(url,type,template) -》 当拦截到匹配 url 和 type 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回
 *    5. Mock.mock(url,type,function(options)) -》 当拦截到匹配 url 和 type 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。
 */

//二、Mock.setup(settings) API (指定被拦截的 Ajax 请求的响应时间，单位是毫秒.支持的配置项有：timeout.)
/**
 *  如：Mock.setup({
 *          timeout:400
 *      })
 *
 */

//四、Mock.valid() API (校验真实数据 data 是否与数据模板 template 匹配)
/**
 * 如：Mock.valid(template,data)
 *
 */

//五、Mock.toJSONSchema() API (把 Mock.js 风格的数据模板 template 转换成 JSON)
/**
 *  如：Mock.toJSONSchema(template)
 *
 */
