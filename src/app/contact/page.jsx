import Image from "next/image";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-3xl font-bold mb-6">Контакты</h1>

      <p className="mb-4" >
        Меня зовут <strong>Даниил</strong>. Мне 20 лет. Учусь в РТУ МИРЭА на кафедре "Компьютерный дизайн".
      </p>

      <p className="mb-4">
        Я увлечен веб-разработкой, графическим и 3D дизайнами, стремлюсь создавать удобные и красивые интерфейсы. В свободное время люблю прогулки на свежeм воздухе
      </p>

      <Image
        src="/images/my.jpeg"
        alt="#"
        width={300}
        height={400}
        className="rounded shadow mx-auto"
      />
    </div>
  );
}