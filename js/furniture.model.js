const categories = [
  {
    id: 1,
    name: "Мягкая мебель",
    subcategories: [
      {
        id: 11,
        name: "Диваны",
        items: [
          {
            id: 111,
            name: "Archi",
            title: "Дизайнерский диван-кровать, шагающая еврокнижка",
            description:
              "Стильный диван-кровать Archi — современное совершенство. Он создан для компактных пространств, где каждый сантиметр работает на эстетику и функциональность. Тонкие  подлокотники не только отражают современные тренды в дизайне, но и дарят дополнительную ширину сидению. Archi оснащен механизмом «еврокнижка» и трансформируется в спальное место для ежедневного сна. Диван словно парит в пространстве на высоких 14-сантименторвых металлических ножках, под которые с легкостью заедет робот-пылесос. Удобные спинные подушки содержат высокоэластичную дробленую пену Memory Foam в смеси с воздушным синтепухом — чтобы Вы могли по-настоящему отдохнуть и расслабиться. Внутри у Archi есть небольшой секретный ящик для хранения белья.",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/07/225189_ARC_EKH_180_2_Velutto_14--w_500.webp",
            rate: 6,
          },
          {
            id: 112,
            name: "Miami Lux",
            title: "Дизайнерский диван в букле 2-местный без механизма",
            description:
              "Буклированная дизайнерская ткань применяется для следующих изделий: кресла и диваны Spin, Miami Lux, Fly, кровати Lulu, Vento, Brooklyn, стулья и полукресла Fargo, Torino, пуфы Margot, Minion, Ralf и декоративные подушки без декоративных элементов. Полный список у наших сотрудников.",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/05/221778_MIA_LUX_120_Boucle_2_white--w_500.webp ",
            rate: 4,
          },
          {
            id: 113,
            name: "Zillis",
            title: "Дизайнерский диван 3-местный без механизма",
            description:
              "Дизайнерский диван ZILLIS — воплощение безупречного вкуса в современном пространстве вашей гостиной. Наслаждайтесь комфортной посадкой — мягкие подушки спинки созданы из премиального наполнителя с содержанием ультрамягкой пены memory foam. Металлические опоры, широкие подлокотники и особый элегантный крой сидений — трендовые акценты в дизайне этого дивана наполняют пространство эстетикой. Каким будет Ваш стильный диван ZILLIS — в фактурной рогожке, благородном велюре, искусственной замше или акцентном букле — решать только Вам. На выбор – более 200 оттенков мебельной обивки в различных фактурах.",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/10/229270_Zilis_200_1_0006-1--w_500.webp",
            rate: 2,
          },
          {
            id: 114,
            name: "Mendini Wagon",
            title: "Стильный диван-кровать 2-местный, вперед-выкатной",
            description:
              "Компактный диван-кровать MENDINI WAGON — идеальный формат раскладного маленького диванчика в кухню, детскую комнату или гостиную со спальным местом. Благодаря современному дизайну и комфортной посадке, модель стала одним из абсолютных бестселлеров SKDESIGN. Плавные, универсально стильные формы вне времени. Оптимальная ширина подлокотников. Удобный вперёд-выкатной механизм раскладывания. Мягкие подушки спинки с гипоаллергенным пухом в качестве наполнителя. Мы понимаем, почему наши клиенты раз за разом выбирают MENDINI WAGON в интерьер своего дома.",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/03/214445_MEN_WG_100_2_Breeze_25--w_500.webp",
            rate: 3,
          },
          {
            id: 115,
            name: "Vento Classic",
            title: "3-местный диван-кровать, выкатная еврокнижка",
            description:
              "Раскладной дизайнерский диван Vento Classic — пожалуй, наша самая удобная и технологичная модель. Премиальная флагманская линейка бренда SKDESIGN — несомненный фаворит современных гостиных. Ультрамягкие, погружающие в максимальное расслабление, диваны Vento снимают напряжение с мышц и оказывают суставам мягкую поддержку. Инновационная термопластичная пена с эффектом памяти MemoryFoam марки LR отличается редкой комбинацией плотности и мягкости. Она легко восстанавливает форму, обладает упругой эластичностью и не оказывает ответного давления на мышцы. Подлокотники Vento можно вынуть и превратить в пуф-подставку. В линейке Classic подлокотники ультра широкие — 35 см, в линейке Light ширина подлокотников 22 см. Раскладной механизм выкатная еврокнижка образует спальное место с равномерной мягкостью по всей поверхности. Диваны коллекции Vento — главный секрет хорошего вечера.",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2021/09/204613_VEN_VK_2L35_164_2_0004-1--w_500.webp",
            rate: 4,
          },
          {
            id: 116,
            name: "Cubus MIX",
            title: "Модульный 4-местный диван, без механизма",
            description:
              "Модульный 4-местный диван Cubus Mix не зря имеет такое название - он состоит из модулей кубической формы. Модули возможно изготовить в разных цветах, создавая тем самым неповторимый дизайн. Комбинированный модульный диван Cubus Mix уместен для гостиной в минимализме или скандинавском стиле благодаря простоте линий и лаконичности модели.",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/12/4-3-2--w_500.webp",
            rate: 1,
          },
          {
            id: 117,
            name: "Wolsly",
            title: "3-местный диван, без механизма",
            description: " ",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/WOL_MT_206_2_0001--w_500.webp",
            rate: 5,
          },
          {
            id: 118,
            name: "Vento Light ",
            title: "Модульный 4-местный диван-кровать, выкатная еврокнижка  ",
            description:
              "Раскладной дизайнерский диван Vento Light — пожалуй, наша самая удобная и технологичная модель. Премиальная флагманская линейка бренда SKDESIGN — несомненный фаворит современных гостиных. Ультрамягкие, погружающие в максимальное расслабление, диваны Vento снимают напряжение с мышц и оказывают суставам мягкую поддержку. Инновационная термопластичная пена с эффектом памяти MemoryFoam марки LR отличается редкой комбинацией плотности и мягкости. Она легко восстанавливает форму, обладает упругой эластичностью и не оказывает ответного давления на мышцы. Подлокотники Vento можно вынуть и превратить в пуф-подставку. В линейке Classic подлокотники ультра широкие — 35 см, в линейке Light ширина подлокотников 22 см. Раскладной механизм выкатная еврокнижка образует спальное место с равномерной мягкостью по всей поверхности. Диваны коллекции Vento — главный секрет хорошего вечера. ",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/164686_VEN_VK_2L20_244_2_0005--w_500.webp",
            rate: 3,
          },
          {
            id: 119,
            name: " Cubus MIX ",
            title:
              " Модульный 4-местный диван без механизма 274/194 см, с пуфом ",
            description:
              "Модульный диван Cubus Mix не зря имеет такое название - он состоит из модулей кубической формы. Модули возможно изготовить в разных цветах, создавая тем самым неповторимый дизайн. Диван Cubus Mix с пуфом уместен для гостиной в минимализме или скандинавском стиле благодаря простоте линий и лаконичности модели.            ",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2021/05/195017_1_View017-2--w_500.webp",
            rate: 5,
          },
          {
            id: 1110,
            name: "Vittorio",
            title: "Модульный диван, 296×288×88 см, без механизма",
            description:
              "Модульный П-образный диван Vittorio с мягкими, скругленными формами подушек и подлокотников создает атмосферу уюта и тепла. Диван имеет сидение рельефной формы, которое придает модели по-настоящему изысканный вид. Для этой коллекции можно выбрать подходящие под интерьер ножки: из натурального массива дуба или металла. Дизайн Vittorio придется по вкусу любителям контемпорари и современного стиля.",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/VIT_BS_3_1_3_cr--w_500.webp",
            rate: 4,
          },
          {
            id: 1111,
            name: "Mendini",
            title:
              "Модульный П-образный диван 352×180×88 см без механизма            ",
            description:
              "Mendini - одна из самых популярных коллекций. Клиентов привлекает стиль, подходящий для любого интерьера и детали, которые стали настоящей изюминкой модели: L-образные низкие подлокотники, немного вогнутые подушки сиденья, металлические опоры или ножки из натурального массива дуба на выбор. Mendini – это современный комфорт и приятный дизайн. ",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/164438_MEN_ST_BIG_V1_2_Velutto_11--w_500.webp",
            rate: 2,
          },
          {
            id: 1112,
            name: "Bari",
            title: "Модульный П-образный диван, 352×180×88 см ",
            description: " ",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/BAR_BS_1_4_1--w_500.webp",
            rate: 5,
          },
        ],
      },

      {
        id: 12,
        name: "Кровати",
        items: [
          {
            id: 121,
            name: "Jess",
            title: "Дизайнерская кровать",
            description:
              " Дизайнерская кровать Jess — яркий акцент в Вашей спальне в современном стиле. Многие современные кровати с мягким изголовьем похожи друг на друга, но Jess имеет собственный неповторимый образ. Ее отличают детали: утонченный узнаваемый силуэт изголовья с зауженными краями, ассиметричная россыпь утяжек в современном стиле, скошенные с наклоном боковые царги. Она создана, чтобы отражать характер всего интерьера спальни — динамичный и лёгкий, ультрасовременный и в то же время с роскошными нотками неоклассики. Кровать Jess — из тех предметов, которые делают весь интерьер, собирая его в единое дизайнерское пространство.            ",
            img: " https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2021/11/207019_Jess_1_0006--w_500.webp",

            rate: 6,
          },
          {
            id: 122,
            name: "Brooklyn Low",
            title:
              "Двуспальная кровать с низким изголовьем на ножках",
            description: " ",
            img: " https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2021/02/BRO-NN-160-UC-NI_2_0005--w_500.webp",
            rate: 5,
          },
          {
            id: 123,
            name: "Elle",
            title: "Дизайнерская односпальная кровать на ножках",
            description: " ",
            img: " https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/Elle_Velutto_1_0003--w_500.webp",
            rate: 4,
          },
          {
            id: 124,
            name: "Scandi",
            title: "Двуспальная кровать на ножках в скандинавском стиль",
            description: " ",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/SC1_160_1_0002--w_500.webp ",
            rate: 5,
          },
          {
            id: 125,
            name: "Bunny",
            title: "Дизайнерская детская кровать с ушками",
            description: " Дизайнерская детская кровать Bunny в современном стиле с изголовьем в виде заячьих ушек. На выбор доступны три цвета деревянных опор: натуральный дуб, орех и венге. ",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/BUNNY_1_2--w_500.webp",
            rate: 1 ,
          },
          {
            id: 126,
            name: "Finlay",
            title: "Дизайнерская двуспальная кровать с подъемным механизмом",
            description: "  ",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/Finley_p15_1--w_500.webp",
            rate: 3 ,
          },
          {
            id: 127,
            name: "Melisa",
            title: "Интерьерная кровать с подъемным механизмом ",
            description: "  ",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/kr-melisa-bej-b--w_500.webp",
            rate: 2 ,
          },
          {
            id: 127,
            name: "Hannah",
            title: "Односпальная кровать с каретной стяжкой ",
            description: "  ",
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/Hannah_NN_2.5--w_500.webp",
            rate: 5,
          },
          {
            id: 128,
            name: " Kylie kids ",
            title: "Дизайнерская детская кровать",
            description: "  ",
            img: " https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/KYLIE_KIDS_1_4--w_500.webp " ,
            rate: 5,
          },
          {
            id: 129,
            name: " Vento ",
            title: "Дизайнерская кровать с подъемным механизмом ",
            description: "  ",
            img: " https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2021/05/196422_VEN_GL_200_ST_1_0002--w_500.webp " ,
            rate: 3,
          },
          {
            id: 1210,
            name: " Moby ",
            title: "Интерьерная кровать на ножках ",
            description: "  ",
            img: " https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/MOBI_NN_1_0008--w_500.webp " ,
            rate: 1,
          },
          {
            id: 1211,
            name: " Tara Low",
            title: "Двуспальная кровать с низким изголовьем на ножках",
            description: "  ",
            img: " https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2021/08/201083_TAR_NN_UC_NI_2_0000--w_500.webp " ,
            rate: 5,
          },
          {
            id: 1212,
            name: " Lauren",
            title: "Кровать, с подъемным механизмом",
            description: "  ",
            img: " https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/Lauren_p22_3--w_500.webp " ,
            rate: 3,
          },
        ],
      },
      
      // Пуфы 
      {
        id: 13,
        name: "Пуфы",
        items: [
          {
            id: 131,
            name: "Ralf Small",
            title: "Пуф круглый D35 см " ,
            description: "  ", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/RALF_1_04--w_500.webp",
            rate: 6 ,
          }, 
          {
            id: 132,
            name: "Edda",
            title: "Пуф на деревянных ножках 56х56 см " ,
            description: " Стильный пуф Edda может играть роль современного мягкого табурета в обеденной зоне. Высота сидения 44 см позволяет поставить пуф к обеденному столу. Строгая элегантность и выразительность — отличительные черты этого стильного пуфа на опорах из натурального массива дуба. Дубовая фактура с характерным выраженным рисунком добавляет предмету аристократизма. Edda – коллекция стильных и при этом очень компактных диванов, кресел, скамьи и пуфа, которая может стать идеальным выбором как для любой зоны домашнего пространства (обеденной зоны, гостиной, прихожей, спальни, детской), так и организации общественного интерьера (кафе, ресторанов, офисов). Edda –  уникальное сочетание современности и классики. ", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/12/237747_4_EDD-ST-PUF-56-56_1_Bella_17--w_500.webp",
            rate: 5,
          }, 
          {
            id: 133,
            name: "Minion",
            title: "Пуф круглый мини D31 см" ,
            description: "  ", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/пуф-15-1--w_500.webp",
            rate: 4,
          }, 
          {
            id: 134,
            name: "Mendini",
            title: "Пуф, откидной, с высокими ножками" ,
            description: " Мягкий пуф по праву считается универсальным предметом мебели, ведь его можно использовать как сиденье, в качестве подставки для ног или вместо журнального столика. К тому же следует отметить, что такое сиденье не занимает слишком много места, поэтому его можно смело использовать даже в малогабаритных помещениях. Мебель от компании SKDESIGN отличается прочностью, надежностью и длительным сроком эксплуатации. Производитель изготавливает мягкую мебель на высокоточном современном оборудовании с применением передовых технологий и с использованием экологически чистых сертифицированных материалов. Основа пуфа выполнена из прочной древесины, наполнитель представляет собой эластичный материал, который даже после длительного использования не деформируется и восстанавливает первоначальную форму. Обивка очень приятная на ощупь, легко чистится и устойчива к истиранию. Помимо пуфов, в интернет-магазине SKDESIGN можно купить кресла, а также трехместные и угловые диваны этой же серии ", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/157831_MEN_STR_PUF_64_64_1_Velutto_14--w_500.webp",
            rate: 5,
          }, 
          {
            id: 135,
            name: "Ralf Small",
            title: "Пуф круглый букле D35 см" ,
            description: "  ", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/12/235666_buckle_01_3--w_500.webp",
            rate: 3,
          }, 
          {
            id: 136,
            name: "Lull Small",
            title: "Дизайнерский пуф" ,
            description: "  ", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2021/01/184223_Lull_56_0003--w_500.webp",
            rate: 1,
          }, 
          {
            id: 136,
            name: "Whim",
            title: "Пуф круглый бескаркасный" ,
            description: "Стильный круглый пуф без каркаса декорирован кантом в технике защип. Будет уместен в гостиной, детской или спальне. А если у вас есть домашний питомец, этот мягкий пуф наверняка станет его любимым местом обитания. Наполнитель - дробленый ППУ разных степеней плотности. Фактуру и оттенок ткани можно выбрать любые из нашего ассортимента.  ", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2021/04/II_Premier_23_1--w_500.webp",
            rate: 4,
          }, 
          {
            id: 137,
            name: "Monk",
            title: "Бескаркасный пуф" ,
            description: "Бескаркасный пуф квадратной формы со стильными округлыми боками и декоративным крестообразным кантом-защипом. Мягкий, но упругий и не теряющий со временем свою форму. Украсит интерьер и станет дизайнерской альтернативой креслу-мешку. Наполнитель — качественный дробленый ППУ разных степеней плотности. ", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2021/04/2_Velutto_15_I--w_500.webp",
            rate: 4,
          }, 
          {
            id: 138,
            name: "Ralf Medium",
            title: "Пуф круглый D52 см" ,
            description: "", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/RALF_2_08--w_500.webp",
            rate: 3,
          }, 
          {
            id: 139,
            name: "Ralf Medium",
            title: "Пуф круглый букле D52 см" ,
            description: "", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/12/235680_buckle_02_4--w_500.webp",
            rate: 5,
          }, 
          {
            id: 1310,
            name: "Minion",
            title: "Пуф круглый мини букле D31 см" ,
            description: "Буклированная дизайнерская ткань применяется для следующих изделий: кресла и диваны Spin, Miami Lux, Fly, кровати Lulu, Vento, Brooklyn, стулья и полукресла Fargo, Torino, пуфы Margot, Minion, Ralf и декоративные подушки без декоративных элементов. Полный список у наших сотрудников.", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/08/227001_minion_beige--w_500.webp",
            rate: 2,
          }, 
          {
            id: 1311,
            name: "Fjord",
            title: "Скамья-банкетка в скандинавском стиле" ,
            description: "", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/159517_2_Fjord_1_Madrid_Charcoal--w_500.webp",
            rate: 5,
          }, 
          {
            id: 1312,
            name: "Mendini",
            title: "Банкетка с ящиком для хранения на высоких ножках" ,
            description: "", 
            img: "https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2023/03/256240_5_Mendini_STR_1_Velutto_55--w_500.webp",
            rate: 4,
          }, 
        ]
      }
    ],
  },
  {
    id: 2,
    name: "Корпусная мебель",
    subcategories: [
      {
        id: 22,
        name: "Столы",
        items: [
          {
            id: 211,
            name: "Стол 1",
            description: "Описание стола 1",

            img: " ",
            rate: 4,
          },
          {
            id: 212,
            name: "Стол 2",
            description: "Описание стола 2",

            img: " ",
            rate: 6,
          },
        ],
      },
      {
        id: 23,
        name: "Стулья",
        items: [
          {
            id: 231,
            name: "Стул 1",
            description: "Описание стула 1",

            img: " ",
            rate: 6,
          },
          {
            id: 132,
            name: "Стул 2",
            description: "Описание стула 2",

            img: " ",
            rate: 3,
          },
        ],
      },
      // Другие подкатегории и их объекты
    ],
  },
  // Другие категории и их подкатегории
];
