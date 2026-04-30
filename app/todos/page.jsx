import React from "react";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchtodo = async () => {
  const res = await fetch(`${API_URL}/todos`);
  if (!res.ok) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }
  return res.json();
};

export default async function todos() {
  const todos = await fetchtodo();

  return (
    <div className="flex justify-center items-center p-8 mt-8 max-w-lg">
      <div className="flex flex-col gap-8">
        {todos.map((t) => (
          <ul key={t.id}>
            <li className="text-lg font-bold">{t.title}</li>
            <li>{t.content}</li>
            <li>{t.category}</li>
            <li>{t.completed ? "완료!" : "진행중"}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
