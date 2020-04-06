import React, { Component } from "react"




export default class Login extends Component {
    render(){
        return(
            <div class="app flex-row align-items-center">
            <div class="container">
                <div class="justify-content-center row">
                    <div class="col-md-8">
                        <div class="card-group">
                            <div class="p-4 card">
                                <div class="card-body">
                                    <form class="">
                                        <h1>Login</h1>
                                        <p class="text-muted">Sign In to your account</p>
                                        <div class="mb-3 input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="icon-user">
                                                        </i>
                                                </span>
                                            </div>
                                            <input placeholder="Username" autocomplete="username" type="text" class="form-control"/>
                                        </div>
                                        <div class="mb-4 input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="icon-lock">
                                                    </i>
                                                </span>
                                            </div>
                                            <input placeholder="Password" autocomplete="current-password" type="password" class="form-control"/>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <button class="px-4 btn btn-primary">Login</button>
                                        </div>
                                        <div class="text-right col-6">
                                            <button class="px-0 btn btn-link">Forgot password?</button>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="text-white bg-primary py-5 d-md-down-none card" style={{width: "44%"}}>
                             <div class="text-center card-body">
                                 <div>
                                     <h2>Sign up</h2>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                      <a href="#/register">
                                          <button tabindex="-1" class="mt-3 btn btn-primary active">Register Now!</button>
                                      </a>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        </div>
        )
    }
}
