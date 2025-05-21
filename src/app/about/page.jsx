import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-3xl font-bold mb-6">PHANTOM</h1>

      <div className="mb-6">
        <p><strong>Сайт:</strong> <a href="https://phantom.rest" target="_blank" rel="noreferrer" className="text-teal-600 hover:underline">phantom.rest</a></p>
        <p><strong>Телефоны:</strong> 79956244419, +7 (495) 120-17-19</p>
        <p><strong>Режим работы:</strong> пн-ср 11:00–00:00; чт-сб 11:00–02:00; вс 11:00–00:00</p>
        <p><strong>Адрес:</strong> Малая Никитская ул., 24, стр. 2, Москва</p>
        <p><strong>Метро:</strong> Баррикадная, Краснопресненская, Арбатская</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Создатели</h2>
        <p>Огненное трио Антон Пинский, Артем Лосев и Виталий Истомин представляет самый эффектный проект своего альянса — мистический и загадочный Phantom. Ресторан с единственной в России 9-метровой печью на открытой кухне, парящими под высокими потолками девами, модными диджеями и посудой. Новый жанр — брутальный романтизм, искренний и по-своему первобытный.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Фантом огня</h2>
        <p>Вертел, коптильня, гриль, мангал, печь для пирогов и хлеба, печь для томления — почти что первобытные методы приготовления позволяют почувствовать такое же удовольствие. Виталий Истомин и Артем Лосев готовят мясо практически во всех существующих вариантах: от фрикаделек до кебабов, от стейков до шавермы, от приготовленного в коптильне халяльного брискета до запеченной лопатки карачаевского ягненка. А воздушность и прозрачность Фантома раскрывается в меню чистотой вкуса.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Брутальный романтизм</h2>
        <p className="text-gray-600 italic mb-4">
          Phantom создает новый жанр — брутальный романтизм. С каждой новой встречей его магия очаровывает и затягивает. Объединяя разные эпохи, дизайнер Ирина Глик позволяет любоваться каждой деталью. Тем, как роспись потолка «отражается» в рисунках посуды. Необычностью абажуров — «колокольчиков» из армированной стали. И даже юбки на парящих под пятиметровым потолком девах работы знаменитого скульптора Василия Селиванова кажутся сотканными из тлеющей лавы.
        </p>
        <p>И в этом магическая суть фантома, связывающего материальный мир с миром эмоций и чувств, — будить фантазию и дарить впечатления.</p>
      </section>

<div className="flex gap-6 mb-8 ">
  <div className="relative w-full sm:w-1/2 h-64 sm:h-80">
    <Image
      src="/images/restarunt1.jpg"
      alt="Phantom Interior 1"
      fill
      style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
      priority
    />
  </div>
  <div className="relative w-full sm:w-1/2 h-64 sm:h-80">
    <Image
      src="/images/restarunt2.jpg"
      alt="Phantom Interior 2"
      fill
      style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
      priority
    />
  </div>
</div>
    </div>
  );
}