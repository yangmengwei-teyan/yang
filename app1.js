const Koa =require('koa')
let app=new Koa();
const static=require('koa-static');//中间键静态资源
const path=require('path')
const router=require('koa-router')()//处理路由
const query=require('./db/index')
app.use(static(path.join(process.cwd(),'./public/')))
app.use(router.routes());
app.use(router.allowedMethods())
// app.use(async()=>{
//     if(ctx.path==='/userlist'){

//     }else if(ctx.path==='/add'){

//     }
// })
//成员列表

router.get('/userlist',async(ctx)=>{
    //从数据库查数据
    let data=await query ()
    //ctx.body='123'
    //ctx.body=[1,2,3]
    ctx.body={
        code:1,
        data
    }

})
router.get('/detail',async(ctx)=>{
    ctx.body="详情"
})
app.listen(3000,()=>{
    console.log("服务器启动")
})