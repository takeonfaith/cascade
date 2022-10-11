import React from "react";
import { ChevronLeft, ChevronRight, MoreVertical } from "react-feather";
import { Button } from "../../../common/button";

const Header = () => {
  return (
    <div className="flex items-center w-full h-12 px-60 py-2">
      <div className="flex items-center w-full">
        <Button
          icon={<ChevronLeft />}
          background="transparent"
          hoverBackground="bg-red-500"
          onClick={() => console.log("test")}
        />
        <Button icon={<ChevronRight />} />
      </div>
      <Button icon={<MoreVertical />} />
    </div>
  );
};

export default Header;
