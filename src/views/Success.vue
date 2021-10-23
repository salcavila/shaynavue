<template>
  <div class="success">
    <HeaderShayna />
    <div
      class="d-flex success-checkout align-items-center justify-content-center"
    >
      <div class="col col-lg-4 text-center">
        <img src="img/success-buy.png" alt="" width="294" />
        <h3 class="mt-4">
          Sukses Terbayar!
        </h3>
        <p class="mt-2">
          Silakan tunggu update terbaru dari kami via email yang sudah Anda
          daftarkan sebelumnya.
        </p>
        <router-link to="/"
          ><a href="index.html" class="primary-btn pd-cart mt-3"
            >Back to Home</a
          ></router-link
        >
      </div>
    </div>
    <FooterShayna />
  </div>
</template>

<script>
import HeaderShayna from "../components/HeaderShayna.vue";
import FooterShayna from "../components/FooterShayna.vue";

export default {
  name: "success",
  components: {
    HeaderShayna,
    FooterShayna,
  },
};
</script>
