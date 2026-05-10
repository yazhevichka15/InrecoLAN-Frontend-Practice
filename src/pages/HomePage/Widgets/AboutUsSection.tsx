import { Link } from 'react-router-dom';
import { TitleBlock } from '@shared/ui/TitleBlock';

export const AboutUsSection = () => {
  return (
    <section className="py-20 px-12">
      <div className="flex gap-16 mb-20">
        <div className="flex justify-between flex-1 flex-col">
          <div>
            <div className="mb-8">

              <TitleBlock
                mainTitle="о нас"
                handwriteTitle="немного"
                mainTitleOffset="-translate-x-45px translate-y-12px text-4xl"
                handwriteTitleOffset="text-xl text-footer-list"
              />

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
              className="w-16 filter brightness-0"
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

          <TitleBlock
         mainTitle="25"
        handwriteTitle="Более"
        mainTitleOffset="text-5xl translate-x-50px"
        handwriteTitleOffset="text-footer-list text-5xl -translate-x-80px"
/>

          <p className="text-xl mb-4">лет на рынке</p>

          <div className="h-px w-24 mb-4"></div>

          <p className="text-sm max-w-xs">
            Четверть века превращаем комнаты в сияющие залы. Стили приходят и
            уходят, но мы всегда знаем, какой свет сделает вашу комнату
            особенной.
          </p>
        </div>

        <div className="flex flex-1 flex-col items-start">

          <TitleBlock
            mainTitle="365"
            handwriteTitle="дней"
            mainTitleOffset="text-5xl"
            handwriteTitleOffset="text-footer-list text-5xl"
          />

          <p className="text-xl mb-4">гарантии</p>

          <div className="h-px w-24 mb-4"></div>

          <p className="text-sm max-w-xs">
            Мы уверены в качестве наших люстр как в своей правоте. Поэтому даем
            расширенную гарантию — целый год. Это наш знак качества и залог
            вашего спокойствия.
          </p>
        </div>

        <div className="flex flex-1 flex-col items-start">

          <TitleBlock
            mainTitle="100%"
            handwriteTitle="довольных"
            mainTitleOffset="text-5xl"
            handwriteTitleOffset="text-footer-list text-5xl"
          />

          <p className="text-xl mb-4">клиентов</p>

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