import React, { useState } from "react";

import Avatar from "../../assets/avatar.png";
import ProjectCard from "../../component/project-card";

interface Project {
  name: string;
  year: string;
  description: string;
}

interface Education {
  name: string;
  year: string;
  jurusan: string;
}
const LandingPage = () => {
  const projects: Project[] = [
    {
      name: "Project ETL",
      year: "2019-2020",
      description:
        "Mengolah data dengan bahasa pemograman antasena dengan database SqlServer pada bank OkBank dan SBI.",
    },
  ];

  const education: Education[] = [
    {
      name: "SMKS WIKRAMA BOGOR",
      year: "2017 - 2020",
      jurusan: "Rekayasa Perangkat Lunak, 85/100",
    },
    {
      name: "INSTITUT BISNIS DAN INFORMATIKA KESATUAN BOGOR",
      year: "2020 - 2023",
      jurusan: "D3 Manajemen Pemasaran, 3.81/4.00",
    },
  ];
  return (
    <div className="flex flex-col">
      <section className="flex flex-row justify-evenly items-center m-5">
        <div className="flex flex-col">
          <h2>HAI!</h2>
          <p>Aku, Ade Liana Ankuspa Putri</p>
        </div>
        <img src={Avatar} className="w-60 rounded-sm" />
      </section>

      <section className="flex flex-col px-10 py-10 bg-blue-100 gap-5">
        <label className="font-semibold text-lg">Introduction</label>
        <p className="text-base text-justify">
          Haii... Panggil aku Adel, tinggal di Bogor. Makhluk bumi dengan riuh
          di kepala yang selalu ingin diredam. Memiliki ketertarikan di bidang
          IT dan sedikit hal tentang sastra. Seseorang yang cukup ambisius dan
          tekun yang selalu berusaha bertanggung jawab pada apa yang dipilihnya.
        </p>
      </section>

      <section className="flex flex-col px-10 py-10 gap-5">
        <label className="font-semibold text-lg">Projects</label>

        {projects.map((projects, index) => (
          <ProjectCard
            key={index}
            name={projects.name}
            year={projects.year}
            description={projects.description}
            bgColor={`${index % 2 === 0 ? "bg-blue-200" : ""}`}
          />
        ))}
      </section>
      <section className="flex flex-col px-10 py-10 gap-5  bg-blue-100">
        <label className="font-semibold text-lg">Education</label>
        {education.map((education, index) => (
          <ProjectCard
            key={index}
            name={education.name}
            year={education.year}
            description={education.jurusan}
          />
        ))}
      </section>
    </div>
  );
};
export default LandingPage;
