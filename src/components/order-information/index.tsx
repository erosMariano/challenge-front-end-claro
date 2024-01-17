import './styles.scss';

function OrderInformation() {
  return (
    <div className="container">
      <h2>Order Information</h2>
      <form className="form-order">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pl-0 pr-0 pr-md-2">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  placeholder="First"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="deliveryDate" className="form-label">
                  Delivery date
                </label>
                <input type="date" className="form-control" id="deliveryDate" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone<span className="text-danger">*</span>
                </label>
                <input
                  placeholder="### ### ####"
                  type="tel"
                  className="form-control"
                  id="phone"
                  required
                />
              </div>
            </div>

            <div className="col-md-6 pl-0 pr-0 pl-md-2 row-two">
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label"></label>
                <input
                  placeholder="Last"
                  type="text"
                  className="form-control"
                  id="lastname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="deliveryTime" className="form-label">
                  Preferred delivery time
                </label>
                <input type="time" className="form-control" id="deliveryTime" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
                <span className="desc-email">
                  To receive the complete receipt
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="mb-3 mt-5 pl-0 pr-0 col-md-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                placeholder="Street Address"
                type="text"
                className="form-control"
                id="address"
              />
            </div>

            <div className="mb-3 col-md-12 pl-0 pr-0">
              <input
                placeholder="Street Address Line 2"
                type="text"
                className="form-control"
                id="address2"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 pl-0 pr-0 pr-md-2">
              <div className="mb-3">
                <input
                  placeholder="City"
                  type="text"
                  className="form-control"
                  id="city"
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="Region"
                  type="text"
                  className="form-control"
                  id="region"
                />
              </div>
            </div>

            <div className="col-md-6 pl-0 pr-0 pl-md-2">
              <div className="mb-3">
                <input
                  placeholder="Postal / Zip Code"
                  type="text"
                  className="form-control"
                  id="postalCode"
                />
              </div>

              <div className="select-dropdown mb-3">
                <select>
                  <option>Country</option>
                  <option value="Option 2">2nd Option</option>
                  <option value="Option 3">Option Number 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <button type="submit" className="button-submit">
              Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OrderInformation;
