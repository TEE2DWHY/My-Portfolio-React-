import React from "react";

function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <h5> <span className="numeric-01">01.</span> <span class="about-me-header"> About Me </span></h5>
                        <p className="p-2">Hello! My name is Tayo and I enjoy creating things that live on the internet. My
                            interest in web development started back in 2020 when I wondered how the internet worked and
                            decided to make my personal findings. It's been a rough ride as i tried out alot of stuffs
                            personally before a friend taught me a lot about HTML & CSS!
                            Fast-forward to today, and I’ve had the privilege of working on few projects. My main focus
                            these days is
                            building accessible, inclusive products and digital experiences for a variety of
                            client</p>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12"> <img class="fast-png" src="images/Code typing.gif" alt="fast-png" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About