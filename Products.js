import React from 'react'

function Products() {



    return (
        <>
            <div class="container-fluid mt-5 bg-zinc-50 font-serif ">
                <div class="row">
                    <div class="col-md-5">
                        <div class="carousel slide" data-ride="carousel" id="carousel-1 w-full">
                            <div class="carousel-inner flex w-1/2" role="listbox">


                                {/* <div className="m-2 grid-cols-2 gap-3 h-48">
                                    <Carousel>
                                        <img src="https://i.imgur.com/U46TQz6.jpg" alt="..." />
                                        <img src="https://i.imgur.com/YOWv57X.jpg" alt="..." />
                                        <img src="https://i.imgur.com/gLYZpMo.jpg" alt="..." />


                                    </Carousel>
                                </div> */}


                                <div class="carousel-item active flex ">
                                    <img class="w-100 d-block" src="https://i.imgur.com/U46TQz6.jpg" alt="SlideImage" loading="lazy" />
                                </div>
                                <div class="carousel-item"> 
                                    <img class=" w-100 d-block" src="https://i.imgur.com/YOWv57X.jpg" alt="Slide Image" />
                                 </div> 
                                 <div class="carousel-item"> 
                                    <img class=" w-100 d-block" src="https://i.imgur.com/gLYZpMo.jpg" alt="Slide Image" />
                                </div>
                            </div>
                            <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon font-size-sm"></span>
                                <span class="sr-only">Previous</span></a>
                                <a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a>
                            </div>
                            <ol class="carousel flex">
                                <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-1" data-slide-to="1"></li>
                                <li data-target="#carousel-1" data-slide-to="2"></li>
                            </ol>
                        </div>
                    </div>

                    <div class="col-md-7 ">
                        <h4>Macbook air 8GB RAM/ 256GB SSD</h4>
                        <div className="price"><span className="mr-2"><i class="fa fa-rupee text-success"></i>&nbsp;59,999</span>
                            <span className="mr-2cut">65000</span>
                            <span className="text-success">25% OFF</span></div>
                        <div class="d-flex flex-row">
                            <div className="icons mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i></div><span>1200 ratings &amp; 564 reviews</span>
                        </div>
                        <div className="flex align-items-center mt-4 offers mb-1"><i class="fa fa-check-square-o mt-1" /><span class="ml-1 font-weight-bold">Bank Offers</span><span className="ml-1">20% Instant Discount on SBI Credit Cards<br /></span></div>
                        <div className="flex align-items-center offers mb-1"><i class="fa fa-check-square-o mt-1"></i>
                            <span class="ml-1 font-weight-bold">Bank Offers</span>
                            <span className="ml-1">5% Unlimited Cashback on Axis Bank Credit Card<br /></span></div>
                        <div className="flex align-items-center offers mb-1"><i class="fa fa-check-square-o mt-1"></i><span class="ml-1 font-weight-bold">Bank Offers</span><span class="ml-1">Extra 5% off* with Axis Bank Buzz Credit Card<br /></span></div>
                        <div className="flex align-items-center offers"><i className="fa fa-check-square-o mt-1"></i><span class="ml-1 font-weight-bold">Bank Offers</span>
                            <span className="ml-1">20% Instant Discount on pay with&nbsp;&nbsp;google wallet<br /></span></div>
                        <div className="flex align-items-center mt-5 delivery"><i className="fa fa-map-marker"></i><span className="ml-2">Delivery by 23 Jul, Tuesday<br /></span><span class="ml-2 mr-2">|<br /></span><span class="ml-2 mr-2 text-success">FREE<br /></span></div>
                        <hr />
                        <div className="d-flex align-items-center mt-2"> <label className="radio">
                            <input type="radio" name="ram" value="128GB" checked /> <span>128GB</span> </label> <label class="radio">
                                <input type="radio" name="ram" value="256GB" /> <span>256GB</span> </label> <label class="radio">
                                <input type="radio" name="ram" value="256GB" /> <span>512GB</span> </label> </div>
                        <div><span className="font-weight-bold">Seller:</span><span class="ml-2">Sargam Electronics</span></div>
                        <div class="mt-3">
                            <button className="mr-2 bg-orange-400 " type="button">ADD TO CART</button>
                            <button className="btn btn-success bg-orange-400" type="button">BUY NOW</button></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Products;