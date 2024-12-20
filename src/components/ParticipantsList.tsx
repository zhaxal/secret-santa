import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase";

function ParticipantsList() {
  const [participants, setParticipants] = useState<string[]>([]);

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    const docs = await getDocs(collection(firestore, "participants"));

    const participants = docs.docs.map((doc) => doc.data().name);

    setParticipants(participants);
  };

  return (
    <ul className="mt-4 space-y-3">
      {participants.map((participant, i) => (
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
