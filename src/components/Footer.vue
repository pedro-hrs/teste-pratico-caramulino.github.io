<template>
  <footer class="footer">
    <nav class="footer-navigation">
      <ul>
        <li class="footer-nav-item">
          <a href="#benefits">Benefits</a>
        </li>
        <li class="footer-nav-item">
          <a href="#specifications">Specifications</a>
        </li>
        <li class="footer-nav-item">
          <a href="#how-to">How-to</a>
        </li>
      </ul>
    </nav>
    <div class="footer-content">
      <div class="footer-left">
        <img src="@/assets/footer-image.svg" alt="Boneco" class="footer-boneco" />
        <span class="footer-text">© Area. 2025</span>
      </div>
      <div class="footer-center">
      </div>
      <div class="footer-right">
        <span class="footer-social">
          <a href="http://www.facebook.com">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="http://www.instagram.com">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </span>
        <span class="footer-rights">All Rights Reserved</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import './../scss/colors.scss';

.footer-social{
  a{
    color: $color-primary;
    font-size: 1.2rem;
    transition: color 0.2s;
    padding: 5px;
    &:hover{
      color: $color-primary-light;
    }
  }
  
} 
nav.footer-navigation {
  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
    list-style: none;
    padding: 1rem 0;
    align-items: flex-start;
  }
  .footer-nav-item a {
    color: #222;
    font-size: 0.89rem;
    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
    font-weight: 800;
    transition: color 0.2s;
  }
  .footer-nav-item a:hover {
    color: #7e8a6e;
  }
}

.footer-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  nav > ul.footer-nav-item{
    list-style: none;
  }
}

.footer {
  width: 100%;
  padding: 2rem 0 1.5rem 0;
  background: #fff;
}
.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // max-width: 1200px;
  margin: 0 auto;
}
.footer-left {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 20px;
}
.footer-boneco {
  height: 60px;
  width: 30px;
}
.footer-center {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-text {
  color: #7e8a6e;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}
.footer-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
}
.footer-rights {
  color: #7e8a6e;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
}
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
  .footer-left, .footer-center, .footer-right {
    justify-content: center;
    flex: unset;
  }
  .footer-boneco {
    height: 40px;
  }
  .footer-navigation{
    text-align: center;

    ul{
      justify-content: center;
    }
  }
}
</style>
