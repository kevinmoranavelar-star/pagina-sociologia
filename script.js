// ====================================
// MENÚ RESPONSIVO (HAMBURGUESA)
// ====================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú cuando se hace clic en un enlace
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// ====================================
// ACORDEONES
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    // Acordeones generales
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            
            if (targetPanel) {
                // Cerrar todos los demás acordeones
                document.querySelectorAll('.accordion-content').forEach(panel => {
                    if (panel.id !== targetId) {
                        panel.style.display = 'none';
                        panel.classList.remove('show');
                        panel.previousElementSibling.classList.remove('active');
                    }
                });
                
                // Alternar el estado del actual
                if (targetPanel.style.display === 'none' || targetPanel.style.display === '') {
                    targetPanel.style.display = 'block';
                    targetPanel.classList.add('show');
                    this.classList.add('active');
                } else {
                    targetPanel.style.display = 'none';
                    targetPanel.classList.remove('show');
                    this.classList.remove('active');
                }
            }
        });
    });
});

// ====================================
// LÍNEA DE TIEMPO INTERACTIVA
// ====================================
function toggleTimeline(index) {
    const details = document.getElementById('details' + index);
    if (details) {
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            details.classList.add('show');
        } else {
            details.style.display = 'none';
            details.classList.remove('show');
        }
    }
}

// ====================================
// TARJETAS DESPLEGABLES (PENSADORES)
// ====================================
function toggleThinker(button) {
    const content = button.nextElementSibling;
    
    // Cerrar todos los demás
    document.querySelectorAll('.thinker-content').forEach(el => {
        if (el !== content) {
            el.style.display = 'none';
            el.previousElementSibling.classList.remove('active');
        }
    });
    
    // Alternar el actual
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.classList.add('active');
    } else {
        content.style.display = 'none';
        button.classList.remove('active');
    }
}

// ====================================
// TARJETAS DESPLEGABLES (TEORÍAS)
// ====================================
function toggleTheory(button) {
    const content = button.nextElementSibling;
    
    // Cerrar todos los demás
    document.querySelectorAll('.theory-content').forEach(el => {
        if (el !== content) {
            el.style.display = 'none';
            el.classList.remove('show');
            el.previousElementSibling.classList.remove('active');
        }
    });
    
    // Alternar el actual
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        content.classList.add('show');
        button.classList.add('active');
    } else {
        content.style.display = 'none';
        content.classList.remove('show');
        button.classList.remove('active');
    }
}

// ====================================
// QUIZ INTERACTIVO
// ====================================
function checkQuiz() {
    const quizResult = document.getElementById('quizResult');
    
    // Obtener las preguntas
    const quizQuestions = document.querySelectorAll('.quiz-question');
    let correctAnswers = 0;
    let totalQuestions = 0;
    
    // Array para almacenar respuestas correctas por página
    const correctAnswersMap = {
        'modulo1.html': { q1: 'b', q2: 'b' },
        'modulo2.html': { q1: 'b', q2: 'b' },
        'modulo3.html': { q1: 'c', q2: 'b' },
        'modulo4.html': { q1: 'b', q2: 'a' },
        'modulo5.html': { q1: 'b', q2: 'b', q3: 'b' },
        'index.html': {}
    };
    
    // Obtener el archivo actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const correctAnswers_Current = correctAnswersMap[currentPage] || {};
    
    // Verificar respuestas
    quizQuestions.forEach((question, index) => {
        const questionNumber = 'q' + (index + 1);
        const radios = question.querySelectorAll('input[type="radio"]');
        let selectedAnswer = null;
        
        radios.forEach((radio, radioIndex) => {
            if (radio.checked) {
                selectedAnswer = String.fromCharCode(97 + radioIndex); // 'a', 'b', 'c', etc.
            }
        });
        
        if (selectedAnswer) {
            totalQuestions++;
            if (correctAnswers_Current[questionNumber] === selectedAnswer) {
                correctAnswers++;
            }
        }
    });
    
    // Mostrar resultado
    if (totalQuestions === 0) {
        quizResult.classList.add('show', 'error');
        quizResult.innerHTML = '<strong>⚠️ Por favor responde todas las preguntas antes de verificar.</strong>';
    } else {
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const isSuccess = percentage >= 70;
        
        quizResult.classList.add('show');
        quizResult.classList.remove(isSuccess ? 'error' : 'success');
        quizResult.classList.add(isSuccess ? 'success' : 'error');
        
        let resultMessage = `<strong>Resultado: ${correctAnswers}/${totalQuestions} respuestas correctas (${percentage}%)</strong>`;
        
        if (isSuccess) {
            resultMessage += '<p style="margin-top: 0.5rem;">¡Excelente! Has demostrado una buena comprensión del contenido.</p>';
        } else {
            resultMessage += '<p style="margin-top: 0.5rem;">Intenta revisar el contenido nuevamente y realiza el cuestionario una vez más.</p>';
        }
        
        quizResult.innerHTML = resultMessage;
    }
    
    // Hacer scroll hasta el resultado
    quizResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ====================================
// INICIALIZACIÓN DE EVENTOS
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase active al enlace de navegación actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Inicializar tooltips si es necesario
    initializeTooltips();
    
    // Agregar animaciones de scroll
    observeElements();
});

