
import Link from "next/link";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";



import "react-image-gallery/styles/css/image-gallery.css";


import styles from "../../../styles/ProjectCard.module.css"
import Image from "next/image";


export function ProjectItem({ project }) {
	return (
		<article
			className="flex flex-col rounded-[20px] bg-card-light dark:bg-card-dark"
		>
			<div className={styles.card}>
				<Image src={project.image} height={300} width={600} alt={project.name} className="rounded" />
				<div className={styles.content}>
					<h3 className="text-xl font-bold">{project.name}</h3>
					<p>{project.description}</p>
					<div className={styles.tags}>
						{project.tags.map((tag) => (
							<span key={tag} className={tag}>
								{tag}
							</span>
						))}
					</div>
					<div className={styles.cta}>
						{project.source_code && (
							<Link
								href={project.source_code}
								target="_blank"
								className="icon-link-btn"
								title="Go to Github repository"
							>
								<VscSourceControl />
								<span>Source</span>
							</Link>
						)}
						{project.demo && (
							<Link
								href={project.demo}
								target="_blank"
								className="icon-link-btn"
								title="Go to live address"
							>
								<FiExternalLink />
								<span>Demo</span>
							</Link>
						)}
					</div>
				</div>
			</div>
		</article>
	);
}
