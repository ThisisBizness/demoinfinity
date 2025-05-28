let quizQuestions = [];
let currentQuestionIndex = 0;
const questionsToShow = 100;
let userAnswers = [];
let confirmedAnswers = [];
let score = 0;
let startTime = null;
let timerInterval = null;

// DOM Elements
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const confirmBtn = document.getElementById('confirm-btn');
const submitBtn = document.getElementById('submit-btn');
const questionNumberEl = document.getElementById('question-number');
const timerEl = document.getElementById('timer');
const quizAreaEl = document.getElementById('quiz-area');
const resultsAreaEl = document.getElementById('results-area');
const scoreEl = document.getElementById('score');
const answersReviewEl = document.getElementById('answers-review');
const questionPaletteContainer = document.querySelector('#question-palette');

// Utility functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        timerEl.textContent = `Time: ${formatTime(elapsed)}`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function selectQuizQuestions() {
    shuffleArray(allQuestions);
    quizQuestions = allQuestions.slice(0, Math.min(questionsToShow, allQuestions.length));
    userAnswers = new Array(quizQuestions.length).fill(null);
    confirmedAnswers = new Array(quizQuestions.length).fill(false);
}

function displayQuestion() {
    if (currentQuestionIndex < 0 || currentQuestionIndex >= quizQuestions.length) {
        return;
    }
    
    // Add fade out effect
    quizAreaEl.style.opacity = '0.7';
    
    setTimeout(() => {
        const questionData = quizQuestions[currentQuestionIndex];
        questionTextEl.textContent = `Q${currentQuestionIndex + 1}: ${questionData.question}`;
        optionsContainerEl.innerHTML = '';

        questionData.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.classList.add('option-btn');
            optionButton.textContent = option;
            optionButton.onclick = () => selectOption(index);
            optionButton.setAttribute('role', 'radio');
            optionButton.setAttribute('aria-checked', 'false');
            optionButton.setAttribute('tabindex', '0');

            // Add keyboard support
            optionButton.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectOption(index);
                }
            });

            if (userAnswers[currentQuestionIndex] === index) {
                optionButton.classList.add('selected');
                optionButton.setAttribute('aria-checked', 'true');
            }
            
            if (confirmedAnswers[currentQuestionIndex]) {
                optionButton.classList.add('disabled');
                optionButton.disabled = true;
                if (index === questionData.answer) {
                    optionButton.classList.add('confirmed', 'correct');
                } else if (userAnswers[currentQuestionIndex] === index) {
                    optionButton.classList.add('confirmed', 'incorrect');
                }
            }
            
            // Add staggered animation
            optionButton.style.animationDelay = `${index * 0.1}s`;
            optionButton.classList.add('fade-in-up');
            
            optionsContainerEl.appendChild(optionButton);
        });

        questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === quizQuestions.length - 1;
        confirmBtn.disabled = confirmedAnswers[currentQuestionIndex] || userAnswers[currentQuestionIndex] === null;
        
        updatePalette();
        
        // Fade back in
        quizAreaEl.style.opacity = '1';
        
        // Focus management for accessibility
        questionTextEl.focus();
        
    }, 150);
}

function selectOption(optionIndex) {
    if (confirmedAnswers[currentQuestionIndex]) return;

    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update all option buttons
    document.querySelectorAll('.option-btn').forEach((btn, index) => {
        btn.classList.remove('selected');
        btn.setAttribute('aria-checked', 'false');
        if (index === optionIndex) {
            btn.classList.add('selected');
            btn.setAttribute('aria-checked', 'true');
        }
    });
    
    confirmBtn.disabled = false;
    updatePalette();
    
    // Add haptic feedback for mobile
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function confirmAnswer() {
    if (userAnswers[currentQuestionIndex] === null || confirmedAnswers[currentQuestionIndex]) return;

    confirmedAnswers[currentQuestionIndex] = true;
    const questionData = quizQuestions[currentQuestionIndex];
    const selectedOptionIndex = userAnswers[currentQuestionIndex];

    Array.from(optionsContainerEl.children).forEach((btn, index) => {
        btn.classList.add('disabled');
        btn.disabled = true;
        if (index === questionData.answer) {
            btn.classList.add('confirmed', 'correct');
        } else if (index === selectedOptionIndex) {
            btn.classList.add('confirmed', 'incorrect');
        }
    });
    
    confirmBtn.disabled = true;
    updatePalette();
    
    // Add haptic feedback
    if (navigator.vibrate) {
        if (selectedOptionIndex === questionData.answer) {
            navigator.vibrate([100, 50, 100]); // Success pattern
        } else {
            navigator.vibrate([200, 100, 200]); // Error pattern
        }
    }
    
    // Auto-advance after a short delay (optional)
    setTimeout(() => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            // Uncomment the next line if you want auto-advance
            // nextQuestion();
        }
    }, 1500);
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        
        // Smooth scroll to top on mobile
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        
        // Smooth scroll to top on mobile
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

function jumpToQuestion(index) {
    if (index >= 0 && index < quizQuestions.length) {
        currentQuestionIndex = index;
        displayQuestion();
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function renderPalette() {
    const paletteButtonsContainer = document.createElement('div');
    paletteButtonsContainer.classList.add('palette-btn-container');
    questionPaletteContainer.appendChild(paletteButtonsContainer);

    quizQuestions.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.classList.add('palette-btn');
        btn.textContent = index + 1;
        btn.dataset.index = index;
        btn.onclick = () => jumpToQuestion(index);
        btn.setAttribute('aria-label', `Go to question ${index + 1}`);
        btn.setAttribute('tabindex', '0');
        
        // Add keyboard support
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                jumpToQuestion(index);
            }
        });
        
        paletteButtonsContainer.appendChild(btn);
    });
    updatePalette();
}

