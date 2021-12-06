<template>
    <!-- <div class="row"> -->
      <div class="sectioncontainer1 row">
        <div class="section1a row col-lg-6 col-md-6 col-sm-12">
          <div class="my-5 ml-4">
            <h4>Explore an Array of Best Deals on</h4>
            <h2 class="text-info font-weight-bold">"Rent a Car In UAE "</h2>
            <div>
              <p style="font-size: 14px">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                perspiciatis eius itaque accusamus natus illum debitis est unde
                vitae quidem sapiente harum eaque voluptate odit modi deserunt,
                consequuntur animi in voluptatibus <span id="dots">...</span><span id="more">
                  et! Dicta ab dolorum similique accusamus ratione esse optio,
                  aperiam totam illo ipsa unde est nam a aliquid
                  reprehenderit?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Autem, hic. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Expedita error assumenda quis
                  laborum fugiat porro ut libero dolorum quidem accusamus! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                  non quis deleniti, voluptatum quibusdam veritatis repellendus
                  laudantium ad optio vel!</span>
              </p>
              <button class="btn btn-secondary" @click="readmore()" id="morebtn">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div
          class="section2a row d-flex flex-column py-5 col-lg-6 col-md-6 col-sm-12">
          <h1>
            CHOOSE YOUR
            <font class="text-info">RIDE</font>
          </h1>
          <div
            class="section2a1 d-flex flex-row px-3 py-3 justify-content-center">
            <div class="car2a1 d-flex flex-column">
              <img src="../assets/images/carimg1.jpg" alt="img1" />CAR(1)
            </div>
            <div class="car2a1 d-flex flex-column">
              <img src="../assets/images/carimg2.jpg" alt="img2" />CAR(2)
            </div>
            <div class="car2a1 d-flex flex-column">
              <img src="../assets/images/carimg3.jpg" alt="img3" />CAR(3)
            </div>
          </div>
          <div
            class="section2a2 d-flex flex-row px-3 py-3 justify-content-center"
          >
            <div class="car2a1 d-flex flex-column">
              <img src="../assets/images/carimg4.jpg" alt="img4" />CAR(4)
            </div>
            <div class="car2a1 d-flex flex-column">
              <img src="../assets/images/carimg5.jpg" alt="img5" />CAR(5)
            </div>
            <div class="car2a1 d-flex flex-column">
              <img src="../assets/images/carimg6.jpg" alt="img6" />CAR(6)
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
</template>>


<style scoped>
@import "../assets/shiftstyle.css";
</style>

<script>
export default {
  methods: {
    readmore() {
      var dots = document.getElementById("dots");
      var more = document.getElementById("more");
      var btnText = document.getElementById("morebtn");

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        more.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        more.style.display = "inline";
      }
    },
  },
};
</script>