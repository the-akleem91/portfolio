"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Akleem Khan. I am pursuing my B.Tech in ECE from NIT Jalandhar.
						</p>
						<p>
							I developed a deep passion for web Development, and I
							consistently engaged in learning new concepts and techniques in this field.
						</p>
						<p></p>
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with Next.js and React.js.
						</p>
						<p>

						</p>
						<p className="my-3.5">
							I am currently in the process of expanding my knowledge and skills in various areas. I am actively learning and gaining expertise in Backend Development and DevOps, driven by my passion for continuous growth and improvement and I look forward to contributing my skills to meaningful projects in the future. My journey in web development has been both challenging and rewarding, and I am excited about the endless possibilities it holds for me in the world of technology.
						</p>
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
