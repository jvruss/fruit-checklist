import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// Components
import Title from '../../components/Title';
import Button from '../../components/Button';

// Icons
import { ReactComponent as CheckIcon } from '../../icons/check.svg';
import { ReactComponent as HeartFillIcon } from '../../icons/heart-fill.svg';
import { ReactComponent as HeartStrokeIcon } from '../../icons/heart-stroke.svg';
// import { ReactComponent as StarIcon } from '../../icons/star.svg';

// Images
import apple from '../../images/apple.png';

// Styles
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

interface IFruit {
  id: number;
  alias: string;
  name: string;
  image: string;
  checks: { myself: boolean; overall: number };
  rating: { myself: number; overall: number };
  likes: { myself: boolean; overall: number };
}

const fruits: IFruit[] = [
  {
    id: 1,
    alias: 'apple',
    name: 'Яблоко',
    image: apple,
    checks: { myself: true, overall: 0.87 },
    rating: { myself: 0, overall: 4.87 },
    likes: { myself: false, overall: 20 },
  },
  {
    id: 2,
    alias: 'orange',
    name: 'Мандарин',
    image: apple,
    checks: { myself: false, overall: 0.87 },
    rating: { myself: 10, overall: 0.87 },
    likes: { myself: true, overall: 3 },
  },
  {
    id: 3,
    alias: 'apple',
    name: 'Яблоко',
    image: apple,
    checks: { myself: true, overall: 0.87 },
    rating: { myself: 0, overall: 4.87 },
    likes: { myself: false, overall: 20 },
  },
  {
    id: 4,
    alias: 'apple',
    name: 'Яблоко',
    image: apple,
    checks: { myself: true, overall: 0.87 },
    rating: { myself: 0, overall: 4.87 },
    likes: { myself: false, overall: 20 },
  },
  {
    id: 5,
    alias: 'apple',
    name: 'Яблоко',
    image: apple,
    checks: { myself: true, overall: 0.87 },
    rating: { myself: 0, overall: 4.87 },
    likes: { myself: false, overall: 20 },
  },
];

const HomePage: FC = () => {
  return (
    <div className={cx('HomePage')}>
      {fruits.map((fruit) => {
        const Heart = fruit.likes.myself ? HeartFillIcon : HeartStrokeIcon;

        return (
          <div key={fruit.id} className={cx('Fruit')}>
            <img className={cx('Fruit__left')} src={fruit.image} alt={fruit.name} />
            <div className={cx('Fruit__right')}>
              <Title className={cx('Fruit__title')} level={2}>
                <Link to={`/fruit/${fruit.alias}`}>{fruit.name}</Link>
              </Title>
              <div className={cx('Fruit__bottom')}>
                <div className={cx('Fruit__likes')}>
                  <Heart className={cx('Fruit__likes-icon')} />
                  <span className={cx('Fruit__likes-amount')}>{fruit.likes.overall}</span>
                </div>
                <div className={cx('Fruit__rating')}>
                  {/* <StarIcon className={cx('Fruit__rating-icon')} /> */}
                  <span className={cx('Fruit__rating-amount')}>{fruit.rating.overall}</span>
                </div>
                <div className={cx('Fruit__checks')}>
                  <Button type="button">
                    <CheckIcon className={cx('Fruit__checks-icon')} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
