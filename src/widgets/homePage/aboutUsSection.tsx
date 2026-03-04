import { Link } from 'react-router-dom';

export const AboutUsSection = () => {
  return (
    <section className="py-20 px-12">
      <div className="flex gap-16 mb-20">
        <div className="flex justify-between flex-1 flex-col">
          <div>
            <div className="mb-8">
              <p className="font-handwrite text-xl">немного</p>
              <h2 className="text-4xl font-bold">о нас</h2>
            </div>
            <p className="text-lg max-w-lg">
              Сегодня «Империя люстр» это профессиональное обслуживание,
              высочайшего европейского качества. У нас Вы сможете подобрать
              красивые и недорогие люстры.
            </p>
          </div>
          <Link to="/catalog" className="flex relative items-center gap-4">
            <span>Перейти в каталог</span>
            <img
              src="/assets/Arrow.webp"
              alt="Перейти в каталог"
              className="w-16"
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <img
            src="/assets/aboutUsSection.webp"
            alt="Интерьер магазина люстр"
            className="max-w-2xl h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between gap-12 pt-10">
        <div className="flex flex-1 flex-col items-start">
          <p className="text-5xl font-bold">
            <span className="font-handwrite">Более</span> 25
          </p>
          <p className="text-xl mb-4">лет на рынке</p>
          <div className="h-px w-24 mb-4"></div>
          <p className="text-sm max-w-xs">
            Четверть века превращаем комнаты в сияющие залы. Стили приходят и
            уходят, но мы всегда знаем, какой свет сделает вашу комнату
            особенной.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-start">
          <p className="text-5xl text-bold">
            365 <span className="font-handwrite">дней</span>{' '}
          </p>
          <p className="text-xl mb-4"> гарантии</p>
          <div className="h-px w-24 mb-4"></div>
          <p className="text-sm max-w-xs">
            Мы уверены в качестве наших люстр как в своей правоте. Поэтому даем
            расширенную гарантию — целый год. Это наш знак качества и залог
            вашего спокойствия.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-start">
          <p className="text-5xl font-bold">
            100% <span className="font-handwrite">довольных</span>
          </p>
          <p className="text-xl mb-4"> клиентов</p>
          <div className="h-px w-24 mb-4"></div>
          <p className="text-sm max-w-xs">
            Мы привыкли работать на результат: если вы ушли от нас с улыбкой —
            значит, мы справились.
          </p>
        </div>
      </div>
    </section>
  );
};
