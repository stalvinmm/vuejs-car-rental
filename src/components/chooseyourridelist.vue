<template>
  <v-app>
    <!-- --------------------------hearder----------------------- -->
    <div>
      <h1 class="my-5 d-flex justify-content-center">
        CHOOSE YOUR<font class="text-info ml-2">RIDE</font>
      </h1>
    </div>

    <!-- -------------------------------card start-------------------------------- -->

    <div class="card-container d-flex ">
      <div class="row car-card-main d-flex justify-content-center">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 car-each my-5"
        v-for="(rating_car, rating_index) in ratingcards"
              :key="rating_index"
        >
          <v-card class="mx-auto" max-width="360"
          >
            <v-list-item three-line
            >
              <v-list-item-content>
                <div>
                  <h6><b>{{ rating_car.car_name }}</b></h6>
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  <h6>
                    <b><font class="text-info">{{ rating_car.car_cost }}</font> /Per Day</b>
                  </h6>
                </v-list-item-title>
                <div>
                  <v-rating
                    v-model="rating_car.rating"
                    background-color="white"
                    color="orange"
                    dense
                    half-increments
                    hover
                    size="18"
                  ></v-rating
                  >{{ rating_car.rating }}
                </div>
              </v-list-item-content>
              <!-- -------------------car-card-image------------------------------------- -->
              <v-img
                class="mt-4"
                width="60px"
                height="100px"
                :src="rating_car.car_card_image"
              ></v-img>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text class="bg-info text-white">
                BOOK NOW
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <!-- ------------------------------------------car-card-end---------------------------- -->
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    ratingcards:[
      {
        rating: 2.5,
        car_name:"Chrysler",
        car_cost:"AED425",
        car_card_image:"https://pngimg.com/uploads/chrysler/chrysler_PNG56.png",
      },
      {
        rating: 3,
        car_name:"BMW",
        car_cost:"AED425",
        car_card_image:"https://freepngimg.com/thumb/car/60643-car-z4-sdrive35is-bmw-2015-convertible.png",
      },
      {
        rating: 5,
        car_name:"Maserati",
        car_cost:"AED425",
        car_card_image:"https://freepngimg.com/thumb/car/93811-car-levante-maserati-2018-vehicle-free-hd-image.png",
      },
      {
        rating: 4,
        car_name:"Mercedes",
        car_cost:"AED425",
        car_card_image:"https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
      },
      {
        rating: 3.5,
        car_name:"Nissan",
        car_cost:"AED425",
        car_card_image:"https://www.pngall.com/wp-content/uploads/11/Tuning-Car-PNG-Photo.png",
      },
      {
        rating: 2,
        car_name:"BMW m40i",
        car_cost:"AED425",
        car_card_image:"https://freepngimg.com/thumb/car/58064-utility-sport-car-2018-m40i-vehicle-x3.png",
      },
      {
        rating: 4.5,
        car_name:"Benz",
        car_cost:"AED425",
        car_card_image:"https://freepngimg.com/thumb/car/74698-car-amg-sls-bmw-m3-mercedes-benz-sports.png",
      },
      {
        rating: 5,
        car_name:"Romeo",
        car_cost:"AED425",
        car_card_image:"https://pngimg.com/uploads/alfa_romeo/alfa_romeo_PNG70.png",
      },
      {
        rating: 4,
        car_name:"Audi",
        car_cost:"AED425",
        car_card_image:"https://pngimg.com/uploads/audi/audi_PNG1741.png",
      },
      
    ]
  }),
};
</script>

<style scoped>
.v-rating {
  max-width: 100%;
  white-space: nowrap;
  display: contents;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0px 3px 15px 5px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
.car-card-main {
  display: flex;
  padding: 20px 0px;
}
.car-each {
  width: 30vw;
}

</style>