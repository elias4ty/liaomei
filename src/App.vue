<template>
  <div id="app">
      <div class="fuceng">
          <div class="tips">
              <i><img src="@/assets/images/close.png" alt=""></i>
              <div class="inline">
                  <h3>推荐语录</h3>
                  <p>刚才做饭，我的手被热水袋接口烫伤</p>
                  <p>刚才做饭，我的手被热水袋接口烫伤</p>
                  <p>刚才做饭，我的手被热水袋接口烫伤</p>
              </div>
          </div>
      </div>
      <header>
          <i class="headericon iconleft">
            <img class="back" src="@/assets/images/back.png">
          </i>
          <span class="title">牛美丽</span>
          <i class="headericon iconright">
            <img class="more" src="@/assets/images/more.png">
          </i>
      </header>
      <section id="chatbox">
          <div class="mm box">
              <p class="imgbox"><img src="@/assets/images/me.png"></p>
              <div class="text gt">
                  <p>你好，很高兴认识你~</p>
              </div>
          </div>
          <div class="me box">
              <p class="imgbox mep"><img src="@/assets/images/mm.png"></p>
              <div class="med text mt">
                  <p>嗯，你有多高兴呢</p>
              </div>
          </div>
          <div class="mm box">
              <p class="imgbox"><img src="@/assets/images/me.png"></p>
              <div class="text gt">
                  <p>你好，很高兴认识你~</p>
              </div>
          </div>
          <div class="me box">
              <p class="imgbox mep"><img src="@/assets/images/mm.png"></p>
              <div class="med text mt">
                  <p>嗯，你有多高兴呢</p>
              </div>
          </div>
          <div class="mm box">
              <p class="imgbox"><img src="@/assets/images/me.png"></p>
              <div class="text gt">
                  <p>你好，很高兴认识你~</p>
              </div>
          </div>
          <div class="me box">
              <p class="imgbox mep"><img src="@/assets/images/mm.png"></p>
              <div class="med text mt">
                  <p>嗯，你有多高兴呢</p>
              </div>
          </div>
          <div class="mm box">
              <p class="imgbox"><img src="@/assets/images/me.png"></p>
              <div class="text gt">
                  <p>你好，很高兴认识你~</p>
              </div>
          </div>
          <div class="me box">
              <p class="imgbox mep"><img src="@/assets/images/mm.png"></p>
              <div class="med text mt">
                  <p>嗯，你有多高兴呢</p>
              </div>
          </div>
      </section>
      <footer>
          <div class="iconleft footericon"><img src="@/assets/images/voice.png"></div>
          <div class="input"><input type="text" placeholder="请输入文字..."></div>
          <div class="iconright footericon"><img src="@/assets/images/smell.png"></div>
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

/*@font-face {*/
    /*font-family: 'PingFangSC-Regular';*/
    /*src: url('assets/fonts/PingFangSC-Regular.ttf');*/
    /*font-weight: normal;*/
    /*font-style: normal;*/
/*}*/

/*@font-face {*/
    /*font-family: 'PingFangSC-Medium';*/
    /*src: url('assets/fonts/PingFangSC-MediumBlack.ttf');*/
    /*font-weight: normal;*/
    /*font-style: normal;*/
/*}*/

*{
    margin: 0;
    padding: 0;
}

html,body{
  width: 100%;
  height: 100%;
    background-color: #F7F8F9;
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
            color: #BCBED2;
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

      .me{

          &:after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}

          .mep{
              float: right;
          }

          .med{
              float: right;
              clear: both;
          }
      }

      .text{
          max-width: 60%;
          display: inline-block;
          margin-top: 10px;

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
