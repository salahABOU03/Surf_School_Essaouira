// ==========================================
// Kawki Kite — Main JavaScript
// ==========================================

(function () {
    'use strict';

    // === MOBILE MENU ===
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const desktopNav = document.querySelector('.desktop-nav');

    if (mobileMenuBtn && desktopNav) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = desktopNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        });

        document.addEventListener('click', (e) => {
            if (!desktopNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                desktopNav.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && desktopNav.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                desktopNav.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // === PRICING TAB LOGIC ===
    window.switchTab = function (type) {
        const privateTab = document.getElementById('private-pricing');
        const groupTab = document.getElementById('group-pricing');
        const btns = document.querySelectorAll('.tab-btn');

        if (!privateTab || !groupTab) return;

        btns.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-tab="${type}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        if (type === 'private') {
            privateTab.style.display = 'block';
            groupTab.style.display = 'none';
        } else {
            privateTab.style.display = 'none';
            groupTab.style.display = 'block';
        }
    };

    // === HEADER SCROLL EFFECT ===
    let lastScrollY = 0;
    const header = document.getElementById('header');
    if (header) {
        const onScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            lastScrollY = scrollY;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // === SMOOTH SCROLL ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (window.innerWidth <= 768 && desktopNav) {
                    desktopNav.classList.remove('active');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.classList.remove('active');
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });

    // === INTERSECTION OBSERVER (Reveal on Scroll) ===
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    document.querySelectorAll('section:not(.active)').forEach(section => {
        revealObserver.observe(section);
    });

    // === REVIEWS CAROUSEL ===
    window.scrollReviews = function (direction) {
        const carousel = document.getElementById('review-carousel');
        if (carousel) {
            const scrollAmount = carousel.offsetWidth / 1.5;
            carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    // === WEATHER MODULE (Open-Meteo API) ===
    const ESSAOUIRA_LAT = 31.5085;
    const ESSAOUIRA_LON = -9.7595;

    function getWindDirection(degrees) {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        return directions[Math.round(degrees / 22.5) % 16];
    }

    function getWeatherEmoji(code) {
        if (code === 0) return '☀️';
        if (code <= 3) return '⛅';
        if (code <= 48) return '🌫️';
        if (code <= 57) return '🌧️';
        if (code <= 67) return '🌧️';
        if (code <= 77) return '❄️';
        if (code <= 82) return '🌦️';
        if (code <= 86) return '🌨️';
        return '⛈️';
    }

    function getCloudDescription(cover) {
        if (cover <= 10) return 'Clear sky';
        if (cover <= 30) return 'Mostly clear';
        if (cover <= 60) return 'Partly cloudy';
        if (cover <= 85) return 'Mostly cloudy';
        return 'Overcast';
    }

    function getLevelSuitability(windKmh) {
        // Returns suitability for each level
        const knots = windKmh * 0.539957;
        return {
            beginner: knots >= 8 && knots <= 16 ? 'good' : (knots < 8 ? 'no-wind' : 'risky'),
            intermediate: knots >= 12 && knots <= 25 ? 'good' : (knots < 12 ? 'no-wind' : (knots <= 30 ? 'moderate' : 'risky')),
            expert: knots >= 15 ? 'good' : (knots >= 10 ? 'moderate' : 'no-wind')
        };
    }

    function getLevelText(status) {
        switch (status) {
            case 'good': return '✅ Good';
            case 'moderate': return '⚠️ Caution';
            case 'risky': return '❌ Too Strong';
            case 'no-wind': return '💤 Low Wind';
            default: return '--';
        }
    }

    async function fetchWeather() {
        const weatherWidget = document.getElementById('weather-widget');
        if (!weatherWidget) return;

        try {
            const params = new URLSearchParams({
                latitude: ESSAOUIRA_LAT,
                longitude: ESSAOUIRA_LON,
                current: 'temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,cloud_cover,weather_code',
                daily: 'temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max,weather_code',
                hourly: 'wind_speed_10m,wind_direction_10m,wind_gusts_10m',
                timezone: 'Africa/Casablanca',
                forecast_days: '7'
            });

            const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
            if (!response.ok) throw new Error('Weather API error');
            const data = await response.json();

            // Current conditions
            const current = data.current;
            const tempEl = document.getElementById('weather-temp');
            const descEl = document.getElementById('weather-desc');
            const timeEl = document.getElementById('weather-time');
            const windEl = document.getElementById('weather-wind');
            const gustsEl = document.getElementById('weather-gusts');
            const dirEl = document.getElementById('weather-direction');
            const cloudEl = document.getElementById('weather-cloud');
            const compassArrow = document.getElementById('compass-arrow');

            if (tempEl) tempEl.textContent = `${Math.round(current.temperature_2m)}°C`;
            if (descEl) descEl.textContent = getCloudDescription(current.cloud_cover);
            if (timeEl) {
                const now = new Date();
                timeEl.textContent = `Updated ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
            }
            if (windEl) windEl.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
            if (gustsEl) gustsEl.textContent = `${Math.round(current.wind_gusts_10m)} km/h`;
            if (dirEl) dirEl.textContent = getWindDirection(current.wind_direction_10m);
            if (cloudEl) cloudEl.textContent = `${current.cloud_cover}%`;
            if (compassArrow) compassArrow.style.transform = `rotate(${current.wind_direction_10m}deg)`;

            // Level suitability & Daily Recommendations
            const levels = getLevelSuitability(current.wind_speed_10m);
            ['beginner', 'intermediate', 'expert'].forEach(level => {
                const statusEl = document.getElementById(`level-${level}-status`);
                if (statusEl) {
                    statusEl.textContent = getLevelText(levels[level]);
                    statusEl.className = `level-status ${levels[level]}`;
                }
            });

            // Dynamic Daily Sport Recommendation Banner
            const windKmh = current.wind_speed_10m;
            let dailyRecommendation = '';
            let recBadge = '';

            if (windKmh < 14) {
                dailyRecommendation = '🏄 Ideal conditions for Surfing & Stand-Up Paddle in Essaouira today!';
                recBadge = 'Today\'s Pick: SURF & SUP';
            } else if (windKmh <= 24) {
                dailyRecommendation = '🪁 Smooth wind! Perfect day for Wingfoil & Kitesurf lessons.';
                recBadge = 'Today\'s Pick: WINGFOIL';
            } else {
                dailyRecommendation = '⚡ Strong Alizé wind today! Epic Kitesurfing & Windsurfing conditions.';
                recBadge = 'Today\'s Pick: KITESURF & WINDSURF';
            }

            const recEl = document.getElementById('daily-recommendation');
            if (recEl) {
                recEl.innerHTML = `<i class="fas fa-wind"></i> <strong>Live Forecast Advice:</strong> ${dailyRecommendation}`;
            }

            const heroBadgeEl = document.getElementById('hero-dynamic-badge');
            if (heroBadgeEl) {
                heroBadgeEl.textContent = recBadge;
            }

            // 7-day forecast
            const forecastContainer = document.getElementById('weather-forecast');
            if (forecastContainer && data.daily) {
                forecastContainer.innerHTML = '';
                const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                for (let i = 0; i < 7; i++) {
                    const date = new Date(data.daily.time[i]);
                    const dayName = i === 0 ? 'Today' : days[date.getDay()];
                    const emoji = getWeatherEmoji(data.daily.weather_code[i]);
                    const windMax = Math.round(data.daily.wind_speed_10m_max[i]);
                    const gustMax = Math.round(data.daily.wind_gusts_10m_max[i]);
                    const tempMax = Math.round(data.daily.temperature_2m_max[i]);
                    const tempMin = Math.round(data.daily.temperature_2m_min[i]);

                    forecastContainer.innerHTML += `
                        <div class="forecast-day">
                            <div class="forecast-day-name">${dayName}</div>
                            <div class="forecast-icon">${emoji}</div>
                            <div class="forecast-wind">${windMax}</div>
                            <div class="forecast-wind-label">km/h wind</div>
                            <div class="forecast-temp">${tempMin}° / ${tempMax}°</div>
                        </div>
                    `;
                }
            }

            // Hourly forecast (for weather page)
            const hourlyContainer = document.getElementById('hourly-forecast');
            if (hourlyContainer && data.hourly) {
                hourlyContainer.innerHTML = '';
                const now = new Date();
                const currentHour = now.getHours();
                const startIdx = data.hourly.time.findIndex(t => new Date(t).getHours() >= currentHour);
                const endIdx = Math.min(startIdx + 24, data.hourly.time.length);

                for (let i = startIdx; i < endIdx; i++) {
                    const time = new Date(data.hourly.time[i]);
                    const hour = time.getHours().toString().padStart(2, '0') + ':00';
                    const wind = Math.round(data.hourly.wind_speed_10m[i]);
                    const dir = getWindDirection(data.hourly.wind_direction_10m[i]);

                    hourlyContainer.innerHTML += `
                        <div class="hourly-item">
                            <div class="hourly-time">${hour}</div>
                            <div class="hourly-wind">${wind}</div>
                            <div class="hourly-dir" style="font-size:0.7rem;opacity:0.6">${dir}</div>
                        </div>
                    `;
                }
            }

        } catch (err) {
            console.warn('Weather fetch failed:', err);
            const descEl = document.getElementById('weather-desc');
            if (descEl) descEl.textContent = 'Weather data unavailable';
        }
    }

    // Dynamic Live Date Display
    function updateLiveDates() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('en-US', options);

        const liveDateEls = document.querySelectorAll('.live-date-str');
        liveDateEls.forEach(el => el.textContent = dateStr);
    }

    updateLiveDates();

    // Fetch weather immediately and every 15 min
    fetchWeather();
    setInterval(fetchWeather, 15 * 60 * 1000);

    // === SERVICE WORKER REGISTRATION ===
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').catch(err => {
                console.log('SW registration skipped:', err.message);
            });
        });
    }

    // === INITIAL REVEAL ===
    // Make hero visible immediately
    const hero = document.getElementById('hero');
    if (hero) hero.classList.add('active');

})();
