// Carrega os ícones
        lucide.createIcons();

        // Funcionalidade do FAQ (Acordeão)
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = question.querySelector('i');

            question.addEventListener('click', () => {
                const isHidden = answer.classList.contains('hidden');
                
                if (isHidden) {
                    answer.classList.remove('hidden');
                    icon.setAttribute('data-lucide', 'minus-circle');
                    question.querySelector('svg').style.transform = 'rotate(180deg)';
                } else {
                    answer.classList.add('hidden');
                    icon.setAttribute('data-lucide', 'plus-circle');
                    question.querySelector('svg').style.transform = 'rotate(0deg)';
                }
                lucide.createIcons();
            });
        });

        