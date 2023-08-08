import React from 'react'
import '../../style/style.scss'
import { LiaSearchSolid } from "react-icons/lia";
import { FaTwitch } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import {FaShoppingBasket } from "react-icons/fa";
import {AiFillPlusCircle } from "react-icons/ai";
import {BiSolidMinusCircle } from "react-icons/bi";


const detailProduct = () => {
  return (
    <div class="phone">
	  <header class="header">   
		<FaAngleLeft size={25}/>
		<div class="header-title">
			Sesuai nama resto
		</div>
		<div class="header-buttons">
			<button class="avatar">
				<FaTwitch size={25}/>
			</button>
		</div>
	</header>
	
	<section class="playlists">

		<article class="card-detail">
			<div class="card-inner-detail">
				{/* <span class="card-pin"></span> */}
				<div class="card-image-detail">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						{/* <span class="card-meta-number">20 songs</span> */}
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					{/* <h2 class="card-title">Tim Bergling</h2> */}
				</div>
			</div>
		</article>

		


		
	</section>
	<section class="title1">
		<h1>Nama Menu</h1> 
		<p>Explore millions of music according to your taste</p>
	</section>
        
		
		<section class="title">
		<h1>Rp 50.000</h1> 
		
	</section>

	<section class="title2">
		<h3>Add Variant Menu</h3> 
		<p>pilih 1 variant </p>
	</section>
	<div style={{height:"10px"}}/>

	

	
	<section class="search2">
		<div class="search-inner2">
			<h3 class="noted">Catatan</h3>
			<input type="text" class="search-input2" placeholder="Silahkan tambah catatan" />
		</div>
	</section>

	{/* <hr></hr> */}
	<div style={{height:"50px"}}/>

	<section class="search1">
		<div class="search-inner1">
			<button class="search-button1">
				<AiFillPlusCircle size={35} color='#2AB3C0' />
			</button> &nbsp;
			<h4>1</h4> &nbsp;
			<button class="search-button2">
				<BiSolidMinusCircle size={35} color='#2AB3C0'/>
			</button>
			{/* <input type="text" class="search-input" placeholder="Search Menu" /> */}

		</div>
	</section>
	
	
	<div style={{height:"50px"}}/>

	<hr></hr>
	<section class="title4">
		
		<p>Kamu hemat  <span style={{color:'#2AB3C0'}}>Rp1.500</span> setelah diskon </p>
	</section>


	
	<footer class="menu1">
		<div class="menu-inner1">
			<h2 style={{color:'white'}}>
				Update Pesanan - Harga
				</h2>
				<button class="notifications">
				<i class="ai-bell"></i>
			<FaShoppingBasket size={48} style={{alignSelf:'center', color:'white'}}/>
			</button>
			
		</div>
	</footer>
</div>
  )
}

export default detailProduct;