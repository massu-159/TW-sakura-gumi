<template>
  <footer id="footer">
    <div class="header-wrap">
      <h1 class="header-logo">TOTAL WORKS</h1>
      <nav class="header-nav">
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">service</a></li>
          <li><a href="#">company</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer">
      <small>Copyright 2021 TOTAL WORKS sakuragumi All Rights Reserved.</small>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer {
  background: url(../assets/img 2/bg1.jpg)no-repeat;
  background-size: cover;
  height: 500px;
}

.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logo {
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  color: #f2f2f2;
  line-height: 70px;
}

.header-nav ul {
  display: flex;
}

.header-nav li {
  margin-right: 35px;
  font-size: 16px;
}

.header-nav a {
  color: #f2f2f2;
  text-decoration: none;
}
.footer {
  height: 80px;
  text-align: center;
  line-height: 750px;
  color:#f2f2f2
}
</style>