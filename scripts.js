// Funzioni di utilità
document.addEventListener('DOMContentLoaded', function() {
    // Inizializzazione degli elementi interattivi
    initAccordion();
    initTabs();
    initCharts();
    initAnimations();
    
    // Smooth scroll per i link di navigazione
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});

// Gestione accordion
function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Chiudi tutti gli accordion
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            // Apri l'accordion corrente se non era già aperto
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Apri il primo accordion di default
    if (accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
    }
}

// Gestione tabs
function initTabs() {
    const tabHeaders = document.querySelectorAll('.tab-header');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const tabId = header.getAttribute('data-tab');
            
            // Rimuovi la classe active da tutti i tab header e content
            document.querySelectorAll('.tab-header').forEach(h => h.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Aggiungi la classe active al tab header e content corrente
            header.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Inizializzazione dei grafici
function initCharts() {
    // Grafico adozione AI
    const adozioneAICtx = document.getElementById('adozioneAIChart').getContext('2d');
    new Chart(adozioneAICtx, {
        type: 'line',
        data: {
            labels: ['2023', '2024', '2025', '2026', '2027', '2028'],
            datasets: [{
                label: 'Tasso di adozione AI nel settore termoidraulico (%)',
                data: [15, 25, 38, 52, 68, 80],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Previsione di adozione dell\'AI nel settore termoidraulico'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentuale di adozione'
                    }
                }
            }
        }
    });
    
    // Grafico settore
    const settoreCtx = document.getElementById('settoreChart').getContext('2d');
    new Chart(settoreCtx, {
        type: 'radar',
        data: {
            labels: [
                'Efficienza energetica',
                'Digitalizzazione',
                'Sostenibilità',
                'Innovazione prodotto',
                'Servitizzazione',
                'Integrazione IoT'
            ],
            datasets: [{
                label: 'Stato attuale',
                data: [65, 45, 70, 55, 30, 40],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: '#3498db',
                pointBackgroundColor: '#3498db'
            }, {
                label: 'Potenziale con AI',
                data: [90, 85, 95, 80, 75, 90],
                backgroundColor: 'rgba(231, 76, 60, 0.2)',
                borderColor: '#e74c3c',
                pointBackgroundColor: '#e74c3c'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Impatto potenziale dell\'AI sul settore termoidraulico'
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
    
    // Grafico applicazioni
    const applicazioniCtx = document.getElementById('applicazioniChart').getContext('2d');
    new Chart(applicazioniCtx, {
        type: 'bar',
        data: {
            labels: [
                'Assistenza tecnica',
                'Manutenzione predittiva',
                'Efficienza energetica',
                'Supply chain',
                'Progettazione'
            ],
            datasets: [{
                label: 'ROI stimato (%)',
                data: [120, 180, 150, 90, 110],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(241, 196, 15, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'ROI stimato per diverse applicazioni AI'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'ROI stimato (%)'
                    }
                }
            }
        }
    });
    
    // Grafico progetti
    const progettiCtx = document.getElementById('progettiChart').getContext('2d');
    new Chart(progettiCtx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Progetti a breve termine',
                data: [
                    { x: 100000, y: 30, r: 15 },
                    { x: 125000, y: 25, r: 18 }
                ],
                backgroundColor: 'rgba(52, 152, 219, 0.7)'
            }, {
                label: 'Progetti a medio termine',
                data: [
                    { x: 300000, y: 60, r: 20 },
                    { x: 350000, y: 40, r: 22 }
                ],
                backgroundColor: 'rgba(231, 76, 60, 0.7)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Progetti demo: investimento vs benefici'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return [
                                'Budget: €' + context.raw.x.toLocaleString(),
                                'Beneficio: ' + context.raw.y + '%',
                                'Complessità: ' + (context.raw.r / 5).toFixed(1) + '/5'
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Budget stimato (€)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '€' + (value / 1000) + 'k';
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Beneficio atteso (%)'
                    }
                }
            }
        }
    });
    
    // Grafico competenze
    const competenzeCtx = document.getElementById('competenzeChart').getContext('2d');
    new Chart(competenzeCtx, {
        type: 'doughnut',
        data: {
            labels: [
                'Competenze tecniche tradizionali',
                'Competenze digitali e AI',
                'Competenze trasversali',
                'Nuove competenze specialistiche'
            ],
            datasets: [{
                data: [30, 25, 30, 15],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(155, 89, 182, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribuzione delle competenze richieste nel 2030'
                }
            }
        }
    });
    
    // Grafico impatto costi
    const impattoCostiCtx = document.getElementById('impattoCostiChart').getContext('2d');
    new Chart(impattoCostiCtx, {
        type: 'bar',
        data: {
            labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
            datasets: [{
                label: 'Costi operativi',
                data: [100, 105, 95, 85, 75, 65],
                backgroundColor: 'rgba(231, 76, 60, 0.7)',
                yAxisID: 'y'
            }, {
                label: 'Produttività',
                data: [100, 110, 125, 140, 160, 180],
                backgroundColor: 'rgba(46, 204, 113, 0.7)',
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Impatto dell\'AI su costi e produttività (indice 2025=100)'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Costi operativi (indice)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Produttività (indice)'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
    
    // Grafico problematiche
    const problematicheCtx = document.getElementById('problematicheChart').getContext('2d');
    new Chart(problematicheCtx, {
        type: 'polarArea',
        data: {
            labels: [
                'Qualità dei dati',
                'Integrazione sistemi',
                'Privacy e sicurezza',
                'Competenze',
                'Costi implementazione',
                'Resistenza al cambiamento'
            ],
            datasets: [{
                data: [4, 3.5, 4.5, 4, 3, 3.5],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(149, 165, 166, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Criticità nell\'implementazione dell\'AI (1-5)'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.raw + '/5';
                        }
                    }
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Animazioni
function initAnimations() {
    // Animazione icone nella sezione introduzione
    anime({
        targets: '.ai-icon',
        translateX: [
            { value: -50, duration: 500, delay: 1000 },
            { value: 0, duration: 500, delay: 500 }
        ],
        translateY: [
            { value: -30, duration: 500, delay: 1000 },
            { value: 0, duration: 500, delay: 500 }
        ],
        scale: [
            { value: 1.2, duration: 500, delay: 1000 },
            { value: 1, duration: 500, delay: 500 }
        ],
        loop: true
    });
    
    anime({
        targets: '.plumbing-icon',
        translateX: [
            { value: 50, duration: 500, delay: 1000 },
            { value: 0, duration: 500, delay: 500 }
        ],
        translateY: [
            { value: 30, duration: 500, delay: 1000 },
            { value: 0, duration: 500, delay: 500 }
        ],
        scale: [
            { value: 1.2, duration: 500, delay: 1000 },
            { value: 1, duration: 500, delay: 500 }
        ],
        loop: true
    });
    
    // Animazione al caricamento della pagina
    anime({
        targets: '.section',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(200, {start: 300}),
        easing: 'easeOutQuad',
        duration: 800
    });
}
