import React, {Component} from 'react'


const extra = {
	marginTop:'3rem',
	marginBottom:'4rem'
}

export default class Profile extends Component{
	render(){
		return(
			<main>
		<div className="container py-5">
			<div className="extra" style={extra}>
				<div className="card bg-dark mb-5">
					<div className="card-body">
				<h5 className="text-center text-white font-weight-bold">Edit your Profile</h5>
			</div>
			</div>
				<form>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label for="inputEmail4">Email</label>
							<input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
						</div>
						<div className="form-group col-md-6">
							<label for="inputPassword4">Password</label>
							<input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
						</div>
					</div>
					<div className="form-group">
						<label for="inputAddress">Address</label>
						<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
					</div>
					<div className="form-group">
						<label for="inputAddress2">Address 2</label>
						<input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label for="inputCity">City</label>
							<input type="text" className="form-control" id="inputCity"/>
						</div>
						<div className="form-group col-md-4">
							<label for="inputState">State</label>
							<select id="inputState" className="form-control">
								<option selected>Choose...</option>
								<option>...</option>
							</select>
						</div>
						<div className="form-group col-md-2">
							<label for="inputZip">Zip</label>
							<input type="text" className="form-control" id="inputZip"/>
						</div>
					</div>
					<div className="form-group">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="gridCheck"/>
							<label className="form-check-label" for="gridCheck">
								Check me out
							</label>
						</div>
					</div>
					<div className="row form-button justify-content-center">
					<button type="button" className="btn text-center btn-primary">Sign in</button>
				</div>
</form>
			</div>
		</div>
	</main>
		)
	}
}