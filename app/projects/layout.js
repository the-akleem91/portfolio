"use client";

import { Suspense } from "react";

import { HeadingDivider, Loader } from "components";

import { ProjectItem } from "app/sections";
import { project } from "utils/projectsname";
import styles from "../../styles/ProjectCard.module.css";

export default function Page() {
	return (
		<div className="container-md">
			<section id="projects" className="section">
				<HeadingDivider title="Relevant projects" />

				<Suspense
					fallback={
						<div className="flex-center">
							<Loader />
						</div>
					}
				>
					<div className="flex justify-center mt-10">
						<div className={styles.container}>
							{project.map((project, i) => (
								<ProjectItem project={project} key={i} />
							))}
						</div>
					</div>
				</Suspense>
			</section>
		</div>
	);
}
