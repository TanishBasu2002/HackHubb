"use client";
import {
  Card,
  CardBody,
  Image,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import { itemlist } from "./constant";

export default function IndiItem() {
  const list = itemlist;
  return (
    <div className="m-5 my-32">
      <h1 className="head-text mb-9">Components</h1>
      <div className=" m-3 gap-2 grid grid-cols-3 max-xl:grid-cols-2">
        {list.map((list, index) => (
          <>
            <Link key={index} href={list.href} showAnchorIcon>
              <Card className="mb-12 text-white max-w-[400px] bg-slate-900 border-1 border-slate-700">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="logo"
                    height={40}
                    radius="sm"
                    src="/assets/logo.svg"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">{list.title}</p>
                    <p className="text-small text-default-500">HackHubb</p>
                  </div>
                </CardHeader>
                <Divider className="bg-slate-700" />
                <CardBody>
                  <p>{list.description}</p>
                </CardBody>
                <Divider />
              </Card>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
