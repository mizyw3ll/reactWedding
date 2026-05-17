import { ProgramItem } from './ProgramItem';
import { Reveal } from './Reveal';

const programItems = [
    { time: '16:30', description: 'сбор гостей' },
    { time: '17:00', description: 'свадебный банкет' },
    { time: '23:00', description: 'завершение вечера' },
];

export const ProgramSection = () => {
    return (
        <section className="py-24 px-6 bg-beige">
            <div className="max-w-4xl mx-auto">
                <Reveal as="h2" className="text-5xl md:text-6xl font-serif text-center mb-16">
                    Тайминг свадебного дня
                </Reveal>

                <div className="relative">
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full top-0"
                        style={{ backgroundColor: '#d7c0ab80' }}
                    />

                    <div className="space-y-8 md:space-y-12">
                        {programItems.map((item, index) => (
                            <Reveal key={index} delayMs={index * 130} variant="fade-up">
                                <ProgramItem
                                    time={item.time}
                                    description={item.description}
                                />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
