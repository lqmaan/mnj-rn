import React from "react";
import "../../style/style.scss";
import { LiaSearchSolid } from "react-icons/lia";
import { FaTwitch } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { editLogo } from "../../assets";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiSolidMinusCircle } from "react-icons/bi";
// import  ImageComponent from '../assets/ImageComponent'

const ListOrder = () => {
  return (
    <div class="phone">
      <header class="header">
        <FaAngleLeft size={25} />

        <div class="header-title">Sesuai nama resto</div>
        <div class="header-buttons">
          <button class="avatar">
            <FaTwitch size={25} />
          </button>
        </div>
      </header>

      <div class="header-title-list">
        <u>List Order</u>
      </div>

      <footer class="menu">
        <div class="menu-inner-list">
          <h2 style={{ color: "#1d1d1d" }}>Nama pesanan</h2>
          <br />
          <div class="list-text">
            <p style={{ color: "#1d1d1d" }}>Note</p>
          </div>
          <div class="list-price">
            <p style={{ color: "#1d1d1d" }}>Rp 20.000</p>
          </div>
          <div class="list-edit">
            <img src={editLogo} style={{ width: 70, height: 20 }} alt="" />
          </div>

          <button class="notifications-list">
            <img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
          </button>
          <div class="search-inner-list">
            <button class="search-button-list1">
              <BiSolidMinusCircle size={35} color="#2AB3C0" />
            </button>{" "}
            &nbsp;
            <h4>1</h4> &nbsp;
            <button class="search-button-list2">
              <AiFillPlusCircle size={35} color="#2AB3C0" />
            </button>
            {/* <input type="text" class="search-input" placeholder="Search Menu" /> */}
          </div>
        </div>
      </footer>
      <hr></hr>
      <footer class="menu">
        <div class="menu-inner-list">
          <h2 style={{ color: "#1d1d1d" }}>Nama pesanan</h2>
          <br />
          <div class="list-text">
            <p style={{ color: "#1d1d1d" }}>Note</p>
          </div>
          <div class="list-price">
            <p style={{ color: "#1d1d1d" }}>Rp 20.000</p>
          </div>
          <div class="list-edit">
            <img src={editLogo} style={{ width: 70, height: 20 }} alt="" />
          </div>

          <button class="notifications-list">
            <img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
          </button>
          <div class="search-inner-list">
            <button class="search-button-list1">
              <BiSolidMinusCircle size={35} color="#2AB3C0" />
            </button>{" "}
            &nbsp;
            <h4>1</h4> &nbsp;
            <button class="search-button-list2">
              <AiFillPlusCircle size={35} color="#2AB3C0" />
            </button>
            {/* <input type="text" class="search-input" placeholder="Search Menu" /> */}
          </div>
        </div>
      </footer>
      <div>
        <br />
        <hr />
        <div class="menu-add-list">
          <div>
            <h3>Need Anything else ?</h3>
            <br />
            <h5>Add other food, if you want.</h5>
          </div>
          <p class="addmore">Add more</p>
        </div>
        <hr />
        <div class="menu-customer">
          <div>
            <h3>Customer Details</h3>
          </div>

          <div class="search-inner-customer">
            <div style={{ height: 10 }}></div>
            <h6 class="noted-customer">
              Name<span style={{ color: "red" }}>*</span>
            </h6>
            <input
              type="text"
              class="search-input-customer"
              placeholder="Please input your name"
            />
          </div>
          <div style={{ height: 20 }}></div>
          <div class="search-inner-customer">
            <div style={{ height: 10 }}></div>
            <h6 class="noted-customer">
              Phone Number<span style={{ color: "red" }}>*</span>
            </h6>
            <input
              type="text"
              class="search-input-customer"
              placeholder="ex: 08xx-xxxx-xxxx"
            />
          </div>
          <div style={{ height: 20 }}></div>
          <div class="search-inner-customer">
            <div style={{ height: 10 }}></div>
            <h6 class="noted-customer">Email (Optional)</h6>
            <input
              type="email"
              class="search-input-customer"
              placeholder="ex: test@gmail.com"
            />
          </div>
          <div style={{ height: 20 }}></div>
          <div class="search-inner-customer">
            <div style={{ height: 10 }}></div>
            <h6 class="noted-customer">
              Table Number <span style={{ color: "red" }}>*</span>
            </h6>
            <input
              type="text"
              class="search-input-customer"
              placeholder="Please input your table number"
            />
          </div>
        </div>
        <hr></hr>

        <div class="menu-add-coupon">
          <div>
            <h3>Do you have a coupon ?</h3>
            <br />
            <div class="search-inner-customer">
              <div style={{ height: 15 }}></div>

              <input
                type="text"
                class="search-input-customer"
                placeholder="Input Coupon"
              />
            </div>
          </div>
          <p class="apply">Apply</p>
        </div>
        <hr />

        <div class="menu-add-coupon">
          <div>
            <h3>Payment Summary</h3>
            <br />
            <div class="search-inner-customer">
              <div style={{ height: 15 }}></div>
              {/* <div class="search-inner-payment">
			    <h6 class="left">Price</h6>
			    <h6 class="right">Rp 20.000</h6>
            </div> */}
            </div>

            <div class="container">
              <div class="left">Price</div>
              <div class="right">Rp 20.000</div>
              <div class="left">Price</div>
              <div class="right">Rp 20.000</div>
            </div>
            <hr />
            <div class="container">
              <div class="left">
                <b>Total Price</b>
              </div>
              <div class="right">
                <b>Rp 40.000</b>
              </div>
            </div>
            <div style={{ height: 100 }}></div>

            <div class="fixed-element"> 
              <footer class="menu1">
                <div class="menu-inner-payment">
                  <h2 style={{ color: "white" }}>Update Pesanan - Harga</h2>
                 
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
