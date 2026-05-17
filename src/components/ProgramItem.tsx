interface ProgramItemProps {
    time: string;
    description: string;
}

export const ProgramItem = ({ time, description }: ProgramItemProps) => {
    return (
        <div className="relative">
            {/* Точка на линии */}
            <div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-beige -top-1.8 "
                style={{ 
                    boxShadow: '0 0 0 2px #d7c0ab80',
                    backgroundColor: '#d7c0ab'
                }}
            />

            <div className="text-center pt-6">
                <p
                    className="text-3xl md:text-4xl font-bold text-sage-dark font-baskerville"
                >
                    {time}
                </p>
                <p className="text-xl md:text-2xl mt-4 text-gray-warm">
                    {description}
                </p>
            </div>
        </div>
    );
};