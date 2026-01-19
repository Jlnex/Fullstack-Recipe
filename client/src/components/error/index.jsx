import { CircleX } from "lucide-react";

const Error = ({ message, refetch }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[90vh]">
      <CircleX className="size-10 text-red-500" />

      <h2 className="text-xl font-semibold text-stone-800">Bir sorun oluştu</h2>

      <p className="text-stone-500">{message}</p>

      {refetch && (
        <button onClick={refetch} className="mt-5 btn">
          Tekrar Dene
        </button>
      )}
    </div>
  );
};

export default Error;
