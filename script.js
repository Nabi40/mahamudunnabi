// ---- data pulled from akmahamudunnabi.onrender.com ----
const stackItems = [
  "Hugging Face", "TensorFlow", "PyTorch", "NLTK", "OpenCV", "Matplotlib", "NumPy", "Pandas",
  "CrewAI", "Django", "FastAPI", "Next.js", "MySQL", "PostgreSQL", "Power BI", "Postman", "Docker", "CI/CD", "PHP"
];

const skills = [
  { name: "MySQL, PostgreSQL", pct: 90 },
  { name: "Django, FastAPI", pct: 80 },
  { name: "Artificial Intelligence", pct: 75 },
  { name: "Postman, Docker", pct: 70 },
  { name: "MLOps", pct: 65 },
  { name: "Machine Learning", pct: 60 },
  { name: "Next.js", pct: 50 },
  { name: "PHP", pct: 45 },
];

const projects = [
  {
    name: "YoloDetectGemini",
    img: "https://akmahamudunnabi.onrender.com/images/YoloDetectGemini.png",
    desc: "Image analysis platform combining real-time YOLO object detection with conversational AI powered by Google Gemini.",
    tech: ["YOLO", "Gemini", "Django", "Next.js"],
    link: "https://github.com/Nabi40/YoloDetectGemini",
    label: "View Code"
  },
  {
    name: "RealTimeStoT",
    img: "https://akmahamudunnabi.onrender.com/images/RealTimeStoT.png",
    desc: "Real-time speech-to-text system: streams mic audio via WebSockets to a Django Channels + Faster-Whisper backend, with a Next.js frontend.",
    tech: ["Django Channels", "Faster-Whisper", "WebSocket", "Next.js"],
    link: "https://github.com/Nabi40/RealTimeStoT",
    label: "View Code"
  },
  {
    name: "video_to_panorama",
    img: "https://akmahamudunnabi.onrender.com/images/video_to_panorama.png",
    desc: "Converts video frames into panoramic images through feature matching, stitching, and blending.",
    tech: ["Python", "OpenCV", "RANSAC", "NumPy"],
    link: "https://github.com/Nabi40/video_to_panorama",
    label: "View Code"
  },
  {
    name: "English-to-Bangla Translator",
    img: "https://akmahamudunnabi.onrender.com/images/English-to-Bangla-Language-Translator.png",
    desc: "Sequence-to-sequence model that translates English text into fluent Bangla.",
    tech: ["PyTorch", "Transformers", "Seq2Seq"],
    link: "https://github.com/Nabi40/English-to-Bangla-Language-Translator-Model",
    label: "View Code"
  },
  {
    name: "meme_search",
    img: "https://akmahamudunnabi.onrender.com/images/meme_search.png",
    desc: "Search memes by keyword or visual similarity using CNN embeddings and ranking logic.",
    tech: ["Python", "Faiss", "CNN"],
    link: "https://github.com/Nabi40/meme_search",
    label: "View Code"
  },
  {
    name: "MNist",
    img: "https://akmahamudunnabi.onrender.com/images/Mnistt.png",
    desc: "Handwritten digit recognition with a custom CNN architecture, high accuracy on digit classification.",
    tech: ["TensorFlow", "Keras", "Python"],
    link: "https://github.com/Nabi40/MNist",
    label: "View Code"
  },
  {
    name: "YoloFaceNet",
    img: "https://akmahamudunnabi.onrender.com/images/YoloFaceNet.png",
    desc: "Real-time face detection and recognition combining YOLOv8 with FaceNet embeddings.",
    tech: ["YOLOv8", "FaceNet", "OpenCV"],
    link: "https://github.com/Nabi40/YoloFaceNet",
    label: "View Code"
  },
  {
    name: "timestamp_it",
    img: "https://akmahamudunnabi.onrender.com/images/timestamp_it.png",
    desc: "Automatically generates video/audio timestamps via scene detection and export pipeline.",
    tech: ["Python", "FFmpeg", "MoviePy"],
    link: "https://github.com/Nabi40/timestamp_it",
    label: "View Code"
  },
  {
    name: "Hand_raise_detection",
    img: "https://akmahamudunnabi.onrender.com/images/Hand_raise_detection.png",
    desc: "Detects raised hands in video streams using pose estimation, with a live UI overlay.",
    tech: ["Python", "MediaPipe", "OpenCV"],
    link: "https://github.com/Nabi40/Hand_raise_detection",
    label: "View Code"
  },
  {
    name: "CrewaiAgent",
    img: "https://akmahamudunnabi.onrender.com/images/CrewaiAgent.png",
    desc: "Autonomous AI agent with task planning and execution, built for Q&A data fetching.",
    tech: ["Python", "LangChain", "OpenAI API", "CrewAI"],
    link: "https://github.com/Nabi40/CrewaiAgent",
    label: "View Code"
  },
  {
    name: "LLaMA_Bangla01",
    img: "https://akmahamudunnabi.onrender.com/images/LLAMA_Empathetic.png",
    desc: "Fine-tuning LLaMA 3.1-8B-Instruct on a Bengali empathetic-conversations dataset to produce more empathetic chatbot responses.",
    tech: ["Unsloth", "PyTorch"],
    link: "https://lnkd.in/ga5usb9j",
    label: "View Project"
  },
  {
    name: "rubber-duck.solutions",
    img: "https://akmahamudunnabi.onrender.com/images/rubber-duck.solutions.png",
    desc: "AI photo-editing tool that removes image backgrounds, self-hosted on a Linux server behind Nginx and Cloudflare.",
    tech: ["Django", "Next.js"],
    link: "http://rubber-duck.solutions/",
    label: "Visit Live"
  },
  {
    name: "jersey0099",
    img: "https://akmahamudunnabi.onrender.com/images/jersey0099.jpg",
    desc: "Predicts jersey numbers by learning the tens and ones digits separately, letting the model generalize to number combinations it has never seen.",
    tech: ["MobileNetV3-Small", "PyTorch", "GRU"],
    link: "https://colab.research.google.com/drive/1mPNxmYxynFibrMEtrM0TNV2Bd51v8CYU?usp=sharing",
    label: "View Notebook"
  },
  {
    name: "Weatherproject",
    img: null,
    desc: "Weather forecasting web app with a clean UI, containerized for deployment.",
    tech: ["Django", "API", "HTML/CSS", "Docker"],
    link: "https://weatherproject-3.onrender.com/",
    label: "Visit Live"
  },
  {
    name: "folium_map",
    img: null,
    desc: "Interactive map-based web app built with Folium for geographic data visualization.",
    tech: ["Django", "API", "Folium", "HTML/CSS"],
    link: "https://folium-map.onrender.com/",
    label: "Visit Live"
  },
  {
    name: "Project_management_Api",
    img: null,
    desc: "REST API for managing projects and tasks, with clean serializer design.",
    tech: ["Django", "REST Framework", "Serializers"],
    link: "https://github.com/Nabi40/Project_management_Api/tree/main",
    label: "View Code"
  },
  {
    name: "teleacmebot",
    img: null,
    desc: "Telegram bot integrating OpenAI for conversational responses.",
    tech: ["OpenAI", "python-telegram-bot", "Dotenv"],
    link: "https://github.com/Nabi40/teleacmebot",
    label: "View Code"
  },
  {
    name: "ChatBot",
    img: null,
    desc: "Rule-based and neural chatbot combining NLTK preprocessing with a PyTorch CNN model.",
    tech: ["NLTK", "PyTorch", "CNN"],
    link: "https://github.com/Nabi40/chatbot",
    label: "View Code"
  },
];

