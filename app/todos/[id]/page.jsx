import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchtodo = async (id) => {
  const res = await fetch(`${API_URL}/todos/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const todo = await fetchtodo(id);

  return {
    title: todo ? `${todo.title}` : "정보 없음",
    description: todo ? todo.content : "상세 내용을 찾을 수 없습니다.",
  };
}

export default async function todos({ params }) {
  const { id } = await params;
  const todo = await fetchtodo(id);
  if (!todo) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center p-8 mt-8 max-w-lg">
      <ul className="flex flex-col gap-8">
        <li>제목: {todo.title}</li>
        <li>내용: {todo.content}</li>
        <li>분류: {todo.category}</li>
        <li>상태: {todo.ccompleted ? "완료!" : "진행중"}</li>
        <li>중요도: {todo.priority}</li>
        <li>생성시간: {todo.createdAt}</li>
      </ul>
    </div>
  );
}
