import { type ImageProps } from "next/image";

export type RoleType = {
  company: string;
  title: string;
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
};

export let resume: Array<RoleType> = [
  {
    company: "Septa Softwares",
    title: "Software Engineer(Full Stack)",
    start: "11-03-2023",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: "Oneflare Tech Solutions",
    title: "Frontend Engineer",
    start: "05-03-2024",
    end: "32-08-2024",
  },
  {
    company: "Eisoft limited",
    title: "Frontend Engineer",
    start: "06-01-2022",
    end: "27-02-2023",
  },
  
];