const thumbColors = ["var(--pink)", "var(--purple)", "var(--blue)", "#FF9F43", "#2FBF71"];

// render marquee
const marquee = document.getElementById('marquee');
const marqueeHTML = stackItems.map(s => `<span>${s}</span>`).join('');
marquee.innerHTML = marqueeHTML + marqueeHTML;

// render stack pills
const stackGrid = document.getElementById('stackGrid');
stackGrid.innerHTML = stackItems.map(s => `<span class="stack-pill">${s}</span>`).join('');

// render skill bars
const skillsGrid = document.getElementById('skillsGrid');
skillsGrid.innerHTML = skills.map(s => `
  <div class="skill-row">
    <div class="top"><span>${s.name}</span><span>${s.pct}%</span></div>
    <div class="skill-track"><div class="skill-fill" style="width:${s.pct}%"></div></div>
  </div>
`).join('');

// render project cards
const projGrid = document.getElementById('projGrid');
projGrid.innerHTML = projects.map((p, i) => `
  <div class="proj-card">
    <div class="proj-thumb" style="${p.img ? '' : `background:${thumbColors[i % thumbColors.length]}`}">
      ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy" />` : p.name.toUpperCase()}
    </div>
    <div class="proj-body">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="chip-row">${p.tech.map(t => `<span class="chip">${t}</span>`).join('')}</div>
      <div class="proj-links"><a href="${p.link}" target="_blank">${p.label} →</a></div>
    </div>
  </div>
`).join('');

// intro splash: pop the photo in, then dismiss automatically (or on click/tap)
const intro = document.getElementById('intro');
function dismissIntro() {
  intro.classList.add('hide');
  document.body.style.overflow = '';
}
document.body.style.overflow = 'hidden';
intro.addEventListener('click', dismissIntro);
setTimeout(dismissIntro, 2200);

// mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));
