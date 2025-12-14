// ===== МУЗЫКАЛЬНАЯ КОЛЛЕКЦИЯ =====
const tracks = [
    {
        id: 1,
        title: "романтик",
        artist: "KRISTIEE",
        album: "романтик",
        year: 2023,
        genre: "russian rap",
        duration: "2:15",
        rating: 4.9,
        playCount: 0,
        audioSrc: "audio/kristiee-romantik.mp3",
        coverSrc: "images/kristiee-romantik.jpg",
        description: "Мелодичный русский рэп с романтичным настроением"
    },
    {
        id: 2,
        title: "вклубе",
        artist: "Темный принц",
        album: "вклубе",
        year: 2022,
        genre: "russian rap",
        duration: "2:30",
        rating: 4.7,
        playCount: 0,
        audioSrc: "audio/temnyj-princ-vklube.mp3",
        coverSrc: "images/temnyj-princ-vklube.jpg",
        description: "Клубный трек от Темного принца"
    },
    {
        id: 3,
        title: "damage",
        artist: "Kai Angel",
        album: "damage",
        year: 2023,
        genre: "russian rap",
        duration: "2:45",
        rating: 4.6,
        playCount: 0,
        audioSrc: "audio/kai-angel-damage.mp3",
        coverSrc: "images/kai-angel-damage.jpg",
        description: "Эмоциональный трек от Kai Angel"
    },
    {
        id: 4,
        title: "Фонари",
        artist: "LuvFaygo!",
        album: "Фонари",
        year: 2023,
        genre: "russian rap",
        duration: "2:20",
        rating: 4.5,
        playCount: 0,
        audioSrc: "audio/luvfaygo-fonari.mp3",
        coverSrc: "images/luvfaygo-fonari.jpg",
        description: "Мелодичный трэп от LuvFaygo!"
    },
    {
        id: 5,
        title: "ты че обиделась",
        artist: "madk1d",
        album: "ты че обиделась",
        year: 2023,
        genre: "russian rap",
        duration: "2:10",
        rating: 4.7,
        playCount: 0,
        audioSrc: "audio/madk1d-ty-che-obidelas.mp3",
        coverSrc: "images/madk1d-ty-che-obidelas.jpg",
        description: "Виртуальный рэп от madk1d"
    },
    {
        id: 6,
        title: "Люби меня",
        artist: "Miyagi & Эндшпиль",
        album: "Buster Keaton",
        year: 2021,
        genre: "russian rap",
        duration: "4:05",
        rating: 4.9,
        playCount: 0,
        audioSrc: "audio/miyagi-endspiel-lyubi-menya.mp3",
        coverSrc: "images/miyagi-endspiel-lyubi-menya.jpg",
        description: "Хитовый трек дуэта Miyagi & Эндшпиль"
    },
    {
        id: 7,
        title: "EDM",
        artist: "Big Baby Tape, Aarne, Платина",
        album: "EDM",
        year: 2023,
        genre: "russian rap",
        duration: "2:35",
        rating: 4.8,
        playCount: 0,
        audioSrc: "audio/tape-aarne-platina-edm.mp3",
        coverSrc: "images/tape-aarne-platina-edm.jpg",
        description: "Коллаборация трэп-исполнителей"
    },
    {
        id: 8,
        title: "Дежавю",
        artist: "kizaru",
        album: "Дежавю",
        year: 2020,
        genre: "russian rap",
        duration: "3:20",
        rating: 4.5,
        playCount: 0,
        audioSrc: "audio/kizaru-dezhavyu.mp3",
        coverSrc: "images/kizaru-dezhavyu.jpg",
        description: "Один из самых известных треков kizaru"
    },
    {
        id: 9,
        title: "Hoodtrapstar",
        artist: "ICEGERGERT",
        album: "Hoodtrapstar",
        year: 2022,
        genre: "trap",
        duration: "2:25",
        rating: 4.3,
        playCount: 0,
        audioSrc: "audio/icegergert-hoodtrapstar.mp3",
        coverSrc: "images/icegergert-hoodtrapstar.jpg",
        description: "Трэп от ICEGERGERT"
    },
    {
        id: 10,
        title: "Lucid Dreams",
        artist: "Juice WRLD",
        album: "Goodbye & Good Riddance",
        year: 2018,
        genre: "emo rap",
        duration: "3:59",
        rating: 5.0,
        playCount: 0,
        audioSrc: "audio/juice-wrld-lucid-dreams.mp3",
        coverSrc: "images/juice-wrld-lucid-dreams.jpg",
        description: "Легендарный трек Juice WRLD"
    },
    {
        id: 11,
        title: "Mockingbird",
        artist: "Eminem",
        album: "Encore",
        year: 2004,
        genre: "hip hop",
        duration: "4:11",
        rating: 5.0,
        playCount: 0,
        audioSrc: "audio/eminem-mockingbird.mp3",
        coverSrc: "images/eminem-mockingbird.jpg",
        description: "Классика от Эминема"
    },
    {
        id: 12,
        title: "Goosebumps",
        artist: "Travis Scott",
        album: "Birds in the Trap Sing McKnight",
        year: 2016,
        genre: "trap",
        duration: "4:04",
        rating: 4.9,
        playCount: 0,
        audioSrc: "audio/travis-scott-goosebumps.mp3",
        coverSrc: "images/travis-scott-goosebumps.jpg",
        description: "Иконичный трэп от Travis Scott"
    },
    {
        id: 13,
        title: "Целую",
        artist: "Pepel Nahudi",
        album: "Целую",
        year: 2023,
        genre: "russian rap",
        duration: "2:15",
        rating: 4.8,
        playCount: 0,
        audioSrc: "audio/pepel-nahudi-celuyu.mp3",
        coverSrc: "images/pepel-nahudi-celuyu.jpg",
        description: "Поп-рэп от Pepel Nahudi"
    },
    {
        id: 14,
        title: "2027",
        artist: "REMINI",
        album: "2027",
        year: 2023,
        genre: "russian rap",
        duration: "2:30",
        rating: 4.7,
        playCount: 0,
        audioSrc: "audio/remini-2027.mp3",
        coverSrc: "images/remini-2027.jpg",
        description: "Футуристичный трэп от REMINI"
    },
    {
        id: 15,
        title: "Шёлк",
        artist: "Ваня Дмитриенко",
        album: "Шёлк",
        year: 2023,
        genre: "russian rap",
        duration: "2:40",
        rating: 4.8,
        playCount: 0,
        audioSrc: "audio/vanya-dmitrienko-shyolk.mp3",
        coverSrc: "images/vanya-dmitrienko-shyolk.jpg",
        description: "Мелодичный рэп от Вани Дмитриенко"
    },
    {
        id: 16,
        title: "poster boy",
        artist: "2hollis",
        album: "poster boy",
        year: 2022,
        genre: "hyperpop",
        duration: "2:15",
        rating: 5.0,
        playCount: 0,
        audioSrc: "audio/2hollis-poster-boy.mp3",
        coverSrc: "images/2hollis-poster-boy.jpg",
        description: "Хайперпоп от 2hollis"
    },
    {
        id: 17,
        title: "shock",
        artist: "Baby Cute, OG Buda",
        album: "shock",
        year: 2023,
        genre: "russian rap",
        duration: "2:20",
        rating: 4.8,
        playCount: 0,
        audioSrc: "audio/baby-cute-og-buda-shock.mp3",
        coverSrc: "images/baby-cute-og-buda-shock.jpg",
        description: "Коллаборация Baby Cute и OG Buda"
    }
];