// ====================================
// OBSERVADOR DE ELEMENTOS (SCROLL)
// ====================================
function observeElements() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observar elementos con clases específicas
        document.querySelectorAll('.content-section, .module-card, .team-member').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }
}

// ====================================
// TOOLTIPS (OPCIONAL)
// ====================================
function initializeTooltips() {
    // Aquí puedes agregar lógica para tooltips si lo deseas
    // Por ahora, esta es una función de reserva
}

// ====================================
// FUNCIONES UTILITARIAS
// ====================================

// Función para suavizar el scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para validar si un elemento está en viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ====================================
// MODO OSCURO (OPCIONAL)
// ====================================
function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Cargar preferencia de modo oscuro
function loadDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// ====================================
// IMPRESIÓN
// ====================================
function printPage() {
    window.print();
}

// ====================================
// COMPARTIR EN REDES
// ====================================
function shareOnSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        whatsapp: `https://wa.me/?text=${title}%20${url}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };
    
    if (urls[platform]) {
        window.open(urls[platform], '_blank', 'width=600,height=400');
    }
}

// ====================================
// COPIAR AL PORTAPAPELES
// ====================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('¡Copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

// ====================================
// BÚSQUEDA DENTRO DE LA PÁGINA
// ====================================
function searchContent(query) {
    const searchResults = [];
    const mainContent = document.querySelector('.main-content');
    
    if (!mainContent) return searchResults;
    
    const elements = mainContent.querySelectorAll('h1, h2, h3, p');
    
    elements.forEach(el => {
        if (el.textContent.toLowerCase().includes(query.toLowerCase())) {
            searchResults.push({
                title: el.textContent.substring(0, 50),
                element: el
            });
        }
    });
    
    return searchResults;
}

// ====================================
// GUARDAR PROGRESO
// ====================================
function saveProgress() {
    const progress = {
        modulosCompletados: [],
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('sociologyProgress', JSON.stringify(progress));
}

function loadProgress() {
    const progress = localStorage.getItem('sociologyProgress');
    return progress ? JSON.parse(progress) : null;
}

// ====================================
// CONTROL DE VERSIÓN DEL NAVEGADOR
// ====================================
function checkBrowserCompatibility() {
    const isSupported = (
        'localStorage' in window &&
        'IntersectionObserver' in window &&
        'fetch' in window
    );
    
    if (!isSupported) {
        console.warn('Este navegador no es totalmente compatible. Por favor, actualiza.');
    }
    
    return isSupported;
}

// ====================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ====================================
window.addEventListener('load', function() {
    checkBrowserCompatibility();
    loadDarkModePreference();
    saveProgress();
});

// ====================================
// CONTROL DE ERRORES
// ====================================
window.addEventListener('error', function(event) {
    console.error('Error en la página:', event.error);
});
