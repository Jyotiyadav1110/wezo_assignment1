import React from 'react'
import './css/BillingAddress.css';
import LeftDashboard from './Sidemenu1';
import Sidemenu from './Sidemenu';
import Header from './Header';
// import eye from './icon/eye.svg'
function BillingAddress() {
    return (
        <>
            <div  className="main-container-billing-address">
                <LeftDashboard/>
                <Sidemenu/>
                <Header/>
         {/* <br/> */}
        <div className='bill-container'>
            <h2 className='billing-address-header'>Billing Address</h2>
            <div className='field-set group-field'>
                <div className='field'>
                    <label for="first-name">First Name</label>
                    <input id='first-name' />
                </div>
                <div className='field'>
                    <label for="last-name">Last Name</label>
                    <input id='last-name' />
                </div>
            </div>

            <div className='field rows-field'>
                <label for="customer-id ">Customer ID:</label>
                <input id='customer-id' />
            </div>
            <div className='field rows-field'>
                <label for="support-pin">Support PIN:</label>
                <div>
                    <input id='support-pin' type='password' />
                <span className='eye-icon'>
                    <img src={"eye"}/>
                </span>
                </div>
                
            </div>
            <div className='field rows-field'>
                <label for="primary-admin">Primary Admin</label>
                <input id='primary-admin' />
            </div>
            <div className='address-from-section'>
                <div className='field-set group-field'>
                    <div className='field'>
                        <label for="street-1">Street 1</label>
                        <input id='street-1' />
                    </div>
                    <div className='field'>
                        <label for="street-2">Street 2</label>
                        <input id='street-2' />
                    </div>
                </div>
                <div className='field-set option-field group-field'>
                    <div className='field'>
                        <label for="city">City</label>
                        <select value={""}>
                            <option></option>
                            <option>option-1</option>
                            <option>option-2</option>
                            <option>option-3</option>
                            <option>option-4</option>
                            <option>option-5</option>
                        </select>
                        {/* <input id='city' /> */}
                    </div>
                    <div className='field option-field group-field'>
                        <label for="state">State</label>
                        <select value={""}>
                            <option></option>
                            <option>option-1</option>
                            <option>option-2</option>
                            <option>option-3</option>
                            <option>option-4</option>
                            <option>option-5</option>
                        </select>
                        {/* <input id='state' /> */}
                    </div>
                </div>
                <div className='field-set group-field'>
                    <div className='field'>
                        <label for="zip-code">Zip Code</label>
                        <input id='zip-code' />
                    </div>
                    <div className='field'>
                        {/* <label for="zip-code">Zip Code</label>
                        <input id='zip-code' /> */}
                    </div>
                </div>
            </div>
            <div className='field rows-field'>
                <label for="phone-number">Phone Number:</label>
                <input id='phone-number' />
            </div>
            <div className='field rows-field'>
                <label for="gst-number">GST Number:</label>
                <input id='gst-number' />
            </div>
            <button className='submit-btn'>Submit</button>
        </div>
        </div>
        </>
    )
}

export default BillingAddress