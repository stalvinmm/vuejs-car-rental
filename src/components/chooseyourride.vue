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
            consequuntur animi in voluptatibus <span id="dots">...</span
            ><span id="more">
              et! Dicta ab dolorum similique accusamus ratione esse optio,
              aperiam totam illo ipsa unde est nam a aliquid
              reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Autem, hic. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Expedita error assumenda quis laborum fugiat
              porro ut libero dolorum quidem accusamus! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Consequatur non quis deleniti,
              voluptatum quibusdam veritatis repellendus laudantium ad optio
              vel!</span
            >
          </p>
          <button class="btn btn-secondary" @click="readmore()" id="morebtn">
            Read More
          </button>
        </div>
      </div>
    </div>
    <div
      class="section2a row d-flex flex-column py-5 col-lg-6 col-md-6 col-sm-12"
    >
      <h1>
        CHOOSE YOUR
        <font class="text-info">RIDE</font>
      </h1>
      <!-- ---------------------------------carousel start------------------------------------------- -->
      <div class="slider">
        <v-app>
          <v-sheet class="mx-auto" max-width="550">
            <v-slide-group
              v-model="model"
              class="pa-4"
              active-class="success"
              show-arrows
            >
              <v-slide-item
                v-for="n in 8"
                :key="n"
                v-slot="{ active}"
              >
                <v-card
                  class="ma-5"
                  height="200"
                  width="90"
                  
                >
                  <v-row class="fill-height" align="center" justify="center">
                    <a href="/"><img src="../assets/images/carimg1.jpg" ></a>
                    <p>SUV <font class="text-info">(75)</font></p>
                    <a href="/"><img src="../assets/images/carimg2.jpg" ></a>
                    <p>SEDAN <font class="text-info">(78)</font></p>
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="white"
                        size="50"
                        v-text="'mdi-close-circle-outline'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-app>
      </div>
      <!-- ---------------------------------carousel end------------------------------------------- -->
    </div>
  </div>
  <!-- </div> -->
</template>>


<style scoped>
@import "../assets/shiftstyle.css";

.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%);
}

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