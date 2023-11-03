import React from "react";

const heads = [
  { title: "Зураг" },
  { title: "Нэр" },
  { title: "Овог" },
  { title: "Имэйл" },
  { title: "Төрсөн он сар" },
  { title: "Хэлтэс" },
  { title: "Үйлдлүүд" },
];

const THead = () => {
  return (
    <thead>
      <tr>
        {heads.map((head, i) => (
          <th key={i} className="text-lg">
            {head.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default THead;
