"use client";
import { Avatar } from "@nextui-org/react";
import React from "react";
import { techlist } from "./constant";
import Link from "next/link";

export const Tech = () => {
  const list = techlist;
  return (
    <div className="m-5 my-32 items-center justify-center">
      <h1 className="head-text mb-9">Tech Used</h1>
      <div className="flex flex-row justify-center py-7 gap-4 items-center">
        {list.map((list, index) => (
          <Link href={list.href} key={index}>
            <Avatar isBordered radius="md" src="/assets/home.svg" size="md" />
          </Link>
        ))}
      </div>
    </div>
  );
};
