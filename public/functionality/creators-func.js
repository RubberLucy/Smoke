// Enhanced creator data with more details
const creators = [
    {
        name: "דני כהן",
        specialty: "Unity Developer",
        avatar: "ד",
        games: 12,
        followers: 1500,
        rating: 4.8,
        number: 23,
        skills: ["Unity", "C#", "Mobile", "AR"],
        experience: "senior",
        location: "tel-aviv",
        phone: "050-1234567",
        email: "danny.cohen@email.com",
        portfolio: "portfolio.dannycohen.dev",
        description: "מפתח Unity מנוסה עם התמחות בפיתוח משחקים למובייל ו-AR. מתמחה בפיתוח משחקי אקשן ופאזל עם דגש על חוויית משתמש מעולה.",
        experienceYears: 5,
        projects: [
            { name: "AR Quest", type: "משחק הרפתקאות AR" },
            { name: "Puzzle Master", type: "משחק פאזל למובייל" },
            { name: "City Builder", type: "סימולטור בנייה" }
        ]
    },
    {
        name: "שרה לוי",
        specialty: "Game Designer",
        avatar: "ש",
        games: 8,
        followers: 980,
        rating: 4.9,
        skills: ["Game Design", "Unity", "UX", "Mobile"],
        experience: "mid",
        location: "jerusalem",
        phone: "052-2345678",
        email: "sarah.levi@email.com",
        portfolio: "behance.com/sarahlevi",
        description: "מעצבת משחקים עם התמחות ב-UX ועיצוב חוויית משתמש. מתמחה בפיתוח מכניקות משחק חדשניות ויצירת חוויות משתמש מעולות.",
        experienceYears: 3,
        projects: [
            { name: "Mind Maze", type: "משחק חשיבה" },
            { name: "Social Quest", type: "משחק חברתי" }
        ]
    },
    {
        name: "מיכאל רוזן",
        specialty: "3D Artist",
        avatar: "מ",
        games: 15,
        followers: 2100,
        rating: 4.7,
        skills: ["Blender", "3D Modeling", "Unity", "Unreal"],
        experience: "senior",
        location: "haifa",
        phone: "053-3456789",
        email: "michael.rosen@email.com",
        portfolio: "artstation.com/michaelrosen",
        description: "אמן תלת מימד מנוסה עם התמחות ב-Blender ו-Unity. מתמחה ביצירת מודלים מפורטים, אנימציות וסביבות משחק מרהיבות.",
        experienceYears: 7,
        projects: [
            { name: "Fantasy RPG", type: "עולם פנטזיה" },
            { name: "Sci-Fi Shooter", type: "משחק יריות עתידני" },
            { name: "Racing Game", type: "משחק מירוצים" }
        ]
    },
    {
        name: "נועה גרין",
        specialty: "Mobile Developer",
        avatar: "נ",
        games: 6,
        followers: 750,
        rating: 4.6,
        skills: ["Mobile", "Unity", "iOS", "Android"],
        experience: "junior",
        location: "tel-aviv",
        phone: "054-4567890",
        email: "noa.green@email.com",
        portfolio: "github.com/noagreen",
        description: "מפתחת מובייל צעירה ומוכשרת עם התמחות בפיתוח אפליקציות Android ו-iOS. מתמחה במשחקים קזואליים ואפליקציות חינוכיות.",
        experienceYears: 2,
        projects: [
            { name: "Kids Learning", type: "אפליקציה חינוכית" },
            { name: "Casual Runner", type: "משחק ריצה" }
        ]
    },
    {
        name: "אלי שמיר",
        specialty: "Unreal Developer",
        avatar: "א",
        games: 10,
        followers: 1200,
        rating: 4.8,
        skills: ["Unreal Engine", "C++", "VR", "PC Games"],
        experience: "senior",
        location: "remote",
        phone: "055-5678901",
        email: "eli.shamir@email.com",
        portfolio: "unrealengine.com/elishair",
        description: "מפתח Unreal Engine מנוסה עם התמחות בפיתוח משחקי VR ו-PC. מתמחה בפיתוח משחקים מתקדמים עם גרפיקה מתקדמת.",
        experienceYears: 6,
        projects: [
            { name: "VR Adventure", type: "משחק VR" },
            { name: "Epic Battle", type: "משחק קרב" }
        ]
    },
    {
        name: "רחל אברהם",
        specialty: "2D Artist",
        avatar: "ר",
        games: 20,
        followers: 3200,
        rating: 4.9,
        skills: ["2D Art", "Animation", "UI Design", "Concept Art"],
        experience: "lead",
        location: "tel-aviv",
        phone: "056-6789012",
        email: "rachel.abraham@email.com",
        portfolio: "dribbble.com/rachelabraham",
        description: "אמנית 2D מובילה עם התמחות באנימציה ועיצוב UI. מתמחה ביצירת אמנות קונספט ואנימציות מרהיבות למשחקים.",
        experienceYears: 8,
        projects: [
            { name: "Animated Tales", type: "משחק אנימציה" },
            { name: "UI Master", type: "מערכת UI" }
        ]
    },
    {
        name: "יוסף דוד",
        specialty: "Indie Developer",
        avatar: "י",
        games: 4,
        followers: 450,
        rating: 4.5,
        skills: ["Unity", "Solo Dev", "Pixel Art", "Retro Games"],
        experience: "mid",
        location: "jerusalem",
        phone: "057-7890123",
        email: "yosef.david@email.com",
        portfolio: "itch.io/yosefdavid",
        description: "מפתח עצמאי עם התמחות במשחקים רטרו ופיקסל ארט. מתמחה בפיתוח משחקים עצמאיים ייחודיים עם סגנון וינטג'.",
        experienceYears: 4,
        projects: [
            { name: "Pixel Quest", type: "משחק פיקסל" },
            { name: "Retro Runner", type: "משחק רטרו" }
        ]
    },
    {
        name: "תמר כץ",
        specialty: "VR Developer",
        avatar: "ת",
        games: 7,
        followers: 890,
        rating: 4.7,
        skills: ["VR", "AR", "Unity", "Oculus"],
        experience: "mid",
        location: "haifa",
        phone: "058-8901234",
        email: "tamar.katz@email.com",
        portfolio: "vr-portfolio.tamarkatz.com",
        description: "מפתחת VR ו-AR עם התמחות בטכנולוגיות מתקדמות. מתמחה ביצירת חוויות VR מרהיבות ואפליקציות AR חדשניות.",
        experienceYears: 3,
        projects: [
            { name: "VR Training", type: "סימולטור VR" },
            { name: "AR Museum", type: "מוזיאון AR" }
        ]
    },
    {
        name: "רון שולמן",
        specialty: "Web Games Developer",
        avatar: "ר",
        games: 25,
        followers: 2800,
        rating: 4.8,
        skills: ["JavaScript", "WebGL", "HTML5", "Phaser"],
        experience: "lead",
        location: "remote",
        phone: "059-9012345",
        email: "ron.shulman@email.com",
        portfolio: "webgames.ronshulman.com",
        description: "מפתח משחקי ווב מוביל עם התמחות ב-WebGL ו-HTML5. מתמחה בפיתוח משחקים מתקדמים לדפדפן עם ביצועים גבוהים.",
        experienceYears: 9,
        projects: [
            { name: "Web Racing", type: "משחק מירוצים ברשת" },
            { name: "Browser RPG", type: "משחק תפקידים" }
        ]
    }
];

