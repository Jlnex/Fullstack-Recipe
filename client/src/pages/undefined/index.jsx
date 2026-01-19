import { Link } from "react-router-dom";

const Undefined = () => {
  return (
    <div className="h-[90vh] grid place-items-center">
      <div className="text-center space-y-4">
        <h1 className="text-8xl text-stone-300">404</h1>

        <h2 className="text-2xl font-semibold text-stone-800">Sayfa Bulunamadı</h2>

        <p className="text-stone-500 max-w-md">Aradığınız sayfa mevcut değil veya taşınmış olabilir</p>

        <Link href="/" className="btn mt-8">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default Undefined;