// ===== СИСТЕМА СТАТИСТИКИ =====
class StatisticsManager {
    constructor() {
        this.statsKey = 'musicPlayerStats';
        this.defaultStats = {
            totalPlays: 0,
            totalListeningTime: 0, // в секундах
            tracks: {}, // {trackId: {plays: 0, lastPlayed: timestamp}}
            dailyPlays: {},
            genres: {},
            lastReset: Date.now(),
            createdAt: Date.now()
        };
        
        this.stats = this.loadStats();
        this.setupEventListeners();
    }
    
    loadStats() {
        try {
            const saved = localStorage.getItem(this.statsKey);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.error('Ошибка загрузки статистики:', e);
        }
        return {...this.defaultStats};
    }
    
    saveStats() {
        try {
            localStorage.setItem(this.statsKey, JSON.stringify(this.stats));
            this.updateUI();
        } catch (e) {
            console.error('Ошибка сохранения статистики:', e);
        }
    }
    
    trackPlayed(trackId, duration) {
        const today = this.getTodayKey();
        
        // Обновляем общую статистику
        this.stats.totalPlays += 1;
        this.stats.totalListeningTime += duration;
        
        // Статистика по дням
        this.stats.dailyPlays[today] = (this.stats.dailyPlays[today] || 0) + 1;
        
        // Статистика по трекам
        if (!this.stats.tracks[trackId]) {
            this.stats.tracks[trackId] = { plays: 0, lastPlayed: null };
        }
        this.stats.tracks[trackId].plays += 1;
        this.stats.tracks[trackId].lastPlayed = Date.now();
        
        // Статистика по жанрам
        const track = tracks.find(t => t.id === trackId);
        if (track && track.genre) {
            this.stats.genres[track.genre] = (this.stats.genres[track.genre] || 0) + 1;
        }
        
        this.saveStats();
    }
    
