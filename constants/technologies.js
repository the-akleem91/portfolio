import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello, FaGitAlt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandCpp, TbBrandNextjs, TbBrandRedux, TbBrandTailwind } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import ZeplinIcon from "public/assets/svg/zeplin.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";
import { BiLogoGoLang, BiLogoDocker } from "react-icons/bi";
import { SiPostman } from "react-icons/si";

export const TECHNOLOGIES = [
	{
		category: "Languages",
		items: [
			{ name: "C++", icon: <TbBrandCpp size={50} /> },
			{ name: "JS", icon: <IoLogoJavascript size={50} /> },
			{ name: "Go Lang", icon: <BiLogoGoLang size={50} /> }
		]
	},
	{
		category: "Web Development",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={50} /> },
			{ name: "CSS", icon: <DiCss3 size={50} /> },
			{ name: "JS", icon: <IoLogoJavascript size={50} /> },
			{ name: "React", icon: <FaReact size={50} /> },
			{ name: "Redux", icon: <TbBrandRedux size={50} /> },
			{ name: "Next", icon: <TbBrandNextjs size={50} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={50} /> },
			{ name: "MUI", icon: <MuiIcon width={50} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Github", icon: <AiFillGithub size={50} /> },
			{ name: "Git", icon: <FaGitAlt size={50} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={50} /> },
			{ name: "Docker", icon: <BiLogoDocker size={50} /> },
			{ name: "Postman", icon: <SiPostman size={50} /> }
		]
	}
];
