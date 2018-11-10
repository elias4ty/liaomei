const app = require('express')();
const http = require('http');
const server = http.createServer(app);
const sockethttp = http.Server(app);
const request = require('request');
const bodyParser = require('body-parser');
const io = require('socket.io')(sockethttp);
const moment = require('moment');
app.use(bodyParser.json());

// app.post('/WeAI/waitAMoment',function(req,res){
//     res.send('status==200')
//     console.log('wait==',req.body)
// });
//
// app.post('/getword/checkText',function(req,res){
//     res.send('status==200')
//     console.log('reply===',JSON.stringify(req.body))
//     io.emit('tip',req.body.goodword)
// });

io.on('connection',socket => {
    socket.on('gotohanzi',msg =>{
        console.log('getObjectWord:' + msg);
        // getData({
        //     url: 'http://www.yebax.com/getword/getOwnWord',
        //     method:'GET',
        //     qs: {
        //         "robotUUID":"a1058c3a-9785-5f5d-8469-93448bb66dd9",
        //         "objectUUID":"1b39e1c6-df1b-11e8-b45d-4439c4586d84",
        //         "frameUUID":"25e89b58-df1d-11e8-91cb-4439c4586d84",
        //         "text":"你好，在吗？",
        //         "time":"2018-11-3 13:48:45"
        //     },
        //     json : true
        // }, (error, response, body) => {
        //     if (!error && response.statusCode == 200) {
        //         console.log(body) // 请求成功的处理逻辑
        //     }
        // });

        io.emit('fromniu',msg)

        getData({
            url: 'http://www.yebax.com/getword/getObjectWord',
            method:'GET',
            qs: {
                "robotUUID": "38d1eb8c-dfd6-11e8-a379-00163e0842df",
                "objectUUID": "4f9822d2-dfd6-11e8-8182-00163e0842df",
                "frameUUID": "62ae8bae-dfd6-11e8-a7da-00163e0842df",
                "text":msg,
                "time":moment().format("YYYY-MM-DD hh:mm:ss")
            },
            json : true
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                console.log('obj====',body.data[0].search_word) // 请求成功的处理逻辑
                if(body.data[0].search_word['烫伤'])
                    io.emit('tipcard',body.data[0].search_word)
                else if(body.data[0].goodword.length)
                    io.emit('tip',body.data[0].goodword)
            }
        });

    })

    socket.on('gotomeizi',msg =>{
        console.log('getOwnWord:' + msg);
        getData({
            url: 'http://www.yebax.com/getword/getOwnWord',
            method:'GET',
            qs: {
                "robotUUID":"38d1eb8c-dfd6-11e8-a379-00163e0842df",
                "objectUUID":"4f9822d2-dfd6-11e8-8182-00163e0842df",
                "frameUUID":"62ae8bae-dfd6-11e8-a7da-00163e0842df",
                "text":msg,
                "time":moment().format("YYYY-MM-DD hh:mm:ss")
            },
            json : true
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                console.log('gotomeizi=====',body) // 请求成功的处理逻辑
            }
        });

        io.emit('fromwang',msg)

    })

    socket.on('init',function(){
        console.log('init')
        getData({
            url: 'http://www.yebax.com/frame/setFrameSubject',
            method:'POST',
            form: {
                "frameUUID" : "62ae8bae-dfd6-11e8-a7da-00163e0842df",
                "time":moment().format("YYYY-MM-DD hh:mm:ss"),
                "subject":"第一次开场"
            },
            headers:{'Content-Type':"application/json"},
            json : true
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                console.log("开场=====",body) // 请求成功的处理逻辑
                io.emit('tip',body.data[0].goodword)
            }
        });
    })

    socket.on('sendcard',function(card){
        console.log('sendcard')
        io.emit('acccard',card)
    })

})

function getData(options,cb) {
    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            cb(error, response, body)
            console.log('getData====',body) // 请求成功的处理逻辑
        }
    });
}
server.listen(8888,function(){
    console.log('server listen at 8888')
})

sockethttp.listen(8889,function () {
    console.log('socket listen at 8889')
})