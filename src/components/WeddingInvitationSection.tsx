import { Reveal } from './Reveal';

export const WeddingInvitationSection = () => {
    return (
        <section className="w-full py-20 bg-beige">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <Reveal as="h2" className="text-5xl md:text-6xl font-serif mb-12">
                    Дорогие родные и близкие!
                </Reveal>
                <Reveal as="p" variant="fade" delayMs={100} className="text-lg md:text-xl leading-relaxed text-gray-warm max-w-2xl mx-auto">
                    С огромной радостью и большой любовью приглашаем вас разделить с нами трогательный и важный момент в нашей жизни
                </Reveal>
            </div>
        </section>
    );
};