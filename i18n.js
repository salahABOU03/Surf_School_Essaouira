/**
 * i18n.js — Kaouki Kite Trilingual Translation System (FR / EN / ES)
 * Auto-detects browser language, saves preference, toggles instantly.
 */

const translations = {
    // ===== NAVIGATION =====
    "nav.home": { fr: "Accueil", en: "Home", es: "Inicio" },
    "nav.sports": { fr: "Nos Sports", en: "Our Sports", es: "Nuestros Deportes" },
    "nav.pricing": { fr: "Tarifs", en: "Pricing", es: "Precios" },
    "nav.spots": { fr: "Spots", en: "Spots", es: "Spots" },
    "nav.weather": { fr: "Météo", en: "Weather", es: "El Tiempo" },
    "nav.faq": { fr: "FAQ", en: "FAQ", es: "FAQ" },
    "nav.contact": { fr: "Contact", en: "Contact", es: "Contacto" },
    "nav.book": { fr: "Réserver", en: "Book Now", es: "Reservar" },
    "nav.skip": { fr: "Aller au contenu principal", en: "Skip to main content", es: "Ir al contenido principal" },

    // ===== HERO =====
    "hero.badge.weather": { fr: "MÉTÉO EN DIRECT", en: "LIVE WEATHER", es: "TIEMPO EN DIRECTO" },
    "hero.badge.location": { fr: "ESSAOUIRA, MAROC", en: "ESSAOUIRA, MOROCCO", es: "ESSAOUIRA, MARRUECOS" },
    "hero.title": {
        fr: 'La meilleure école de <span translate="no">wingfoil</span>, <span translate="no">kitesurf</span>, planche à voile et <span translate="no">surf</span> d\'Essaouira',
        en: 'The best <span translate="no">wingfoil</span>, <span translate="no">kitesurf</span>, windsurf & <span translate="no">surf</span> school in Essaouira',
        es: 'La mejor escuela de <span translate="no">wingfoil</span>, <span translate="no">kitesurf</span>, windsurf y <span translate="no">surf</span> en Essaouira'
    },
    "hero.loading": { fr: "Vérification des conditions météo du jour...", en: "Checking today's weather conditions...", es: "Comprobando condiciones meteorológicas de hoy..." },
    "hero.subtitle": {
        fr: "Découvrez la magie de la capitale marocaine du vent avec des instructeurs certifiés, du matériel haut de gamme et des cours personnalisés pour tous les niveaux.",
        en: "Discover the magic of Morocco's wind capital with certified instructors, premium equipment and personalised lessons for all levels.",
        es: "Descubre la magia de la capital del viento de Marruecos con instructores certificados, equipo de alta gama y clases personalizadas para todos los niveles."
    },
    "hero.btn.prices": { fr: "Afficher les prix", en: "View Prices", es: "Ver precios" },
    "hero.btn.whatsapp": { fr: "Réservez sur WhatsApp", en: "Book on WhatsApp", es: "Reservar en WhatsApp" },

    // ===== TRUST SECTION =====
    "trust.cert.title": { fr: "Moniteurs Certifiés", en: "Certified Instructors", es: "Monitores Certificados" },
    "trust.cert.desc": { fr: "Instructeurs expérimentés diplômés IKO & VDWS pour votre sécurité.", en: "Experienced IKO & VDWS certified instructors for your safety.", es: "Instructores experimentados titulados IKO y VDWS para tu seguridad." },
    "trust.equip.title": { fr: "Équipement Récent", en: "Latest Equipment", es: "Equipamiento Reciente" },
    "trust.equip.desc": { fr: "Ailes, planches et foils haut de gamme renouvelés chaque saison.", en: "Premium wings, boards and foils renewed every season.", es: "Cometas, tablas y foils de gama alta renovados cada temporada." },
    "trust.mobile.title": { fr: "Service Mobile & Transport", en: "Mobile Service & Transfer", es: "Servicio Móvil y Transporte" },
    "trust.mobile.desc": { fr: "Prise en charge à votre hôtel et transport vers le meilleur spot du jour.", en: "Hotel pick-up and transfer to the best spot of the day.", es: "Recogida en tu hotel y transporte al mejor spot del día." },
    "trust.rating.title": { fr: "4.9/5 sur Google", en: "4.9/5 on Google", es: "4.9/5 en Google" },
    "trust.rating.desc": { fr: "Plus de 127 avis clients satisfaits du monde entier.", en: "Over 127 satisfied client reviews from around the world.", es: "Más de 127 opiniones de clientes satisfechos de todo el mundo." },

    // ===== ABOUT =====
    "about.title": {
        fr: 'Bienvenue chez <span class="text-primary">Kaouki Kite</span> Essaouira',
        en: 'Welcome to <span class="text-primary">Kaouki Kite</span> Essaouira',
        es: 'Bienvenido a <span class="text-primary">Kaouki Kite</span> Essaouira'
    },
    "about.p1": {
        fr: 'Située au cœur de la capitale marocaine du vent, <strong>Kaouki Kite</strong> est l\'école de référence à Essaouira pour l\'apprentissage et le perfectionnement du <a href="wingfoil-essaouira.html" translate="no">Wingfoil</a>, <a href="kitesurf-essaouira.html" translate="no">Kitesurf</a>, <a href="windsurf-essaouira.html">Windsurf</a> et <a href="surf-essaouira.html" translate="no">Surf</a>.',
        en: 'Located in the heart of Morocco\'s wind capital, <strong>Kaouki Kite</strong> is Essaouira\'s leading school for learning and improving your <a href="wingfoil-essaouira.html" translate="no">Wingfoil</a>, <a href="kitesurf-essaouira.html" translate="no">Kitesurf</a>, <a href="windsurf-essaouira.html">Windsurf</a> and <a href="surf-essaouira.html" translate="no">Surf</a> skills.',
        es: 'Ubicada en el corazón de la capital del viento de Marruecos, <strong>Kaouki Kite</strong> es la escuela de referencia en Essaouira para aprender y perfeccionar <a href="wingfoil-essaouira.html" translate="no">Wingfoil</a>, <a href="kitesurf-essaouira.html" translate="no">Kitesurf</a>, <a href="windsurf-essaouira.html">Windsurf</a> y <a href="surf-essaouira.html" translate="no">Surf</a>.'
    },
    "about.p2": {
        fr: "Que vous soyez totalement débutant souhaitant tirer vos premiers bords ou un pratiquant confirmé cherchant du coaching sur les vagues de Sidi Kaouki ou Moulay Bouzerktoun, notre équipe passionnée vous garantit un apprentissage rapide et sécurisé.",
        en: "Whether you're a complete beginner looking to catch your first ride or an experienced rider seeking coaching on the waves of Sidi Kaouki or Moulay Bouzerktoun, our passionate team guarantees fast and safe progression.",
        es: "Tanto si eres principiante absoluto como si buscas coaching avanzado en las olas de Sidi Kaouki o Moulay Bouzerktoun, nuestro equipo apasionado te garantiza un aprendizaje rápido y seguro."
    },
    "about.feat1": { fr: "Cours Particuliers & Collectifs", en: "Private & Group Lessons", es: "Clases Particulares y en Grupo" },
    "about.feat2": { fr: "Matériel & Combinaison Inclus", en: "Equipment & Wetsuit Included", es: "Material y Neopreno Incluidos" },
    "about.feat3": { fr: "Français, Anglais, Espagnol, Arabe", en: "French, English, Spanish, Arabic", es: "Francés, Inglés, Español, Árabe" },
    "about.feat4": { fr: "Location de Matériel Récent", en: "Latest Equipment Rental", es: "Alquiler de Material Reciente" },

    // ===== HOW IT WORKS =====
    "how.title": { fr: "Comment Réserver & Apprendre", en: "How to Book & Learn", es: "Cómo Reservar y Aprender" },
    "how.subtitle": { fr: "Une école 100% mobile — nous vous accompagnons sur le meilleur spot chaque jour.", en: "A 100% mobile school — we take you to the best spot every day.", es: "Una escuela 100% móvil: te llevamos al mejor spot cada día." },
    "how.step1.title": { fr: "Réservation WhatsApp", en: "Book via WhatsApp", es: "Reserva en WhatsApp" },
    "how.step1.desc": {
        fr: 'Envoyez-nous un message sur <a href="https://wa.me/212625044412" rel="noopener" target="_blank">WhatsApp</a> pour réserver. Nous définissons votre niveau et vos horaires.',
        en: 'Send us a message on <a href="https://wa.me/212625044412" rel="noopener" target="_blank">WhatsApp</a> to book. We\'ll assess your level and set your schedule.',
        es: 'Envíanos un mensaje en <a href="https://wa.me/212625044412" rel="noopener" target="_blank">WhatsApp</a> para reservar. Definimos tu nivel y tus horarios.'
    },
    "how.step2.title": { fr: "Prise en charge", en: "Pick-up", es: "Recogida" },
    "how.step2.desc": {
        fr: 'Nous pouvons vous récupérer à votre hôtel ou vous retrouver directement sur le <a href="spots-kitesurf-essaouira.html">spot de plage</a> (Baie d\'Essaouira, Sidi Kaouki, Moulay).',
        en: 'We can pick you up from your hotel or meet you directly at the <a href="spots-kitesurf-essaouira.html">beach spot</a> (Essaouira Bay, Sidi Kaouki, Moulay).',
        es: 'Te recogemos en tu hotel o nos encontramos directamente en la <a href="spots-kitesurf-essaouira.html">playa</a> (Bahía de Essaouira, Sidi Kaouki, Moulay).'
    },
    "how.step3.title": { fr: "Glissez & Progressez", en: "Ride & Progress", es: "Deslízate y Progresa" },
    "how.step3.desc": { fr: "Profitez de votre cours avec du matériel haut de gamme inclus. Progression garantie et plaisir au rendez-vous !", en: "Enjoy your lesson with premium equipment included. Guaranteed progression and fun guaranteed!", es: "Disfruta de tu clase con equipamiento de alta gama incluido. ¡Progresión y diversión garantizadas!" },

    // ===== SPORTS SECTION =====
    "sports.title": { fr: "Nos Sports Nautiques", en: "Our Watersports", es: "Nuestros Deportes Acuáticos" },
    "sports.subtitle": { fr: "Choisissez votre discipline — de la sensation du wingfoil au surf classique.", en: "Choose your discipline — from the thrill of wingfoil to classic surfing.", es: "Elige tu disciplina: desde la emoción del wingfoil hasta el surf clásico." },
    "sports.wingfoil.tag": { fr: "Les Plus Populaires", en: "Most Popular", es: "El Más Popular" },
    "sports.wingfoil.desc": { fr: "Le sport nautique le plus en vogue de la décennie. Volez au-dessus de l'eau grâce à une simple aile manuelle.", en: "The trendiest watersport of the decade. Fly above the water with a handheld wing.", es: "El deporte náutico de moda de la década. Vuela sobre el agua gracias a un ala manual." },
    "sports.wingfoil.link": { fr: "Découvrez le Wingfoil", en: "Discover Wingfoil", es: "Descubrir Wingfoil" },
    "sports.kitesurf.desc": { fr: "Domptez le vent légendaire d'Essaouira avec une aile de kite et surfez sur les houles de l'Atlantique.", en: "Harness Essaouira's legendary wind with a kite and ride the Atlantic swells.", es: "Domina el viento legendario de Essaouira con una cometa y navega las olas del Atlántico." },
    "sports.kitesurf.link": { fr: "Découvrez le Kitesurf", en: "Discover Kitesurf", es: "Descubrir Kitesurf" },
    "sports.windsurf.desc": { fr: "Le classique indémodable. Ressentez la connexion directe entre vous, la voile et l'océan.", en: "The timeless classic. Feel the direct connection between you, the sail and the ocean.", es: "El clásico atemporal. Siente la conexión directa entre tú, la vela y el océano." },
    "sports.windsurf.link": { fr: "Découvrez le Windsurf", en: "Discover Windsurf", es: "Descubrir Windsurf" },
    "sports.surf.desc": { fr: "Prenez votre première vague ou perfectionnez votre technique sur les magnifiques beach breaks d'Essaouira.", en: "Catch your first wave or perfect your technique on Essaouira's beautiful beach breaks.", es: "Coge tu primera ola o perfecciona tu técnica en las magníficas olas de Essaouira." },
    "sports.surf.link": { fr: "Découvrez le Surf", en: "Discover Surf", es: "Descubrir Surf" },

    // ===== WEATHER WIDGET =====
    "weather.title": { fr: "Météo & Vent en Direct — Essaouira", en: "Live Weather & Wind — Essaouira", es: "Tiempo y Viento en Directo — Essaouira" },
    "weather.subtitle": {
        fr: 'Données temps réel depuis <a href="weather-essaouira.html">notre station météo</a>. Mise à jour toutes les 15 minutes.',
        en: 'Real-time data from <a href="weather-essaouira.html">our weather station</a>. Updated every 15 minutes.',
        es: 'Datos en tiempo real desde <a href="weather-essaouira.html">nuestra estación meteorológica</a>. Actualizado cada 15 minutos.'
    },
    "weather.loading": { fr: "Chargement...", en: "Loading...", es: "Cargando..." },
    "weather.windspeed": { fr: "Vitesse Vent", en: "Wind Speed", es: "Velocidad Viento" },
    "weather.gusts": { fr: "Rafales", en: "Gusts", es: "Ráfagas" },
    "weather.direction": { fr: "Direction", en: "Direction", es: "Dirección" },
    "weather.clouds": { fr: "Nuages", en: "Clouds", es: "Nubes" },
    "weather.beginner": { fr: "Débutant", en: "Beginner", es: "Principiante" },
    "weather.intermediate": { fr: "Intermédiaire", en: "Intermediate", es: "Intermedio" },
    "weather.expert": { fr: "Expert", en: "Expert", es: "Experto" },
    "weather.cta": { fr: "Voir les prévisions complètes →", en: "View full forecast →", es: "Ver previsión completa →" },

    // ===== PRICING PREVIEW =====
    "pricing.title": { fr: "Tarifs Simples & Transparents", en: "Simple & Transparent Pricing", es: "Precios Simples y Transparentes" },
    "pricing.subtitle": { fr: "Tout l'équipement et la combinaison isotherme sont toujours inclus dans nos tarifs.", en: "All equipment and wetsuit are always included in our prices.", es: "Todo el material y el traje de neopreno están siempre incluidos en nuestros precios." },
    "pricing.surf.title": { fr: "Cours de Surf", en: "Surf Lessons", es: "Clases de Surf" },
    "pricing.surf.price": { fr: "À partir de <strong>25€</strong> / heure", en: "From <strong>€25</strong> / hour", es: "Desde <strong>25€</strong> / hora" },
    "pricing.surf.desc": { fr: "Idéal pour débuter sur les vagues de la baie d'Essaouira. Matériel et combinaison inclus.", en: "Ideal for beginners on Essaouira bay waves. Equipment and wetsuit included.", es: "Ideal para empezar en las olas de la bahía de Essaouira. Material y neopreno incluidos." },
    "pricing.surf.btn": { fr: "Voir tous les tarifs surf", en: "View all surf prices", es: "Ver todos los precios de surf" },
    "pricing.wind.badge": { fr: "Le plus populaire", en: "Most popular", es: "El más popular" },
    "pricing.wind.price": { fr: "À partir de <strong>50€</strong> / heure", en: "From <strong>€50</strong> / hour", es: "Desde <strong>50€</strong> / hora" },
    "pricing.wind.desc": { fr: "Cours collectifs ou particuliers de Wingfoil, Kitesurf et Windsurf avec moniteur diplômé.", en: "Group or private Wingfoil, Kitesurf and Windsurf lessons with certified instructor.", es: "Clases grupales o privadas de Wingfoil, Kitesurf y Windsurf con instructor certificado." },
    "pricing.wind.btn": { fr: "Voir tous les tarifs vent", en: "View all wind prices", es: "Ver todos los precios de viento" },
    "pricing.rental.title": { fr: "Location de Matériel", en: "Equipment Rental", es: "Alquiler de Material" },
    "pricing.rental.price": { fr: "À partir de <strong>35€</strong> / demi-journée", en: "From <strong>€35</strong> / half-day", es: "Desde <strong>35€</strong> / medio día" },
    "pricing.rental.desc": { fr: "Louez du matériel récent et contrôlé pour naviguer en toute autonomie.", en: "Rent recent, quality-checked equipment to ride on your own.", es: "Alquila material reciente y revisado para navegar con total autonomía." },
    "pricing.rental.btn": { fr: "Voir la location", en: "View rentals", es: "Ver alquileres" },

    // ===== REVIEWS =====
    "reviews.title": { fr: "Ce que disent nos élèves", en: "What Our Students Say", es: "Lo que dicen nuestros alumnos" },
    "reviews.subtitle": { fr: "Avis certifiés de passionnés ayant appris le wingfoil et le kitesurf avec nous.", en: "Verified reviews from enthusiasts who learned wingfoil and kitesurf with us.", es: "Opiniones verificadas de apasionados que han aprendido wingfoil y kitesurf con nosotros." },
    "reviews.count": { fr: "Basé sur 127+ avis Google", en: "Based on 127+ Google reviews", es: "Basado en más de 127 opiniones de Google" },
    "reviews.r1.text": { fr: '"Expérience incroyable en wingfoil ! Les moniteurs sont très patients et pédagogues. Essaouira est le spot parfait pour apprendre."', en: '"Incredible wingfoil experience! The instructors are very patient and great teachers. Essaouira is the perfect spot to learn."', es: '"¡Increíble experiencia en wingfoil! Los monitores son muy pacientes y muy buenos pedagogos. Essaouira es el spot perfecto para aprender."' },
    "reviews.r1.author": { fr: "France — Cours Wingfoil", en: "France — Wingfoil Lesson", es: "Francia — Clase Wingfoil" },
    "reviews.r2.text": { fr: '"Meilleure école de kitesurf à Essaouira ! Matériel au top, prise en charge directement à l\'hôtel, progression très rapide."', en: '"Best kitesurf school in Essaouira! Top-notch equipment, hotel pick-up, very fast progression."', es: '"¡La mejor escuela de kitesurf en Essaouira! Material impecable, recogida en el hotel y progresión super rápida."' },
    "reviews.r2.author": { fr: "Belgique — Stage Kitesurf", en: "Belgium — Kitesurf Course", es: "Bélgica — Curso Kitesurf" },
    "reviews.r3.text": { fr: '"Super session de surf en famille. Des vagues parfaites et des conseils très clairs du moniteur. On reviendra l\'année prochaine !"', en: '"Great family surf session. Perfect waves and very clear tips from the instructor. We\'ll be back next year!"', es: '"Gran sesión de surf en familia. Olas perfectas y consejos muy claros del instructor. ¡Volveremos el año que viene!"' },
    "reviews.r3.author": { fr: "Allemagne — Cours Surf", en: "Germany — Surf Lesson", es: "Alemania — Clase Surf" },

    // ===== FAQ PREVIEW =====
    "faq.title": { fr: "Questions Fréquentes", en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
    "faq.subtitle": { fr: "Tout ce que vous devez savoir avant de réserver vos cours à Essaouira.", en: "Everything you need to know before booking your lessons in Essaouira.", es: "Todo lo que necesitas saber antes de reservar tus clases en Essaouira." },
    "faq.q1": { fr: "Où apprendre le wingfoil à Essaouira ?", en: "Where to learn wingfoil in Essaouira?", es: "¿Dónde aprender wingfoil en Essaouira?" },
    "faq.a1": {
        fr: 'Kaouki Kite enseigne le <a href="wingfoil-essaouira.html" translate="no">wingfoil</a> directement dans la baie d\'Essaouira, le meilleur spot avec de l\'eau plate, un fond sableux et un vent régulier. Nous proposons des cours pour tous les niveaux.',
        en: 'Kaouki Kite teaches <a href="wingfoil-essaouira.html" translate="no">wingfoil</a> directly in Essaouira bay, the best spot with flat water, sandy bottom and consistent wind. We offer lessons for all levels.',
        es: 'Kaouki Kite enseña <a href="wingfoil-essaouira.html" translate="no">wingfoil</a> directamente en la bahía de Essaouira, el mejor spot con agua plana, fondo de arena y viento constante. Ofrecemos clases para todos los niveles.'
    },
    "faq.q2": { fr: "Quelle est la meilleure saison pour le kitesurf au Maroc ?", en: "What is the best season for kitesurfing in Morocco?", es: "¿Cuál es la mejor temporada para el kitesurf en Marruecos?" },
    "faq.a2": {
        fr: 'La période d\'avril à septembre offre les alizés les plus forts et les plus réguliers (18 à 30 nœuds quotidiens). Cependant, Essaouira bénéficie de vent navigable pratiquement toute l\'année. Consultez nos <a href="weather-essaouira.html">prévisions météo en direct</a>.',
        en: 'April to September offers the strongest and most consistent trade winds (18–30 knots daily). However, Essaouira enjoys rideable wind virtually year-round. Check our <a href="weather-essaouira.html">live weather forecast</a>.',
        es: 'De abril a septiembre se dan los alisios más fuertes y constantes (18 a 30 nudos diarios). Sin embargo, Essaouira tiene viento navegable prácticamente todo el año. Consulta nuestra <a href="weather-essaouira.html">previsión meteorológica en directo</a>.'
    },
    "faq.q3": { fr: "Faut-il avoir de l'expérience pour débuter ?", en: "Do I need experience to start?", es: "¿Hace falta experiencia previa para empezar?" },
    "faq.a3": { fr: "Aucune expérience préalable n'est nécessaire ! Tous nos cours sont conçus pour les débutants complets. Nos moniteurs certifiés vous accompagnent étape par étape en toute sécurité.", en: "No prior experience needed! All our lessons are designed for complete beginners. Our certified instructors guide you step by step in complete safety.", es: "¡No hace falta ninguna experiencia previa! Todas nuestras clases están diseñadas para principiantes absolutos. Nuestros instructores certificados te acompañarán paso a paso con total seguridad." },
    "faq.cta": { fr: "Consulter toutes les questions (FAQ) →", en: "View all questions (FAQ) →", es: "Ver todas las preguntas (FAQ) →" },

    // ===== CONTACT =====
    "contact.title": { fr: "Réservez votre aventure", en: "Book Your Adventure", es: "Reserva tu aventura" },
    "contact.desc": { fr: "Une question ou une réservation ? Contactez-nous directement sur WhatsApp pour une réponse rapide en quelques minutes.", en: "Got a question or want to book? Contact us on WhatsApp for a quick reply within minutes.", es: "¿Tienes preguntas o quieres reservar? Contáctanos directamente por WhatsApp para una respuesta rápida en minutos." },
    "contact.whatsapp.label": { fr: "WhatsApp & Téléphone", en: "WhatsApp & Phone", es: "WhatsApp y Teléfono" },
    "contact.email.label": { fr: "Email Direct", en: "Direct Email", es: "Email Directo" },
    "contact.location.label": { fr: "Localisation", en: "Location", es: "Ubicación" },
    "contact.location.value": { fr: "Baie d'Essaouira & Sidi Kaouki, Maroc", en: "Essaouira Bay & Sidi Kaouki, Morocco", es: "Bahía de Essaouira y Sidi Kaouki, Marruecos" },
    "contact.instant.title": { fr: "Réservation Instantanée sur WhatsApp", en: "Instant Booking on WhatsApp", es: "Reserva Instantánea en WhatsApp" },
    "contact.instant.desc": { fr: "Discutez avec nos moniteurs, choisissez vos dates et votre sport.", en: "Chat with our instructors, pick your dates and your sport.", es: "Habla con nuestros monitores, elige tus fechas y tu deporte." },
    "contact.instant.btn": { fr: "Discuter sur WhatsApp", en: "Chat on WhatsApp", es: "Chatear en WhatsApp" },

    // ===== FOOTER =====
    "footer.brand": { fr: "Kaouki Kite — Première école de sports nautiques à Essaouira, Maroc. Wingfoil, Kitesurf, Windsurf & Surf.", en: "Kaouki Kite — Leading watersports school in Essaouira, Morocco. Wingfoil, Kitesurf, Windsurf & Surf.", es: "Kaouki Kite — Escuela líder de deportes acuáticos en Essaouira, Marruecos. Wingfoil, Kitesurf, Windsurf y Surf." },
    "footer.sports": { fr: "Nos Sports", en: "Our Sports", es: "Nuestros Deportes" },
    "footer.info": { fr: "Informations", en: "Information", es: "Información" },
    "footer.contact": { fr: "Contact", en: "Contact", es: "Contacto" },
    "footer.copy": { fr: "© 2025–2026 Kaouki Kite — Essaouira, Maroc. Tous droits réservés.", en: "© 2025–2026 Kaouki Kite — Essaouira, Morocco. All rights reserved.", es: "© 2025–2026 Kaouki Kite — Essaouira, Marruecos. Todos los derechos reservados." },

    // ===== MOBILE NAV =====
    "mobile.sports.label": { fr: "Nos Sports", en: "Our Sports", es: "Nuestros Deportes" }
};

/* ===== ENGINE ===== */

let currentLang = 'fr';

function detectLanguage() {
    // 1. Check URL param (?lang=es / ?lang=en / ?lang=fr)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (['en', 'fr', 'es'].includes(urlLang)) return urlLang;

    // 2. Check path (/es/ -> es, /en/ -> en)
    if (window.location.pathname.includes('/es/')) return 'es';
    if (window.location.pathname.includes('/en/')) return 'en';

    // 3. Check localStorage
    const saved = localStorage.getItem('Kaouki-lang');
    if (['en', 'fr', 'es'].includes(saved)) return saved;

    // 4. Auto-detect from browser
    const browserLang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('en')) return 'en';

    // 5. Default: French
    return 'fr';
}

