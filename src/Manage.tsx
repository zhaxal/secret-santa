import ParticipantsList from "./components/manage-page-components/ParticipantsList";

function Manage() {
  return (
    <div className="min-h-screen  p-4 sm:p-8">
      <main className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-red-500 p-8">
          <h1 className="text-4xl font-bold text-center text-white">
            🎄 Manage Dashboard 🎄
          </h1>
        </div>

        <div className="p-8 space-y-12">
          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span role="img" aria-label="users">
                👥
              </span>
              Participants
            </h2>

            <ParticipantsList />
          </section>

          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span role="img" aria-label="controls">
                🎮
              </span>
              Event Controls
            </h2>

            <div className="space-y-4">
              <button
                className="w-full bg-red-500 text-white font-bold py-4 px-6 
                rounded-lg hover:bg-red-600 active:bg-red-700 transition-all 
                duration-200 flex items-center justify-center space-x-2"
              >
                <span>🎲</span>
                <span>Generate Pairings</span>
              </button>

              <button
                className="w-full bg-emerald-500 text-white font-bold py-4 
                px-6 rounded-lg hover:bg-emerald-600 active:bg-emerald-700 
                transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>🔒</span>
                <span>Close Form</span>
              </button>

              <button
                className="w-full bg-slate-200 text-slate-700 font-bold py-4 
                px-6 rounded-lg hover:bg-red-100 hover:text-red-700 
                active:bg-red-200 transition-all duration-200 flex items-center 
                justify-center space-x-2"
              >
                <span>🔄</span>
                <span>Reset</span>
              </button>
            </div>
          </section>

          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span role="img" aria-label="gift">
                🎁
              </span>
              Pairings
            </h2>

            <ul className="space-y-4">
              <li
                className="flex items-center justify-between bg-white p-5 rounded-lg 
                shadow-sm border border-slate-200 transition-all duration-200"
              >
                <span className="font-medium text-slate-700">John Doe</span>
                <button
                  className="inline-flex items-center space-x-2 bg-emerald-500 
                  text-white font-medium py-2.5 px-4 rounded-lg hover:bg-emerald-600 
                  active:bg-emerald-700 transition-colors duration-200"
                >
                  <span>📋</span>
                  <span>Copy link</span>
                </button>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Manage;