    getTodayKey() {
        const date = new Date();
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    
    getTopTracks(limit = 5) {
        return Object.entries(this.stats.tracks)
            .sort((a, b) => b[1].plays - a[1].plays)
            .slice(0, limit)
            .map(([id, data]) => ({
                id: parseInt(id),
                plays: data.plays,
                track: tracks.find(t => t.id === parseInt(id))
            }));
    }
    
    getGenreDistribution() {
        const total = Object.values(this.stats.genres).reduce((a, b) => a + b, 0);
        return Object.entries(this.stats.genres)
            .map(([genre, count]) => ({
                genre,
                count,
                percentage: total > 0 ? Math.round((count / total) * 100) : 0
            }))
            .sort((a, b) => b.count - a.count);
    }
    
    getYearDistribution() {
        const years = {};
        tracks.forEach(track => {
            if (track.year) {
                const yearKey = track.year.toString();
                years[yearKey] = (years[yearKey] || 0) + 
                                (this.stats.tracks[track.id]?.plays || 0);
            }
        });
        
        const total = Object.values(years).reduce((a, b) => a + b, 0);
        return Object.entries(years)
            .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
            .map(([year, count]) => ({
                year,
                count,
                percentage: total > 0 ? Math.round((count / total) * 100) : 0
            }));
    }
    
    getAverageRating() {
        const ratedTracks = tracks.filter(t => t.rating > 0);
        if (ratedTracks.length === 0) return 0;
        
        const total = ratedTracks.reduce((sum, track) => {
            const plays = this.stats.tracks[track.id]?.plays || 1;
            return sum + (track.rating * plays);
        }, 0);
        
        const totalPlays = ratedTracks.reduce((sum, track) => {
            return sum + (this.stats.tracks[track.id]?.plays || 1);
        }, 0);
        
        return totalPlays > 0 ? (total / totalPlays).toFixed(1) : 0;
    }
    
    getTodayPlays() {
        const today = this.getTodayKey();
        return this.stats.dailyPlays[today] || 0;
    }
    
    resetStats() {
        if (confirm('Вы уверены, что хотите сбросить всю статистику?')) {
            this.stats = {...this.defaultStats, createdAt: Date.now()};
            this.saveStats();
            alert('Статистика сброшена!');
        }
    }
    
    exportStats() {
        const data = {
            ...this.stats,
            exportDate: new Date().toISOString(),
            totalTracks: tracks.length,
            averageRating: this.getAverageRating()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `music-stats-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('Статистика экспортирована в JSON файл!');
    }
    
    updateUI() {
        // Общие показатели
        const totalPlaysEl = document.getElementById('total-plays');
        const totalTimeEl = document.getElementById('total-time');
        const topTrackEl = document.getElementById('top-track');
        const avgRatingEl = document.getElementById('avg-rating');
        
        if (totalPlaysEl) totalPlaysEl.textContent = this.stats.totalPlays.toLocaleString();
        if (totalTimeEl) totalTimeEl.textContent = Math.round(this.stats.totalListeningTime / 60) + ' мин';
        
        // Любимый трек
        const topTrack = this.getTopTracks(1)[0];
        if (topTrack && topTrack.track && topTrackEl) {
            topTrackEl.textContent = `${topTrack.track.title} - ${topTrack.track.artist}`;
            const statCount = document.querySelector('.stat-count');
            if (statCount) statCount.textContent = `${topTrack.plays} прослушиваний`;
        } else if (topTrackEl) {
            topTrackEl.textContent = 'Ещё нет данных';
        }
        
        // Средний рейтинг
        if (avgRatingEl) avgRatingEl.textContent = this.getAverageRating();
        
        // Топ-5 треков
        this.renderTopTracks();
        
        // Диаграммы
        this.renderCharts();
        
        // Изменение за сегодня
        const todayPlays = this.getTodayPlays();
        document.querySelectorAll('.stat-change').forEach(el => {
            if (el.textContent.includes('сегодня') || el.textContent.includes('+0')) {
                el.textContent = `+${todayPlays} за сегодня`;
                el.style.color = todayPlays > 0 ? 'var(--success)' : 'var(--text-secondary)';
            }
        });
    }
    
    renderTopTracks() {
        const container = document.getElementById('top-tracks-list');
        if (!container) return;
        
        const topTracks = this.getTopTracks(5);
        
        if (topTracks.length === 0) {
            container.innerHTML = '<p class="no-data">Ещё нет прослушиваний</p>';
            return;
        }
        
        container.innerHTML = topTracks.map((item, index) => `
            <div class="top-track-item">
                <div class="top-track-rank">${index + 1}</div>
                <div class="top-track-info">
                    <div class="top-track-title">${item.track.title}</div>
                    <div class="top-track-artist">${item.track.artist}</div>
                </div>
                <div class="top-track-count">${item.plays}</div>
            </div>
        `).join('');
    }
    
    renderCharts() {
        // Диаграмма жанров
        const genreChart = document.getElementById('genre-chart');
        if (genreChart) {
            const genreData = this.getGenreDistribution();
            genreChart.innerHTML = genreData.map(item => `
                <div class="chart-bar" style="height: ${Math.max(item.percentage * 1.5, 20)}px" 
                     title="${item.genre}: ${item.count} прослушиваний">
                    <div class="chart-value">${item.count}</div>
                    <div class="chart-label">${item.genre}</div>
                </div>
            `).join('');
        }
        
        // Диаграмма по годам
        const yearChart = document.getElementById('year-chart');
        if (yearChart) {
            const yearData = this.getYearDistribution();
            yearChart.innerHTML = yearData.map(item => `
                <div class="chart-bar" style="height: ${Math.max(item.percentage * 1.5, 20)}px"
                     title="${item.year}: ${item.count} прослушиваний">
                    <div class="chart-value">${item.count}</div>
                    <div class="chart-label">${item.year}</div>
                </div>
            `).join('');
        }
    }
    
    setupEventListeners() {
        // Кнопка сброса
        const resetBtn = document.getElementById('reset-stats');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetStats();
            });
        }
        
        // Кнопка экспорта
        const exportBtn = document.getElementById('export-stats');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.exportStats();
            });
        }
    }
}

// ===== АУДИОПЛЕЕР =====
let currentTrackIndex = -1; // -1 означает "не выбран"
let isPlaying = false;
const audioPlayer = new Audio();

// ===== ГЛОБАЛЬНЫЕ ЭЛЕМЕНТЫ =====
let statsManager;

// ===== ФУНКЦИИ ПЛЕЕРА =====

// Обновление информации о текущем треке
function updateNowPlayingUI(track) {
    const currentCoverImg = document.getElementById('current-cover-img');
    const currentTrackTitle = document.getElementById('current-track-title');
    const currentTrackArtist = document.getElementById('current-track-artist');
    const nowPlayingCard = document.getElementById('now-playing-card');
    
    if (!track) {
        // Если трек не выбран
        if (nowPlayingCard) nowPlayingCard.classList.add('empty');
        if (currentCoverImg) currentCoverImg.src = 'images/default-cover.svg';
        if (currentTrackTitle) currentTrackTitle.textContent = 'Выберите трек для воспроизведения';
        if (currentTrackArtist) currentTrackArtist.textContent = '—';
        updateGlobalPlayer(null);
        return;
    }
    
    // Если трек выбран
    if (nowPlayingCard) nowPlayingCard.classList.remove('empty');
    if (currentCoverImg) {
        currentCoverImg.src = track.coverSrc;
        currentCoverImg.alt = `Обложка: ${track.title} - ${track.artist}`;
    }
    if (currentTrackTitle) currentTrackTitle.textContent = track.title;
    if (currentTrackArtist) currentTrackArtist.textContent = track.artist;
    
    // Обновляем глобальный плеер
    updateGlobalPlayer(track);
}

// Обновление глобального плеера (внизу страницы)
function updateGlobalPlayer(track) {
    const globalTitle = document.getElementById('global-track-title');
    const globalArtist = document.getElementById('global-track-artist');
    const globalCover = document.getElementById('global-cover');
    const globalTotalTime = document.getElementById('global-total-time');
    
    if (!track) {
        if (globalTitle) globalTitle.textContent = 'Выберите трек';
        if (globalArtist) globalArtist.textContent = '—';
        if (globalCover) globalCover.src = 'images/default-cover.svg';
        if (globalTotalTime) globalTotalTime.textContent = '0:00';
        return;
    }
    
    if (globalTitle) globalTitle.textContent = track.title;
    if (globalArtist) globalArtist.textContent = track.artist;
    if (globalCover) {
        globalCover.src = track.coverSrc;
        globalCover.alt = `Обложка: ${track.title} - ${track.artist}`;
    }
    if (globalTotalTime) {
        globalTotalTime.textContent = track.duration;
    }
}

// Воспроизведение трека
function playTrack(trackIndex) {
    const track = tracks[trackIndex];
    if (!track) return;
    
    // Останавливаем текущее воспроизведение
    if (isPlaying) {
        audioPlayer.pause();
    }
    
    // Загружаем новый трек
    audioPlayer.src = track.audioSrc;
    audioPlayer.load();
    
    // Обновляем текущий трек
    currentTrackIndex = trackIndex;
    
    // Обновляем UI
    updateNowPlayingUI(track);
    
    // Воспроизводим
    audioPlayer.play()
        .then(() => {
            isPlaying = true;
            updatePlayButtons();
        })
        .catch(error => {
            console.error('Ошибка воспроизведения:', error);
            alert('Не удалось воспроизвести трек. Проверьте файл аудио.');
        });
    
    // Статистика
    if (statsManager) {
        const duration = track.duration.split(':').reduce((acc, time) => (60 * acc) + +time);
        statsManager.trackPlayed(track.id, duration);
    }
}

// Пауза/возобновление
function togglePlayPause() {
    if (currentTrackIndex === -1) {
        // Если трек не выбран, играем первый
        playTrack(0);
        return;
    }
    
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
    updatePlayButtons();
}

// Следующий трек
function playNextTrack() {
    if (tracks.length === 0) return;
    
    let nextIndex = currentTrackIndex + 1;
    if (nextIndex >= tracks.length) {
        nextIndex = 0; // Зацикливание
    }
    
    playTrack(nextIndex);
}

// Предыдущий трек
function playPrevTrack() {
    if (tracks.length === 0) return;
    
    let prevIndex = currentTrackIndex - 1;
    if (prevIndex < 0) {
        prevIndex = tracks.length - 1; // Зацикливание
    }
    
    playTrack(prevIndex);
}

// Обновление кнопок воспроизведения
function updatePlayButtons() {
    const icon = isPlaying ? 'fa-pause' : 'fa-play';
    
    // Кнопка в "сейчас играет"
    const playPauseBtn = document.getElementById('play-pause-btn');
    if (playPauseBtn) {
        const playIcon = playPauseBtn.querySelector('i');
        if (playIcon) {
            playIcon.className = `fas ${icon}`;
        }
    }
    
    // Глобальная кнопка внизу
    const globalPlayBtn = document.getElementById('global-play');
    if (globalPlayBtn) {
        const globalIcon = globalPlayBtn.querySelector('i');
        if (globalIcon) {
            globalIcon.className = `fas ${icon}`;
        }
    }
    
    // Кнопки на карточках
    document.querySelectorAll('.play-track-btn i, .play-overlay-btn i').forEach(iconEl => {
        // Оставляем только play на карточках
        iconEl.className = 'fas fa-play';
    });
}

// Обновление прогресса
function updateProgress() {
    if (!audioPlayer.duration || isNaN(audioPlayer.duration)) return;
    
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    
    // Прогресс в "сейчас играет"
    const nowPlayingProgressFill = document.getElementById('now-playing-progress-fill');
    const currentTimeEl = document.getElementById('current-time');
    const totalTimeEl = document.getElementById('total-time');
    
    if (nowPlayingProgressFill) nowPlayingProgressFill.style.width = `${progressPercent}%`;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    if (totalTimeEl) totalTimeEl.textContent = formatTime(audioPlayer.duration);
    
    // Прогресс в глобальном плеере
    const globalProgressFill = document.getElementById('global-progress-fill');
    const globalCurrentTime = document.getElementById('global-current-time');
    const globalTotalTime = document.getElementById('global-total-time');
    
    if (globalProgressFill) globalProgressFill.style.width = `${progressPercent}%`;
    if (globalCurrentTime) globalCurrentTime.textContent = formatTime(audioPlayer.currentTime);
    if (globalTotalTime && audioPlayer.duration) {
        globalTotalTime.textContent = formatTime(audioPlayer.duration);
    }
    
    // Обновляем ARIA атрибуты
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.setAttribute('aria-valuenow', Math.round(progressPercent));
    }
}

// Форматирование времени
function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Настройка прогресс-бара
function setupProgressBarClick() {
    const progressBar = document.querySelector('.progress-bar');
    const globalProgressBar = document.getElementById('global-progress-bar');
    
    if (progressBar) {
        progressBar.addEventListener('click', function(e) {
            if (!audioPlayer.duration || currentTrackIndex === -1) return;
            
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const duration = audioPlayer.duration;
            
            audioPlayer.currentTime = (clickX / width) * duration;
        });
    }
    
    if (globalProgressBar) {
        globalProgressBar.addEventListener('click', function(e) {
            if (!audioPlayer.duration || currentTrackIndex === -1) return;
            
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const duration = audioPlayer.duration;
            
            audioPlayer.currentTime = (clickX / width) * duration;
        });
    }
}

// Фильтрация треков
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const trackCards = document.querySelectorAll('.track-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Обновляем активную кнопку
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Фильтруем карточки
            trackCards.forEach(card => {
                if (filter === 'all' || card.dataset.genre === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Обновляем счетчик
            const shownCount = document.getElementById('shown-count');
            if (shownCount) {
                const visibleCount = document.querySelectorAll('.track-card[style="display: block"]').length;
                shownCount.textContent = visibleCount;
            }
        });
    });
}

// Настройка глобальных кнопок управления
function setupGlobalControls() {
    const globalPlayBtn = document.getElementById('global-play');
    const globalPrevBtn = document.getElementById('global-prev');
    const globalNextBtn = document.getElementById('global-next');
    
    if (globalPlayBtn) {
        globalPlayBtn.addEventListener('click', togglePlayPause);
    }
    if (globalPrevBtn) {
        globalPrevBtn.addEventListener('click', playPrevTrack);
    }
    if (globalNextBtn) {
        globalNextBtn.addEventListener('click', playNextTrack);
    }
}

// Настройка кнопок на карточках
function setupTrackCards() {
    document.querySelectorAll('.play-track-btn, .play-overlay-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.track-card');
            if (card) {
                const trackId = parseInt(card.dataset.id);
                const trackIndex = tracks.findIndex(t => t.id === trackId);
                playTrack(trackIndex);
            }
        });
    });
    
    // Клик по карточке для открытия модального окна
    document.querySelectorAll('.track-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Игнорируем клики по кнопкам внутри карточки
            if (e.target.closest('button')) return;
            
            const trackId = parseInt(this.dataset.id);
            openTrackModal(trackId);
        });
    });
}

// Модальное окно с информацией о треке
function openTrackModal(trackId) {
    const track = tracks.find(t => t.id === trackId);
    if (!track) return;
    
    const modalOverlay = document.getElementById('track-modal');
    const modalBody = document.querySelector('.modal-body');
    
    if (!modalOverlay || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="modal-track-info">
            <img src="${track.coverSrc}" alt="${track.album}" width="200" height="200" class="modal-cover">
            <h3 class="modal-track-title">${track.title}</h3>
            <p class="modal-track-artist">${track.artist}</p>
            <p class="modal-track-album">${track.album} • ${track.year}</p>
            <p class="modal-track-genre">Жанр: <span class="genre-tag">${track.genre}</span></p>
            <p class="modal-track-duration">Длительность: ${track.duration}</p>
            <div class="modal-track-rating">
                Рейтинг: ${'★'.repeat(Math.floor(track.rating))}${track.rating % 1 ? '½' : ''} (${track.rating}/5)
            </div>
            <p class="modal-track-description">${track.description}</p>
            <button class="modal-play-btn" data-id="${track.id}">
                <i class="fas fa-play"></i> Слушать
            </button>
        </div>
    `;
    
    modalOverlay.setAttribute('aria-hidden', 'false');
    modalOverlay.style.display = 'flex';
    
    // Добавляем обработчик для кнопки воспроизведения в модалке
    modalBody.querySelector('.modal-play-btn').addEventListener('click', function() {
        const trackIndex = tracks.findIndex(t => t.id === trackId);
        playTrack(trackIndex);
        closeModal();
    });
}

// Закрытие модального окна
function closeModal() {
    const modalOverlay = document.getElementById('track-modal');
    if (modalOverlay) {
        modalOverlay.setAttribute('aria-hidden', 'true');
        modalOverlay.style.display = 'none';
    }
}

// Настройка кнопки закрытия модального окна
function setupModalClose() {
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.getElementById('track-modal');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    }
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('track-modal');
            if (modal && modal.getAttribute('aria-hidden') === 'false') {
                closeModal();
            }
        }
    });
}

