interface RSVP {
    id: number;
    name: string;
    attendance: string;
    comment?: string;
    guest_count: number;
}

export const RSVPTable = ({
    data,
    onGuestCountChange,
}: {
    data: RSVP[];
    onGuestCountChange: (id: number, value: number) => void;
}) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-sage-dark">
                        <th>Имя</th>
                        <th>Статус</th>
                        <th>Гостей</th>
                        <th>Комментарий</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(r => (
                        <tr key={r.id} className="border-t">
                            <td className="py-2">{r.name}</td>
                            <td>{mapAttendance(r.attendance)}</td>
                            <td>
                                <input
                                    type="number"
                                    min={0}
                                    className="w-16 border rounded px-2"
                                    value={r.guest_count}
                                    onChange={(e) =>
                                        onGuestCountChange(r.id, +e.target.value)
                                    }
                                />
                            </td>
                            <td className="max-w-xs text-sm text-sage-dark/70">
                                {r.comment || '—'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const mapAttendance = (value: string) => {
    switch (value) {
        case 'alone': return 'Один/одна';
        case 'with_partner': return 'С парой';
        case 'later': return 'Позже';
        case 'cannot': return 'Не придёт';
        default: return value;
    }
};
