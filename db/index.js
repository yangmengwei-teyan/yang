const mysql=require('mysql')
module.exports=()=>{
    let connection=mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:"root",
        database:"1707f-userlist"

    })
    connection.connect((error)=>{
        if(error){
            console.log("数据连接失败")
        }else{
            console.log("数据连接成功")
        }
    })
    return new Promise((resolve,reject)=>{
        connection.query('select * from userlist',(error,data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
            connection.end()//关闭连接
        })
    })
}