function createCreatorCard(creator) {
    return `
        <div class="creator-card" data-creator-index="${creators.indexOf(creator)}">
            <div class="creator-avatar">${creator.avatar}</div>
            <div class="creator-name">${creator.name}</div>
            <div class="creator-specialty">${creator.specialty}</div>
            
            <div class="creator-stats">
                <div class="stat">
                    <div class="stat-number">${creator.games}</div>
                    <div class="stat-label">משחקים</div>
                </div>
                <div class="stat">
                    <div class="stat-number">${creator.followers}</div>
                    <div class="stat-label">עוקבים</div>
                </div>
                <div class="stat">
                    <div class="stat-number">${creator.rating}</div>
                    <div class="stat-label">דירוג</div>
                </div>
                <div class="stat">
                    <div class="stat-number creator-phone">${creator.phone}</div>
                    <div class="stat-label">מספר</div>
                </div>
            </div>
            
            <div class="creator-skills">
                ${creator.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            
            <div class="creator-actions">
                <button class="btn btn-small">צפה בפרופיל</button>
            </div>
        </div>
    `;
}

function createEnhancedModalContent(creator) {
    const experienceText = {
        'junior': 'מתחיל',
        'mid': 'בינוני',
        'senior': 'מנוסה',
        'lead': 'מוביל'
    };

    const locationText = {
        'tel-aviv': 'תל אביב',
        'jerusalem': 'ירושלים',
        'haifa': 'חיפה',
        'remote': 'עבודה מרחוק'
    };

    const stars = '★'.repeat(Math.floor(creator.rating)) + '☆'.repeat(5 - Math.floor(creator.rating));

    return `
        <div class="modal-header">
            <div class="modal-avatar">${creator.avatar}</div>
            <h2 class="modal-name">${creator.name}</h2>
            <div class="modal-specialty">${creator.specialty}</div>
            <div class="modal-rating">
                <span class="stars">${stars}</span>
                <span class="rating-number">${creator.rating}</span>
            </div>
        </div>
        
        <div class="modal-body">
            <div class="modal-section">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">${creator.games}</div>
                        <div class="stat-label">משחקים</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${creator.followers.toLocaleString()}</div>
                        <div class="stat-label">עוקבים</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${creator.experienceYears}+</div>
                        <div class="stat-label">שנות ניסיון</div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>מידע כללי</h3>
                <div class="badges">
                    <span class="experience-badge">${experienceText[creator.experience]}</span>
                    <span class="location-badge">${locationText[creator.location]}</span>
                </div>
                <p class="description">${creator.description}</p>
            </div>

            <div class="modal-section">
                <h3>כישורים</h3>
                <div class="skills-container">
                    ${creator.skills.map(skill => `<span class="skill-tag enhanced">${skill}</span>`).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3>פרויקטים בולטים</h3>
                <div class="portfolio-grid">
                    ${creator.projects.map(project => `
                        <div class="portfolio-item">
                            <div class="portfolio-image">${project.name}</div>
                            <div class="portfolio-type">${project.type}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3>יצירת קשר</h3>
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">📱</div>
                        <span>${creator.phone}</span>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📧</div>
                        <span>${creator.email}</span>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">🌐</div>
                        <span>${creator.portfolio}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-actions">
            <button class="action-btn btn-primary">שלח הודעה</button>
            <button class="action-btn btn-secondary">הוסף לעוקבים</button>
        </div>
    `;
}

function renderCreators(creatorsToRender = creators) {
    const grid = document.getElementById('creatorsGrid');
    grid.innerHTML = creatorsToRender.map(createCreatorCard).join('');
}

// Filter functionality
function filterCreators() {
    const activeSpecialty = document.querySelector('.specialty-tag.active').textContent;

    let filteredCreators = [...creators];

    // Filter by specialty
    if (activeSpecialty !== 'הכל') {
        filteredCreators = filteredCreators.filter(creator => 
            creator.skills.some(skill => skill.toLowerCase().includes(activeSpecialty.toLowerCase()))
        );
    }

    renderCreators(filteredCreators);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    renderCreators();

    // Specialty tags
    document.querySelectorAll('.specialty-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            document.querySelectorAll('.specialty-tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterCreators();
        });
    });

    // Modal functionality
    const modal = document.getElementById('profileModal');
    const modalContent = document.getElementById('modalProfileContent');
    const closeBtn = document.querySelector('.close-btn');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Enhanced creator card actions
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-small')) {
            const card = e.target.closest('.creator-card');
            const creatorIndex = parseInt(card.getAttribute('data-creator-index'));
            const creator = creators[creatorIndex];

            modalContent.innerHTML = createEnhancedModalContent(creator);
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });

    // Keyboard support
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});