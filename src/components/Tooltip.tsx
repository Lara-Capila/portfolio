import React, { ReactNode } from "react";

interface TooltipProps {
  message: string;
  children: ReactNode;
}

const Tooltip = ({ message, children }: TooltipProps) => {
  return (
    <div className="group relative">
      {children}
      <span
        className="
          absolute
          top-10
          scale-0
          transition-all
          rounded
          bg-[#e160f7]
          p-2
          text-xs
          text-inherit
          group-hover:scale-100
        "
      >
        {message}
      </span>
    </div>
  )
}

export default Tooltip;
