interface RSVP {
    attendance: 'alone' | 'with_partner' | 'later' | 'cannot';
    guest_count: number;
}

export const SummaryCards = ({ data }: { data: RSVP[] }) => {
    const coming = data.filter(r =>
        r.attendance === 'alone' || r.attendance === 'with_partner'
    );

    const totalGuests = coming.reduce(
        (sum, r) => sum + r.guest_count,
        0
    );

    const later = data.filter(r => r.attendance === 'later').length;
    const cannot = data.filter(r => r.attendance === 'cannot').length;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card title="Гостей ожидается" value={totalGuests} />
            <Card title="Подтвердили" value={coming.length} />
            <Card title="Ответят позже" value={later} />
            <Card title="Не придут" value={cannot} />
        </div>
    );
};

const Card = ({ title, value }: { title: string; value: number }) => (
    <div className="bg-beige rounded-xl p-4 text-center">
        <p className="text-sm text-sage-dark/70">{title}</p>
        <p className="text-3xl font-serif text-sage-dark">{value}</p>
    </div>
);
