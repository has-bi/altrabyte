import React from "react";

const rectangleElements = [
  {
    id: 1,
    className: "absolute w-[210px] h-[210px] top-[440px] left-[103px]",
    children: [
      {
        className:
          "absolute w-[106px] h-[106px] top-0 left-0 rounded-[8px_0px_0px_0px] border-t-2 [border-top-style:solid] border-l-2 [border-left-style:solid] border-foundation-primaryprimary-100 rotate-180",
      },
      {
        className:
          "h-[106px] top-[104px] left-[104px] rounded-[0px_0px_0px_8px] border-b-2 [border-bottom-style:solid] border-l-2 [border-left-style:solid] rotate-180 absolute w-[106px] border-foundation-primaryprimary-100",
      },
    ],
  },
  {
    id: 2,
    className:
      "h-[131px] -top-px left-[311px] rounded-[0px_0px_8px_0px] border-2 border-solid absolute w-[106px] border-foundation-primaryprimary-100",
  },
  {
    id: 3,
    className:
      "h-[106px] top-[648px] left-[415px] border-t-2 [border-top-style:solid] border-r-2 [border-right-style:solid] border-l-2 [border-left-style:solid] absolute w-[106px] border-foundation-primaryprimary-100",
  },
  {
    id: 4,
    className: "absolute w-[106px] h-[211px] top-[648px] left-[623px]",
    children: [
      {
        className:
          "h-[107px] top-[104px] left-0 border-t-2 [border-top-style:solid] border-r-2 [border-right-style:solid] border-l-2 [border-left-style:solid] absolute w-[106px] border-foundation-primaryprimary-100",
      },
      {
        className:
          "h-[106px] top-0 left-0 border-t-2 [border-top-style:solid] border-r-2 [border-right-style:solid] border-l-2 [border-left-style:solid] absolute w-[106px] border-foundation-primaryprimary-100",
      },
    ],
  },
  {
    id: 5,
    className:
      "h-[131px] -top-px left-[727px] border-2 border-solid absolute w-[106px] border-foundation-primaryprimary-100",
  },
];

export const Rectangle = () => {
  return (
    <div
      className="relative w-[832px] h-[857px]"
      role="img"
      aria-label="Abstract geometric pattern with purple rectangular elements"
    >
      {rectangleElements.map((element) => (
        <div key={element.id} className={element.className}>
          {element.children &&
            element.children.map((child, index) => (
              <div key={index} className={child.className} />
            ))}
        </div>
      ))}
    </div>
  );
};
