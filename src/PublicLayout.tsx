import { useState, useEffect, useCallback } from 'react';
import { OpeningAnimation } from './components/OpeningAnimation';
import { HeroSection } from './components/HeroSection';
import { WeddingInvitationSection } from './components/WeddingInvitationSection';
import { PlaceSection } from './components/PlaceSection';
import { ProgramSection } from './components/ProgramSection';
import { RSVPSection } from './components/RSVPSection';
import { DressCodeSection } from './components/DressCodeSection';
import { TelegramChatSection } from './components/TelegramChatSection';
import { CountdownSection } from './components/CountdownSection';
import { SectionDivider } from './components/SectionDivider';

export const PublicLayout = () => {
    const [isExiting, setIsExiting] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [showOpening, setShowOpening] = useState(true);

    const startExitAnimation = useCallback(() => {
        if (isExiting) return;

        setIsExiting(true);

        setTimeout(() => {
            setShowContent(true);
        }, 100);

        setTimeout(() => {
            setShowOpening(false);
        }, 3200);
    }, [isExiting]);

    useEffect(() => {
        const timer = setTimeout(startExitAnimation, 1000);
        return () => clearTimeout(timer);
    }, [startExitAnimation]);

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div
                className={`transition-opacity duration-[1200ms] ease-out ${showContent ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <HeroSection />
                <WeddingInvitationSection />
                <SectionDivider variant={1} />
                <PlaceSection />
                <SectionDivider variant={3} />
                <ProgramSection />
                <SectionDivider variant={1} />
                <RSVPSection />
                <SectionDivider variant={3} />
                <DressCodeSection />
                <SectionDivider variant={1} />
                <TelegramChatSection />
                <SectionDivider variant={1} />
                <CountdownSection />
            </div>

            {showOpening && (
                <OpeningAnimation
                    isExiting={isExiting}
                    onOpen={startExitAnimation}
                />
            )}
        </div>
    );
};
