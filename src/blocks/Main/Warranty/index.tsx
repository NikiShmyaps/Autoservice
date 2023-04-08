import styles from './warranty.module.scss';
import classNames from 'classnames/bind';
import { Link, Image } from '@components';
import { Card } from './Card';

const cx = classNames.bind(styles);

const advertising = 
     [
      {
        src: '/assets/warranty/01.png',
        title: '01',
        subtitle: 'Ремонт без задержек',
        width:'555px',
        height:'220px',
        description: 'Мы строго соблюдаем сроки работ. Если вы не получили автомобиль вовремя, мы выплатим компенсацию в размере 500 р. за каждый час задержки.',
      },
      {
        src: '/assets/warranty/02.png',
        title: '02',
        subtitle: 'Точно знаете, за что платите',
        width:'555px',
        height:'220px',
        description: 'Все работы производятся строго по смете. Мастер подробно проконсультирует Вас по вопросам необходимости и важности производимых работ.',
      },
      {
        src: '/assets/warranty/03.png',
        title: '03',
        subtitle: 'Безопасность ',
        width:'555px',
        height:'220px',
        description: 'Надёжность вашего авто - гарантия вашей безопасности на дороге. Качественный сервис - гарантия надёжного авто. Наши специалисты - гарантия качественного сервиса.',
      },
      {
        src: '/assets/warranty/04.png',
        title: '04',
        subtitle: 'Мы открыты для клиентов',
        width:'555px',
        height:'220px',
        description: 'Никаких звёздочек и крошечных шрифтов в договоре. Вы доверяете нам свой автомобиль - мы оправдываем ваше доверие. ',
      },
      {
        src: '/assets/warranty/05.png',
        title: '05',
        subtitle: 'Онлайн мониторинг',
        width:'555px',
        height:'220px',
        description: 'Прямая трансляция с камер в ремонтном цеху позволит вам убедится, что с вашим авто обращаются бережно и с любовью. ',
      },
      {
        src: '/assets/warranty/06.png',
        title: '06',
        subtitle: 'Ожидание с комфортом',
        width:'555px',
        height:'220px',
        description: 'Вас приятно порадует наша зона отдыха для клиентов, оборудованная телевизорами, буфетом и детским игровым пространством.',
      }
    ] 

export const Warranty: React.FC = () => {
  
	return (
		<section className={cx('container')}>
      <div className={cx('another__container')}>
        <img className={cx('container__background')} src="/assets/warranty/car-service.jpg" alt="Background" />
      </div>
      
      <ul className={cx('list')}>
       {advertising.map((item, index) => (
        <li className={cx(`item__${index+1}`)} 
        key={index}>
           <Card
       src={item.src}
       width={item.width}
       height={item.height}
       title={item.title}
       subtitle={item.subtitle}
       description={item.description}
      />
        </li>
     
     ))}
        </ul>
    </section>
	);
};