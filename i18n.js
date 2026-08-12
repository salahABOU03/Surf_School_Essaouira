/**
 * i18n.js — Kawki Kite Bilingual Translation System (FR / EN)
 * Auto-detects browser language, saves preference, toggles instantly.
 */

const translations = {
    // ===== NAVIGATION =====
    "nav.home": { fr: "Accueil", en: "Home" },
    "nav.sports": { fr: "Nos Sports", en: "Our Sports" },
    "nav.pricing": { fr: "Tarifs", en: "Pricing" },
    "nav.spots": { fr: "Spots", en: "Spots" },
    "nav.weather": { fr: "Météo", en: "Weather" },
    "nav.faq": { fr: "FAQ", en: "FAQ" },
    "nav.contact": { fr: "Contact", en: "Contact" },
    "nav.book": { fr: "Réserver", en: "Book Now" },
    "nav.skip": { fr: "Aller au contenu principal", en: "Skip to main content" },

    // ===== HERO =====
    "hero.badge.weather": { fr: "MÉTÉO EN DIRECT", en: "LIVE WEATHER" },
    "hero.badge.location": { fr: "ESSAOUIRA, MAROC", en: "ESSAOUIRA, MOROCCO" },
    "hero.title": {
        fr: 'La meilleure école de <span translate="no">wingfoil</span>, <span translate="no">kitesurf</span>, planche à voile et <span translate="no">surf</span> d\'Essaouira',
        en: 'The best <span translate="no">wingfoil</span>, <span translate="no">kitesurf</span>, windsurf & <span translate="no">surf</span> school in Essaouira'
    },
    "hero.loading": { fr: "Vérification des conditions météo du jour...", en: "Checking today's weather conditions..." },
    "hero.subtitle": {
        fr: "Découvrez la magie de la capitale marocaine du vent avec des instructeurs certifiés, du matériel haut de gamme et des cours personnalisés pour tous les niveaux.",
        en: "Discover the magic of Morocco's wind capital with certified instructors, premium equipment and personalised lessons for all levels."
    },
    "hero.btn.prices": { fr: "Afficher les prix", en: "View Prices" },
    "hero.btn.whatsapp": { fr: "Réservez sur WhatsApp", en: "Book on WhatsApp" },

    // ===== TRUST SECTION =====
    "trust.cert.title": { fr: "Moniteurs Certifiés", en: "Certified Instructors" },
    "trust.cert.desc": { fr: "Instructeurs expérimentés diplômés IKO & VDWS pour votre sécurité.", en: "Experienced IKO & VDWS certified instructors for your safety." },
    "trust.equip.title": { fr: "Équipement Récent", en: "Latest Equipment" },
    "trust.equip.desc": { fr: "Ailes, planches et foils haut de gamme renouvelés chaque saison.", en: "Premium wings, boards and foils renewed every season." },
    "trust.mobile.title": { fr: "Service Mobile & Transport", en: "Mobile Service & Transfer" },
    "trust.mobile.desc": { fr: "Prise en charge à votre hôtel et transport vers le meilleur spot du jour.", en: "Hotel pick-up and transfer to the best spot of the day." },
    "trust.rating.title": { fr: "4.9/5 sur Google", en: "4.9/5 on Google" },
    "trust.rating.desc": { fr: "Plus de 127 avis clients satisfaits du monde entier.", en: "Over 127 satisfied client reviews from around the world." },

    // ===== ABOUT =====
    "about.title": {
        fr: 'Bienvenue chez <span class="text-primary">Kawki Kite</span> Essaouira',
        en: 'Welcome to <span class="text-primary">Kawki Kite</span> Essaouira'
    },
    "about.p1": {
        fr: 'Située au cœur de la capitale marocaine du vent, <strong>Kawki Kite</strong> est l\'école de référence à Essaouira pour l\'apprentissage et le perfectionnement du <a href="wingfoil-essaouira.html" translate="no">Wingfoil</a>, <a href="kitesurf-essaouira.html" translate="no">Kitesurf</a>, <a href="windsurf-essaouira.html">Windsurf</a> et <a href="surf-essaouira.html" translate="no">Surf</a>.',
        en: 'Located in the heart of Morocco\'s wind capital, <strong>Kawki Kite</strong> is Essaouira\'s leading school for learning and improving your <a href="wingfoil-essaouira.html" translate="no">Wingfoil</a>, <a href="kitesurf-essaouira.html" translate="no">Kitesurf</a>, <a href="windsurf-essaouira.html">Windsurf</a> and <a href="surf-essaouira.html" translate="no">Surf</a> skills.'
    },
    "about.p2": {
        fr: "Que vous soyez totalement débutant souhaitant tirer vos premiers bords ou un pratiquant confirmé cherchant du coaching sur les vagues de Sidi Kaouki ou Moulay Bouzerktoun, notre équipe passionnée vous garantit un apprentissage rapide et sécurisé.",
        en: "Whether you're a complete beginner looking to catch your first ride or an experienced rider seeking coaching on the waves of Sidi Kaouki or Moulay Bouzerktoun, our passionate team guarantees fast and safe progression."
    },
    "about.feat1": { fr: "Cours Particuliers & Collectifs", en: "Private & Group Lessons" },
    "about.feat2": { fr: "Matériel & Combinaison Inclus", en: "Equipment & Wetsuit Included" },
    "about.feat3": { fr: "Français, Anglais, Arabe", en: "French, English, Arabic" },
    "about.feat4": { fr: "Location de Matériel Récent", en: "Latest Equipment Rental" },

    // ===== HOW IT WORKS =====
    "how.title": { fr: "Comment Réserver & Apprendre", en: "How to Book & Learn" },
    "how.subtitle": { fr: "Une école 100% mobile — nous vous accompagnons sur le meilleur spot chaque jour.", en: "A 100% mobile school — we take you to the best spot every day." },
    "how.step1.title": { fr: "Réservation WhatsApp", en: "Book via WhatsApp" },
    "how.step1.desc": {
        fr: 'Envoyez-nous un message sur <a href="https://wa.me/212625044412" rel="noopener" target="_blank">WhatsApp</a> pour réserver. Nous définissons votre niveau et vos horaires.',
        en: 'Send us a message on <a href="https://wa.me/212625044412" rel="noopener" target="_blank">WhatsApp</a> to book. We\'ll assess your level and set your schedule.'
    },
    "how.step2.title": { fr: "Prise en charge", en: "Pick-up" },
    "how.step2.desc": {
        fr: 'Nous pouvons vous récupérer à votre hôtel ou vous retrouver directement sur le <a href="spots-kitesurf-essaouira.html">spot de plage</a> (Baie d\'Essaouira, Sidi Kaouki, Moulay).',
        en: 'We can pick you up from your hotel or meet you directly at the <a href="spots-kitesurf-essaouira.html">beach spot</a> (Essaouira Bay, Sidi Kaouki, Moulay).'
    },
    "how.step3.title": { fr: "Glissez & Progressez", en: "Ride & Progress" },
    "how.step3.desc": { fr: "Profitez de votre cours avec du matériel haut de gamme inclus. Progression garantie et plaisir au rendez-vous !", en: "Enjoy your lesson with premium equipment included. Guaranteed progression and fun guaranteed!" },

    // ===== SPORTS SECTION =====
    "sports.title": { fr: "Nos Sports Nautiques", en: "Our Watersports" },
    "sports.subtitle": { fr: "Choisissez votre discipline — de la sensation du wingfoil au surf classique.", en: "Choose your discipline — from the thrill of wingfoil to classic surfing." },
    "sports.wingfoil.tag": { fr: "Les Plus Populaires", en: "Most Popular" },
    "sports.wingfoil.desc": { fr: "Le sport nautique le plus en vogue de la décennie. Volez au-dessus de l'eau grâce à une simple aile manuelle.", en: "The trendiest watersport of the decade. Fly above the water with a handheld wing." },
    "sports.wingfoil.link": { fr: "Découvrez le Wingfoil", en: "Discover Wingfoil" },
    "sports.kitesurf.desc": { fr: "Domptez le vent légendaire d'Essaouira avec une aile de kite et surfez sur les houles de l'Atlantique.", en: "Harness Essaouira's legendary wind with a kite and ride the Atlantic swells." },
    "sports.kitesurf.link": { fr: "Découvrez le Kitesurf", en: "Discover Kitesurf" },
    "sports.windsurf.desc": { fr: "Le classique indémodable. Ressentez la connexion directe entre vous, la voile et l'océan.", en: "The timeless classic. Feel the direct connection between you, the sail and the ocean." },
    "sports.windsurf.link": { fr: "Découvrez le Windsurf", en: "Discover Windsurf" },
    "sports.surf.desc": { fr: "Prenez votre première vague ou perfectionnez votre technique sur les magnifiques beach breaks d'Essaouira.", en: "Catch your first wave or perfect your technique on Essaouira's beautiful beach breaks." },
    "sports.surf.link": { fr: "Découvrez le Surf", en: "Discover Surf" },

    // ===== WEATHER WIDGET =====
    "weather.title": { fr: "Météo & Vent en Direct — Essaouira", en: "Live Weather & Wind — Essaouira" },
    "weather.subtitle": {
        fr: 'Données temps réel depuis <a href="weather-essaouira.html">notre station météo</a>. Mise à jour toutes les 15 minutes.',
        en: 'Real-time data from <a href="weather-essaouira.html">our weather station</a>. Updated every 15 minutes.'
    },
    "weather.loading": { fr: "Chargement...", en: "Loading..." },
    "weather.windspeed": { fr: "Vitesse Vent", en: "Wind Speed" },
    "weather.gusts": { fr: "Rafales", en: "Gusts" },
    "weather.direction": { fr: "Direction", en: "Direction" },
    "weather.clouds": { fr: "Nuages", en: "Clouds" },
    "weather.beginner": { fr: "Débutant", en: "Beginner" },
    "weather.intermediate": { fr: "Intermédiaire", en: "Intermediate" },
    "weather.expert": { fr: "Expert", en: "Expert" },
    "weather.cta": { fr: "Voir les prévisions complètes →", en: "View full forecast →" },

    // ===== PRICING PREVIEW =====
    "pricing.title": { fr: "Tarifs Simples & Transparents", en: "Simple & Transparent Pricing" },
    "pricing.subtitle": { fr: "Tout l'équipement et la combinaison isotherme sont toujours inclus dans nos tarifs.", en: "All equipment and wetsuit are always included in our prices." },
    "pricing.surf.title": { fr: "Cours de Surf", en: "Surf Lessons" },
    "pricing.surf.price": { fr: "À partir de <strong>25€</strong> / heure", en: "From <strong>€25</strong> / hour" },
    "pricing.surf.desc": { fr: "Idéal pour débuter sur les vagues de la baie d'Essaouira. Matériel et combinaison inclus.", en: "Ideal for beginners on Essaouira bay waves. Equipment and wetsuit included." },
    "pricing.surf.btn": { fr: "Voir tous les tarifs surf", en: "View all surf prices" },
    "pricing.wind.badge": { fr: "Le plus populaire", en: "Most popular" },
    "pricing.wind.price": { fr: "À partir de <strong>50€</strong> / heure", en: "From <strong>€50</strong> / hour" },
    "pricing.wind.desc": { fr: "Cours collectifs ou particuliers de Wingfoil, Kitesurf et Windsurf avec moniteur diplômé.", en: "Group or private Wingfoil, Kitesurf and Windsurf lessons with certified instructor." },
    "pricing.wind.btn": { fr: "Voir tous les tarifs vent", en: "View all wind prices" },
    "pricing.rental.title": { fr: "Location de Matériel", en: "Equipment Rental" },
    "pricing.rental.price": { fr: "À partir de <strong>35€</strong> / demi-journée", en: "From <strong>€35</strong> / half-day" },
    "pricing.rental.desc": { fr: "Louez du matériel récent et contrôlé pour naviguer en toute autonomie.", en: "Rent recent, quality-checked equipment to ride on your own." },
    "pricing.rental.btn": { fr: "Voir la location", en: "View rentals" },

    // ===== REVIEWS =====
    "reviews.title": { fr: "Ce que disent nos élèves", en: "What Our Students Say" },
    "reviews.subtitle": { fr: "Avis certifiés de passionnés ayant appris le wingfoil et le kitesurf avec nous.", en: "Verified reviews from enthusiasts who learned wingfoil and kitesurf with us." },
    "reviews.count": { fr: "Basé sur 127+ avis Google", en: "Based on 127+ Google reviews" },
    "reviews.r1.text": { fr: '"Expérience incroyable en wingfoil ! Les moniteurs sont très patients et pédagogues. Essaouira est le spot parfait pour apprendre."', en: '"Incredible wingfoil experience! The instructors are very patient and great teachers. Essaouira is the perfect spot to learn."' },
    "reviews.r1.author": { fr: "France — Cours Wingfoil", en: "France — Wingfoil Lesson" },
    "reviews.r2.text": { fr: '"Meilleure école de kitesurf à Essaouira ! Matériel au top, prise en charge directement à l\'hôtel, progression très rapide."', en: '"Best kitesurf school in Essaouira! Top-notch equipment, hotel pick-up, very fast progression."' },
    "reviews.r2.author": { fr: "Belgique — Stage Kitesurf", en: "Belgium — Kitesurf Course" },
    "reviews.r3.text": { fr: '"Super session de surf en famille. Des vagues parfaites et des conseils très clairs du moniteur. On reviendra l\'année prochaine !"', en: '"Great family surf session. Perfect waves and very clear tips from the instructor. We\'ll be back next year!"' },
    "reviews.r3.author": { fr: "Allemagne — Cours Surf", en: "Germany — Surf Lesson" },

    // ===== FAQ PREVIEW =====
    "faq.title": { fr: "Questions Fréquentes", en: "Frequently Asked Questions" },
    "faq.subtitle": { fr: "Tout ce que vous devez savoir avant de réserver vos cours à Essaouira.", en: "Everything you need to know before booking your lessons in Essaouira." },
    "faq.q1": { fr: "Où apprendre le wingfoil à Essaouira ?", en: "Where to learn wingfoil in Essaouira?" },
    "faq.a1": {
        fr: 'Kawki Kite enseigne le <a href="wingfoil-essaouira.html" translate="no">wingfoil</a> directement dans la baie d\'Essaouira, le meilleur spot avec de l\'eau plate, un fond sableux et un vent régulier. Nous proposons des cours pour tous les niveaux.',
        en: 'Kawki Kite teaches <a href="wingfoil-essaouira.html" translate="no">wingfoil</a> directly in Essaouira bay, the best spot with flat water, sandy bottom and consistent wind. We offer lessons for all levels.'
    },
    "faq.q2": { fr: "Quelle est la meilleure saison pour le kitesurf au Maroc ?", en: "What is the best season for kitesurfing in Morocco?" },
    "faq.a2": {
        fr: 'La période d\'avril à septembre offre les alizés les plus forts et les plus réguliers (18 à 30 nœuds quotidiens). Cependant, Essaouira bénéficie de vent navigable pratiquement toute l\'année. Consultez nos <a href="weather-essaouira.html">prévisions météo en direct</a>.',
        en: 'April to September offers the strongest and most consistent trade winds (18–30 knots daily). However, Essaouira enjoys rideable wind virtually year-round. Check our <a href="weather-essaouira.html">live weather forecast</a>.'
    },
    "faq.q3": { fr: "Faut-il avoir de l'expérience pour débuter ?", en: "Do I need experience to start?" },
    "faq.a3": { fr: "Aucune expérience préalable n'est nécessaire ! Tous nos cours sont conçus pour les débutants complets. Nos moniteurs certifiés vous accompagnent étape par étape en toute sécurité.", en: "No prior experience needed! All our lessons are designed for complete beginners. Our certified instructors guide you step by step in complete safety." },
    "faq.cta": { fr: "Consulter toutes les questions (FAQ) →", en: "View all questions (FAQ) →" },

    // ===== CONTACT =====
    "contact.title": { fr: "Réservez votre aventure", en: "Book Your Adventure" },
    "contact.desc": { fr: "Une question ou une réservation ? Contactez-nous directement sur WhatsApp pour une réponse rapide en quelques minutes.", en: "Got a question or want to book? Contact us on WhatsApp for a quick reply within minutes." },
    "contact.whatsapp.label": { fr: "WhatsApp & Téléphone", en: "WhatsApp & Phone" },
    "contact.email.label": { fr: "Email Direct", en: "Direct Email" },
    "contact.location.label": { fr: "Localisation", en: "Location" },
    "contact.location.value": { fr: "Baie d'Essaouira & Sidi Kaouki, Maroc", en: "Essaouira Bay & Sidi Kaouki, Morocco" },
    "contact.instant.title": { fr: "Réservation Instantanée sur WhatsApp", en: "Instant Booking on WhatsApp" },
    "contact.instant.desc": { fr: "Discutez avec nos moniteurs, choisissez vos dates et votre sport.", en: "Chat with our instructors, pick your dates and your sport." },
    "contact.instant.btn": { fr: "Discuter sur WhatsApp", en: "Chat on WhatsApp" },

    // ===== FOOTER =====
    "footer.brand": { fr: "Kawki Kite — Première école de sports nautiques à Essaouira, Maroc. Wingfoil, Kitesurf, Windsurf & Surf.", en: "Kawki Kite — Leading watersports school in Essaouira, Morocco. Wingfoil, Kitesurf, Windsurf & Surf." },
    "footer.sports": { fr: "Nos Sports", en: "Our Sports" },
    "footer.info": { fr: "Informations", en: "Information" },
    "footer.contact": { fr: "Contact", en: "Contact" },
    "footer.copy": { fr: "© 2025–2026 Kawki Kite — Essaouira, Maroc. Tous droits réservés.", en: "© 2025–2026 Kawki Kite — Essaouira, Morocco. All rights reserved." },

    // ===== MOBILE NAV =====
    "mobile.sports.label": { fr: "Nos Sports", en: "Our Sports" }
};

