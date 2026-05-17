import { useState } from 'react';
import { CustomAlert } from './CustomAlert';
import { Reveal } from './Reveal';

export const RSVPSection = () => {
    const [alertConfig, setAlertConfig] = useState({ isOpen: false, headerSmile: '', message: '' });

    const handleShowDeadlineAlert = () => {
        setAlertConfig({
            isOpen: true,
            headerSmile: '📅',
            message: 'Прием заявок был закрыт 15.05.2026. Спасибо всем, кто подтвердил свое присутствие!',
        });
    };

    return (
        <section className="py-20 px-6 md:px-12 bg-beige">
            <CustomAlert
                isOpen={alertConfig.isOpen}
                headerSmile={alertConfig.headerSmile}
                message={alertConfig.message}
                onClose={() => setAlertConfig({ ...alertConfig, isOpen: false })}
            />

            <div className="max-w-2xl mx-auto text-center">
                <Reveal as="h2" className="text-5xl md:text-6xl font-serif mb-8">
                    Анкета
                </Reveal>

                <Reveal as="p" variant="blur" delayMs={80} className="text-lg md:text-xl text-gray-warm mb-12">
                    Приносим извинения, но прием заявок был закрыт{' '}
                    <span className="font-baskerville text-gray-500">15.05.2026</span>
                </Reveal>

                <Reveal delayMs={160} variant="fade-right">
                    <button
                        onClick={handleShowDeadlineAlert}
                        className="btn-outline-coffee font-medium text-lg"
                    >
                        Подробнее
                    </button>
                </Reveal>
            </div>
        </section>
    );
};
