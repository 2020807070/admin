const express = require('express')
const app = express()

const mysql = require('mysql');
const bodyParser = require('body-parser')
const jsw = require('jsonwebtoken')
app.use(bodyParser.json())
//解决跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('origin'))
    res.header('Access-Control-Allow-Headers', 'Content-Type,Token')
    res.header('Content-Type', 'application/json;charset=utf-8')
    res.header('Access-Control-Allow-Credentials', true)
    next()
})

//连接数据库
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '7042345',
    database: 'hcc'
})

connection.connect(err => {
    if (err) {
        throw err;
    }
})


app.post('/api/add_list', function (req, res) {
    console.log(req.body)
    connection.query(`insert into shoplist(shopName,shopTel,bossName,bossPhone,fenlei,time,location) values("${req.body.shop_name}","${req.body.shop_tel}","${req.body.boss_name}","${req.body.boss_phone}","${req.body.fenlei}","${req.body.time}","${req.body.location}")`, (err, result) => {
        if (err) {
            console.log("123")
        } else {
            res.send({ msg: "添加成功" })
        }
    })
})
app.get('/get_list', function (req, res) {
    connection.query("SELECT * FROM shoplist", (err, result) => {
        res.json(result)
    })
})

//登录
app.post('/login', function (req, res) {
    const token = jsw.sign(req.body.username, "hcc")
    connection.query('select * from ele where user=? and pswd=?', [req.body.username, req.body.password], (err, result) => {
        if (err) {
            res.send({ code: 1, msg: "登录失败", })
        } else {
            result.length > 0 ? res.send({ code: 2, msg: "登陆成功", token: token }) : res.send({ code: 3, msg: "账号或者二密码错误" });
        }
    })
})
//获取分类
app.post('/getClassification', function (req, res) {
    connection.query(`select * from classification`, (err, result) => {
        res.end("123312")
        // let list = [];
        // if (err) {

        // } else {
        //     res.end("123")
        //     // res.json(result)
        //     // console.log(result)
        //     // result.forEach(file => {
        //     //     if (file.parentid == 0) {
        //     //         list.push(file)
        //     //         console.log(list)
        //     //     }
        //     // })
        // }
    })
})
//添加分类
app.post('/add', function (req, res) {
    console.log(req.body)
    connection.query(`insert into classification(name,classification) values("${req.body.name}","${req.body.classification}")`, (err, result) => {
        if (err) {
            res.send({ msg: '添加失败' })
        } else {
            res.send({ msg: '添加成功' })
        }
    })
})
//删除分类
app.post('/del', function (req, res) {

})



app.post('/hcc', function (req, res) {
    res.end("123")
})






app.listen(9000, function () {
    console.log('listen 9000...')
})