function setLanguage(lang) {
    if (!['fr', 'en', 'es'].includes(lang)) return;
    
    // If user is on static page (/es/index.html or /en/index.html or root /), redirect if needed or apply inline
    if (lang === 'fr' && window.location.pathname.includes('/es/')) {
        window.location.href = '../index.html';
        return;
    }
    if (lang === 'en' && window.location.pathname.includes('/es/')) {
        window.location.href = '../en/index.html';
        return;
    }
    if (lang === 'es' && !window.location.pathname.includes('/es/')) {
        const prefix = window.location.pathname.includes('/en/') ? '../' : './';
        window.location.href = prefix + 'es/index.html';
        return;
    }
    if (lang === 'en' && !window.location.pathname.includes('/en/') && !window.location.pathname.includes('/es/')) {
        window.location.href = './en/index.html';
        return;
    }

    applyTranslations(lang);
}

function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('Kaouki-lang', lang);

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const t = translations[key];
        if (t && t[lang]) {
            if (t[lang].includes('<')) {
                el.innerHTML = t[lang];
            } else {
                el.textContent = t[lang];
            }
        }
    });

    // Update active lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update meta description for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        if (lang === 'es') {
            metaDesc.setAttribute('content', "Kaouki Kite es la escuela líder de deportes acuáticos en Essaouira, Marruecos. Clases particulares y grupales de Wingfoil, Kitesurf, Windsurf y Surf. Alquiler de equipo. ¡Reserva en WhatsApp!");
        } else if (lang === 'en') {
            metaDesc.setAttribute('content', "Kaouki Kite is the leading watersports school in Essaouira, Morocco. Private & group Wingfoil, Kitesurf, Windsurf & Surf lessons. Equipment rental, coaching & camps. Book on WhatsApp!");
        } else {
            metaDesc.setAttribute('content', "Kaouki Kite est la première école de sports nautiques à Essaouira, Maroc. Cours particuliers & collectifs de Wingfoil, Kitesurf, Windsurf & Surf. Location de matériel, coaching & camps. Réservez sur WhatsApp !");
        }
    }

    // Update page title
    if (lang === 'es') {
        document.title = "Kaouki Kite — Nº1 Escuela de Wingfoil, Kitesurf, Windsurf y Surf en Essaouira, Marruecos";
    } else if (lang === 'en') {
        document.title = "Kaouki Kite — #1 Wingfoil, Kitesurf, Windsurf & Surf School in Essaouira, Morocco";
    } else {
        document.title = "Kaouki Kite — N°1 École de Wingfoil, Kitesurf, Windsurf & Surf à Essaouira, Maroc";
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    applyTranslations(lang);
});
