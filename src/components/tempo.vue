<template>
<v-app>
  <div class="text-center">
    <v-dialog v-model="dialog" width="200" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="transparent" dark v-bind="attrs" v-on="on" >
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
                    <label for="validationServer01" class="form-label"
                      >First name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="validationServer01"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-4">
                    <label for="validationServer02" class="form-label"
                      >Last name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="validationServer02"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label"
                      >Username</label
                    >
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend3"
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
                    <label for="validationServer03" class="form-label"
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
                    <label for="validationServer04" class="form-label"
                      >State</label
                    >
                    <select
                      class="form-select"
                      id="validationServer04"
                      aria-describedby="validationServer04Feedback"
                      required
                    >
                      <option selected disabled value="">Choose...</option>
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
                    <label for="validationServer05" class="form-label"
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
                      <label class="form-check-label" for="invalidCheck3">
                        Agree to terms and conditions
                      </label>
                      <div id="invalidCheck3Feedback" class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <v-divider></v-divider>
                  <v-card-actions>
                  <div class="col-12 d-flex justify-content-center">
                    <v-btn class="btn btn-info mx-2" type="submit" @click="dialog = false">Register</v-btn>
                    <v-btn class="btn btn-info mx-2" type="submit" @click="dialog = false">Close</v-btn>
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
</v-app>
</template>

<style>
.containermain {
  background-color: #dedede;
  border-radius: 20px;
}
.v-application--wrap {
    position: absolute !important;
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
