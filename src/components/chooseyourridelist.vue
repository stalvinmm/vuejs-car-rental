<template>
  <v-app>
      <!-- --------------------------hearder----------------------- -->
      <div>
        <h1 class="my-5 d-flex justify-content-center">
          CHOOSE YOUR<font class="text-info ml-2">RIDE</font>
        </h1>
      </div>

      <!-- -------------------------------card start-------------------------------- -->

      <div class="car-card-main">
        <div class="car-each">
          <v-card class="mx-auto" max-width="400">
            <v-list-item three-line>
              <v-list-item-content>
                <div>
                  <h6><b>Nissan</b></h6>
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  <h6>
                    <b><font class="text-info">AED425</font> /Per Day</b>
                  </h6>
                </v-list-item-title>
                <div>
                  <v-rating
                    v-model="rating"
                    background-color="white"
                    color="orange"
                    dense
                    half-increments
                    hover
                    size="18"
                  ></v-rating
                  >{{ rating }}
                </div>
              </v-list-item-content>
              <!-- -------------------car-card-image------------------------------------- -->
              <v-img
                class="mt-4"
                width="70px"
                src="https://www.pngall.com/wp-content/uploads/11/Tuning-Car-PNG-Photo.png"
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
  </v-app>
</template>

<script>
export default {
  data: () => ({
    rating: 4.3,
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
  width: 60vw;
}
</style>