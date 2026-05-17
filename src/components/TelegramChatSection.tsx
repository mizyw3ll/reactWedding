import { Reveal } from './Reveal';


export const TelegramChatSection = () => {
    return (
        <section className="py-24 px-6 bg-beige">
            <div className="max-w-4xl mx-auto text-center">
                <Reveal as="h2" className="text-5xl md:text-6xl font-serif mb-10">
                    Телеграмм чат
                </Reveal>

                <Reveal as="p" variant="fade" delayMs={100} className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 px-4 text-gray-warm">
                    Мы создали телеграм-чат нашего праздника,<br />
                    где можно будет узнать дополнительную информацию,<br className="hidden md:block" />
                    поделиться фотографиями и видео в день свадьбы
                </Reveal>

                <Reveal delayMs={200} className="inline-flex justify-center">
                    <a
                        href="https://t.me/+1sLVxm0-5TMzMTg6"
                        rel="noopener noreferrer"
                        className="btn-outline-coffee inline-flex items-center gap-4 text-lg font-medium hover:scale-105 transition-transform duration-300"
                    >
                        Вступить в чат
                    </a>
                </Reveal>
            </div>
        </section>
    );
};
