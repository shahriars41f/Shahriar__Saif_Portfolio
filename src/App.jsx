import { useEffect, useState } from 'react';

const PROFILE = {
  name: 'Shahriar Saif',
  firstName: 'Shahriar',
  lastName: 'Saif',
  title: 'Computer Science & Engineering Student | Researcher | Cybersecurity & Computer Vision Enthusiast',
  shortIntro:
    'I’m a CSE student passionate about cybersecurity, computer networking, computer vision, and AI research. I enjoy building practical projects and exploring technology through research and hands-on development.',
  badge: 'Open to Research & Collaboration',
  university: 'Southeast University (SEU)',
  location: 'Dhaka, Bangladesh',
  email: 'shahriarsaif030@gmail.com', // Add email here, e.g. 'name@example.com'
  phone: '01517813750', // Add phone here
  github: 'https://github.com/shahriars41f', // Add GitHub URL here
  linkedin: 'https://www.linkedin.com/in/shahriar-saif-b8371533b/', // Add LinkedIn URL here
  facebook: 'https://www.facebook.com/shahriar.saif.35', // Add Facebook URL here
  instagram: 'https://www.instagram.com/shahriar.saif.35/', // Add Instagram URL here
  cv: 'https://drive.google.com/file/d/1gHuEsepi_XuTh7ZUzVSR8skEYY4gwyR3/view?usp=drive_link',
};

const Icon = ({ name, size = 18, className = '' }) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  };

  const paths = {
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></>,
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7.25A5.66 5.66 0 0 0 19.22 3.3 5.27 5.27 0 0 0 19.08 0S17.9-.38 15 1.48a13.38 13.38 0 0 0-7 0C5.1-.38 3.92 0 3.92 0a5.27 5.27 0 0 0-.14 3.3A5.66 5.66 0 0 0 2.28 7.25c0 5.63 3.44 6.88 6.72 7.25A4.8 4.8 0 0 0 8 18v4"/>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
    x: <path d="M18 6 6 18M6 6l12 12"/>,
    send: <><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></>,
    map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.4"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    chip: <><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3M9 10h6v4H9z"/></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="2.5"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    award: <><circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-2 8 5.5-3 5.5 3-2-8"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18"/></>,
    network: <><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><path d="M7 6.5 10.8 17M17 6.5 13.2 17M7 5h10"/></>,
    brain: <><path d="M9.5 4A3.5 3.5 0 0 0 6 7.5c0 .3 0 .5.1.8A4 4 0 0 0 7 16a3.5 3.5 0 0 0 5 3.2V5.5A3.5 3.5 0 0 0 9.5 4Z"/><path d="M14.5 4A3.5 3.5 0 0 1 18 7.5c0 .3 0 .5-.1.8A4 4 0 0 1 17 16a3.5 3.5 0 0 1-5 3.2V5.5A3.5 3.5 0 0 1 14.5 4Z"/><path d="M8 10h2M14 10h2M9 14h1M14 14h1"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
    chevronUp: <path d="m18 15-6-6-6 6"/>,
  };
  return <svg {...common}>{paths[name]}</svg>;
};

