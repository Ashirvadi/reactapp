import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center brand-name">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <div id="contactsection">
                            <div class="mb-3">
                                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                            </div>

                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" />
                            </div>

                            <div class="mb-3">
                                <input type="mobile" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" />
                            </div>

                            <div class="mb-3">
                                <textarea class="form-control" placeholder="Write Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-10 mx-auto">
                        <div id="mapsection">
                            <iframe className="maps" title="location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3635689.793072721!2d80.8833819!3d27.141237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1633971232884!5m2!1sen!2sin"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;