/* ===== ENGINE ===== */

let currentLang = 'fr';

function detectLanguage() {
    // 1. Check URL param (?lang=en)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang === 'en' || urlLang === 'fr') return urlLang;

    // 2. Check localStorage
    const saved = localStorage.getItem('kawki-lang');
    if (saved === 'en' || saved === 'fr') return saved;

    // 3. Auto-detect from browser
    const browserLang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
    if (browserLang.startsWith('en')) return 'en';

    // 4. Default: French
    return 'fr';
}

function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('kawki-lang', lang);

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const t = translations[key];
        if (t && t[lang]) {
            // Check if translation contains HTML
            if (t[lang].includes('<')) {
                el.innerHTML = t[lang];
            } else {
                el.textContent = t[lang];
            }
        }
    });

    // Update language toggle button
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = lang === 'fr'
            ? '<span class="lang-flag">🇬🇧</span> EN'
            : '<span class="lang-flag">🇫🇷</span> FR';
        toggleBtn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
    }

    // Update meta description for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', lang === 'fr'
            ? "Kawki Kite est la première école de sports nautiques à Essaouira, Maroc. Cours particuliers & collectifs de Wingfoil, Kitesurf, Windsurf & Surf. Location de matériel, coaching & camps. Réservez sur WhatsApp !"
            : "Kawki Kite is the leading watersports school in Essaouira, Morocco. Private & group Wingfoil, Kitesurf, Windsurf & Surf lessons. Equipment rental, coaching & camps. Book on WhatsApp!"
        );
    }

    // Update page title
    document.title = lang === 'fr'
        ? "Kawki Kite — N°1 École de Wingfoil, Kitesurf, Windsurf & Surf à Essaouira, Maroc"
        : "Kawki Kite — #1 Wingfoil, Kitesurf, Windsurf & Surf School in Essaouira, Morocco";
}

function toggleLanguage() {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    applyTranslations(newLang);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    applyTranslations(lang);
});
