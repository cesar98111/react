const Formulario = () =>{
    return(
        <div className="row">
        <div className="col-md-9 m-auto box mt-6">
          <div className="card card-border">
            <div className="card-header text-white bg-header">
              <h5>
                <i className="bi bi-file-text me-2"></i>
                Registro de usuario
              </h5>
            </div>
            <div className="card-body">
              <form className="row g-3">
                <div className="col-6">
                  <label className="form-label fw-500" htmlFor="name">
                    Nombre
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
      
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Nombre"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <label className="form-label fw-500" htmlFor="surname">
                    Apellidos
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
      
                    <input
                      type="text"
                      className="form-control"
                      name="surname"
                      id="surname"
                      placeholder="Apellidos"
                    />
                  </div>
                </div>
      
                <div className="col-6">
                  <label className="form-label fw-500" htmlFor="email">
                    Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>
      
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <label className="form-label fw-500" htmlFor="password">
                    Contraseña
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-key"></i>
                    </span>
      
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Contraseña"
                    />
                  </div>
                </div>
      
                <div className="col-12">
                  <label className="form-label fw-500" htmlFor="address">
                    Dirección
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-door-open"></i>
                    </span>
      
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      id="address"
                      placeholder="Calle María Auxiliadora, 14"
                    />
                  </div>
                </div>
      
                <div className="col-6">
                  <label className="form-label fw-500" htmlFor="state">
                    Provincia
                  </label>
                  <div className="input-group">
                    <select className="form-select" name="prov" id="prov">
                      <option value="SC">Santa Cruz de Tfe</option>
                      <option value="LP">Las Palmas de Gran Canaria</option>
                      <option value="MA">Madrid</option>
                      <option value="BN">Barcelona</option>
                    </select>
                  </div>
                </div>
                <div className="col-3">
                  <label className="form-label fw-500" htmlFor="age">
                    Edad
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      id="age"
                      min="18"
                      max="99"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <label className="form-label fw-500" htmlFor="date">
                    Fecha
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      id="date"
                      min="01-01-2021"
                      max="31-12-2021"
                    />
                  </div>
                </div>
      
                <div className="col-12">
                  <label className="form-label fw-500" htmlFor="date">
                    Seleccione el tipo de vehículo que usa
                  </label>
                  <div className="input-group">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="vehicle"
                        id="vehicle1"
                        value="coche"
                      />
                      <label className="form-check-label" htmlFor="agree">
                        Coche
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="vehicle"
                        id="vehicle2"
                        value="motocicleta"
                      />
                      <label className="form-check-label" htmlFor="agree">
                        Motocicleta
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="vehicle"
                        id="vehicle3"
                        value="bicicleta"
                      />
                      <label className="form-check-label" htmlFor="agree">
                        Bicicleta
                      </label>
                    </div>
                  </div>
                </div>
      
                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="agree"
                      id="agree"
                    />
                    <label className="form-check-label" htmlFor="agree">
                      Estoy de acuerdo con los términos y condiciones
                    </label>
                  </div>
                </div>
      
                <div className="col-12 text-center">
                  <button
                    className="btn btn-primary btn-lg mt-3 col-md-4"
                    type="submit"
                  >
                    Registro
                    <i className="bi bi-pencil ms-2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Formulario;