const navItems = [
  ['top', 'Home'],
  ['about', 'About'],
  ['education', 'Education'],
  ['research', 'Research'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

const researchInterests = [
  { icon: 'eye', title: 'Computer Vision' },
  { icon: 'brain', title: 'Multimodal AI' },
  { icon: 'network', title: 'Federated Learning' },
  { icon: 'chip', title: 'Artificial Intelligence & Machine Learning' },
  { icon: 'shield', title: 'Cybersecurity' },
  { icon: 'globe', title: 'Computer Networking' },
  { icon: 'code', title: 'Deep Learning' },
  { icon: 'book', title: 'Medical AI' },
];

const researchWork = [
  {
    label: 'CURRENT EXPLORATION',
    title: 'Computer Vision & Deep Learning',
    text: 'Exploring computer vision and deep learning through academic study, experiments, and project-based learning.',
  },
  {
    label: 'RESEARCH DIRECTION',
    title: 'Multimodal AI & Federated Learning',
    text: 'Interested in multimodal learning and privacy-aware AI, including federated learning approaches for distributed data.',
  },
  {
    label: 'PROJECT-BASED RESEARCH',
    title: 'Privacy-Aware AI Attendance System',
    text: 'An AI attendance-system concept combining computer vision with privacy-aware learning ideas such as federated learning.',
  },
];

const timelineItems = [
  {
    year: '2024',
    title: 'Cybersecurity & Networking Foundation',
    text: 'Started focused learning in cybersecurity, penetration testing, networking, and practical security labs.',
  },
  {
    year: '2025',
    title: 'Computer Vision & AI Research',
    text: 'Expanded into computer vision, deep learning, multimodal AI, and privacy-aware research directions.',
  },
  {
    year: '2026',
    title: 'Certified Penetration Testing Engineer (C)PTE',
    text: 'Completed the C)PTE certification journey and strengthened practical penetration-testing knowledge.',
  },
  {
    year: '2026',
    title: 'OpenGL 3D Computer Lab Classroom',
    text: 'Designed a 3D computer lab environment in C++ and OpenGL with models, lighting, and camera navigation.',
  },
  {
    year: '2026',
    title: 'Line Maze Solving Robot',
    text: 'Built an Arduino-based robotics project using IR sensors, DC motors, and maze-solving logic.',
  },
];

const experiences = [
  {
    icon: 'shield',
    type: 'INDEPENDENT / ACADEMIC',
    date: '2024 – Present',
    title: 'Cybersecurity Learner / Researcher',
    place: 'Independent / Academic',
    text: 'Exploring cybersecurity, penetration testing, networking, and security concepts through academic learning, practical labs, and professional certification.',
  },
  {
    icon: 'eye',
    type: 'ACADEMIC / INDEPENDENT RESEARCH',
    date: '2025 – Present',
    title: 'AI & Computer Vision Researcher',
    place: 'Academic / Independent Research',
    text: 'Working on computer vision and AI research, exploring deep learning models and emerging approaches such as multimodal AI and federated learning.',
  },
];

const projects = [
  {
    title: 'OpenGL 3D Computer Lab Classroom',
    category: 'COMPUTER GRAPHICS / 3D DESIGN',
    text: 'A 3D computer lab classroom designed using OpenGL and C++, featuring desks, chairs, computers, lighting, and camera navigation to demonstrate core computer graphics concepts.',
    tags: ['C++', 'OpenGL', 'GLUT', '3D Graphics'],
    image: 'computer_lab.png',
    github: '',
    live: null,
    theme: 'project-emerald',
  },

  {
    title: 'Line Maze Solving Robot',
    category: 'ROBOTICS / EMBEDDED SYSTEMS',
    text: 'An Arduino-based line-following and maze-solving robot using IR sensors, DC motors, and a buzzer.',
    tags: ['Arduino', 'C/C++', 'IR Sensors', 'DC Motors', 'Embedded Systems'],
    image: 'maze.jpg',
    github: '',
    live: null,
    theme: 'project-teal',
  },
];

const moreProjects = [
  'CNN-Based Traffic Sign Recognition',
  'FoodMoboChain',
  'Computer Networking / Packet Tracer Project',
];

const skillGroups = [
  { title: 'PROGRAMMING LANGUAGES', items: ['Java', 'C', 'C++', 'Python', 'JavaScript'] },
  { title: 'WEB DEVELOPMENT', items: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'SOFTWARE TESTING', items: ['Manual Testing', 'Software Testing Fundamentals'] },
  { title: 'DATABASE', items: ['SQL', 'MySQL'] },
  { title: 'TOOLS & PLATFORMS', items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Cisco Packet Tracer', 'Arduino IDE', 'OpenGL'] },
  { title: 'AI / ML', items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'CNN', 'Multimodal AI', 'Federated Learning'] },
  { title: 'OTHER', items: ['Computer Networking', 'Cybersecurity', 'Penetration Testing', 'Embedded Systems'] },
];

const certifications = [
  {
    title: 'Certified Penetration Testing Engineer (C)PTE',
    date: '2026',
    issuer: 'Mile2',
    text: 'Professional penetration testing certification covering practical penetration testing and cybersecurity concepts.',
    link: 'https://drive.google.com/file/d/1tLgJ2R7rMpuT_WNxZ1l-zyrNivuUDGA_/view?usp=drive_link',
  },
  {
    title: 'Cisco Cybersecurity Course',
    date: '2026',
    issuer: 'Cisco',
    text: 'Completed cybersecurity training covering fundamental cybersecurity concepts and practices.',
    link: 'https://drive.google.com/file/d/1IRR-1r-t0H9277ay6Kio7DHMnp8azJVk/view?usp=drive_link',
  },
   {
    title: 'Applied Penetration Testing Engineer:Hands-on',
    date: '2026',
    issuer: 'EDGE',
    text: 'Completed hands-on penetration testing training focused on identifying vulnerabilities, performing security assessments, and applying practical techniques to evaluate and improve system security.',
    link: 'https://drive.google.com/file/d/1PXwMU4ktC0-QL8xafxUI2xKycCicQosH/view?usp=drive_link',
  },
];

const moments = [
  {
    date: '2026',
    title: 'Started Computer Vision Research',
    text: 'Exploring computer vision and AI research through academic projects and experiments.',
    image: 'comvis.jpg',
    cls: 'moment-one',
  },
  {
    date: '2026',
    title: 'Earned C)PTE Certification',
    text: 'Completed the Certified Penetration Testing Engineer certification journey.',
    image: 'Shahriar-Saif-CPTE-Certified-Penetration-Testing-Engineer-Mile2-Cybersecurity-Certificate-Mile2-Cybe-1.png',
    cls: 'moment-two',
  },
  {
    date: '2026',
    title: 'Building a Line Maze Solving Robot',
    text: 'Working on an Arduino-based robotics project using IR sensors and DC motors.',
    image: 'maze.jpg',
    cls: 'moment-three',
  },
];

const referenceSlots = [
  { image:'borhan.ularif.jpg', name: 'Borhan Ul Arif', position: 'Lecturer', organization: 'Southeast University', email: 'borhan.ularif@seu.edu.bd' },
  { image: 'sim.adnan.jpg', name: 'S I M Adnan', position: 'Lecturer', organization: 'Southeast University', email: 'sim.adnan@seu.edu.bd' },
];

const SmartLink = ({ href, children, className = '', ...props }) => {
  if (!href) {
    return <span className={`${className} cursor-not-allowed opacity-50`} title="Add this link in src/App.jsx">{children}</span>;
  }
  return <a href={href} className={className} target="_blank" rel="noreferrer" {...props}>{children}</a>;
};

const ProjectImage = ({ src, title, theme }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`project-preview ${theme}`}>
      {!failed && <img src={src} alt={`${title} preview`} onError={() => setFailed(true)} />}
      <div className="project-preview-overlay" />
      <div className="project-preview-copy">
        <span>PROJECT</span>
        <strong>{title}</strong>
      </div>
    </div>
  );
};

