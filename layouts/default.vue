<template>
<div class="">
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <NuxtLink to="/"><img src="~/assets/img/logo.svg" alt="" height="40px" style="margin-right: 10px"></NuxtLink>
      <h1 class="logo me-auto"><NuxtLink to="/" class="link"><span>Pat</span>Ron</NuxtLink></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><NuxtLink to="/" class="active link">Home</NuxtLink></li>

          <li class="dropdown"><NuxtLink to="#" class="link"><span>Products</span> <i class="bi bi-chevron-down"></i></NuxtLink>
            <ul>
<!--              <li><NuxtLink to="/product/1" class="link">Product One</NuxtLink></li>-->
              <li class="dropdown"><NuxtLink to="#" class="link"><span>Fan</span> <i class="bi bi-chevron-right"></i></NuxtLink>
                <ul>
                  <li><NuxtLink to="/product/1" class="link">36" Celling Fan</NuxtLink></li>
                  <li><NuxtLink to="/product/2" class="link">56" Celling Fan</NuxtLink></li>
                </ul>
              </li>
              <li class="dropdown"><NuxtLink to="#" class="link"><span>Gas Stove</span> <i class="bi bi-chevron-right"></i></NuxtLink>
                <ul>
                  <li><NuxtLink to="/product/3" class="link">SS Gas Stove</NuxtLink></li>
                  <li><NuxtLink to="/product/4" class="link">Glass Gas Stove</NuxtLink></li>
                </ul>
              </li>
              <li class="dropdown"><NuxtLink to="#" class="link"><span>Stabilizer</span> <i class="bi bi-chevron-right"></i></NuxtLink>
                <ul>
                  <li><NuxtLink to="/product/5" class="link">700VA Stabilizer</NuxtLink></li>
                  <li><NuxtLink to="/product/6" class="link">1100VA Stabilizer</NuxtLink></li>
                  <li><NuxtLink to="/product/7" class="link">2200VA Stabilizer</NuxtLink></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><NuxtLink to="/about" class="link">About Us</NuxtLink></li>
          <li><NuxtLink to="/gallery" class="link">Gallery</NuxtLink></li>
          <li><NuxtLink to="/contact" class="link">Contact</NuxtLink></li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

      <div class="header-social-links d-flex">
        <NuxtLink to="#" class="twitter link"><i class="bu bi-twitter"></i></NuxtLink>
        <NuxtLink to="#" class="facebook link"><i class="bu bi-facebook"></i></NuxtLink>
        <NuxtLink to="#" class="instagram link"><i class="bu bi-instagram"></i></NuxtLink>
        <NuxtLink to="#" class="linkedin link"><i class="bu bi-linkedin"></i></NuxtLink>
      </div>

    </div>
  </header><!-- End Header -->
  <main id="main">

    <RouterView></RouterView>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Patron</h3>
            <p>
              A108 Adam Street <br>
              New York, NY 535022<br>
              United States <br><br>
              <strong>Phone:</strong> +1 5589 55488 55<br>
              <strong>Email:</strong> info@example.com<br>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Patron</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://asrafporag.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://asrafporag.com/Patron-free-html-bootstrap-template/ -->
          Designed by <a href="https://asrafporag.com/">asrafporag</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
