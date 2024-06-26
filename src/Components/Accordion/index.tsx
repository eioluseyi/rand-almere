import { ReactNode } from "react";

export type AccordionItem = {
  id?: string | number;
  label: ReactNode;
  content: ReactNode;
  isSelected?: boolean;
};
type Props = { list: AccordionItem[]; allowMultiple?: boolean };

const AccordionItem = ({
  id,
  label,
  content,
  isSelected,
  allowMultiple,
}: AccordionItem & { allowMultiple?: boolean }) => {
  return (
    <div className="border-mainGreen grid grid-rows-[auto_0fr] has-[input:checked]:grid-rows-[auto_1fr] border rounded-default transition-[grid-template-rows] duration-300 overflow-hidden ease-out shade-xl-mainGreen">
      <label className="flex justify-between items-center px-8 py-6 font-medium text-base cursor-pointer group self-start">
        <div>{label}</div>
        <span>
          <CircleChevronIcon className="has-[~_input:checked]:-rotate-90 group-hover:[&:not(&:has(~_input:checked))]:scale-125_ has-[~_input:checked]:opacity-30 transition-all duration-300 ease-out" />
          <input
            hidden
            type={allowMultiple ? "checkbox" : "radio"}
            name="accordion"
            defaultChecked={isSelected}
            value={id}
          />
        </span>
      </label>
      <div className="px-8 pb-0 [&:is(:has(input:checked)_+_*)]:pb-6 transition-[padding] duration-300 overflow-hidden ease-out">
        <hr className="pb-4" />
        <div>{content}</div>
      </div>
    </div>
  );
};

const Accordion = ({ list, allowMultiple }: Props) => {
  const uuid = new Date().getTime();

  return (
    <form className="gap-9 grid pr-3 pb-3">
      {list?.map((itm, idx) => (
        <AccordionItem
          key={idx}
          id={`${uuid}-${idx}`}
          {...itm}
          allowMultiple={allowMultiple}
        />
      ))}
    </form>
  );
};

export default Accordion;

const CircleChevronIcon = ({ className = "" }) => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 16.2147C12.831 16.2147 15.9375 13.1089 15.9375 9.27719C15.9375 5.44619 12.831 2.33969 9 2.33969C5.169 2.33969 2.0625 5.44619 2.0625 9.27719C2.0625 13.1089 5.169 16.2147 9 16.2147Z"
      stroke="#120207"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.91821 11.8806L10.5327 9.27733L7.91821 6.67409"
      stroke="#120207"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
