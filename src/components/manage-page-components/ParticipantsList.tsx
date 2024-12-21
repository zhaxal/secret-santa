import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";

function ParticipantsList() {
  const [participants, setParticipants] = useState<DocumentData[]>([]);

  const fetchParticipants = async () => {
    const docsRef = await getDocs(collection(firestore, "participants"));

    const participants = docsRef.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setParticipants(participants);
  };

  const approveParticipant = async (id: string) => {
    try {
      await updateDoc(doc(firestore, "participants", id), {
        approved: true,
      });

      fetchParticipants();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const deleteParticipant = async (id: string) => {
    try {
      await deleteDoc(doc(firestore, "participants", id));

      fetchParticipants();
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  return (
    <ul className="space-y-4">
      {participants.length === 0 && (
        <li className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 transition-all duration-200">
          No participants found
        </li>
      )}

      {participants.length > 0 &&
        participants.map((participant, i) => (
          <li
            key={`participant-${i}`}
            className="flex items-center justify-between bg-white p-5 rounded-lg shadow-sm border border-slate-200 transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              {!participant.approved ? (
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              ) : (
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              )}
              <span className="font-medium text-slate-700">
                {participant.name}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {!participant.approved && (
                <button
                  onClick={() => approveParticipant(participant.id)}
                  className="inline-flex items-center bg-emerald-500 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-emerald-600active:bg-emerald-700 transition-colors duration-200"
                >
                  Approve
                </button>
              )}
              <button
                onClick={() => deleteParticipant(participant.id)}
                className="inline-flex items-center bg-red-500 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-red-600 active:bg-red-700 transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ParticipantsList;
