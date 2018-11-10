<template>
    <div id="app">
        <header>
            <i class="headericon iconleft">
                <img class="back" src="@/assets/images/back.png">
            </i>
            <span class="title">王大锤</span>
            <i class="headericon iconright">
                <img class="more" src="@/assets/images/more.png">
            </i>
        </header>
        <section id="chatbox">
            <div v-for="l in list">
                <div class="mm box" v-if="l.type==='mm'">
                    <p class="imgbox in"><img src="@/assets/images/dachui.png"></p>
                    <div class="text gt">
                        <p>{{l.text}}</p>
                    </div>
                </div>
                <div class="me box" v-if="l.type==='me'">
                    <p class="imgbox mep"><img src="@/assets/images/meili.png"></p>
                    <div class="med text mt">
                        <p>{{l.text}}</p>
                    </div>
                </div>

                <div class="mm box" v-if="l.type=='acccard'">
                    <p class="imgbox in"><img src="@/assets/images/dachui.png"></p>
                    <div class="cardbox">
                        <div class="card">
                            <div class="top">
                                <p><img src="@/assets/images/doc.png" alt=""></p>
                                <div class="area">
                                    <h3>烫伤的治疗护理</h3>
                                    <p>一旦发生烫伤，先用毛巾或水冲烫伤处降温，然后及时就医</p>
                                </div>
                            </div>
                            <div class="sec">
                                <span>来源：搜狗明医</span>
                                <button @click="checkCard">查看</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="iconleft footericon"><img src="@/assets/images/voice.png" @click="go"></div>
            <div class="input"><input @keydown="show($event)" v-model="inputText" type="text" placeholder="请输入文字..."></div>
            <div class="iconright footericon"><img src="@/assets/images/smell.png"></div>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list : [],
                inputText:"",
                fuceng : false,
                card:{}
            }
        },
        sockets:{
          fromwang(msg){
             console.log(msg)
              let o = {
                  type:"mm",
                  text:msg
              }
              this.list.push(o)
          },
          acccard(card){
              this.card = card
              this.list.push(card)
          }
        },
        methods:{
            checkCard(){
              location.href = this.card.url
            },
            go(){
                if(this.inputText === ""){
                   alert("消息不能为空哦~")
                   return ;
                }
                let o = {
                    type:"me",
                    text:this.inputText
                }
                this.list.push(o)
                this.$socket.emit('gotohanzi',this.inputText)
                this.inputText = ""
            },
            show(e){
                if(e.keyCode === 13)
                    this.go()
            }
        }
    }
</script>

