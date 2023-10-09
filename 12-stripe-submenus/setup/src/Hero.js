import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
	const { SubmenuClose } = useGlobalContext();
	return (
		<section className="hero">
			<article className="hero-info">
				<h1>Payments infrastructure for the internet</h1>
				<p>
					Millions of companies of all sizes use Stripe online and in
					person to accept payments, send payouts, automate financial
					processes, and ultimately grow revenue.
				</p>
				<button className="btn">Start Now</button>
			</article>
			<article className="hero-images">
				<img src={phoneImg} className="phone-img" alt="phone" />
			</article>
		</section>
	);
};

export default Hero;
