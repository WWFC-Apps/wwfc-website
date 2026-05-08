import { useState } from "react";

const constitutionSections = [
  {
    title: "Name",
    text: "The Charitable Incorporated Organisation is Wroughton & Wichelstowe Football Club.",
  },
  {
    title: "Charitable Objects",
    text: "To promote community participation in healthy recreation through football and associated physical activities; advance amateur sport; support physical and mental wellbeing; and help those with economic difficulties access sport.",
  },
  {
    title: "Powers",
    text: "The CIO may do anything calculated to further its charitable objects, including acquiring property, employing staff, investing funds and managing assets in line with charity law.",
  },
  {
    title: "Trustees",
    text: "The charity trustees manage the affairs of the CIO and must act in good faith to further the charity’s purposes.",
  },
  {
    title: "Membership",
    text: "Membership is open to those interested in furthering the purposes of the CIO, subject to the procedures set out in the constitution.",
  },
  {
    title: "Meetings & Governance",
    text: "The constitution sets out rules for AGMs, general meetings, voting, proxy voting, minutes and trustee decision-making.",
  },
  {
    title: "Records & Reporting",
    text: "The trustees must keep proper accounting records, prepare annual reports and returns, and submit required information to the Charity Commission.",
  },
  {
    title: "Amendment & Dissolution",
    text: "The constitution can only be amended in accordance with charity law. On dissolution, remaining assets must be applied for similar charitable purposes.",
  },
];

export default function ConstitutionModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full rounded-3xl border border-white/10 bg-white/5 p-8 text-left transition hover:border-blue-400/40 hover:bg-white/10"
      >
        <h2 className="text-2xl font-semibold text-white">
          Club Constitution Document
        </h2>

        <p className="mt-4 leading-relaxed text-slate-300">
          View a summary of the WWFC CIO constitution, including charitable objects,
          trusteeship, membership, governance and dissolution rules.
        </p>

        <div className="mt-8 text-sm font-semibold text-blue-300">
          View constitution summary →
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#04163a] p-8 text-white shadow-2xl">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                  CIO Constitution
                </p>

                <h2 className="mt-4 text-4xl font-light tracking-tight">
                  Wroughton & Wichelstowe FC Constitution
                </h2>

                <p className="mt-4 text-sm text-slate-400">
                  Version 1.0 — March 2026
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {constitutionSections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {section.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-300">
                    {section.text}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6">
              <p className="text-sm leading-relaxed text-slate-300">
                This is a website summary of the club constitution and should not
                replace the formally approved constitution document.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}