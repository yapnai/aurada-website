const paths = {
  phone: (
    <path d="M6.6 3.5h2.6l1.5 4-2 1.4a10.5 10.5 0 0 0 6.4 6.4l1.4-2 4 1.5v2.6a2 2 0 0 1-2.2 2A16 16 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" />
  ),
  answer: (
    <>
      <path d="M20 13.5a2.5 2.5 0 0 1-2.5 2.5H9l-4 4v-4.2A2.5 2.5 0 0 1 4 13.5v-8A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5z" />
      <path d="m8.6 9.6 2.3 2.3 4.6-4.6" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.2 1.2" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.2-1.2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </>
  ),
  handoff: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 9.5h5.5M19 7l2.5 2.5L19 12" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" />
    </>
  ),
  notes: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="3" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="3" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  text: (
    <>
      <path d="M20 13.5a2.5 2.5 0 0 1-2.5 2.5H9l-4 4v-4.2A2.5 2.5 0 0 1 4 13.5v-8A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5z" />
      <path d="M8.5 9.5h.01M12 9.5h.01M15.5 9.5h.01" />
    </>
  ),
  in: <path d="M17 7 7 17M7 9v8h8" />,
  out: <path d="M7 17 17 7M9 7h8v8" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
};

export default function Icon({ name }) {
  return (
    <svg className="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