const MomentImage = ({ item }) => {
  const [failed, setFailed] = useState(false);
  return (
    <article className={`moment-card ${item.cls}`}>
      {!failed && <img src={item.image} alt={item.title} onError={() => setFailed(true)} />}
      <div className="moment-overlay" />
      <div className="relative mt-auto">
        <p className="text-[11px] font-semibold text-white/75">{item.date}</p>
        <h3>{item.title}</h3>
        <p className="mt-2 text-xs leading-5 text-white/85">{item.text}</p>
      </div>
    </article>
  );
};

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('shahriar-portfolio-theme');
      if (saved === 'dark') setDark(true);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('shahriar-portfolio-theme', dark ? 'dark' : 'light'); } catch {}
  }, [dark]);

  useEffect(() => {
    const reveal = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      }),
      { threshold: 0.1 },
    );
    reveal.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 650);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 180;
      let current = 'top';

      navItems.forEach(([id]) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Please fill in all fields.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setSending(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `New portfolio message from ${form.name.trim()}`,
          _template: 'table',
          _honey: '',
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.message || 'Unable to send message.');

      setStatus('Message sent successfully. Thank you for getting in touch!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Message could not be sent right now. Please email me directly at ' + PROFILE.email + '.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111816] transition-colors dark:bg-[#0c1110] dark:text-slate-100">
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="navbar-shell mx-auto flex max-w-[1180px] items-center justify-between">
          <a href="#top" className="brand-mark" onClick={() => setMenuOpen(false)}>SHAHRIAR</a>

          <div className="hidden items-center gap-[26px] lg:flex">
            {navItems.map(([id, label]) => (
              <a key={id} className={`nav-link ${activeSection === id ? 'active' : ''}`} href={`#${id}`}>{label}</a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <SmartLink className="nav-icon hidden sm:grid" href={PROFILE.github} aria-label="GitHub"><Icon name="github" size={19}/></SmartLink>
            <button className="nav-icon" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
              <Icon name={dark ? 'sun' : 'moon'} size={18}/>
            </button>
            <button className="nav-icon lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu">
              <Icon name={menuOpen ? 'x' : 'menu'} size={19}/>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="mobile-menu mx-auto mt-2 max-w-[1180px]">
            {navItems.map(([id, label]) => (
              <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="top" className="hero-shell reveal scroll-mt-28">
          <div className="grid items-center gap-12 md:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <div className="photo-wrap mx-auto w-full max-w-[330px]">
              <img src="/profile.jpeg" alt="Shahriar Saif" onError={(e) => { e.currentTarget.src = '/profile-placeholder.svg'; }} />
            </div>

            <div>
              <div className="availability"><span/> {PROFILE.badge}</div>
              <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">Hi, I&apos;m</p>
              <h1 className="hero-title">{PROFILE.firstName}<br/>{PROFILE.lastName}</h1>
              <h2 className="mt-5 max-w-[620px] text-xl font-extrabold leading-7 sm:text-[22px]">{PROFILE.title}</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">{PROFILE.shortIntro}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="primary-pill" href="#projects">View My Projects <Icon name="arrow" size={16}/></a>
                <a className="secondary-pill" href={PROFILE.cv} download>View CV <Icon name="external" size={14}/></a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <SmartLink className="social-circle" href={PROFILE.github} aria-label="GitHub"><Icon name="github" size={19}/></SmartLink>
                <SmartLink className="social-circle" href={PROFILE.linkedin} aria-label="LinkedIn"><Icon name="linkedin" size={18}/></SmartLink>
                <SmartLink className="social-circle" href={PROFILE.facebook} aria-label="Facebook"><span className="text-sm font-black">f</span></SmartLink>
                <SmartLink className="social-circle" href={PROFILE.instagram} aria-label="Instagram"><span className="text-[11px] font-black">IG</span></SmartLink>
                {PROFILE.email ? <a className="social-circle" href={`mailto:${PROFILE.email}`} aria-label="Email"><Icon name="mail" size={18}/></a> : <span className="social-circle cursor-not-allowed opacity-50" title="Add email in src/App.jsx"><Icon name="mail" size={18}/></span>}
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div><strong>3.84</strong><i/><span>CGPA</span></div>
            <div><strong>3+</strong><i/><span>Research Areas</span></div>
            <div><strong>10+</strong><i/><span>Projects & Experiments</span></div>
            <div><strong>5+</strong><i/><span>Certifications</span></div>
            <div><strong>3+</strong><i/><span>Years of Learning</span></div>
          </div>
        </section>

        <section id="about" className="section-shell reveal">
          <h2 className="section-title">About</h2>
          <div className="mt-9 grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="text-copy">
              <p>
                I’m a Computer Science & Engineering student passionate about cybersecurity, computer vision, artificial intelligence, and research.I enjoy building practical projects and exploring emerging technologies through hands-on development.
              </p>
              <p>
                I am particularly interested in research and continuously developing my technical and problem-solving skills. I enjoy connecting theoretical concepts with hands-on experimentation and using projects as a way to explore new technologies in depth.
              </p>
            </div>
            
          </div>
        </section>

        <section id="education" className="section-shell reveal">
          <h2 className="section-title">Education</h2>
          <div className="education-card mt-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full border border-emerald-200 bg-white flex items-center justify-center overflow-hidden"><img src="/logo.png" alt="Southeast University Logo" className="w-14 h-14 object-contain"
  /></div>
                <div>
                  <h3 className="text-[#2563EB] font-semibold text-lg">Southeast University (SEU)</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Tejgaon,Dhaka, Bangladesh</p>
                  <p className="mt-2 text-[15px] font-medium">Bachelor of Science in Computer Science & Engineering</p>
                  <p className="mt-2 text-sm font-semibold text-[#2563EB] dark:text-blue-400">CGPA: 3.84</p>
                </div>
              </div>
              <span className="date-chip">2023 – 2027</span>
            </div>
            <div className="education-focus">
              <p>UNDERGRADUATE RESEARCH INTEREST</p>
              <strong>Computer Vision · Multimodal AI · Federated Learning</strong>
              <span>Undergraduate CSE Student</span>
            </div>
          </div>
        </section>

        <section id="research" className="section-shell reveal">
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle">Research interests, current directions, and the topics I want to explore further.</p>

          <div className="mt-9">
            <h3 className="subsection-title">Research Interests</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {researchInterests.map((item, idx) => (
                <article key={item.title} className="interest-card">
                  <span className={`interest-icon ${idx % 3 === 0 ? 'text-emerald-600 dark:text-emerald-400' : ''}`}><Icon name={item.icon} size={22}/></span>
                  <h4>{item.title}</h4>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="subsection-title">Research Work & Publications</h3>
                <p className="section-subtitle">Current research-oriented work is shown below. Publication details can be added when available.</p>
              </div>
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {researchWork.map((item) => (
                <article className="research-card" key={item.title}>
                  <p>{item.label}</p>
                  <h4>{item.title}</h4>
                  <span>{item.text}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="subsection-title">Research & Project Timeline</h3>
            <p className="section-subtitle">A concise view of how my cybersecurity, AI, and project work has developed over time.</p>
            <div className="timeline mt-6">
              {timelineItems.map((item, index) => (
                <article className="timeline-item" key={`${item.year}-${item.title}`}>
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell reveal">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Independent learning and academic research experience.</p>
          <div className="mt-8 space-y-4">
            {experiences.map((item) => (
              <article className="experience-row" key={item.title}>
                <div className="experience-logo"><Icon name={item.icon} size={20}/></div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] font-extrabold tracking-[.08em] text-slate-400">{item.type}</p>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="mt-1 text-[17px] font-extrabold">{item.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">{item.place}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell reveal">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Selected projects across mobile development, AI, robotics, and embedded systems.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectImage src={project.image} title={project.title} theme={project.theme} />
                <div className="p-5 sm:p-6">
                  <p className="text-[10px] font-extrabold tracking-[.08em] text-emerald-700 dark:text-emerald-400">{project.category}</p>
                  <h3 className="mt-2 text-[18px] font-extrabold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span className="skill-pill" key={tag}>{tag}</span>)}
                  </div>
                  <div className="mt-5 flex gap-3 text-xs font-bold">
                    <SmartLink href={project.github} className="project-link">GitHub <Icon name="external" size={12}/></SmartLink>
                    {project.live !== null && <SmartLink href={project.live} className="project-link">Live <Icon name="external" size={12}/></SmartLink>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="more-projects mt-6">
            <p>MORE PROJECTS TO ADD</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {moreProjects.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="section-shell reveal">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Programming, development, research, cybersecurity, networking, and project tools.</p>
          <div className="mt-8 space-y-4">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <p>{group.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell reveal">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Selected cybersecurity certifications and training.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {certifications.map((item) => (
              <article className="certificate-card" key={item.title}>
                <div className="certificate-icon"><Icon name="award" size={21}/></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="certificate-issuer">{item.issuer}</p>
                      <h3>{item.title}</h3>
                    </div>
                    <span className="date-chip">{item.date}</span>
                  </div>
                  <p className="certificate-text">{item.text}</p>
                  <SmartLink href={item.link} className="project-link mt-4">View Certificate <Icon name="external" size={12}/></SmartLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="moments-section reveal">
          <div className="mx-auto max-w-[1050px] px-6">
            <h2 className="section-title">News & Moments</h2>
            <p className="section-subtitle">Research, certification, and project milestones along the way.</p>
          </div>
          <div className="moments-track">
            {moments.map((item) => <MomentImage item={item} key={item.title} />)}
          </div>
        </section>

        <section id="contact" className="section-shell reveal pb-16">
          <h2 className="section-title">Contact & References</h2>
          <p className="section-subtitle">Open to research collaboration, internships, academic opportunities, and professional connections.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[.86fr_1.14fr]">
            <div>
              <div className="space-y-3">
                <div className="contact-pill"><Icon name="mail" size={16}/> {PROFILE.email || 'Add email in src/App.jsx'}</div>
                <div className="contact-pill"><Icon name="phone" size={16}/> {PROFILE.phone || 'Add phone in src/App.jsx'}</div>
                <div className="contact-pill"><Icon name="map" size={16}/> {PROFILE.location}</div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <SmartLink className="social-circle" href={PROFILE.github} aria-label="GitHub"><Icon name="github" size={19}/></SmartLink>
                <SmartLink className="social-circle" href={PROFILE.linkedin} aria-label="LinkedIn"><Icon name="linkedin" size={18}/></SmartLink>
                <SmartLink className="social-circle" href={PROFILE.facebook} aria-label="Facebook"><span className="text-sm font-black">f</span></SmartLink>
                <SmartLink className="social-circle" href={PROFILE.instagram} aria-label="Instagram"><span className="text-[11px] font-black">IG</span></SmartLink>
              </div>

              <div className="mt-9">
                <p className="text-[11px] font-extrabold tracking-[.08em] text-slate-500 dark:text-slate-400">REFERENCES</p>
                <div className="mt-4 space-y-3">
                  {referenceSlots.map((ref) => (
                    <div className="reference-card" key={ref.initials}>
                      <img src={ref.image} alt={ref.name} className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"/>
                      <div>
                        <h3>{ref.name}</h3>
                        <p>{ref.position}<br/>{ref.organization}<br/>{ref.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={submit}>
              <label>Your Name</label>
              <input name="name" autoComplete="name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/>
              <label>Your Email</label>
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
              <div className="flex items-center justify-between">
                <label className="!mb-0">Message</label>
                <span className="text-[10px] text-slate-400">{form.message.length} / 1500</span>
              </div>
              <textarea name="message" maxLength={1500} placeholder="Write your message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}/>
              <button className="primary-pill mt-4 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send Message'} {!sending && <Icon name="send" size={15}/>}</button>
              {status && <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer-shell">
        <div className="brand-mark text-[12px] tracking-[.22em]">SHAHRIAR SAIF</div>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">CSE Student • Researcher • Cybersecurity & AI Enthusiast</p>
        <a className="mt-3 inline-block text-xs underline underline-offset-4" href={PROFILE.cv} target="_blank" rel="noreferrer">View CV</a>
        <p className="mt-5 text-[10px] text-slate-400">© 2026 Shahriar Saif. All rights reserved.</p>
      </footer>

      <button
        className={`back-to-top ${showTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <Icon name="chevronUp" size={18}/>
      </button>
    </div>
  );
}

export default App;
