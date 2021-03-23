
<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <main>
      <div id="eyecatch">
        <p>TOTAL WORKS</p>
      </div>
      <div id="about">
          <h2 class="section-title"><font-awesome-icon icon="check-circle"/> about</h2>
          <div class="about-wrap">
              <div class="about-left">
                  <img src="./assets/img 2/carpenter.jpg">
              </div>
              <div class="about-right">
                  <h3>TOTAL WORKS</h3>
                  <p>〇〇市で新築外構工事・デザイン外構工事ならお任せください。施工実績が豊富な私たちが、安くて質の高い工事をお約束します。新築工事以外にも、造成工事、リフォーム外構工事もやっていますので遠慮なくお問い合わせください。現地調査、打ち合わせ、デザイン作成、お見積もりまで完全無料で行っておりますので、お気軽にご相談ください。</p>
                  <ol>
                      <li>外構工事全般</li>
                      <li>造成工事、リフォーム外構工事</li>
                      <li>設計、見積もり</li>
                  </ol>
              </div>
          </div>
      </div>
      <div id="business">
          <h2 class="section-title"><font-awesome-icon icon="briefcase"/> service</h2>
          <div class="business-wrap">
              <div class="business-cat" v-for="(data, index) in business" :key="index">
                  <font-awesome-icon :icon="data.icon" class="tools">{{data.icon}}</font-awesome-icon>
                  <h3>{{data.title}}</h3>
                  <p>{{data.description}}</p>
              </div>
          </div>
      </div>
      <div id="company">
          <h2 class="section-title"><font-awesome-icon icon="warehouse"/> company</h2>
          <table class="contain">
              <tr>
                  <th>屋号</th>
                  <td>TOTAL WORKS</td>
              </tr>
              <tr>
                  <th>代表者名</th>
                  <td>田中 昌也</td>
              </tr>
              <tr>
                  <th>所在地</th>
                  <td>兵庫県宍粟市山崎町0-0-0</td>
              </tr>
              <tr>
                  <th>従業員数</th>
                  <td>10名</td>
              </tr>
              <tr>
                  <th>電話番号</th>
                  <td>0120-0000-0000</td>
              </tr>
              <tr>
                  <th>FAX</th>
                  <td>0120-0000-0000</td>
              </tr>
              <tr>
                  <th>メールアドレス</th>
                  <td>tanaka@totalworks.jp</td>
              </tr>
              <tr>
                  <th>主な事業内容</th>
                  <td>外構工事業</td>
              </tr>
          </table>
      </div>
      <div id="contact">
          <h2 class="section-title"><font-awesome-icon icon="user-check"/> contact</h2>
            <form class="form" method="post" @submit.prevent="sendContact()">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="user-name" v-model="text">
                </div>
                <div>
                    <label for="mail">E-mail:</label>
                    <input type="email" id="mail" name="user-mail" v-model="email">
                </div>
                <div>
                    <label for="tell">Tell:</label>
                    <input type="tel" id="tel" name="user-tel" v-model="tel">
                </div>
                <div>
                    <label for="msg">Message:</label>
                    <textarea name="user-message" id="msg" v-model="msg"></textarea>
                </div>
                <div class="button-submit">
                    <button class="button" type="submit">送信</button>
                </div>
            </form>
      </div>
    </main>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from "./components/CommonHeader";
import CommonFooter from "./components/CommonFooter";
export default {
    data(){
        return {
            business: [
                {icon: "tools", 
                title: "外構工事業",
                description: "ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。"},
                {icon: "truck", 
                title: "運送業",
                description: "ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。"},
                {icon: "utensils", 
                title: "飲食業",
                description: "ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。"}
            ],
            text: "", email: "", tel: "", msg: ""
        }
    },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
      sendContact() {
          if (this.text == "" || this.email == "" || this.tel == "" || this.msg == "") {
              alert("入力されていない項目があります");
          } else {
              this.text = "";
              this.email = "";
              this.tel = "";
              this.msg = "";
              alert("送信しました");
          }
      }
  }
};

</script>

<style>
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

html {
  scroll-behavior: smooth;
}

#eyecatch {
    height: 600px;
    background: url(./assets/img 2/eyecatch.jpeg) no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}

#eyecatch p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
    font-style: italic;
    font-weight: bold;
    color: rgb(255, 255, 255);
    line-height: 1;
}

#about {
    width: 90%;
    margin: 20px auto;
    padding: 50px 0;
    background: rgba(204, 204, 204, 0.493);
}

#about .section-title {
    font-size: 30px;
    font-weight: bold;
    margin: 30px 0;
    text-align: center;
}

.about-wrap {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.about-right h3, .about-right p {
    margin-bottom: 15px;
}

.about-right h3 {
  font-size: 25px;
}

.about-left, .about-right {
    width: 45%;
    margin-bottom: 80px;
}

.about-right ol {
list-style-position: inside;
}

.about-left img {
    display: block;
    width: 100%;
}

#business {
    background: url(./assets/img 2/yumbo.jpeg) no-repeat;
    background-size: cover;
}

#business .section-title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 60px 0;
    margin: 0;
    color: #fff;
}

.business-wrap {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.business-cat {
    width: 28%;
    background-color: rgba(51, 51, 51, 0.9);
    padding: 20px 35px 30px;
    box-sizing: border-box;
    margin-bottom: 50px;
}

.tools {
  font-size: 50px;
  color: #fff;
  margin: 10px 0 20px;
}

.business-cat h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff;
}

.business-cat p {
    color: #fff;
}

.business-cat img {
    width: 100px;
    height: auto;
    margin: 0 auto 10px;
}

#company {
    padding: 60px 0 70px 0;
    width: 90%;
    margin: 20px auto;
    background: rgba(204, 204, 204, 0.5);
}

#company .section-title {
    font-size: 30px;
    font-weight: bold;
    margin: 30px 0;
    text-align: center;
}

#company .contain {
    border-collapse: collapse;
    width: 70%;
    margin: 0 auto;
}

#company table tr {
    border-bottom: 1px solid #333333;
}

#company th, #company td {
    text-align: left;
}

#company th {
    padding: 10px 0;
}

#contact {
    background: url(./assets/img 2/tool carpenter.jpg) no-repeat;
    background-size: cover;
}

#contact .section-title {
    font-size: 30px;
    font-weight: bold;
    padding: 60px 0;
    text-align: center;
    margin: 0;
    color: #fff;
}

.form {
    width: 70%;
    margin: 0 auto;
}

label {
    display: inline-block;
    width: 30%;
    color: #fff;
}

input, textarea {
    box-sizing: border-box;
    border: 1px solid #999;
    width: 65%;
    background: rgb(238, 238, 238);
}

input {
    margin-bottom: 20px;
    padding: 7px;
}

textarea {
    vertical-align: center;
    height: 200px;
}

.button-submit {
    text-align: center;
}

.button {
    padding: 10px 30px;
    background-color: #000;
    color: #fff;
    margin: 30px 0;
}

#footer {
    height: 80px;
    text-align: center;
    line-height: 80px;
}

@media screen and (max-width: 768px){
    .about-wrap {
        flex-wrap: wrap;
    }

    .about-left,.about-right {
        width: 80%;
    }

    .business-wrap {
        flex-wrap: wrap;
    }

    .business-cat {
        width: 80%;
        margin: 0 auto 20px;
    }

    label {
        display: block;
    }

    .form div {
        margin: 0 auto;
    }

    input, textarea {
        width: 100%;
    }
}

</style>

