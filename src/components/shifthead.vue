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
                <i class="fa fa-whatsapp fa-lg" aria-hidden="true"></i> WATSAPP
                : +971 56 549 2707
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
              <!-- ------------------------register section------------------ -->
              <div>
                  <div class="register-btn-head">

                  <div class="text-center">
                    <v-dialog v-model="dialog" width="200">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="btn btn-light"
                          color="text-capitalize"
                          dark
                          v-bind="attrs"
                          v-on="on"
                        >
                          Register
                        </v-btn>
                      </template>

                      <v-card>
                        <!-- --------------------------------------------------------------------------- -->

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
          <!-- ----------------------------------------------search section------------------------------------- -->
          <div class="row2 d-flex row">
            <div
              class="rowleft2 d-flex text-white col-lg-6 col-md-12 col-sm-12"
            >
              <div class="about1 pl">
                <i class="bi bi-house fa-lg"></i
                ><router-link to="/" class="text-decoration-none text-white"
                  >HOME</router-link
                >
              </div>
              <div class="about1 pl-4">
                <i class="bi bi-person-fill fa-lg"></i>ABOUT US
              </div>
              <div class="offers1 pl-4">
                <i class="bi bi-percent fa-lg"></i>OFFERS
              </div>
              <div class="contact1 pl-4">
                <i class="bi bi-at fa-lg"></i
                ><router-link
                  to="/howitworks"
                  class="text-white text-decoration-none"
                  >CONTACT US</router-link
                >
              </div>
            </div>
            <div
              class="
                rowright2
                py-2
                d-flex
                justify-content-end
                col-lg-6 col-sm-12
              "
            >
              <div>
                <div class="inputbar">
                  <input
                    type="search"
                    class="form-control text-dark"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div class="searchicon fa-lg pl-3 pt-2">
                <a href="#"
                  ><i class="fa fa-search text-white" style="color: grey"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="midcontainer d-flex flex-column align-items-center">
          <div class="d-flex flex-row text-white">
            <h3 class="col-lg-12 col-sm-12 text-center">
              <div class="mt-4">Welcome To</div>
              <div><b>SHIFT CAR RENTAL</b></div>
            </h3>
          </div>
          <div class="column">
            <div class="findacar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.containermain {
  background-color: #dedede;
  border-radius: 20px;
}
.v-application--wrap {
  min-height: 0vh !important;
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