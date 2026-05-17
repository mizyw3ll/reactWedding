import { Reveal } from './Reveal';

export const PlaceSection = () => {
    const handleMapClick = () => {
        window.open(
            'https://yandex.ru/maps/org/afiny/80978350694/?ll=39.922128%2C59.204804&z=16.23'
        );
    };

    return (
        <section className="py-20 bg-beige">
            <div className="max-w-4xl mx-auto text-center px-6">
                <Reveal as="h2" className="text-5xl font-serif mb-12">
                    Место торжества
                </Reveal>
                <Reveal as="p" variant="fade-left" delayMs={90} className="text-xl md:text-2xl text-gray-warm">
                    Будем рады видеть вас на нашей<br />
                    свадьбе в ресторане «Афины»<br />
                    по адресу: г. Вологда, Советский пр-кт, д. 134
                </Reveal>

                <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
                    <Reveal delayMs={180} className="inline-flex justify-center">
                        <button
                            onClick={handleMapClick}
                            className="btn-outline-coffee font-medium text-lg"
                        >
                            Карта проезда
                        </button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
