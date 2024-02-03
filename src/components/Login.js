export default function Login(){
    return(
<div class="container my-5">
  <div class="row justify-content-center login-container">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h4 style={{fontSize:"24px"}}>Log In to SwiftURL</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group" style={{textAlign: "left", fontSize:"10px"}}>
              <label class="my-2" for="username">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Enter your username" style={{fontSize:"10px"}}/>
            </div>
            <div class="form-group" style={{textAlign: "left", fontSize:"10px"}}>
              <label class="my-2" for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter your password" style={{fontSize:"10px"}}/>
            </div>
            <button type="submit" class="btn btn-dark btn-login btn-block my-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}