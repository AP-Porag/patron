<template>
  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>product Details</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li><a href="portfolio.html">product</a></li>
            <li>product Details</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4" v-if="product">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img :src="require(`@/assets/img/portfolio/${product.image}`)" :alt="product.title">
                </div>

<!--                <div class="swiper-slide">-->
<!--                  <img src="~/assets/img/portfolio/portfolio-details-2.jpg" alt="">-->
<!--                </div>-->

<!--                <div class="swiper-slide">-->
<!--                  <img src="~/assets/img/portfolio/portfolio-details-3.jpg" alt="">-->
<!--                </div>-->

              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Product information</h3>
              <ul>
                <li><strong>Category</strong>: {{product.category}}</li>
                <li><strong>{{product.category=='Stabilizer'?'Capacity':'Types'}}</strong>: {{product.detail}}</li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>{{product.title}} detail</h2>
              <p>
                {{product.description}}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Details Section -->

  </main><!-- End #main -->
</template>

<script>
export default {
  name: "_id",
  computed:{
    product(){
      return this.$store.getters.getProductById(this.$route.params.id);
    }
  }
}
</script>

<style scoped>

</style>
