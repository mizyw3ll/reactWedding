import {
    useRef,
    useState,
    useEffect,
    type ReactNode,
    type HTMLAttributes,
    type ElementType,
    type CSSProperties,
} from 'react';

export type RevealVariant = 'fade-up' | 'fade' | 'fade-left' | 'fade-right' | 'scale' | 'blur';

const hiddenByVariant: Record<RevealVariant, string> = {
    'fade-up': 'opacity-0 translate-y-8',
    fade: 'opacity-0',
    'fade-left': 'opacity-0 -translate-x-6',
    'fade-right': 'opacity-0 translate-x-6',
    scale: 'opacity-0 scale-[0.96]',
    blur: 'opacity-0 blur-[6px]',
};

const visibleByVariant: Record<RevealVariant, string> = {
    'fade-up': 'opacity-100 translate-y-0',
    fade: 'opacity-100',
    'fade-left': 'opacity-100 translate-x-0',
    'fade-right': 'opacity-100 translate-x-0',
    scale: 'opacity-100 scale-100',
    blur: 'opacity-100 blur-none',
};

export interface RevealProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    children: ReactNode;
    variant?: RevealVariant;
    /** Задержка перед анимацией (мс), удобно для каскада */
    delayMs?: number;
    /** Срабатывать один раз (по умолчанию да) */
    once?: boolean;
    rootMargin?: string;
    threshold?: number;
    /** Учитывать системную настройку уменьшения анимации */
    respectReducedMotion?: boolean;
}

export const Reveal = ({
    as: Component = 'div',
    children,
    variant = 'fade-up',
    delayMs = 300,
    once = true,
    rootMargin = '0px 0px -8% 0px',
    threshold = 0.08,
    respectReducedMotion = false,
    className = '',
    style,
    ...rest
}: RevealProps) => {
    const ref = useRef<HTMLElement | null>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (respectReducedMotion && reduceMotion.matches) {
            setActive(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry) return;
                if (entry.isIntersecting) {
                    setActive(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setActive(false);
                }
            },
            { root: null, rootMargin, threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [once, rootMargin, threshold, respectReducedMotion]);

    const transition =
        'transition-all duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform';

    const combinedClassName = [
        transition,
        active ? visibleByVariant[variant] : hiddenByVariant[variant],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const combinedStyle: CSSProperties = {
        ...style,
        transitionDelay: active ? `${delayMs}ms` : '0ms',
    };

    return (
        <Component
            ref={ref as never}
            className={combinedClassName}
            style={combinedStyle}
            {...rest}
        >
            {children}
        </Component>
    );
};


// import {
//     useRef,
//     useState,
//     useEffect,
//     type ReactNode,
//     type HTMLAttributes,
//     type ElementType,
//     type CSSProperties,
// } from 'react';

// export type RevealVariant = 'fade-up' | 'fade' | 'fade-left' | 'fade-right' | 'scale' | 'blur';

// const hiddenByVariant: Record<RevealVariant, string> = {
//     'fade-up': 'opacity-0 translate-y-8',
//     fade: 'opacity-0',
//     'fade-left': 'opacity-0 -translate-x-6',
//     'fade-right': 'opacity-0 translate-x-6',
//     scale: 'opacity-0 scale-[0.96]',
//     blur: 'opacity-0 blur-[6px]',
// };

// const visibleByVariant: Record<RevealVariant, string> = {
//     'fade-up': 'opacity-100 translate-y-0',
//     fade: 'opacity-100',
//     'fade-left': 'opacity-100 translate-x-0',
//     'fade-right': 'opacity-100 translate-x-0',
//     scale: 'opacity-100 scale-100',
//     blur: 'opacity-100 blur-none',
// };

// export interface RevealProps extends HTMLAttributes<HTMLElement> {
//     as?: ElementType;
//     children: ReactNode;
//     variant?: RevealVariant;
//     /** Задержка перед анимацией (мс), удобно для каскада */
//     delayMs?: number;
//     /** Срабатывать один раз (по умолчанию false - анимация при каждом появлении) */
//     once?: boolean;
//     rootMargin?: string;
//     threshold?: number;
//     /** Учитывать системную настройку уменьшения анимации */
//     respectReducedMotion?: boolean;
// }

// export const Reveal = ({
//     as: Component = 'div',
//     children,
//     variant = 'fade-up',
//     delayMs = 300,
//     once = false, // Изменено на false по умолчанию
//     rootMargin = '0px 0px -8% 0px',
//     threshold = 0.08,
//     respectReducedMotion = false,
//     className = '',
//     style,
//     ...rest
// }: RevealProps) => {
//     const ref = useRef<HTMLElement | null>(null);
//     const [active, setActive] = useState(false);

//     useEffect(() => {
//         const el = ref.current;
//         if (!el) return;

//         const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
//         if (respectReducedMotion && reduceMotion.matches) {
//             setActive(true);
//             return;
//         }

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 const entry = entries[0];
//                 if (!entry) return;
                
//                 // Всегда обновляем состояние в зависимости от видимости
//                 setActive(entry.isIntersecting);
                
//                 // Отключаем observer только если once === true и элемент уже был виден
//                 if (once && entry.isIntersecting) {
//                     observer.disconnect();
//                 }
//             },
//             { root: null, rootMargin, threshold }
//         );

//         observer.observe(el);
//         return () => observer.disconnect();
//     }, [once, rootMargin, threshold, respectReducedMotion]);

//     const transition =
//         'transition-all duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform';

//     const combinedClassName = [
//         transition,
//         active ? visibleByVariant[variant] : hiddenByVariant[variant],
//         className,
//     ]
//         .filter(Boolean)
//         .join(' ');

//     const combinedStyle: CSSProperties = {
//         ...style,
//         transitionDelay: active ? `${delayMs}ms` : '0ms',
//     };

//     return (
//         <Component
//             ref={ref as never}
//             className={combinedClassName}
//             style={combinedStyle}
//             {...rest}
//         >
//             {children}
//         </Component>
//     );
// };