import { Reveal } from './Reveal';

interface SectionDividerProps {
    variant?: 1 | 2 | 3;
}

export const SectionDivider = ({ variant = 1 }: SectionDividerProps) => {
    const srcMap: Record<1 | 2 | 3, string> = {
        1: '/images/divider-coffee-1.svg',
        2: '/images/divider-coffee-2.svg',
        3: '/images/divider-coffee-3.svg',
    };
    const src = srcMap[variant];

    return (
        <Reveal
            variant="fade"
            rootMargin="0px 0px -4% 0px"
            className="relative z-20 -mt-8 md:-mt-10 -mb-8 md:-mb-10 pointer-events-none select-none"
        >
            <div className="mx-auto max-w-4xl flex justify-center">
                <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="w-[85%] md:w-[70%] h-auto opacity-85"
                    loading="lazy"
                />
            </div>
        </Reveal>
    );
};
