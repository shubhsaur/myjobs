import React, { useContext } from "react";
import hero from "../assets/hero.jpg";
import adidas from "../assets/logos/Adidas.png";
import adobe from "../assets/logos/adobe.png";
import Chase from "../assets/logos/Chase.png";
import Citi from "../assets/logos/Citi.png";
import deloitte from "../assets/logos/deloitte.png";
import hsbc from "../assets/logos/hsbc.png";
import JPMorgan from "../assets/logos/JPMorgan.png";
import mastercard from "../assets/logos/mastercard.png";
import paypal from "../assets/logos/paypal.png";
import pwc from "../assets/logos/pwc.png";
import siemens from "../assets/logos/siemens.png";
import cvs from "../assets/logos/cvs-health.png";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context";

const Home = () => {
	const navigate = useNavigate();
	const {loggedIn} = useContext(AuthContext);

	const handleClick = () => {
		if(loggedIn){
			navigate('/dashboard');
		}else{
			navigate('/login')
		}
	}
	return (
		<div className="bg-[#f1faee]">
			<header className="bg-[#1d3557] text-white">
				<Navbar />

				<section className="flex lg:justify-between justify-center pb-8 px-8">
					<div className="flex basis-[50%] flex-col pt-24 lg:pl-28 gap-8">
						<h2 className="font-medium lg:text-5xl md:text-4xl text-3xl tracking-wider leading-[1.25em]">
							Welcome to
							<br /> My<span className="text-[#00b4d8]">Jobs</span>
						</h2>
						<div className="flex items-center justify-between">
							<Button onClick={handleClick}>Get Started</Button>
						</div>
					</div>
					<div className="w-[45%] basis-[50%] md:flex hidden justify-center relative top-12 pr-16">
						<img
							className="object-contain rounded-[1.5em] shadow-md"
							src={hero}
							alt="two females sitting opposite and talking to each other"
						/>
					</div>
				</section>
			</header>

			<section className="flex flex-col justify-center items-center lg:p-32 p-12 gap-8">
				<h2 className="lg:self-start text-[#1d3557] font-bold text-xl">Why Us</h2>
				<div className="flex flex-col md:flex-row gap-4">
					<div className="bg-white p-4 flex flex-col gap-4">
						<h2 className="text-[#48cae4] font-medium text-xl inline-block w-[50%]">Get More Visibility</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam necessitatibus eaque dolorem?
							Mollitia maiores qui minima ullam veniam, placeat sit laboriosam minus nam quam voluptatibus culpa fugit
							unde esse!
						</p>
					</div>
					<div className="bg-white p-4 flex flex-col gap-4">
						<h2 className="text-[#48cae4] font-medium text-xl inline-block w-[50%]">Organize Your Candidates</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam necessitatibus eaque dolorem?
							Mollitia maiores qui minima ullam veniam, placeat sit laboriosam minus nam quam voluptatibus culpa fugit
							unde esse!
						</p>
					</div>
					<div className="bg-white p-4 flex flex-col gap-4">
						<h2 className="text-[#48cae4] font-medium text-xl inline-block w-[50%]">Verify Their Abilities</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam necessitatibus eaque dolorem?
							Mollitia maiores qui minima ullam veniam, placeat sit laboriosam minus nam quam voluptatibus culpa fugit
							unde esse!
						</p>
					</div>
				</div>
			</section>

			<section className="flex flex-col justify-center items-center lg:px-32 md:px-24 px-12 gap-8">
				<h2 className="lg:self-start text-[#1d3557] font-bold text-xl">Companies Who Trust Us</h2>
				<div className="flex justify-center flex-wrap gap-8">
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={adidas} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={Chase} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={adobe} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={deloitte} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={hsbc} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={Citi} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={JPMorgan} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={mastercard} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={paypal} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={pwc} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={siemens} alt="" />
					<img className="w-32 h-32 object-scale-down mix-blend-multiply" src={cvs} alt="" />
				</div>
			</section>
		</div>
	);
};

export default Home;
