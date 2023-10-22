import style from './style.module.css';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperCircle}>
        <Image
          src="icons/circleLeft.svg"
          alt="icon"
          width={100}
          height={183}
        />
      </div>
      <div className={style.wrapperCircle}>
        <Image
          src="icons/circleTop.svg"
          alt="icon"
          width={200}
          height={123}
        />
      </div>
      <div className={style.wrapperImg}>
        <Image
          src="img/user.jpg"
          alt="product img"
          width={100}
          height={100}
        />
      </div>
      <h1 className={style.title}>Todo list example with Zustand</h1>
    </div>
  );
};
