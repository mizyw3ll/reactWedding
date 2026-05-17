// components/FireworksCelebration.tsx

import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface FireworksCelebrationProps {
    duration?: number;
    delay?: number; // ← новая пропса — задержка в мс
}

export const FireworksCelebration = ({
    duration = 8000,
    delay = 2000, // по умолчанию 2 секунды
}: FireworksCelebrationProps) => {
    useEffect(() => {
        let interval: number | null = null;

        const startFireworks = () => {
            const animationEnd = Date.now() + duration;

            const randomInRange = (min: number, max: number) =>
                Math.random() * (max - min) + min;

            interval = setInterval(() => {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    clearInterval(interval!);
                    return;
                }

                const particleCount = 50 * (timeLeft / duration);

                confetti({
                    particleCount,
                    angle: 60,
                    spread: 70,
                    origin: { x: 0, y: randomInRange(0.2, 0.5) },
                    colors: ['#ffffff', '#ffe4e1', '#fffacd', '#e0ffff', '#f0e68c'],
                    ticks: 200,
                    gravity: 0.7,
                    scalar: 0.9,
                });

                confetti({
                    particleCount,
                    angle: 120,
                    spread: 70,
                    origin: { x: 1, y: randomInRange(0.2, 0.5) },
                    colors: ['#ffffff', '#ffe4e1', '#fffacd', '#e0ffff', '#f0e68c'],
                    ticks: 200,
                    gravity: 0.7,
                    scalar: 0.9,
                });
            }, 500);
        };

        // Запускаем с задержкой
        const timeout = setTimeout(startFireworks, delay);

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [duration, delay]);

    return null;
};