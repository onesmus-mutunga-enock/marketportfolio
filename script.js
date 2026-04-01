// Portfolio Data and Functionality for Romin Mansuri - Complete Data + Dark Mode & CV Confirm
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality (user feedback)
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const html = document.documentElement;

    // Developer testing override: append ?forceDark=1 to the URL to force dark mode
    // This is non-invasive and won't change user localStorage unless the toggle is used.
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('forceDark') === '1') {
            html.classList.add('dark');
            console.info('[dev] forceDark=1 detected — dark mode applied for testing');
        }
    } catch (e) {
        // ignore in older environments
    }

    // Load saved theme
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    const toggleThemeHandler = () => {
        html.classList.toggle('dark');
        localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
    };

    if (themeToggle) themeToggle.addEventListener('click', toggleThemeHandler);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleThemeHandler);

    // Accessible off-canvas mobile menu toggle + focus handling
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileBackdrop = document.getElementById('mobile-backdrop');
    const mobileClose = document.getElementById('mobile-menu-close');
    let lastFocusedBeforeMobileMenu = null;

    function openMobileMenu() {
        if (!mobileMenu || !mobileBackdrop) return;
        lastFocusedBeforeMobileMenu = document.activeElement;
        // make panel visible (slide down + fade in)
        mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
        mobileMenu.classList.add('translate-y-0', 'opacity-100');
        mobileBackdrop.classList.remove('hidden');
        mobileMenu.setAttribute('aria-hidden', 'false');
        mobileBtn && mobileBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        const first = mobileMenu.querySelector('a,button');
        first && first.focus();
    }

    function closeMobileMenu() {
        if (!mobileMenu || !mobileBackdrop) return;
        mobileMenu.classList.add('-translate-y-full', 'opacity-0');
        mobileMenu.classList.remove('translate-y-0', 'opacity-100');
        mobileBackdrop.classList.add('hidden');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileBtn && mobileBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
        if (lastFocusedBeforeMobileMenu) lastFocusedBeforeMobileMenu.focus();
    }

    if (mobileBtn) mobileBtn.addEventListener('click', (e) => { e.preventDefault(); openMobileMenu(); });
    if (mobileClose) mobileClose.addEventListener('click', () => closeMobileMenu());
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', () => closeMobileMenu());

    // All portfolio data - FULL DATA RESTORED
    const portfolioData = {
        artifacts: [
            {
                title: 'Supply Chain Marketing Analysis',
                description: 'Academic analysis of inventory optimization strategies with visual data representation',
                image: 'resource/supplychain.jpg',
                link: '#'
            },
            {
                title: 'Social Media Campaign Mockup',
                description: 'Campaign concept for retail product merchandising and promotion',
                image: 'resource/social-media.jpg',
                link: '#'
            },
            {
                title: 'Process Improvement Infographic',
                description: 'Visualization of warehouse efficiency metrics and improvement recommendations',
                image: 'resource/process-improvement1.jpg',
                link: '#'
            },
            // },
            // {
            //     title: 'Customer Service Training Materials',
            //     description: 'Marketing collateral for retail customer experience enhancement',
            //     image: 'https://images.unsplash.com/photo-1559027408-b563e7adcc5e?w=400&h=300&fit=crop',
            //     link: '#'
            // }
        ],

        caseStudies: [
            {
                id: 1,
                title: 'FinTech Solution (Financial Tracker)',
                subtitle: 'Digital tracking for supply chain financial operations',
                image: 'resource/fintech.jpg',
                problem: 'Inefficient manual tracking of supplier payments and inventory financing in retail supply chain',
                goal: 'Reduce payment processing time by 50% and improve cash flow visibility',
                insight: 'Integrated financial tracking with inventory management drives operational efficiency',
                strategy: 'Mobile financial tracker + automated alerts + supplier dashboard integration',
                execution: `
                    • Developed M-Pesa tracker app for real-time supplier payments<br>
                    • Automated inventory-to-payment reconciliation<br>
                    • Supplier dashboard with payment status updates<br>
                    • Training workshops for warehouse staff<br>
                    • Integration with existing POS systems
                `,
                results: `
                    • 52% reduction in payment processing time<br>
                    • 98% payment accuracy improvement<br>
                    • $45K annual cash flow improvement<br>
                    • 30% faster supplier response times<br>
                    • ROI: 6.2x within first year
                `,
                reflection: 'Demonstrated how financial transparency in supply chain reduces operational friction and improves stakeholder trust.',
                testimonial: '"Transformed our payment reconciliation process" - Loblaw Supply Chain Manager'
            },
            {
                id: 2,
                title: 'NGO Awareness Campaign',
                subtitle: 'Safety protocol implementation across warehouse operations',
                image: 'resource/Ngo.jpg',
                problem: 'Low compliance with safety protocols leading to workplace incidents',
                goal: 'Increase safety compliance by 75% across all shifts',
                insight: 'Employee ownership and clear communication drives sustained behavior change',
                strategy: 'Peer-led training + visual campaigns + incentive programs + tracking metrics',
                execution: `
                    • Peer safety champion program training<br>
                    • Multilingual safety posters and signage<br>
                    • Monthly safety challenge competitions<br>
                    • Digital compliance tracking dashboard<br>
                    • Recognition awards system
                `,
                results: `
                    • 78% compliance rate improvement<br>
                    • 65% reduction in safety incidents<br>
                    • 92% employee participation rate<br>
                    • Program sustained 24+ months<br>
                    • Adopted company-wide
                `,
                reflection: 'Systematic awareness campaigns with measurable tracking create lasting safety culture improvements.',
                testimonial: '"Most effective safety initiative in 15 years" - Operations Director'
            },
            {
                id: 3,
                title: 'Community Talent Recognition Project',
                subtitle: 'Warehouse team skills identification and development',
                image: 'resource/community.jpg',
                problem: 'Underutilized talent in warehouse operations leading to inefficiencies',
                goal: 'Identify and develop 25+ high-potential team members',
                insight: 'Talent recognition builds motivation and process ownership',
                strategy: 'Skills assessment + mentorship matching + cross-training + recognition events',
                execution: `
                    • Team skills assessment surveys<br>
                    • Cross-training opportunity platform<br>
                    • Monthly talent showcase events<br>
                    • Mentorship pairing system<br>
                    • Career path visualization tools
                `,
                results: `
                    • 32 team members identified for development<br>
                    • 18% productivity improvement<br>
                    • 85% retention rate in talent pool<br>
                    • 12 promotions from within talent group<br>
                    • Reduced recruitment costs by 28%
                `,
                reflection: 'Structured talent programs create internal pipelines and reduce turnover while improving operations.',
                testimonial: '"Built our leadership pipeline from within" - HR Business Partner'
            }
        ],

        skills: [
            { name: 'Inventory Control', level: 95, category: 'supplychain' },
            { name: 'Warehouse Operations', level: 92, category: 'supplychain' },
            { name: 'Merchandising', level: 88, category: 'supplychain' },
            { name: 'Process Optimization', level: 93, category: 'supplychain' },
            // { name: 'Safety Compliance', level: 96, category: 'supplychain' },
            // { name: 'Excel & Data Analysis', level: 89, category: 'technical' },
            // { name: 'ERP Systems', level: 85, category: 'technical' },
            // { name: 'Inventory Software', level: 87, category: 'technical' },
            // { name: 'Cost Analysis', level: 82, category: 'finance' },
            { name: 'Budget Management', level: 80, category: 'finance' },
            { name: 'Customer Service Excellence', level: 94, category: 'business' },
            { name: 'Team Leadership', level: 86, category: 'business' }
        ],

        testimonials: [
            {
                quote: 'Outstanding inventory accuracy and process improvement initiative. Reduced shrinkage by 22%.',
                author: 'Operations Manager, Loblaw Companies Limited',
                role: 'Direct Supervisor'
            },
            {
                quote: 'Strong analytical skills and commitment to operational excellence. Excellent foundation for finance transition.',
                author: 'SCM Program Coordinator, Bow Valley College',
                role: 'Academic Advisor'
            },
            {
                quote: 'Demonstrated leadership potential and customer focus. Ready for business and accounting roles.',
                author: 'District Manager, Loblaw Companies Limited',
                role: 'Mentor'
            }
        ],

        blogPosts: [
            {
                title: 'Applying Supply Chain Principles to Financial Analysis',
                excerpt: 'How inventory optimization techniques translate to cash flow management',
                date: '2024-02-15',
                readTime: '6 min'
            },
            {
                title: 'Process Improvement Methodologies in Retail Operations',
                excerpt: 'Lean principles that delivered 18% efficiency gains in warehouse operations',
                date: '2024-02-01',
                readTime: '5 min'
            },
            {
                title: 'Transitioning from Operations to Finance Roles',
                excerpt: 'Skills transfer analysis for supply chain professionals',
                date: '2024-01-20',
                readTime: '7 min'
            },
            {
                title: 'Data-Driven Decision Making in Merchandising',
                excerpt: 'Metrics and analysis framework for retail success',
                date: '2024-01-10',
                readTime: '4 min'
            }
        ],

        timeline: [
            {
                date: '2023-2024',
                title: 'Postgraduate Certificate - Supply Chain Management',
                description: 'Bow Valley College - Focus on operations, logistics, and inventory control'
            },
            {
                date: '2022-Present',
                title: 'Loblaw Operations Training Program',
                description: 'Comprehensive retail operations, safety, and customer service certification'
            },
            {
                date: '2023',
                title: 'Lean Six Sigma Yellow Belt',
                description: 'Process improvement and waste reduction methodologies'
            },
            {
                date: '2024',
                title: 'Introduction to Accounting & Finance',
                description: 'Foundational business finance and accounting principles'
            }
        ]
    };

    // Full render functions (abbreviated for brevity - all preserved)
    function renderArtifacts() {
        const container = document.getElementById('artifacts-grid');
        portfolioData.artifacts.forEach(artifact => {
            const card = document.createElement('div');
            card.className = 'group cursor-pointer bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden dark:bg-slate-800';
            card.innerHTML = `
                <div class="relative overflow-hidden rounded-2xl mb-6 h-64">
                    <img src="${artifact.image}" alt="${artifact.title}" loading="lazy" decoding="async" width="400" height="300" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <a href="${artifact.link}" class="text-white font-semibold hover:underline">View Project</a>
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-accent transition-colors">${artifact.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${artifact.description}</p>
            `;
            // Map artifact to a case-study-like object so it opens the same modal
            const studyLike = {
                title: artifact.title || '',
                subtitle: artifact.description || 'Artifact',
                image: artifact.image || '',
                link: artifact.link || '',
                isArtifact: true,
                problem: '',
                goal: artifact.description || '',
                insight: '',
                strategy: '',
                execution: artifact.description || '',
                results: '',
                reflection: '',
                testimonial: ''
            };

            // Make the whole card open the case-study modal and add keyboard accessibility
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            const openModal = (e) => {
                // ignore when clicking an actual external link inside the card
                if (e && e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'a') return;
                openCaseStudy(studyLike);
            };
            card.addEventListener('click', openModal);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openCaseStudy(studyLike);
                }
            });

            // Ensure the inner 'View Project' link also opens the modal instead of navigating
            const innerLink = card.querySelector('a');
            if (innerLink) {
                innerLink.setAttribute('href', '#');
                innerLink.addEventListener('click', function(ev) {
                    ev.preventDefault();
                    openCaseStudy(studyLike);
                });
            }

            container.appendChild(card);
        });
    }

    function renderCaseStudies() {
        const container = document.getElementById('cases-grid');
        portfolioData.caseStudies.forEach(study => {
            const card = document.createElement('div');
            card.className = 'group bg-white dark:bg-slate-800 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 h-full';

            // Build structure: image on top, then title + subtitle + Read more button below
            card.innerHTML = `
                <div class="overflow-hidden rounded-2xl mb-4 h-48 md:h-56 lg:h-64">
                    <img src="${study.image}" alt="${study.title}" loading="lazy" decoding="async" width="800" height="500" class="w-full h-full object-cover transition-transform duration-700">
                </div>
                <div class="px-2 py-3 text-center">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">${study.title}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">${study.subtitle}</p>
                    <button class="read-more inline-block px-5 py-2 rounded-full bg-accent text-white font-semibold hover:opacity-90" type="button">Read more</button>
                </div>
            `;

            // Open modal when either card is clicked or Read more button is activated (keyboard accessible)
            card.addEventListener('click', (e) => {
                // If clicked on the button, let the button handler run; otherwise open modal
                if (e.target && e.target.classList && e.target.classList.contains('read-more')) return;
                openCaseStudy(study);
            });

            const btn = card.querySelector('.read-more');
            if (btn) {
                btn.addEventListener('click', (e) => { e.stopPropagation(); openCaseStudy(study); });
                btn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCaseStudy(study); } });
            }

            container.appendChild(card);
        });
    }

    function renderSkills() {
        const container = document.getElementById('skills-list');
        portfolioData.skills.forEach(skill => {
            const item = document.createElement('div');
            item.className = 'group bg-white dark:bg-slate-800 p-4 rounded-xl';
            item.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-accent transition-colors">${skill.name}</span>
                    <span class="text-lg font-medium text-gray-600 dark:text-gray-400">${skill.level}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div class="bg-gradient-to-r from-accent to-primary h-3 rounded-full transition-all duration-1000" style="width: ${skill.level}%"></div>
                </div>
            `;
            container.appendChild(item);
        });
    }

    function renderTestimonials() {
        const container = document.getElementById('testimonials');
        portfolioData.testimonials.forEach(testimonial => {
            const item = document.createElement('div');
            item.className = 'bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/30 dark:border-slate-700 hover:bg-white hover:dark:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl';
            item.innerHTML = `
                <p class="text-lg italic text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">"${testimonial.quote}"</p>
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center font-semibold text-white mr-4">
                        ${testimonial.author.split(' ')[0][0]}${testimonial.author.split(' ')[testimonial.author.split(' ').length - 1][0]}
                    </div>
                    <div>
                        <p class="font-semibold text-gray-900 dark:text-gray-100">${testimonial.author}</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">${testimonial.role}</p>
                    </div>
                </div>
            `;
            container.appendChild(item);
        });
    }

    function renderBlogPosts() {
        const container = document.getElementById('blog-posts');
        portfolioData.blogPosts.forEach(post => {
            const item = document.createElement('article');
            item.className = 'group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden';
            item.innerHTML = `
                <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-accent transition-colors line-clamp-2">${post.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">${post.excerpt}</p>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>📅 ${post.date}</span>
                    <span class="ml-4">${post.readTime} read</span>
                </div>
            `;
            container.appendChild(item);
        });
    }

    function renderTimeline() {
        const container = document.getElementById('timeline');
        portfolioData.timeline.forEach((item, index) => {
            const dir = index % 2 === 0 ? 'left' : 'right';
            const mdFlex = index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row';
            const event = document.createElement('div');
            // Use responsive classes: on mobile stack centered, on md+ alternate sides
            event.className = `flex flex-col md:flex items-center mb-12 group ${mdFlex}`;

            event.innerHTML = `
                <div class="flex flex-col items-center w-full sm:w-1/2">
                    <div class="w-6 h-6 bg-accent dark:bg-primary rounded-full shadow-lg z-10 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                        <div class="w-2 h-2 bg-white dark:bg-slate-900 rounded-full shadow-md"></div>
                    </div>
                </div>
                <div class="timeline-card w-3/4 md:w-5/12 px-6 py-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-accent/50 dark:hover:border-primary/50 timeline-item from-${dir}" data-direction="${dir}">
                    <h4 class="text-xl font-bold text-primary dark:text-accent mb-2">${item.title}</h4>
                    <p class="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-3 font-medium">${item.date}</p>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${item.description}</p>
                </div>
            `;

            container.appendChild(event);
        });

        // Timeline central line (keeps same appearance)
        const line = document.createElement('div');
        line.className = 'absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/30 dark:from-primary/30 to-primary/30 dark:to-accent/30';
        container.appendChild(line);

        // Initialize scroll-triggered timeline animations
        initTimelineAnimations();
    }

    function initTimelineAnimations() {
        const items = document.querySelectorAll('.timeline-item');
        if (!items.length) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.15 });

        items.forEach(item => {
            io.observe(item);
        });
    }

    function openCaseStudy(study) {
        const modal = document.getElementById('case-modal');
        const content = document.getElementById('modal-content');
        const closeBtn = document.getElementById('close-modal');
        // Save previously focused element and setup focus trap
        window._lastFocusedBeforeModal = document.activeElement;

        // Focus trap handler
        const trapHandler = function(e) {
            if (e.key !== 'Tab') return;
            const focusable = modal.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])');
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        // Attach handler so we can remove later
        modal._trapHandler = trapHandler;
        document.addEventListener('keydown', trapHandler);
        
        // If this was opened from an artifact, render a simplified modal (title, image, description, link)
        if (study.isArtifact) {
            content.innerHTML = `
            <div class="max-w-3xl mx-auto text-center">
                ${study.image ? `<img src="${study.image}" alt="${study.title}" loading="lazy" decoding="async" width="1200" height="675" class="w-full h-80 object-cover rounded-2xl mb-8 shadow-2xl">` : ''}
                <h1 id="modal-title" class="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-6">${study.title}</h1>
                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">${study.subtitle || study.goal || ''}</p>
                ${study.link ? `<div class="mt-6"><a href="${study.link}" target="_blank" rel="noopener" class="inline-block px-6 py-3 rounded-full bg-accent text-white hover:opacity-90">Open Project</a></div>` : ''}
            </div>
            `;

            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden','false');
            closeBtn && closeBtn.focus();
            document.body.style.overflow = 'hidden';
            return;
        }

        // Build a clean results grid (split on <br> or newlines, remove bullet markers)
        const resultsItems = (study.results || '').split(/<br>|\n/).map(r => r.replace(/•/g, '').trim()).filter(Boolean);
        const resultsHTML = resultsItems.map(r => `
            <div class="p-6 rounded-2xl text-center bg-gradient-to-r from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 shadow-md">
                <p class="text-2xl font-bold text-primary dark:text-accent mb-2">${r}</p>
            </div>
        `).join('');

        // Parse strategy into list items (support • bullets, <br>, newlines, or ' + ' separators)
        function parseList(text) {
            if (!text) return [];
            if (text.indexOf('•') !== -1) return text.split('•').map(s => s.trim()).filter(Boolean);
            if (text.indexOf('<br') !== -1) return text.split(/<br\s*\/?>/i).map(s => s.replace(/<[^>]*>/g, '').trim()).filter(Boolean);
            if (text.indexOf('\n') !== -1) return text.split(/\n/).map(s => s.trim()).filter(Boolean);
            if (text.indexOf(' + ') !== -1) return text.split(' + ').map(s => s.trim()).filter(Boolean);
            if (text.indexOf(';') !== -1) return text.split(';').map(s => s.trim()).filter(Boolean);
            return [text.trim()];
        }

        const strategyItems = parseList(study.strategy || '');
        const strategyHTML = strategyItems.map(point => `<div class="flex items-start"><div class="w-2 h-2 bg-accent dark:bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div><p class="text-lg text-gray-700 dark:text-gray-300">${point}</p></div>`).join('');

        content.innerHTML = `
            <div class="max-w-4xl mx-auto">
            <img src="${study.image}" alt="${study.title}" loading="lazy" decoding="async" width="1200" height="675" class="w-full h-96 object-cover rounded-2xl mb-12 shadow-2xl">
            <h1 id="modal-title" class="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-8">${study.title}</h1>
                <h2 class="text-2xl font-semibold text-accent dark:text-primary mb-12 italic">${study.subtitle}</h2>
                
                <div class="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 class="text-3xl font-bold text-primary dark:text-accent mb-8">Objective</h3>
                        <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">${study.goal}</p>
                        
                        <h3 class="text-3xl font-bold text-primary dark:text-accent mb-8">Problem</h3>
                        <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">${study.problem}</p>
                        
                        <h3 class="text-3xl font-bold text-primary dark:text-accent mb-8">Strategy</h3>
                        <div class="space-y-4 mb-8">
                            ${strategyHTML}
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-3xl font-bold text-primary dark:text-accent mb-8">Execution</h3>
                        <div class="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl mb-8">
                            ${study.execution.split('<br>').map(line => `<p class="text-lg text-gray-700 dark:text-gray-300 mb-2">${line.trim()}</p>`).join('')}
                        </div>
                        
                        <h3 class="text-3xl font-bold text-primary dark:text-accent mb-6">Outcome</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            ${resultsHTML}
                        </div>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-accent/5 to-primary/5 dark:from-accent/10 dark:to-primary/10 p-12 rounded-3xl mb-12">
                    <h3 class="text-3xl font-bold text-primary dark:text-accent mb-8 text-center">Key Learning</h3>
                    <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center italic max-w-4xl mx-auto">${study.reflection}</p>
                </div>
                
                ${study.testimonial ? `<blockquote class="border-l-4 border-accent dark:border-primary pl-8 italic text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
                    "${study.testimonial}"
                </blockquote>` : ''}
            </div>
        `;
        
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden','false');
        // focus the close button for immediate keyboard access
        closeBtn && closeBtn.focus();
        document.body.style.overflow = 'hidden';
    }

    // Event listeners - standard ones
    document.getElementById('close-modal').onclick = function() {
        const modal = document.getElementById('case-modal');
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden','true');
        document.body.style.overflow = 'auto';
        // remove focus trap
        if (modal._trapHandler) document.removeEventListener('keydown', modal._trapHandler);
        // restore focus
        if (window._lastFocusedBeforeModal) window._lastFocusedBeforeModal.focus();
    };

    document.getElementById('case-modal').onclick = function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
            this.setAttribute('aria-hidden','true');
            document.body.style.overflow = 'auto';
            if (this._trapHandler) document.removeEventListener('keydown', this._trapHandler);
            if (window._lastFocusedBeforeModal) window._lastFocusedBeforeModal.focus();
        }
    };

    // Global Escape handler to close modal or mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('case-modal');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileBtn = document.getElementById('mobile-menu-btn');

            if (modal && !modal.classList.contains('hidden')) {
                // close modal
                modal.classList.add('hidden');
                modal.setAttribute('aria-hidden','true');
                document.body.style.overflow = 'auto';
                if (modal._trapHandler) document.removeEventListener('keydown', modal._trapHandler);
                if (window._lastFocusedBeforeModal) window._lastFocusedBeforeModal.focus();
            } else if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                // close mobile menu
                mobileMenu.classList.add('hidden');
                mobileMenu.setAttribute('aria-hidden','true');
                if (mobileBtn) mobileBtn.setAttribute('aria-expanded','false');
                document.body.style.overflow = 'auto';
                if (lastFocusedBeforeMobileMenu) lastFocusedBeforeMobileMenu.focus();
            }
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('mobile-menu').classList.add('hidden');
        };
    });

    document.getElementById('mobile-menu-btn').onclick = function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    };

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('shadow-lg', 'bg-white/95', 'dark:bg-slate-900/95');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-white/95', 'dark:bg-slate-900/95');
        }
    });

    function initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }

    // Initialize all renders - FULLY FUNCTIONAL
    renderArtifacts();
    renderCaseStudies();
    renderSkills();
    renderTestimonials();
    renderBlogPosts();
    renderTimeline();
    initAnimations();

    // Download CV: confirm before download and show transient toast after
    const downloadCv = document.getElementById('download-cv');
    function showToast(message) {
        const t = document.createElement('div');
        t.className = 'toast';
        t.textContent = message;
        document.body.appendChild(t);
        // allow CSS to settle
        requestAnimationFrame(() => t.classList.remove('hide'));
        setTimeout(() => {
            t.classList.add('hide');
            setTimeout(() => t.remove(), 300);
        }, 3000);
    }

    if (downloadCv) {
        downloadCv.addEventListener('click', async function(e) {
            const href = this.getAttribute('href');
            if (!href) return; // nothing to do
            e.preventDefault();
            const okay = window.confirm('Are you sure you want to download the CV (PDF)?');
            if (!okay) return;

            // Try fetching as a blob to force download (prevents inline open in browser)
            try {
                const resp = await fetch(href, { cache: 'no-store' });
                if (!resp.ok) throw new Error('Network response was not ok');
                const blob = await resp.blob();
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                const filename = this.getAttribute('download') || href.split('/').pop() || 'Romin_Mansuri_CV.pdf';
                a.setAttribute('download', filename);
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);
                showToast('Download started — check your Downloads folder');
            } catch (err) {
                // Fallback: navigate to href (browser may open inline)
                try {
                    window.location.href = href;
                    showToast('Download started (fallback)');
                } catch (e) {
                    alert('Unable to start download.');
                }
            }
        });
    }
});
