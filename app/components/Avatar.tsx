"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <div>
      <Image
        src="/images/placeholder.jpg"
        className="rounded-full"
        height="30"
        width="30"
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
