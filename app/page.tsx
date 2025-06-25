"use client";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiMysql, SiReact, SiReactos, SiNextdotjs, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

const profileImage = "pro.jpg";

const skills = [
	{ name: "React.js", icon: <FaReact className="text-blue-400" /> },
	{ name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
	{ name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
	{ name: "React Native", icon: <SiReactos className="text-blue-400" /> },
	{ name: "Java", icon: <FaJava className="text-red-500" /> },
	{ name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
	{ name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
	{ name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
	{ name: "OOP (Object-Oriented Programming)", icon: <FaDatabase className="text-gold" /> },
];

const projects = [
	{
		title: "Ecommerce Project",
		description: {
			en: " React native and firebase project for an ecommerce app.",
			ar: "مشروع تطبيق تجارة إلكترونية باستخدام React Native وFirebase.",
		},
		technologies: "React, Node.js",
		github: "https://github.com/Ahmedezz570/CS_303",
		live: "https://super-mall--gyny93qd0a.expo.app/",
		preview: "/vercel.svg",
	},
	{
		title: "Project Two",
		description: {
			en: "Another sample project description in English.",
			ar: "وصف مشروع آخر باللغة العربية.",
		},
		technologies: "Java, MongoDB",
		github: "https://github.com/HelMy711/project-two",
		live: "https://helmy711-project-two.vercel.app/",
		preview: "/next.svg",
	},
	{
		title: "Project Three",
		description: {
			en: "Yet another sample project description in English.",
			ar: "وصف مشروع إضافي باللغة العربية.",
		},
		technologies: "React Native, MySQL",
		github: "https://github.com/HelMy711/project-three",
		live: "https://helmy711-project-three.vercel.app/",
		preview: "/globe.svg",
	},
];

export default function Page() {
	const [language, setLanguage] = useState("en");
	const [rtl, setRtl] = useState(false);
	const [langMenuOpen, setLangMenuOpen] = useState(false);
	const [navOpen, setNavOpen] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedLang = localStorage.getItem("portfolio_language");
			if (savedLang) setLanguage(savedLang);
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("portfolio_language", language);
		}
		setRtl(language === "ar");
	}, [language]);

	return (
		<>
    
<Head>
  <title>{language === 'en' ? 'Abdulrahman Helmy | Full Stack Developer' : 'عبدالرحمن حلمي | مطور ويب شامل'}</title>
</Head>
			<div
				className={`min-h-screen font-poppins bg-gradient-to-b from-[#23272f] via-[#2d323c] to-[#3a3f4b] ${rtl ? "rtl" : "ltr"}`}
				dir={rtl ? "rtl" : "ltr"}
			>
				{/* Navbar */}
				<nav className="fixed top-0 w-full bg-gradient-to-r from-black via-dark to-gray-900 text-offwhite shadow-lg z-50">
					<div className="container mx-auto flex justify-between items-center py-4 px-6">
						<div className="text-gold font-bold text-2xl tracking-widest drop-shadow-lg">Helmy</div>
						{/* Hamburger for mobile */}
						<button
							className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
							onClick={() => setNavOpen((v) => !v)}
							aria-label="Toggle navigation"
						>
							<span className={`block h-1 w-7 bg-gold my-0.5 rounded transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
							<span className={`block h-1 w-7 bg-gold my-0.5 rounded transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`}></span>
							<span className={`block h-1 w-7 bg-gold my-0.5 rounded transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
						</button>
						{/* Desktop nav */}
						<ul className="hidden md:flex space-x-6">
							{[
								{ id: "home", label: language === "en" ? "Home" : "نبذة عني" },
								{ id: "projects", label: language === "en" ? "Projects" : "المشاريع" },
								{ id: "skills", label: language === "en" ? "Skills" : "المهارات" },
								{ id: "contact", label: language === "en" ? "Contact" : "تواصل" },
							].map((item) => (
								<li key={item.id}>
									<a
										href={`#${item.id}`}
										className="cursor-pointer hover:text-gold transition font-semibold"
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
						<div className="relative flex items-center gap-2">
							<button
								onClick={() => setLangMenuOpen((v) => !v)}
								className="flex items-center gap-2 px-4 py-2 bg-gold text-black rounded-full font-bold shadow hover:bg-yellow-400 transition-all border-2 border-gold focus:outline-none"
							>
								<span className="text-base">{language === "en" ? "English" : "العربية"}</span>
								<svg className={`w-4 h-4 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
							</button>
							{langMenuOpen && (
								<div className="absolute top-12 right-0 bg-white text-black rounded-lg shadow-lg w-36 z-50 border border-gold animate-fade-in">
									<button
										onClick={() => { setLanguage('en'); setLangMenuOpen(false); }}
										className="flex items-center justify-between w-full px-4 py-2 hover:bg-gold/20 rounded-t-lg"
									>
										<span className="flex items-center gap-2">🇬🇧 English</span>
										{language === 'en' && <span className="text-gold font-bold">✔</span>}
									</button>
									<button
										onClick={() => { setLanguage('ar'); setLangMenuOpen(false); }}
										className="flex items-center justify-between w-full px-4 py-2 hover:bg-gold/20 rounded-b-lg"
									>
										<span className="flex items-center gap-2">🇪🇬 العربية</span>
										{language === 'ar' && <span className="text-gold font-bold">✔</span>}
									</button>
								</div>
							)}
						</div>
					</div>
					{/* Mobile nav */}
					{navOpen && (
						<ul className="md:hidden flex flex-col bg-black/95 text-offwhite px-8 py-6 space-y-4 absolute top-full left-0 w-full shadow-lg z-40 animate-fade-in">
							{[
								{ id: "home", label: language === "en" ? "Home" : "نبذة عني" },
								{ id: "projects", label: language === "en" ? "Projects" : "المشاريع" },
								{ id: "skills", label: language === "en" ? "Skills" : "المهارات" },
								{ id: "contact", label: language === "en" ? "Contact" : "تواصل" },
							].map((item) => (
								<li key={item.id}>
									<a
										href={`#${item.id}`}
										className="block py-2 px-2 rounded hover:bg-gold/10 hover:text-gold transition font-semibold"
										onClick={() => setNavOpen(false)}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					)}
				</nav>

			
				{/* About Section */}
				<section id="about" className="py-20 bg-gradient-to-r from-dark to-gray-900 text-offwhite">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="container mx-auto flex flex-col md:flex-row items-center gap-12"
					>
						<motion.div
							whileHover={{ scale: 1.07 }}
							className="flex-shrink-0 mx-auto md:mx-0"
						>
							<div className="rounded-full border-8 border-gold shadow-2xl overflow-hidden w-48 h-48 flex items-center justify-center bg-black">
								<img
									src={profileImage}
									alt="Profile Image"
									className="object-cover w-44 h-44"
									width={176}
									height={176}
								/>
							</div>
						</motion.div>
						<div className="flex-1 text-center md:text-left">
							<h2 className="text-3xl font-bold text-gold mb-4">
								{language === "en"
									? "Abdulrahman Ahmed Helmy"
									: "عبدالرحمن أحمد حلمي"}
							</h2>
							<p className="text-lg max-w-xl mx-auto md:mx-0">
								{language === "en"
									? "I'm a third-year Computer Science student at Cairo University, passionate about full-stack development. I work with React, Node.js, Java, and databases like MongoDB and MySQL."
									: "أنا طالب بالفرقة الثالثة في كلية العلوم، قسم الحاسب بجامعة القاهرة. مهتم بتطوير الويب باستخدام React وNode.js وقواعد البيانات مثل MongoDB وMySQL."}
							</p>
						</div>
					</motion.div>
				</section>

				{/* Skills Section */}
				<section id="skills" className="py-20 bg-gradient-to-l from-black via-dark to-gray-900 text-offwhite">
					<div className="container mx-auto">
						<h2 className="text-3xl font-bold text-gold text-center mb-8">
							{language === "en" ? "Skills" : "المهارات"}
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
							{skills.map((skill, index) => (
								<motion.div
									key={index}
									whileHover={{ scale: 1.08, rotate: -2 }}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.08 }}
									className="bg-white text-black border-2 border-gold rounded-xl shadow-lg flex flex-col items-center p-6 transition-all duration-300 hover:bg-gold hover:text-black"
								>
									<div className="text-4xl mb-3">{skill.icon}</div>
									<span className="font-semibold text-lg">{skill.name}</span>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Projects Section */}
				<section id="projects" className="py-20 bg-gradient-to-r from-dark to-gray-900 text-offwhite">
					<div className="container mx-auto">
						<h2 className="text-3xl font-bold text-gold text-center mb-8">
							{language === "en" ? "Projects" : "المشاريع"}
						</h2>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={{
								hidden: { opacity: 0, y: 40 },
								visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
							}}
							className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
						>
							{projects.map((project, index) => (
								<motion.div
									key={index}
									variants={{
										hidden: { opacity: 0, y: 40 },
										visible: { opacity: 1, y: 0 },
									}}
									whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(255,215,0,0.25)" }}
									transition={{ duration: 0.4 }}
									className="relative bg-white text-black rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 border-2 border-transparent hover:border-gold"
								>
									<img src={project.preview} alt="preview" className="w-full h-40 object-contain bg-gray-100" />
									<div className="p-6">
										<h3 className="text-xl font-bold mb-2 text-gold">{project.title}</h3>
										<p className="mb-2 min-h-[48px]">
											{language === "en"
												? project.description.en
												: project.description.ar}
										</p>
										<div className="text-xs mb-2 text-gray-700">{project.technologies}</div>
										<div className="flex gap-4 mt-4">
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="text-gold hover:underline font-bold"
												style={{ opacity: 1, pointerEvents: project.github ? 'auto' : 'none' }}
											>
												GitHub
											</a>
											<a
												href={project.live}
												target="_blank"
												rel="noopener noreferrer"
												className="text-gold hover:underline font-bold"
												style={{ opacity: 1, pointerEvents: project.live ? 'auto' : 'none' }}
											>
												{language === "en" ? "Live" : "رابط مباشر"}
											</a>
										</div>
									</div>
									<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-20 bg-gradient-to-l from-black via-dark to-gray-900 text-offwhite">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="container mx-auto"
					>
						<h2 className="text-3xl font-bold text-gold text-center mb-8">
							{language === "en" ? "Contact" : "تواصل"}
						</h2>
						<div className="text-center space-y-4">
							<p>{language === "en" ? "Phone:" : "الهاتف:"} 01273266695</p>
							<p>{language === "en" ? "Email:" : "البريد الإلكتروني:"} abdulllrhmanhelmy@gmail.com</p>
							<p>{language === "en" ? "Location:" : "الموقع:"} {language === "en" ? "Helwan, Cairo, Egypt" : "حلوان، القاهرة، مصر"}</p>
							<div className="flex justify-center gap-6 mt-6">
								<a href="https://github.com/HelMy711" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline text-2xl">
									GitHub
								</a>
								<a href="https://www.linkedin.com/in/abdulrhman-helmy-657768353/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline text-2xl">
									LinkedIn
								</a>
							</div>
						</div>
					</motion.div>
				</section>

				{/* Floating Social Buttons */}
				<div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
					<a
						href="https://wa.me/201273266695"
						target="_blank"
						rel="noopener noreferrer"
						className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-2xl transition-all"
					>
						<FaWhatsapp size={28} />
					</a>
					<a
						href="https://www.facebook.com/abdulrhman.helmy.3"
						target="_blank"
						rel="noopener noreferrer"
						className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1877F3] text-white shadow-lg hover:scale-110 hover:shadow-2xl transition-all"
					>
						<FaFacebook size={28} />
					</a>
					<a
						href="https://www.linkedin.com/in/abdulrhman-helmy-657768353/"
						target="_blank"
						rel="noopener noreferrer"
						className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0077B5] text-white shadow-lg hover:scale-110 hover:shadow-2xl transition-all"
					>
						<FaLinkedin size={28} />
					</a>
				</div>
			</div>
		</>
	);
}
