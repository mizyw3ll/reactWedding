interface OpeningAnimationProps {
    isExiting: boolean;
    onOpen: () => void;
}

export const OpeningAnimation = ({ isExiting, onOpen }: OpeningAnimationProps) => {
    return (
        <div
            className="fixed inset-0 z-50 overflow-hidden"
            onClick={onOpen}
        >
            <div className={`relative w-full h-full ${isExiting ? '' : 'cursor-pointer'}`}>

                {/* Левая фигура */}
                <div
                    className="absolute inset-0 bg-beige"
                    style={{
                        clipPath: 'polygon(0% 0%, 35% 0%, 50% 50%, 35% 100%, 0% 100%)',
                        transform: isExiting ? 'translateX(-100%)' : 'translateX(0)',
                        transition: 'transform 2500ms cubic-bezier(0.55, 0.055, 0.675, 0.19)',
                        willChange: 'transform',
                    }}
                />


                {/* Правая фигура — заполняет всё пространство, которое не занимает левая фигура */}
                <div
                    // className="absolute inset-0 bg-beige"
                    className="absolute inset-0 bg-beige"
                    style={{
                        clipPath: 'polygon(50% 50%, 35% 0%, 100% 0%, 100% 100%, 35% 100%)',
                        transform: isExiting ? 'translateX(100%)' : 'translateX(0)',
                        transition: 'transform 2500ms cubic-bezier(0.55, 0.055, 0.675, 0.19)',
                        willChange: 'transform',
                    }}
                />


                {/* Печать */}
                <div
                    className="absolute top-1/2 left-1/2 z-10"
                    style={{
                        transform: isExiting
                            ? 'translate(-50%, -50%) translateX(-100vw) scale(0.85)'
                            : 'translate(-50%, -50%) scale(1)',
                        transition: `
                            transform 2500ms cubic-bezier(0.55, 0.055, 0.675, 0.19)
                        `,
                        willChange: 'transform',
                        pointerEvents: 'none',
                    }}
                >
                    <div className="w-[min(260px,70vw)] h-[min(260px,70vw)] flex items-center justify-center">
                        <img
                            src="/images/wax-seal.png"
                            alt="Wax seal"
                            className="w-[70%] h-[70%] object-contain drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
