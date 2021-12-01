<template>
<div>
    <div class="row">
            <!-- --------------------------------------row-1------------------------------------------------ -->
            <div class="maincontainer">
                <div class="container con1">
                    <div class="row1 d-flex row">
                        <div class="rowleft d-flex align-items-center col-lg-6 col-md-12 col-sm-12">
                            <div class="tollfree text-white"><i class="fa fa-phone fa-lg " aria-hidden="true"></i> TOLL-FREE : 80074438</div>
                            <div class="watsapp text-white pl-4"><i class="fa fa-whatsapp fa-lg " aria-hidden="true"></i> WATSAPP : +971 56 549 2707</div>
                        </div>
                        <div class="rowright d-flex text-white align-items-center justify-content-end col-lg-6 col-sm-12">
                            <div class="socialicons d-flex col-lg-12 col-sm-6 justify-content-end">
                                <i class="fa fa-facebook-official fa-lg pr-2" aria-hidden="true"></i>
                                <i class="fa fa-twitter-square fa-lg pr-2" aria-hidden="true"></i>
                                <i class="fa fa-instagram fa-lg pr-2" aria-hidden="true"></i>
                                <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                            </div>
                            <div class="dropdown">
                                <button type="button" class="btn btn-basic dropdown-toggle text-white" data-toggle="dropdown">
                                    English
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Hindi</a>
                                    <a class="dropdown-item" href="#">Kannada</a>
                                    <a class="dropdown-item" href="#">Spanish</a>
                                </div>
                            </div>
                            <div class="login">
                                <button type="button" class="btn text-white">Login</button>
                            </div>
                        </div>
                    </div>
                    <!-- ----------------------------------------------row-2------------------------------------- -->
                    <div class="row2 d-flex row">
                        <div class="rowleft2 d-flex text-white col-lg-6 col-md-12 col-sm-12">
                            <div class="about1 pl"><i class="bi bi-person-fill fa-lg"></i> ABOUT US</div>
                            <div class="offers1 pl-4"><i class="bi bi-percent fa-lg"></i>OFFERS</div>
                            <div class="contact1 pl-4"><i class="bi bi-at fa-lg"></i><router-link to="/howitworks" class="text-white text-decoration-none">CONTACT US</router-link></div>
                        </div>
                        <div class="rowright2 py-2 d-flex justify-content-end col-lg-6 col-sm-12">
                            <div class="inputbar opacity-50 text-white"><input type="search" class="form-control bg-dark text-white" placeholder="Search" aria-label="Search" aria-describedby="search-addon" /></div>
                            <div class="searchicon fa-lg pl-3 pt-2"><a href="#"><i class="fa fa-search text-white" style="color:grey"></i></a></div>
                        </div>
                    </div>
                </div>
                <!-----------------------------------------------header-form---------------------------------------->
                <div class="midcontainer d-flex flex-column align-items-center ">
                    <div class="shiftimage"><img src="../assets/images/carrental2.png"></div>
                    <div class="d-flex flex-row text-white">
                        <h3 class="col-lg-12 col-sm-12 text-center">
                            <div> Welcome To </div>
                            <div><b>SHIFT CAR RENTAL</b></div>
                        </h3>
                    </div>
                    <div class=" column ">
                        <div class="findacar "></div>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>


<style scoped>
    @import '../assets/shiftstyle.css';
</style>