// Настройка боковой панели
function setupSidebar() {
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (navToggle && sidebar) {
        navToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
        
        // Закрытие боковой панели при клике вне её
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target) && !navToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        });
    }
}

// Настройка управления громкостью
function setupVolumeControl() {
    const volumeSlider = document.getElementById('volume-slider');
    const volumeFill = document.getElementById('volume-fill');
    
    if (volumeSlider && volumeFill) {
        volumeSlider.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const volume = clickX / width;
            
            audioPlayer.volume = volume;
            volumeFill.style.width = `${volume * 100}%`;
        });
        
        // Устанавливаем начальную громкость
        audioPlayer.volume = 0.8;
        volumeFill.style.width = '80%';
    }
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Music Player initialized! 🎵');
    
    // Инициализируем текущий трек как не выбранный
    updateNowPlayingUI(null);
    
    // Настраиваем обработчики событий для аудиоплеера
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', function() {
        const totalTimeEl = document.getElementById('total-time');
        if (totalTimeEl) {
            totalTimeEl.textContent = formatTime(audioPlayer.duration);
        }
    });
    audioPlayer.addEventListener('ended', playNextTrack);
    
    // Настраиваем кнопки управления
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
    if (prevBtn) prevBtn.addEventListener('click', playPrevTrack);
    if (nextBtn) nextBtn.addEventListener('click', playNextTrack);
    
    // Настройка всех компонентов
    setupProgressBarClick();
    setupFilters();
    setupGlobalControls();
    setupTrackCards();
    setupModalClose();
    setupSidebar();
    setupVolumeControl();
    
    // Инициализируем менеджер статистики
    statsManager = new StatisticsManager();
    statsManager.updateUI();
    
    // Обновляем статистику каждые 10 секунд
    setInterval(() => {
        if (statsManager) {
            statsManager.updateUI();
        }
    }, 10000);
    
    // Обработка клавиш
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case ' ':
            case 'Spacebar':
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                    e.preventDefault();
                    togglePlayPause();
                }
                break;
            case 'ArrowRight':
                if (e.altKey) playNextTrack();
                break;
            case 'ArrowLeft':
                if (e.altKey) playPrevTrack();
                break;
        }
    });
});