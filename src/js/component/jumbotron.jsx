import React from "react";

export function Jumbotron() {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col p-0">
                <div className="p-5 mb-4 bg-light rounded-bottom pt-1">
                    <div className="container-fluid pt-1 pb-4">
                        <h1 className="display-5 fw-bold">A Warm Welcome</h1>
                        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit atque dolore officiis neque repellendus ad, quam tempora laboriosam nesciunt exercitationem quod distinctio laborum excepturi, molestiae ipsum provident? Nostrum, quos maxime?</p>
                        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
                    </div>
                </div>
            </div>
        </div>


    );
}
