import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../firebase";

interface ParticipantsFormProps {
  isClosed: boolean;
}

function ParticipantsForm(props: ParticipantsFormProps) {
  const [field, setField] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!field) return;

    try {
      const docRef = await addDoc(collection(firestore, "participants"), {
        name: field,
        approved: false,
      });

      setField("");

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <label className="block">
        <span className="text-slate-700 font-medium block mb-1">Name</span>
        <input
          disabled={props.isClosed}
          value={field}
          onChange={(e) => setField(e.target.value)}
          type="text"
          className="w-full p-3 rounded-lg border border-slate-200 
                focus:ring-2 focus:ring-red-500 focus:border-red-500 
                transition-shadow duration-200
                disabled:bg-slate-100 disabled:text-slate-500 
                disabled:border-slate-200 disabled:cursor-not-allowed"
        />
      </label>
      <button
        disabled={props.isClosed}
        type="submit"
        className="w-full bg-red-500 text-white font-bold py-3 px-6 rounded-lg
              hover:bg-red-600 active:bg-red-700 transition-colors duration-200
              disabled:bg-slate-300 disabled:cursor-not-allowed 
              disabled:hover:bg-slate-300"
      >
        Enter
      </button>
    </form>
  );
}

export default ParticipantsForm;
