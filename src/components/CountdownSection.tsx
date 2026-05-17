import { useState, useEffect } from 'react';
import { Reveal } from './Reveal';

const weddingDate = new Date('2026-06-06T17:00:00+03:00');

export const CountdownSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = weddingDate.getTime() - now.getTime();

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    const { days, hours, minutes, seconds } = timeLeft;

    const items = [
        { value: days, label: 'дни' },
        { value: hours, label: 'часы' },
        { value: minutes, label: 'мин' },
        { value: seconds, label: 'сек' },
    ];

    return (
        <section className="py-20 md:px-12 bg-beige">
            <div className="max-w-2xl mx-auto text-center">
                <Reveal as="h2" className="text-5xl md:text-6xl font-serif mb-8">
                    Ждём вас через
                </Reveal>

                <div className="flex justify-center items-center flex-wrap gap-y-4">
                    {items.map((item, index, arr) => (
                        <div key={item.label} className="flex items-center">
                            <Reveal variant="scale" delayMs={index * 110} className="flex flex-col items-center min-w-[40px]">
                                <div className="text-4xl xs:text-6xl font-bold font-baskerville text-gray-700">
                                    {item.value.toString().padStart(2, '0')}
                                </div>
                                <div className="mt-1 text-xs text-gray-500 uppercase tracking-wider">
                                    {item.label}
                                </div>
                            </Reveal>

                            {index < arr.length - 1 && (
                                <div className="h-12 w-px bg-gray-300 mx-4 xs:mx-5 sm:mx-6" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
