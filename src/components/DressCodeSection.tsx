import { Reveal } from './Reveal';

export const DressCodeSection = () => {
    const colorPalette = [
        '#2c1f16', '#6b5542', '#9e8a7e',
        '#9e8c78', '#7d8264', '#363b28',
    ];

    const shadowPalette = [
        '#503d2f', '#a78d76', '#d2beb5',
        '#d2c1af', '#b5ba9c', '#5a5f47',
    ];

    return (
        <section className="py-20 px-6 bg-beige">
            <div className="max-w-4xl mx-auto text-center">
                <Reveal as="h2" className="text-5xl md:text-6xl font-serif mb-10">
                    Дресс-код
                </Reveal>

                <Reveal as="p" variant="fade" delayMs={90} className="text-lg md:text-xl text-gray-warm mb-8 max-w-2xl mx-auto">
                    Будем благодарны, если вы поддержите цветовую гамму и стилистику торжества в своих образах
                </Reveal>

                <Reveal
                    delayMs={140}
                    variant="scale"
                    className="flex justify-center items-center gap-5 md:gap-8 mb-7 flex-wrap"
                >
                    {colorPalette.map((color, index) => (
                        <div
                            key={color}
                            className="relative group"
                        >
                            <div
                                className="absolute inset-0 rounded-full blur-[2px] transition-all duration-300 group-hover:blur-[4px]"
                                style={{ backgroundColor: shadowPalette[index] }}
                            />

                            <div
                                className="w-11 h-11 md:w-16 md:h-16 rounded-full"
                                style={{ backgroundColor: shadowPalette[index] }}
                            />
                        </div>
                    ))}
                </Reveal>

                <Reveal as="p" variant="fade-left" delayMs={200} className="text-lg text-gray-warm mb-4">
                    Для мужчин уместным будет классический костюм со светлой рубашкой
                </Reveal>
                <Reveal as="p" variant="fade-right" delayMs={280} className="text-lg text-gray-warm mb-10">
                    Девушек просим выбрать вечерние наряды предложенных оттенков и избегать белого цвета
                </Reveal>
            </div>
        </section>
    );
};
