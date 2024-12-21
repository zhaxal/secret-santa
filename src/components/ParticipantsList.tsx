interface ParticipantsListProps {
  participants: string[];
}

function ParticipantsList({ participants }: ParticipantsListProps) {
  return (
    <ul className="mt-4 space-y-3">
      {participants.length === 0 && (
        <li
          className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 
        hover:shadow-md transition-shadow duration-200"
        >
          No participants found
        </li>
      )}

      {participants.length > 0 &&
        participants.map((participant, i) => (
          <li
            key={i}
            className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 
        hover:shadow-md transition-shadow duration-200"
          >
            {participant}
          </li>
        ))}
    </ul>
  );
}

export default ParticipantsList;
