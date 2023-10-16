"use client";
import { Link } from "@nextui-org/react";
export const Contact = () => {
    return (
      <div className="my-32">
        <h1 className="head-text mb-9">Contact me</h1>
        <p className="text-white/80 mt-6">
          Please contact me directly at{" "}
          <Link showAnchorIcon className="text-white" href="mailto:tanishbasu50@gmail.com">
            tanishbasu50@gmail.com
          </Link>{" "}
          or through the form.
        </p>
      </div>
    )
}