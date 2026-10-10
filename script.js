(() => {
  // ---------------------------------------------------------------- settings
  const PARENT_FORM_URL = 'https://forms.gle/your-parent-form';
  const TUTOR_FORM_URL = 'https://forms.gle/your-tutor-application';
  const SHOW_RATES = true;
  // Blog is switched off until there are real posts. Set to true to bring back the
  // section and its nav/footer links; the posts themselves live in POSTS below.
  const SHOW_BLOG = false;
  // Photos: drop a file named after the slot id (e.g. m-hero-bg.jpg) into this folder.
  const IMAGE_DIR = 'assets/images/';
  const IMAGE_EXTS = ['jpg', 'jpeg', 'png', 'webp'];

  // ------------------------------------------------------------------- data
  const STEPS = [
    { name: 'Browse', glyph: '/', title: 'Browse tutor profiles', text: 'Filter by subject and area, then read each tutor’s grades, achievements and experience.' },
    { name: 'Connect', glyph: '—', title: 'Contact the tutor directly', text: 'Use the contact details on their profile to agree on a schedule and rate that suits your needs.' },
    { name: 'Learn', glyph: '×', title: 'Pay your tutor directly', text: 'Lessons are paid straight to the tutor. Momentum Education takes no fees, so tutors keep 100%.' },
    { name: 'Give back', glyph: '+', title: 'Stronger communities', text: 'Students get affordable support, and high school students earn, teach and give back to their communities.' }
  ];
  const SLIDES = [
    { eyebrow: 'Partners, not employees', title: 'A platform built for tutors', text: 'Tutors are independent partners. They set their own rates, subjects and hours, and use Momentum to reach students.', icon: '✦', cardTitle: 'Tutor-first', cardText: 'No commission, no platform fee. Every dollar paid pays goes directly to the tutor.', img: 'm-slide-1', placeholder: 'Tutor working one-on-one with a student' },
    { eyebrow: 'Quality', title: 'Quality tutoring from peers', text: 'High school tutors bring strong grades and recent classroom experience to every lesson.', icon: '/', cardTitle: 'Strong students', cardText: 'Profiles list each tutor’s grades and achievements so you can choose with confidence.', img: 'm-slide-2', placeholder: 'Student doing homework' },
    { eyebrow: 'Community', title: 'Giving back', text: 'From across the GTA, we enable local high schoolers in supporting students in their own communities.', icon: '+', cardTitle: 'Local tutors', cardText: 'Filter by area to find a tutor close to home or online.', img: 'm-slide-3', placeholder: 'Tutors at a community event' }
  ];
  const TUTORS = [
    { name: 'Aisha Rahman', grade: 'Grade 12', school: 'Markville S.S.', area: 'Markham', subjects: ['Math', 'Science'], highlight: '97% average', rate: '$20/hr', email: 'aisha.r@example.com', phone: '(416) 555-0141', bio: 'I love helping students feel confident with math, from times tables to high school functions. I explain things step by step and use lots of practice problems.', achievements: ['97% average, Grade 11', 'Waterloo Math Contest, Certificate of Distinction', 'Ontario Scholar'], experience: ['2 years tutoring Grades 3–11 math', 'Peer tutor, school homework club'] },
    { name: 'Daniel Okafor', grade: 'Grade 11', school: 'Turner Fenton S.S.', area: 'Brampton', subjects: ['English', 'Reading & Writing'], highlight: '94% in English', rate: '$18/hr', email: 'daniel.o@example.com', phone: '(905) 555-0172', bio: 'Reading opened a lot of doors for me. I help students build reading habits and write with structure, from book reports to high school essays.', achievements: ['94% in Grade 10 English', 'School writing contest winner, 2025'], experience: ['Library reading buddy volunteer', '1 year tutoring Grades 2–10'] },
    { name: 'Mei Lin Chen', grade: 'Grade 12', school: 'Richmond Hill H.S.', area: 'Richmond Hill', subjects: ['Math', 'French'], highlight: '96% average', rate: '$22/hr', email: 'meilin.c@example.com', phone: '(905) 555-0193', bio: 'Bilingual in English and French. I make French practice fun with games and conversation.', achievements: ['96% average', 'DELF B2 certificate', 'Honour roll, 3 years'], experience: ['French immersion camp counsellor', '2 years tutoring math and French'] },
    { name: 'Lucas Ferreira', grade: 'Grade 11', school: 'Port Credit S.S.', area: 'Mississauga', subjects: ['Science', 'Coding'], highlight: '95% in Science', rate: '$18/hr', email: 'lucas.f@example.com', phone: '(905) 555-0114', bio: 'I teach science through simple experiments and introduce coding with Scratch and Python.', achievements: ['95% in Grade 10 Science', 'Regional science fair, silver'], experience: ['Robotics club mentor', 'Coding workshop assistant'] },
    { name: 'Priya Sharma', grade: 'Grade 12', school: 'Agincourt C.I.', area: 'Scarborough', subjects: ['Math', 'English'], highlight: '98% average', rate: '$20/hr', email: 'priya.s@example.com', phone: '(416) 555-0128', bio: 'Patient and organized. I work with students on homework, EQAO and exam prep, and study skills.', achievements: ['98% average', 'Principal’s list', 'DECA provincial finalist'], experience: ['3 years tutoring Grades 1–12', 'Summer reading program leader'] },
    { name: 'Jordan Mitchell', grade: 'Grade 11', school: 'Vaughan S.S.', area: 'Vaughan', subjects: ['Reading & Writing', 'French'], highlight: '93% average', rate: '$17/hr', email: 'jordan.m@example.com', phone: '(905) 555-0156', bio: 'I help early readers with phonics and comprehension, and support French immersion homework.', achievements: ['93% average', 'Student council representative'], experience: ['After-school program volunteer', '1 year tutoring Grades 1–4'] }
  ].map((t, i) => ({ ...t, img: 'm-tutor-' + (i + 1) }));
  const POSTS = [
    { cat: 'Parents', date: 'Sep 18, 2026', title: 'What to look for in a tutor profile', excerpt: 'Grades, experience and subject fit: how to choose the right tutor for your child.', img: 'm-blog-1' },
    { cat: 'Tutors', date: 'Sep 4, 2026', title: 'Setting your rate as a high school tutor', excerpt: 'A simple guide to pricing your lessons fairly while keeping tutoring affordable.', img: 'm-blog-2' },
    { cat: 'Community', date: 'Aug 21, 2026', title: 'Partner spotlight: tutoring in Scarborough', excerpt: 'How one Grade 12 student built a weekly math group for her neighbourhood.', img: 'm-blog-3' }
  ];
  const FAQS = [
    { q: 'How does payment work?', a: 'You pay your tutor directly, by e-transfer or another method you agree on together. Momentum Education takes no commission, so tutors keep 100%.' },
    { q: 'How much does tutoring cost?', a: 'Each tutor sets their own hourly rate, shown on their profile or negotiable in your personal disscussions. Our goal is to keep tutoring affordable and flexible for all.' },
    { q: 'Who are the tutors?', a: 'High school students across the GTA who apply through our tutor form. Each profile lists their grades, achievements, experience and subjects.' },
    { q: 'Are tutors employed by Momentum Education?', a: 'No. Tutors are independent partners who use our platform to connect with families. Schedules, rates and lesson plans are arranged between you and the tutor.' },
    { q: 'How do I raise a question or concern about a tutor?', a: 'Use the parent form in the Parents section. We review every submission and follow up by email.' },
    { q: 'How can I become a tutor?', a: 'If you’re a high school student in the GTA, fill out the tutor application form. We’ll review it and assist you in setting up your profile.' }
  ];
  const SUBJECTS = ['All', 'Math', 'Science', 'English', 'Reading & Writing', 'French', 'Coding'];
  const ALL_AREA = 'All of the GTA';

  const state = { step: 0, slide: 0, filter: 'All', area: ALL_AREA, faq: 0, active: -1 };

  // ---------------------------------------------------------------- helpers
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // ------------------------------------------------------------ image slots
  const SLOT_ICON =
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' +
    '<path d="m21 15-5-5L5 21"/></svg>';
  const slotHTML = (id, caption) => '<div class="slot" data-slot="' + esc(id) + '" data-caption="' + esc(caption) + '"></div>';
  const imageCache = new Map();
  function findImage(id) {
    if (!imageCache.has(id)) {
      imageCache.set(id, new Promise(resolve => {
        const tryExt = i => {
          if (i >= IMAGE_EXTS.length) return resolve(null);
          const url = IMAGE_DIR + id + '.' + IMAGE_EXTS[i];
          const probe = new Image();
          probe.onload = () => resolve(url);
          probe.onerror = () => tryExt(i + 1);
          probe.src = url;
        };
        tryExt(0);
      }));
    }
    return imageCache.get(id);
  }
  function hydrateSlots(root) {
    root.querySelectorAll('.slot:not([data-ready])').forEach(el => {
      el.setAttribute('data-ready', '');
      const caption = el.dataset.caption || '';
      el.innerHTML =
        '<div class="slot-frame">' +
        '<div class="slot-empty">' + SLOT_ICON + '<div class="slot-cap">' + esc(caption) + '</div></div>' +
        '<div class="slot-ring"></div></div>';
      findImage(el.dataset.slot).then(url => {
        if (!url) return;
        el.querySelector('.slot-frame').innerHTML = '<img src="' + esc(url) + '" alt="' + esc(caption) + '">';
      });
    });
  }

  // ---------------------------------------------------------------- mission
  function renderSteps() {
    $('steps').innerHTML = STEPS.map((s, i) =>
      '<button type="button" role="tab" aria-selected="' + (i === state.step) + '" data-step="' + i + '" class="step' + (i === state.step ? ' is-active' : '') + '">' +
      '<span class="step-glyph">' + esc(s.glyph) + '</span>' +
      '<span class="step-name">' + esc(s.name) + '</span></button>').join('');
    $('step-title').textContent = STEPS[state.step].title;
    $('step-text').textContent = STEPS[state.step].text;
  }
  function selectStep(i) {
    state.step = i;
    $('steps').querySelectorAll('.step').forEach((b, j) => {
      b.classList.toggle('is-active', j === i);
      b.setAttribute('aria-selected', j === i);
    });
    $('step-title').textContent = STEPS[i].title;
    $('step-text').textContent = STEPS[i].text;
  }

  // --------------------------------------------------------------- carousel
  function renderSlide() {
    const n = SLIDES.length, s = SLIDES[state.slide];
    $('slide-progress').style.width = ((state.slide + 1) / n * 100) + '%';
    $('slide-eyebrow').textContent = s.eyebrow;
    $('slide-title').textContent = s.title;
    $('slide-counter').textContent = String(state.slide + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
    $('slide-text').textContent = s.text;
    $('slide-icon').textContent = s.icon;
    $('slide-card-title').textContent = s.cardTitle;
    $('slide-card-text').textContent = s.cardText;
    $('slide-layers').querySelectorAll('.slide-layer').forEach((l, i) => l.classList.toggle('is-active', i === state.slide));
  }

  // ----------------------------------------------------------------- tutors
  function renderFilters() {
    $('filters').innerHTML = SUBJECTS.map(c =>
      '<button type="button" class="chip' + (c === state.filter ? ' is-active' : '') + '" data-filter="' + esc(c) + '">' + esc(c) + '</button>').join('');
  }
  function renderTutors() {
    const visible = TUTORS.map((t, i) => ({ t, i })).filter(({ t }) =>
      (state.filter === 'All' || t.subjects.includes(state.filter)) && (state.area === ALL_AREA || t.area === state.area));
    const grid = $('tutor-grid');
    grid.innerHTML = visible.map(({ t, i }) =>
      '<div class="tutor-card">' +
        '<div class="tutor-photo">' + slotHTML(t.img, 'Tutor headshot') + '</div>' +
        '<div class="tutor-body">' +
          '<div class="tutor-top">' +
            '<div class="tutor-id"><div class="tutor-name">' + esc(t.name) + '</div>' +
            '<div class="tutor-meta">' + esc(t.grade) + '<span class="tutor-school"> · ' + esc(t.school) + '</span></div></div>' +
            '<span class="tutor-area">' + esc(t.area) + '</span>' +
          '</div>' +
          '<div class="tag-row">' + t.subjects.map(sj => '<span class="tag">' + esc(sj) + '</span>').join('') + '</div>' +
          '<div class="tutor-foot"><span class="tutor-highlight">' + esc(t.highlight) + '</span>' +
            (SHOW_RATES ? '<span class="tutor-rate">' + esc(t.rate) + '</span>' : '') + '</div>' +
          '<button type="button" class="tutor-open" data-open="' + i + '">View<span class="tutor-open-long"> profile &amp; contact</span></button>' +
        '</div>' +
      '</div>').join('');
    hydrateSlots(grid);
    $('no-tutors').hidden = visible.length !== 0;
  }

  // ------------------------------------------------------------------- blog
  function renderPosts() {
    const grid = $('post-grid');
    grid.innerHTML = POSTS.map(p =>
      '<a href="#blog" class="post">' +
        '<div class="post-cover">' + slotHTML(p.img, 'Blog cover image') + '</div>' +
        '<div class="post-meta"><span class="post-cat">' + esc(p.cat) + '</span><span class="post-date">' + esc(p.date) + '</span></div>' +
        '<div class="post-title">' + esc(p.title) + '</div>' +
        '<p class="post-excerpt">' + esc(p.excerpt) + '</p>' +
        '<span class="post-more">Read post →</span>' +
      '</a>').join('');
    hydrateSlots(grid);
  }

  // -------------------------------------------------------------------- faq
  function renderFaqs() {
    $('faq-list').innerHTML = FAQS.map((f, i) => {
      const open = i === state.faq;
      return '<div class="faq-item">' +
        '<button type="button" class="faq-q" data-faq="' + i + '" aria-expanded="' + open + '">' + esc(f.q) +
        '<span class="faq-icon">' + (open ? '−' : '+') + '</span></button>' +
        (open ? '<p class="faq-a">' + esc(f.a) + '</p>' : '') +
      '</div>';
    }).join('');
  }

  // ------------------------------------------------------------------ modal
  function renderModal() {
    const root = $('modal-root');
    const a = state.active >= 0 ? TUTORS[state.active] : null;
    if (!a) { root.innerHTML = ''; return; }
    const first = a.name.split(' ')[0];
    const mailto = 'mailto:' + a.email;
    const tel = 'tel:' + a.phone.replace(/[^\d+]/g, '');
    const rateLine = SHOW_RATES ? 'Rate: ' + a.rate + ', paid directly to ' + first : 'Rate arranged directly with ' + first;
    const bullets = list => list.map(x => '<div class="modal-bullet"><span class="taupe">✦</span>' + esc(x) + '</div>').join('');
    root.innerHTML =
      '<div class="modal-backdrop" data-close>' +
        '<div class="modal" role="dialog" aria-modal="true" aria-label="Tutor profile">' +
          '<button type="button" class="modal-close" data-close aria-label="Close profile">×</button>' +
          '<div class="modal-side">' +
            '<div class="modal-photo">' + slotHTML(a.img, 'Tutor headshot') + '</div>' +
            '<div class="modal-contact">' +
              '<div class="modal-contact-title">✦ Contact ' + esc(first) + '</div>' +
              '<a href="' + esc(mailto) + '" class="modal-email">' + esc(a.email) + '</a>' +
              '<a href="' + esc(tel) + '">' + esc(a.phone) + '</a>' +
              '<div class="modal-paynote">Arrange lessons and payment directly with the tutor. Momentum takes no fees.</div>' +
            '</div>' +
          '</div>' +
          '<div class="modal-main">' +
            '<div class="modal-head"><div class="modal-name">' + esc(a.name) + '</div>' +
            '<div class="modal-meta">' + esc(a.grade) + ' · ' + esc(a.school) + ' · ' + esc(a.area) + '</div></div>' +
            '<p class="modal-bio">' + esc(a.bio) + '</p>' +
            '<div class="modal-group"><div class="modal-group-title">Specializes in</div>' +
              '<div class="tag-row">' + a.subjects.map(sj => '<span class="modal-tag">' + esc(sj) + '</span>').join('') + '</div></div>' +
            '<div class="modal-group"><div class="modal-group-title">Achievements &amp; grades</div>' + bullets(a.achievements) + '</div>' +
            '<div class="modal-group"><div class="modal-group-title">Experience</div>' + bullets(a.experience) + '</div>' +
            '<div class="modal-foot"><span class="modal-rate">' + esc(rateLine) + '</span>' +
              '<a href="' + esc(mailto) + '" class="modal-email-btn">Email ' + esc(first) + ' →</a></div>' +
          '</div>' +
        '</div>' +
      '</div>';
    hydrateSlots(root);
  }
  function openTutor(i) { state.active = i; document.body.classList.add('modal-open'); renderModal(); }
  function closeTutor() { state.active = -1; document.body.classList.remove('modal-open'); renderModal(); }

  // ------------------------------------------------------------------- init
  document.querySelectorAll('[data-form]').forEach(a => {
    a.href = a.dataset.form === 'parent' ? PARENT_FORM_URL : TUTOR_FORM_URL;
  });

  $('slide-layers').innerHTML = SLIDES.map(s => '<div class="slide-layer">' + slotHTML(s.img, s.placeholder) + '</div>').join('');
  $('area').innerHTML = [ALL_AREA, ...Array.from(new Set(TUTORS.map(t => t.area))).sort()]
    .map(ar => '<option value="' + esc(ar) + '">' + esc(ar) + '</option>').join('');

  renderSteps();
  renderSlide();
  renderFilters();
  renderTutors();
  if (SHOW_BLOG) {
    document.querySelectorAll('[data-blog]').forEach(el => { el.hidden = false; });
    renderPosts();
  }
  renderFaqs();
  hydrateSlots(document);

  $('steps').addEventListener('click', e => {
    const b = e.target.closest('[data-step]');
    if (b) selectStep(Number(b.dataset.step));
  });
  $('slide-prev').addEventListener('click', () => { state.slide = (state.slide - 1 + SLIDES.length) % SLIDES.length; renderSlide(); });
  $('slide-next').addEventListener('click', () => { state.slide = (state.slide + 1) % SLIDES.length; renderSlide(); });
  $('filters').addEventListener('click', e => {
    const b = e.target.closest('[data-filter]');
    if (!b) return;
    state.filter = b.dataset.filter;
    renderFilters();
    renderTutors();
  });
  $('area').addEventListener('change', e => { state.area = e.target.value; renderTutors(); });
  $('tutor-grid').addEventListener('click', e => {
    const b = e.target.closest('[data-open]');
    if (b) openTutor(Number(b.dataset.open));
  });
  // Mobile menu
  const navToggle = $('nav-toggle'), navLinks = $('nav-links');
  const setMenu = open => {
    navLinks.classList.toggle('is-open', open);
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open);
  };
  navToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
  navLinks.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  // Sticky nav goes solid once the page scrolls past the top
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  // Logos return to the home landing view
  document.querySelectorAll('[data-home]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    setMenu(false);
    history.replaceState(null, '', location.pathname + location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));
  $('faq-list').addEventListener('click', e => {
    const b = e.target.closest('[data-faq]');
    if (!b) return;
    const i = Number(b.dataset.faq);
    state.faq = i === state.faq ? -1 : i;
    renderFaqs();
  });
  $('modal-root').addEventListener('click', e => {
    // Only the backdrop itself and the × button close; clicks inside the dialog don't.
    if (e.target.hasAttribute('data-close')) closeTutor();
  });
  window.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (state.active >= 0) closeTutor();
    setMenu(false);
  });
})();
