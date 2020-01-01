const Koa=require('koa');
const app=new Koa();
const fs=require("fs")
console.log("fs")
//每次请求耗费的时间 

app.use(async(ctx,next)=>{
    let startTime=new Date().getTime();
    // ctx.response.body=123
   // ctx.response.body="abc"
    console.log("第一个中间键")
    await next();//执性下一个中间键
    // console.log(ctx.response.status)
  //console.log(ctx.request.method)
  console.log("第一个中间键结束")
  let endTime=new Date().getTime();//结束时间
  let time=endTime-startTime;
  //fs.writeFileSync("./log.log",`${ctx.path}-${ctx.method}-${time}`)
  fs.appendFileSync("./log.log",`${ctx.path}-${ctx.method}-${time}`)
  ctx.body=time
})
app.use(async(ctx,next)=>{
    console.log("第二个中间键");
    await next();
    console.log("第二个中间键结束")
});
let delay=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })
}
app.use(async(ctx,next)=>{
    console.log("第三个中间键")
    await delay()
})

app.listen(3000,()=>{
    console.log("服务启动")
})
