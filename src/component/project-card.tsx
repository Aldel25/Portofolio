import React from "react";

interface Props {
  name: string;
  year: string;
  description?: string;
  bgColor?: string;
}
const ProjectCard = (props: Props) => {
  const { name, year, description, bgColor } = props;

  return (
    <div className={`flex flex-col gap-2 ${bgColor} p-5 rounded-sm`}>
      <div className="flex flex-row justify-between">
        <label>{name}</label>
        <label>{year}</label>
      </div>
      <p className="text-justify">{description}</p>
    </div>
  );
};

// return (
//     <div className='flex flex-col gap-2'>
//         <div className='flex flex-row justify-between'>
//             <label>Project A</label>
//             <label>2019-2020</label>
//         </div>
//         <p className='text-justify'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//         dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//         officia deserunt mollit anim id est laborum.
//         </p>
//     </div>
//   )

export default ProjectCard;
