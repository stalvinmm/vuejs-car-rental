<template>
  <div>
    <div class="row">
      <!-- --------------------------------------socio-media section------------------------------------------------ -->
      <div class="maincontainer">
        <div class="container con1">
          <div class="row1 d-flex row">
            <div
              class="
                rowleft
                d-flex
                align-items-center
                col-lg-6 col-md-12 col-sm-12
              "
            >
              <div class="tollfree text-white">
                <i class="fa fa-phone fa-lg" aria-hidden="true"></i> TOLL-FREE :
                80074438
              </div>
              <div class="watsapp text-white pl-4">
                <img
                  src="https://img.icons8.com/color/38/000000/whatsapp--v1.png"
                />+971 56 549 2707
              </div>
            </div>
            <div
              class="
                rowright
                d-flex
                text-white
                align-items-center
                justify-content-end
                col-lg-6 col-sm-12
              "
            >
              <div
                class="
                  socialicons
                  d-flex
                  col-lg-12 col-sm-6
                  justify-content-end
                "
              >
                <i
                  class="fa fa-facebook-official fa-lg pr-2"
                  aria-hidden="true"
                ></i>
                <i
                  class="fa fa-twitter-square fa-lg pr-2"
                  aria-hidden="true"
                ></i>
                <i class="fa fa-instagram fa-lg pr-2" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
              </div>
              <div class="dropdown">
                <button
                  type="button"
                  class="headerbtn btn btn-basic dropdown-toggle text-white"
                  data-toggle="dropdown"
                >
                  English
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Hindi</a>
                  <a class="dropdown-item" href="#">Kannada</a>
                  <a class="dropdown-item" href="#">Spanish</a>
                </div>
              </div>
              <!-- ------------------------register section start------------------ -->
              <div>
                <div class="register-btn-head">
                  <div class="text-center">
                    <v-dialog v-model="dialog" width="200" >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        id="register-btn-tr"
                          class="btn btn-light"
                          color="text-capitalize"
                          dark
                          v-bind="attrs"
                          v-on="on"
                        >
                          Register
                        </v-btn>
                      </template>

                        <!-- ------------------------------------register form--------------------------------------- -->
                      <v-card>

                        <v-row justify="center">
                          <v-dialog v-model="dialog" persistent>
                            <div class="loginbackground">
                              <v-container class="containermain">
                                <form class="row g-3">
                                  <div class="col-md-4">
                                    <label
                                      for="validationServer01"
                                      class="form-label"
                                      >First name</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationServer01"
                                      required
                                    />
                                    <div class="valid-feedback">
                                      Looks good!
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <label
                                      for="validationServer02"
                                      class="form-label"
                                      >Last name</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationServer02"
                                      required
                                    />
                                    <div class="valid-feedback">
                                      Looks good!
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <label
                                      for="validationServerUsername"
                                      class="form-label"
                                      >Username</label
                                    >
                                    <div class="input-group has-validation">
                                      <span
                                        class="input-group-text"
                                        id="inputGroupPrepend3"
                                        >@</span
                                      >
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="validationServerUsername"
                                        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                        required
                                      />
                                      <div
                                        id="validationServerUsernameFeedback"
                                        class="invalid-feedback"
                                      >
                                        Please choose a username.
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <label
                                      for="validationServer03"
                                      class="form-label"
                                      >City</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationServer03"
                                      aria-describedby="validationServer03Feedback"
                                      required
                                    />
                                    <div
                                      id="validationServer03Feedback"
                                      class="invalid-feedback"
                                    >
                                      Please provide a valid city.
                                    </div>
                                  </div>
                                  <div class="col-md-3">
                                    <label
                                      for="validationServer04"
                                      class="form-label"
                                      >State</label
                                    >
                                    <select
                                      class="form-select"
                                      id="validationServer04"
                                      aria-describedby="validationServer04Feedback"
                                      required
                                    >
                                      <option selected disabled value="">
                                        Choose...
                                      </option>
                                      <option>State1</option>
                                      <option>State2</option>
                                      <option>State3</option>
                                    </select>
                                    <div
                                      id="validationServer04Feedback"
                                      class="invalid-feedback"
                                    >
                                      Please select a valid state.
                                    </div>
                                  </div>
                                  <div class="col-md-3">
                                    <label
                                      for="validationServer05"
                                      class="form-label"
                                      >Zip</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationServer05"
                                      aria-describedby="validationServer05Feedback"
                                      required
                                    />
                                    <div
                                      id="validationServer05Feedback"
                                      class="invalid-feedback"
                                    >
                                      Please provide a valid zip.
                                    </div>
                                  </div>
                                  <div class="col-12">
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="invalidCheck3"
                                        aria-describedby="invalidCheck3Feedback"
                                        required
                                      />
                                      <label
                                        class="form-check-label"
                                        for="invalidCheck3"
                                      >
                                        Agree to terms and conditions
                                      </label>
                                      <div
                                        id="invalidCheck3Feedback"
                                        class="invalid-feedback"
                                      >
                                        You must agree before submitting.
                                      </div>
                                    </div>
                                  </div>
                                  <v-divider></v-divider>
                                  <v-card-actions>
                                    <div
                                      class="
                                        col-12
                                        d-flex
                                        justify-content-center
                                      "
                                    >
                                      <v-btn
                                        class="btn btn-success mx-2"
                                        type="submit"
                                        @click="dialog = false"
                                        >Register</v-btn
                                      >
                                      <v-btn
                                        class="btn btn-info mx-2"
                                        type="submit"
                                        @click="dialog = false"
                                        >Close</v-btn
                                      >
                                    </div>
                                  </v-card-actions>
                                </form>
                              </v-container>
                            </div>
                          </v-dialog>
                        </v-row>

                        <!-- ---------------------------------------------------------------------------------- -->
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </div>
              <!-- --------------------------------------------------register section end------------------------ -->
            </div>
          </div>
          <!-- ----------------------------------------------about/offers section------------------------------------- -->

          <div class="row2 d-flex row justify-content-between">
            <div
              class="
                abouthead
                rowleft2
                d-flex
                text-white
                col-lg-6 col-md-12 col-sm-12
              "
            >
              <div class="aboutbg"></div>
              <div class="about1 pl"><i class="bi bi-house fa-lg"></i>HOME</div>
              <div class="about1 pl-4">
                <i class="bi bi-person-fill fa-lg"></i>ABOUT US
              </div>
              <div class="offers1 pl-4">
                <i class="bi bi-percent fa-lg"></i>OFFERS
              </div>
              <div class="contact1 pl-4">
                <i class="bi bi-at fa-lg"></i>CONTACT US
              </div>
            </div>

            <!-- -----------------------------searchbar start-------------------------------------------- -->

            <nav class="nav-bar d-flex w-auto">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="search-btn-tr"
                />

                <!-- ----button--- -->
                <button>
                  <div class="searchicon fa-lg">
                <a href="#"
                  ><i class="fa fa-search text-white" style="color: grey"></i
                ></a>
                  </div>
                </button>
                <!-- ----button--- -->
              </form>
            </nav>

            <!-- ----------------searchsection end------------------------------------ -->
          </div>
        </div>

        <div class="midcontainer d-flex flex-column align-items-center">
          <div class="d-flex flex-row text-white">
            <div class="col-lg-12 col-sm-12 text-center">
              <div class="mt-5 shift-header-image">
                <img src="../assets/images/carrental2.png" alt="shift image" />
              </div>
              <p class="display-6">Welcome to <b>SHIFT CAR RENTAL</b></p>
            </div>
          </div>
          <div class="column">
            <div class="findacar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.containermain {
  background-color: #dedede;
  border-radius: 20px;
}
.shift-header-image img {
  width: 300px;
}
.abouthead {
  position: relative;
  z-index: 1;
}
.aboutbg {
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 50%;
  width: 455px;
  height: 100%;
  border-radius: 20px;
}

.nav-bar{
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
}
#search-btn-tr{
  background-color: transparent;
  border: none;
  color: white;
}
#register-btn-tr{
      border: none;
    background-color: transparent;
}
::placeholder {
  color: white;
}

</style>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>