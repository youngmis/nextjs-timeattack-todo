import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-8 mt-8 max-w-lg">
      <h1 className="text-xl font-bold">
        Todo 관리 서비스에 오신 것을 환영합니다!🎉
      </h1>
      <br />
      <p>
        오늘의 할일을 추가하고 완료된 할일은 체크하여 표시해보세요.
        <br />
        오늘의 할일을 모두 완료하면 즐거운 일이 일어납니다!
      </p>
      <br />
      <Link href="/todos" className="font-bold border-b">
        Todo List 바로가기
      </Link>
    </main>
  );
}
