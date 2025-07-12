// Authentication System
class AuthSystem {
    constructor() {
        this.users = [
            { email: "yalda@nebula.works", password: "starlight", name: "Yalda", role: "user" },
            { email: "vida@nebula.works", password: "moonshine", name: "Vida", role: "user" },
            { email: "admin@nebula.works", password: "quantum", name: "Admin", role: "admin" }
        ];
        this.currentUser = null;
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
        return false;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }

    isAdmin() {
        return this.currentUser?.role === 'admin';
    }
}

const auth = new AuthSystem();

// 3D Planet Viewer
class PlanetViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.initThreeJS();
        this.loadPlanets();
    }

    initThreeJS() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x050510);
        
        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75, 
            this.container.clientWidth / this.container.clientHeight, 
            0.1, 
            1000
        );
        this.camera.position.z = 5;
        
        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.container.appendChild(this.renderer.domElement);
        
        // Lights
        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);
        
        // Animation loop
        this.animate();
    }

    loadPlanets() {
        const loader = new THREE.GLTFLoader();
        const planetFiles = ['planet1.glb', 'planet2.glb', 'planet3.glb'];
        
        planetFiles.forEach((file, index) => {
            loader.load(`assets/${file}`, (gltf) => {
                const planet = gltf.scene;
                planet.position.x = (index - 1) * 2.5;
                planet.scale.set(0.5, 0.5, 0.5);
                this.scene.add(planet);
                
                // Store reference for animation
                if (!this.planets) this.planets = [];
                this.planets.push(planet);
            });
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (this.planets) {
            this.planets.forEach((planet, index) => {
                planet.rotation.y += 0.005 * (index + 1);
            });
        }
        
        this.renderer.render(this.scene, this.camera);
    }
}

// Dashboard Functions
class Dashboard {
    constructor() {
        this.initDateTime();
        this.initMissions();
        this.initCalendar();
        this.initSystemStatus();
    }

    initDateTime() {
        const updateTime = () => {
            const now = new Date();
            document.getElementById('station-time').textContent = now.toLocaleString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        };
        
        updateTime();
        setInterval(updateTime, 1000);
    }

    initMissions() {
        const missions = [
            { id: 1, title: "Analyze telescope data", status: "pending" },
            { id: 2, title: "Update navigation system", status: "in-progress" },
            { id: 3, title: "Calibrate sensors", status: "completed" },
            { id: 4, title: "Test ion engines", status: "pending" }
        ];
        
        const missionsList = document.getElementById('missions-list');
        missions.forEach(mission => {
            const missionItem = document.createElement('div');
            missionItem.className = 'mission-item';
            missionItem.innerHTML = `
                <div class="mission-status status-${mission.status}"></div>
                <span>${mission.title}</span>
            `;
            missionsList.appendChild(missionItem);
        });
    }

    initCalendar() {
        const events = [
            { id: 1, day: "15", month: "JUN", title: "Satellite Launch", description: "NW-247 to orbit" },
            { id: 2, day: "22", month: "JUN", title: "Team Meeting", description: "Quarterly review" },
            { id: 3, day: "30", month: "JUN", title: "System Maintenance", description: "6-hour window" }
        ];
        
        const calendarEvents = document.getElementById('calendar-events');
        events.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';
            eventItem.innerHTML = `
                <div class="event-date">
                    <span class="day">${event.day}</span>
                    <span class="month">${event.month}</span>
                </div>
                <div class="event-info">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                </div>
            `;
            calendarEvents.appendChild(eventItem);
        });
    }

    initSystemStatus() {
        // Oxygen gauge
        const oxygenGauge = document.getElementById('oxygen-gauge');
        oxygenGauge.style.background = `conic-gradient(var(--secondary) ${95}%, var(--dark) 0%)`;
        
        // Power gauge
        const powerGauge = document.getElementById('power-gauge');
        powerGauge.style.background = `conic-gradient(var(--secondary) ${78}%, var(--dark) 0%)`;
        
        // Fuel gauge
        const fuelGauge = document.getElementById('fuel-gauge');
        fuelGauge.style.background = `conic-gradient(var(--secondary) ${65}%, var(--dark) 0%)`;
    }
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    // Check for authenticated user
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        auth.currentUser = JSON.parse(savedUser);
    }
    
    // Initialize planet viewer on auth page
    if (document.body.classList.contains('auth-page')) {
        new PlanetViewer('planet-viewer');
        
        // Login form
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (auth.login(email, password)) {
                window.location.href = auth.isAdmin() ? 'admin.html' : 'dashboard.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
    
    // Initialize dashboard if on dashboard page
    if (document.querySelector('.content')) {
        // Show current user
        if (auth.currentUser) {
            document.getElementById('username').textContent = auth.currentUser.name;
            document.getElementById('user-avatar').textContent = auth.currentUser.name.charAt(0);
        }
        
        new Dashboard();
        new PlanetViewer('planet-display');
    }
    
    // Create stars background
    createStars();
});

// Stars background animation
function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    const starsCount = 200;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random size
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        star.style.setProperty('--duration', `${5 + Math.random() * 10}s`);
        
        starsContainer.appendChild(star);
    }
}