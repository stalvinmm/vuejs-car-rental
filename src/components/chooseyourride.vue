<template>
<<<<<<< HEAD
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
=======
  <v-app>
    <!-- <div class="row"> -->
    <div class="sectioncontainer1 row">
      <div class="section1a row col-lg-5 col-md-6 col-sm-12">
        <div class="my-5 ml-5 pl-5">
          <div class="h4">Explore an Array of Best Deals on</div>
          <div class="text-info display-6 my-5">"Rent a Car in Dubai".</div>
          <div>
            <p style="font-size: 14px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              perspiciatis eius itaque accusamus natus illum debitis est unde
              vitae quidem sapiente harum eaque voluptate odit modi deserunt,
              consequuntur animi in voluptatibus <span id="dots">...</span
              ><span id="more">
                et! Dicta ab dolorum similique accusamus ratione esse optio,
                aperiam totam illo ipsa unde est nam a aliquid
                reprehenderit?Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Autem, hic. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Expedita error assumenda quis
                laborum fugiat porro ut libero dolorum quidem accusamus! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                non quis deleniti, voluptatum quibusdam veritatis repellendus
                laudantium ad optio vel!</span
              >
            </p>
            <button class="btn btn-secondary" @click="readmore()" id="morebtn">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div
        class="
          section2a
          row
          d-flex
          flex-column
          py-5
          col-lg-7 col-md-6 col-sm-12
        "
      >
        <div class="display-5">
          CHOOSE YOUR
          <font class="text-info">RIDE</font>
        </div>
        <!-- ---------------------------------carousel start------------------------------------------- -->
        <div class="slider">
          <v-sheet class="mx-auto" max-width="100%">
            <v-slide-group
              v-model="model"
              class="pa-4"
              active-class="success"
              show-arrows
              prev-icon="fa-chevron-circle-left"
              next-icon="fa-chevron-circle-right"
            >
              <v-slide-item
                v-for="(carimg, carindex) in carimages"
                :key="carindex"
              >
                <v-card class="ma-5" height="350" width="190">
                  <v-row class="fill-height" align="center" justify="center">
                    <!-- ----------------------------------------------------------------- -->
                    <img 
                    class="car-img-row" 
                    :src="carimg.car_img1" 
                    alt="car" />
                    <p>
                      {{ carimg.car_type1
                      }}<font class="text-info ml-1"
                        >({{ carimg.car_count1 }})</font
                      >
                    </p>
                    <!-- ---------------------------------------------------------------- -->
                    <img
                      class="car-img-row"
                      :src="carimg.car_img2"
                      alt="model"
                    />
                    <p>
                      {{ carimg.car_type2
                      }}<font class="text-info ml-1"
                        >({{ carimg.car_count2 }})</font
                      >
                    </p>

                    <!-- ---------------------------------------------------------------------------- -->
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
        </div>
        <!-- ---------------------------------carousel end------------------------------------------- -->
      </div>
    </div>
    <!-- </div> -->
  </v-app>
>>>>>>> 89f2afed779681a38bb51ac9f64b73588480f260
</template>>


<style scoped>
@import "../assets/shiftstyle.css";
<<<<<<< HEAD
=======

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%),
    0px 0px 0px 0px rgb(0 0 0 / 0%);
}
.car-img-row {
  height: 150px;
}
>>>>>>> 89f2afed779681a38bb51ac9f64b73588480f260
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
<<<<<<< HEAD
=======
  data: () => ({
    carimages: [
      {
        car_type1: "Small",
        car_count1: "45",
        car_type2: "Sedan",
        car_count2: "48",
        car_img1:
          "https://freepngimg.com/thumb/car/93811-car-levante-maserati-2018-vehicle-free-hd-image-thumb.png",
        car_img2:
          "https://freepngimg.com/thumb/car/60643-car-z4-sdrive35is-bmw-2015-convertible-thumb.png",
      },
      {
        car_type1: "Lux",
        car_count1: "58",
        car_type2: "Sport",
        car_count2: "11",
        car_img1:
          "https://freepngimg.com/thumb/car/1-2-car-png-picture-thumb.png",
        car_img2:
          "https://freepngimg.com/thumb/car/7-2-car-free-png-image-thumb.png",
      },
      {
        car_type1: "Long",
        car_count1: "30",
        car_type2: "Electric",
        car_count2: "29",
        car_img1: "https://freepngimg.com/thumb/car/11-2-car-picture-thumb.png",
        car_img2:
          "https://freepngimg.com/thumb/car/9-2-car-high-quality-png-thumb.png",
      },
      {
        car_type1: "Coupe",
        car_count1: "15",
        car_type2: "Small Sedan",
        car_count2: "12",
        car_img1:
          "https://freepngimg.com/thumb/car/60643-car-z4-sdrive35is-bmw-2015-convertible-thumb.png",
        car_img2:
          "https://freepngimg.com/thumb/car/58064-utility-sport-car-2018-m40i-vehicle-x3-thumb.png",
      },
      {
        car_type1: "Station",
        car_count1: "70",
        car_type2: "Wagon",
        car_count2: "36",
        car_img1:
          "https://freepngimg.com/thumb/car/58029-wide-series-aero-sports-m6-bmw-car-thumb.png",
        car_img2:
          "https://freepngimg.com/thumb/car/77321-image,-series-car-dealership-bmw-vehicle-white-thumb.png",
      },
      {
        car_type1: "Hatchback",
        car_count1: "89",
        car_type2: "Convertable",
        car_count2: "08",
        car_img1: "https://freepngimg.com/thumb/car/4-2-car-png-hd-thumb.png",
        car_img2:
          "https://freepngimg.com/thumb/car/3-2-car-free-download-png-thumb.png",
      },
      {
        car_type1: "Mini",
        car_count1: "58",
        car_type2: "Pickup",
        car_count2: "19",
        car_img1:
          "https://freepngimg.com/thumb/car/74698-car-amg-sls-bmw-m3-mercedes-benz-sports-thumb.png",
        car_img2:
          "https://freepngimg.com/thumb/car/93811-car-levante-maserati-2018-vehicle-free-hd-image-thumb.png",
      },
    ],
  }),
>>>>>>> 89f2afed779681a38bb51ac9f64b73588480f260
};
</script>