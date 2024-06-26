const SearchBar = () => {
  return (
    <label className="flex items-center gap-4 bg-white px-4 rounded-lg w-screen max-w-2xl h-12">
      <SearchIcon />
      <input
        className="bg-transparent w-full h-full text-sm text-text"
        placeholder="Write a question or issue..."
      />
    </label>
  );
};

export default SearchBar;

const SearchIcon = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_10187_5138)">
      <path
        d="M8.87012 15.8611C12.4945 15.8611 15.4326 12.923 15.4326 9.29858C15.4326 5.67422 12.4945 2.73608 8.87012 2.73608C5.24575 2.73608 2.30762 5.67422 2.30762 9.29858C2.30762 12.923 5.24575 15.8611 8.87012 15.8611Z"
        stroke="#120207"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5107 13.9392L17.3077 17.7361"
        stroke="#120207"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_10187_5138">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0 0.428467)"
        />
      </clipPath>
    </defs>
  </svg>
);