function updatePalette() {
    const paletteBtns = questionPaletteContainer.querySelectorAll('.palette-btn');
    paletteBtns.forEach((btn, index) => {
        btn.classList.remove('current', 'answered', 'confirmed');
        
        if (index === currentQuestionIndex) {
            btn.classList.add('current');
            btn.setAttribute('aria-current', 'true');
        } else {
            btn.removeAttribute('aria-current');
        }
        
        if (confirmedAnswers[index]) {
            btn.classList.add('confirmed');
            btn.setAttribute('aria-label', `Question ${index + 1} - Confirmed`);
        } else if (userAnswers[index] !== null) {
            btn.classList.add('answered');
            btn.setAttribute('aria-label', `Question ${index + 1} - Answered`);
        } else {
            btn.setAttribute('aria-label', `Question ${index + 1} - Not answered`);
        }
    });
}

function submitQuiz() {
    // Show confirmation dialog
    const unansweredCount = userAnswers.filter(answer => answer === null).length;
    if (unansweredCount > 0) {
        const confirmSubmit = confirm(`You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`);
        if (!confirmSubmit) return;
    }
    
    stopTimer();
    
    score = 0;
    quizQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            score++;
        }
    });

    const percentage = Math.round((score / quizQuestions.length) * 100);
    scoreEl.textContent = `Your Score: ${score} / ${quizQuestions.length} (${percentage}%)`;
    
    displayAnswersReview();
    
    // Smooth transition
    quizAreaEl.style.opacity = '0';
    questionPaletteContainer.style.opacity = '0';
    
    setTimeout(() => {
        quizAreaEl.style.display = 'none';
        questionPaletteContainer.style.display = 'none';
        resultsAreaEl.style.display = 'block';
        resultsAreaEl.style.opacity = '0';
        
        setTimeout(() => {
            resultsAreaEl.style.opacity = '1';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }, 300);
    
    // Add haptic feedback for completion
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 200]);
    }
}

function displayAnswersReview() {
    answersReviewEl.innerHTML = '';
    
    quizQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.classList.add('review-item');
        item.style.animationDelay = `${index * 0.05}s`;

        const qText = document.createElement('p');
        qText.innerHTML = `<strong>Q${index + 1}: ${q.question}</strong>`;
        item.appendChild(qText);

        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('review-options');

        q.options.forEach((opt, optIndex) => {
            const optP = document.createElement('div');
            optP.textContent = opt;

            if (optIndex === q.answer) {
                optP.classList.add('actual-correct');
                if(userAnswers[index] === optIndex) {
                    optP.classList.add('also-user-choice');
                }
            }
            if (optIndex === userAnswers[index]) {
                optP.classList.add('user-choice');
                if (userAnswers[index] === q.answer) {
                    optP.classList.add('correct');
                } else {
                    optP.classList.add('incorrect');
                }
            } else if (userAnswers[index] === null && optIndex === q.answer) {
                optP.classList.add('actual-correct');
            }
            optionsDiv.appendChild(optP);
        });
        item.appendChild(optionsDiv);

        if (userAnswers[index] === null) {
            const notAnsweredP = document.createElement('p');
            notAnsweredP.textContent = "You did not answer this question.";
            notAnsweredP.style.fontStyle = "italic";
            notAnsweredP.style.color = "#777";
            item.appendChild(notAnsweredP);
        }

        answersReviewEl.appendChild(item);
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    stopTimer();
    
    selectQuizQuestions();
    
    // Smooth transition
    resultsAreaEl.style.opacity = '0';
    
    setTimeout(() => {
        resultsAreaEl.style.display = 'none';
        quizAreaEl.style.display = 'block';
        questionPaletteContainer.style.display = 'block';
        
        // Remove old palette
        const oldPalette = questionPaletteContainer.querySelector('.palette-btn-container');
        if (oldPalette) oldPalette.remove();
        
        renderPalette();
        displayQuestion();
        startTimer();
        
        setTimeout(() => {
            quizAreaEl.style.opacity = '1';
            questionPaletteContainer.style.opacity = '1';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }, 300);
}

// Add CSS animation classes dynamically
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Touch gesture support for mobile
let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;
    
    // Only trigger if horizontal swipe is more significant than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentQuestionIndex < quizQuestions.length - 1) {
            // Swipe left - next question
            nextQuestion();
        } else if (deltaX < 0 && currentQuestionIndex > 0) {
            // Swipe right - previous question
            prevQuestion();
        }
    }
    
    touchStartX = 0;
    touchStartY = 0;
}

// Initialize Quiz
window.onload = () => {
    if (typeof allQuestions === 'undefined' || allQuestions.length === 0) {
        questionTextEl.textContent = "No questions loaded. Please check questions_data.js";
        return;
    }
    
    addAnimationStyles();
    selectQuizQuestions();
    
    if (quizQuestions.length === 0) {
        questionTextEl.textContent = "Failed to select quiz questions. Ensure allQuestions array is populated.";
        return;
    }
    
    renderPalette();
    displayQuestion();
    startTimer();
    
    // Add touch gesture support
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (resultsAreaEl.style.display !== 'none') return;
        
        switch(e.key) {
            case 'ArrowLeft':
                if (!prevBtn.disabled) prevQuestion();
                break;
            case 'ArrowRight':
                if (!nextBtn.disabled) nextQuestion();
                break;
            case 'Enter':
                if (!confirmBtn.disabled) confirmAnswer();
                break;
            case '1':
            case '2':
            case '3':
            case '4':
                const optionIndex = parseInt(e.key) - 1;
                if (optionIndex < optionsContainerEl.children.length) {
                    selectOption(optionIndex);
                }
                break;
        }
    });
}; 