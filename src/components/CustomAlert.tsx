import { Reveal } from './Reveal';

interface CustomAlertProps {
    isOpen: boolean;
    headerSmile: string;
    message: string;
    onClose: () => void;
}

export const CustomAlert = ({ isOpen, headerSmile, message, onClose }: CustomAlertProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-beige w-full max-w-sm rounded-2xl p-8 text-center shadow-2xl border border-[#E5E1DA] animate-in zoom-in-95 duration-300">
                <Reveal className="text-4xl mb-4">
                    {headerSmile}
                </Reveal>
                <Reveal
                    as={'h3'}
                    className="text-xl font-sans mb-5 leading-relaxed"
                    delayMs={400}
                >
                    {message}
                </Reveal>
                <Reveal
                    className="inline-flex justify-center"
                    delayMs={600}>
                    <button
                        onClick={onClose}
                        className="btn-outline-coffee font-medium text-lg"
                    >
                        Хорошо
                    </button>
                </Reveal>
            </div>
        </div>
    );
};