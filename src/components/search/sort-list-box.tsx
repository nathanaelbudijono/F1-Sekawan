import React, { Fragment, SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { HiCheck, HiSelector } from "react-icons/hi";
import { TbSortAscendingLetters } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import Typography from "../typography";

export default function SortListBox({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="max-w-[250px] min-w-[200px] self-end">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`relative w-full cursor-default 
                border  py-2 pl-3 pr-10 text-left rounded-md shadow-sm focus:outline-none sm:text-sm`}
          >
            <span className="flex items-center">
              {selected === "Sort by rating" ? (
                <AiFillEye className="mr-2 text-xs" />
              ) : (
                <TbSortAscendingLetters className="mr-2 text-xs" />
              )}
              <Typography variant="small">{selected}</Typography>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiSelector className="h-5 w-5 text-xs" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="rounded-md whitespace-nowrap absolute mt-2 max-h-60 w-full overflow-auto py-1 text-sm sm:text-base shadow-sm
                z-[100] bg-gray-200"
            >
              {["Sort by name", "Sort by rating"].map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-300" : ""
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block  ${
                          selected ? "text-blue-800" : "text-black"
                        }`}
                      >
                        {option}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-bg">
                          <HiCheck
                            className="h-5 w-5 text-blue-800"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
