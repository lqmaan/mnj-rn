import React from 'react'
import '../../style/style.scss'
import { LiaSearchSolid } from "react-icons/lia";
import { FaTwitch } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import {FaShoppingBasket } from "react-icons/fa";



const LandingPage = () => {
  return (
    <div class="phone">
	  <header class="header">
		{/* <div class="header-logo"> */}
		<FaAngleLeft size={25}/>
			{/* <div>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div> */}
		{/* </div> */}
		<div class="header-title">
			Sesuai nama resto
		</div>
		<div class="header-buttons">
			{/* <button class="notifications">
				<i class="ai-bell"></i>
			</button> */}
			<button class="avatar">
				<FaTwitch size={25}/>
{/* <img src="https://assets.codepen.io/285131/pexels-photo-838875.jpeg" /> */}
			</button>
		</div>
	</header>
	<section class="title">
		<h1>List Menu</h1>
		{/* <p>Explore millions of music according to your taste</p> */}
	</section>
	<section class="search">
		<div class="search-inner">
			<button class="search-button">
				<LiaSearchSolid size={35}/>
			</button>
			<input type="text" class="search-input" placeholder="Search Menu" />

		</div>
	</section>


	<div class="navbar-container" >
	<div class="navbar">

      {/* Content that can be scrolled */}
		<nav class="navigation" >
			<a href="#" class="navigation-item active">Overview</a>
			<a href="#" class="navigation-item">Songs</a>
			<a href="#" class="navigation-item">Albums</a>
			<a href="#" class="navigation-item">Albums</a>
			<a href="#" class="navigation-item">Albums</a>
			<a href="#" class="navigation-item">Artists</a>
		</nav>
	</div>
	</div>

	<section class="playlists">

		<article class="card">
			<div class="card-inner">
				{/* <span class="card-pin"></span> */}
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-number">20 songs</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Tim Bergling</h2>
				</div>
			</div>
		</article>

		<article class="card">
			<div class="card-inner">
				{/* <span class="card-pin"></span> */}
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-number">20 songs</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Tim Bergling</h2>
				</div>
			</div>
		</article>

		
	</section>
	<section class="playlists">

		<article class="card">
			<div class="card-inner">
				{/* <span class="card-pin"></span> */}
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-number">20 songs</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Tim Bergling</h2>
				</div>
			</div>
		</article>

		<article class="card">
			<div class="card-inner">
				{/* <span class="card-pin"></span> */}
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-number">20 songs</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Tim Bergling</h2>
				</div>
			</div>
		</article>

		
	</section>
	<section class="playlists">

		<article class="card">
			<div class="card-inner">
				{/* <span class="card-pin"></span> */}
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-number">20 songs</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Tim Bergling</h2>
				</div>
			</div>
		</article>

		<article class="card">
			<div class="card-inner">
				{/* <span class="card-pin"></span> */}
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-number">20 songs</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Tim Bergling</h2>
				</div>
			</div>
		</article>

		
	</section>
	<section class="playlists">

		<article class="card">
			<div class="card-inner">
				{/* <span class="card-pin"></span> */}
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-number">20 songs</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Tim Bergling</h2>
				</div>
			</div>
		</article>

		<article class="card">
			<div class="card-inner">
				{/* <span class="card-pin"></span> */}
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-number">20 songs</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Tim Bergling</h2>
				</div>
			</div>
		</article>

		
	</section>
	<section class="playlists">

		<article class="card">
			<div class="card-inner">
				{/* <span class="card-pin"></span> */}
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-number">20 songs</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Tim Bergling</h2>
				</div>
			</div>
		</article>

		<article class="card">
			<div class="card-inner">
				{/* <span class="card-pin"></span> */}
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-number">20 songs</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Tim Bergling</h2>
				</div>
			</div>
		</article>

		
	</section>

	{/* <section class="currently-playing">

		<article class="card horizontal">
			<div class="card-inner">
				<span class="card-pin simple"></span>
				<div class="card-image">
					<img src="https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg" />
				</div>
				<div class="card-content">
					<div class="card-meta">
						<span class="card-meta-artist">Marshmello</span>
						<button class="card-meta-button">
							<i class="ai-circle-triangle-right-fill"></i>
						</button>
					</div>
					<h2 class="card-title">Hate the Other Side
						<span class="card-time">3:40</span>
					</h2>
				</div>
				<span class="card-pin simple"></span>
			</div>
		</article>
	</section> */}
	<footer class="menu">
		<div class="menu-inner">
			<h2 style={{color:'white'}}>
				Order pesanan
				</h2>
				<button class="notifications">
				<i class="ai-bell"></i>
			<FaShoppingBasket size={48} style={{alignSelf:'center', color:'white'}}/>
			</button>
			{/* <a href="#" class="menu-item active">
				<i class="ai-home"></i>
			</a>
			<a href="#" class="menu-item">
				<i class="ai-heart"></i>
			</a>
			<a href="#" class="menu-item">
				<i class="ai-fire"></i>
			</a>
			<a href="#" class="menu-item">
				<i class="ai-gear"></i>
			</a> */}
		</div>
	</footer>
</div>
  )
}

export default LandingPage