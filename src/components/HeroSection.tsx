import { Reveal } from "./Reveal";

export const HeroSection = () => {
    return (
        <section className="relative h-screen w-full flex flex-col overflow-hidden">
            {/* Фон замка */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/hero-3.jpg)' }}
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Контент — всё прижато к низу */}
            <div className="relative z-10 flex flex-col justify-end h-full pb-4 md:pb-12">
                {/* Ограничивающий контейнер для имён */}
                <div className="w-full max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
                    {/* Блок с именами */}
                    <div className="flex flex-col">
                        {/* Алексей — слева */}
                        <Reveal className="flex justify-start"
                        variant="fade-left" delayMs={2800}>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif tracking-widest text-white whitespace-nowrap">
                                Алексей
                            </h1>
                        </Reveal>

                        {/* Амперсанд — по центру */}
                        <Reveal className="flex justify-center md:-mt-4 lg:-mt-6"
                        variant="blur" delayMs={3000}>
                            <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display">
                                &
                            </span>
                        </Reveal>

                        {/* Валерия — справа */}
                        <Reveal className="flex justify-end md:-mt-4 lg:-mt-6" variant="fade-right" delayMs={3200}>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif tracking-widest text-white whitespace-nowrap">
                                Валерия
                            </h1>
                        </Reveal>
                    </div>
                </div>

                {/* Дата — сразу под именами */}
                <Reveal className="flex justify-center mt-6 md:mt-8 lg:mt-10" variant="fade-up" delayMs={3400}>
                    <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-baskerville tracking-wide text-white">
                        06.06.2026
                    </p>
                </Reveal>

                {/* Стрелка — под датой */}
                <div className="flex justify-center mt-8 md:mt-6 lg:mt-8 animate-bounce">
                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};