<style lang="scss">

    *{
        margin: 0;
        padding: 0;
    }

    html,body{
        width: 100%;
        height: 100%;
        background-color: #F7F8F9;
    }

    button{
        outline: none;
    }

    input::-webkit-input-placeholder {
        color: #BCBED2;
    }

    #app{
        position: relative;
        font-family: PingFangSC-Medium;

        .fuceng{
            width: 100%;
            height: 100%;
            background: rgba(3,11,37,0.6);
            z-index: 100;
            position: fixed;

            i{
                position: absolute;
                right: 16px;
                top: 10px;

                img{
                    height: 12px;
                    width: 12px;
                }
            }
            .tips{
                position: absolute;
                left: 20px;
                right: 20px;
                bottom: 20%;
                background: #FFFFFF;
                border-radius: 16px;

                .inline{
                    padding: 25px 45px 29px 39px;

                    h3{
                        font-size: 24px;
                        color: #3D4A6E;
                        letter-spacing: 0.86px;
                        text-align: left;
                        line-height: 43px;
                    }

                    p{
                        font-size: 15px;
                        color: #98A4B6;
                        letter-spacing: 0.54px;
                        text-align: left;
                        line-height: 32px;
                    }
                }
            }
        }

        .cardFu{
            position: fixed;
            left: 60px;
            bottom: 150px;
            margin-right: 0px;

            .gao{
                max-width: 80%;
                box-shadow: 0 0 8px 1px #BCBED2;
            }

            .mb{
                margin-left: 70px;
            }
        }
        .cardbox{
            max-width: 70%;
            display: inline-block;
            margin-right: 10px;
            border-radius: 8px;
            padding: 20px 13px 16px 21px;
            background-color: #ffffff;

            .top{

                margin-bottom: 10px;
                img {
                    height: 30px;
                    width: 30px;
                    display: inline-block;
                }
                p{
                    display: inline-block;
                    vertical-align: text-top;
                }
                .area{
                    width: 70%;
                    display: inline-block;
                    margin-left: 20px;

                    h3{
                        font-size:14px;
                        font-weight:600;
                        color:rgba(0,0,0,1);
                        line-height:20px;
                        margin-bottom:2px;
                    }

                    p{
                        font-size:10px;
                        font-weight:600;
                        color:rgba(153,153,153,1);
                        line-height:19px;
                    }
                }
            }

            .sec{
                span{
                    font-size:10px;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:14px;
                    vertical-align: bottom;
                }

                button{
                    width:67px;
                    height:27px;
                    border-radius:14px;
                    border:1px solid #77A2FA;
                    background-color: #ffffff;
                    color: #77A2FA;
                    font-size: 14px;
                    margin-left: 85px;
                }
            }
        }

        header,footer,#chatBox{
            width: 100%;
        }

        header{
            height: 64px;
            background-color: #ffffff;
            line-height: 64px;
            font-size: 16px;
            color: #484A57;
            letter-spacing: 0;
            text-align: center;
            position: fixed;
            top:0;

            .headericon{
                height: 64px;
                width: 64px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;

                .back{
                    height: 15px;
                    width: 15px;
                }

                .more{
                    height: 4px;
                    width: 18px;
                }
            }

            .title::after{
                content: "";
                display: inline-block;
                width: 5px;
                height: 5px;
                background-color: #87DC80;
                vertical-align: middle;
                border-radius: 100%;
                margin-left: 10px;
            }
        }

        footer{
            height: 55px;
            background: #FFFFFF;
            box-shadow: 0 -2px 8px -4px rgba(0,0,0,0.12);
            position: fixed;
            bottom: 0;

            .footericon{
                height: 55px;
                width: 55px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    height: 24px;
                    width: 24px;
                }
            }

            .input{
                height: 55px;
                width: 100%;
                padding: 0 55px;
                box-sizing: border-box;

                input{
                    width: 100%;
                    height: 100%;
                    border: 0;
                    font-size: 14px;
                    color: #7B818E;
                    line-height: 20px;
                    outline:none;
                    font-family: PingFangSC-Regular;
                }
            }
        }

        .iconright{
            right: 0;
            bottom: 0;
        }
        .iconleft{
            left: 0;
        }

        #chatbox{
            box-sizing: border-box;
            padding: 87px 16px 68px 16px;

            .box{
                margin-bottom: 10px;
            }

            .imgbox{
                img{
                    height: 44px;
                    width: 44px;
                }
            }

            .mm{
               .in{
                   display: inline-block;
                   vertical-align: top;
                   margin-right: 10px;
               }
            }
            .me{

                &:after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}

                .mep{
                    float: right;
                }

                .med{
                    float: right;
                }
            }

            .text{
                max-width: 80%;
                display: inline-block;
                margin-right: 10px;

                p{
                    line-height: 20px;
                    padding: 17px 30px;
                }
            }

            .gt{
                background-image: linear-gradient(90deg, #FFFFFF 4%, #FFFCFE 100%);
                border-radius: 25px;
                font-size: 14px;
                color: #7B818E;
                letter-spacing: 0.5px;
                text-align: left;
            }

            .mt{
                background-image: linear-gradient(90deg, #59ADFF 18%, #6B94F8 85%);
                box-shadow: 0 5px 5px -3px rgba(0,0,0,0.10);
                border-radius: 27px;
                font-size: 14px;
                color: #FFFFFF;
                letter-spacing: 0.5px;
                text-align: left;
            }
        }
    }



</style>
