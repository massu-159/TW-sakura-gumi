<template>
  <header class="header">
    <div class="header-wrap">
      <h1 class="header-logo">TOTAL WORKS</h1>
      <nav class="header-nav">
        <ul>
          <li><a href="#app">home</a></li>
          <li><a href="#about" >about</a></li>
          <li><a href="#business">service</a></li>
          <li><a href="#company">company</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </div>
    <div id="hamburger" @click="hamburger()" :class="{'active':isClass}">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="menu-content" :class="{'open':isClass}">
      <ul class="menu-content_inner">
        <li><a href="#app" @click="hamburger()" :class="{'active':isClass}">home</a></li>
        <li><a href="#about" @click="hamburger()" :class="{'active':isClass}">about</a></li>
        <li><a href="#business" @click="hamburger()" :class="{'active':isClass}">service</a></li>
        <li><a href="#company" @click="hamburger()" :class="{'active':isClass}">company</a></li>
        <li><a href="#contact" @click="hamburger()" :class="{'active':isClass}">contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isClass: false
    };
  },
  methods: {
    hamburger() {
      this.isClass = !this.isClass;
    }
  }
}
</script>

<style scoped>
  .header {
    height: 60px;
    background: #000;
    width: 100%;
    position: fixed;
    z-index: 999;
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

  .header-nav a:hover {
    color: rgba(177, 162, 114, 1);
  }
  
  .menu-content_inner {
    display: none;
  }

  @media screen and (max-width: 768px){
    
    #hamburger {
      width: 40%;
      height: 40px;
      position: absolute;
      cursor: pointer;
      z-index: 100;
      top: 15px;
      right: -100px;
      transition: 0.2s;
    }
    #hamburger span {
      position: absolute;
      left: 2px;
      display: block;
      width: 35px;
      height: 2px;
      background-color: #fff;
      transition: 0.2s;
    }
    #hamburger span:nth-of-type(1) {
      top: 10px;
    }
    #hamburger span:nth-of-type(2) {
      top: 20px;
    }
    #hamburger span:nth-of-type(3) {
      top: 30px;
    }
    .header-nav {
      display: none;
    }
    #hamburger.active span:nth-of-type(1) {
      top: 20px;
      transform: rotate(45deg);
    }
    #hamburger.active span:nth-of-type(2) {
      opacity: 0;
    }
    #hamburger.active span:nth-of-type(3) {
      top: 20px;
      transform: rotate(-45deg);
    }
    .menu-content{
      display: block;
      width: calc(100% - 300px);
      text-align: center;
      transition: 0.2s;
      position: fixed;
      top: 0;
      left: calc(-100% - 80px);
      background: rgba(177, 162, 114, 0.7);
      color: #fff;
      z-index: 999;
      margin-top: 60px;
      font-size: 1.3rem;
    }
    .menu-content li a {
      color: #fff;
      margin-bottom: 2px;
      padding: 20px;
      border-bottom: 0.5px solid #333333;
      text-decoration: none;
      display: block;
    }

    .menu-content a:hover {
      color: rgba(177, 162, 114, 0.7);
    }

    .menu-content li:hover {
      background: #fff;
      opacity: 0.7;
    }

    .menu-content li {
      width: 100%;
      text-align: left;
    }
    .menu-content.open {
      left: 0;
    }
    .menu-content_inner {
      display: block;
    }
  }
</style>