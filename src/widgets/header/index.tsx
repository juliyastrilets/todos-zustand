import Image from 'next/image';
import style from './style.module.css';
export const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperCircle}>
        <Image
          src="/circleLeft.svg"
          alt="icon"
          width={100}
          height={183}
        />
      </div>
      <div className={style.wrapperCircle}>
        <Image
          src="/circleTop.svg"
          alt="icon"
          width={200}
          height={123}
        />
      </div>
      <div className={style.wrapperImg}>
        <Image
          src="/user.jpg"
          alt="product img"
          width={100}
          height={100}
        />
      </div>
      <h1 className={style.title}> Welcome Yulia Strilets !</h1>
    </div>
  );
};
