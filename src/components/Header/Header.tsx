import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_black.png';
import logoWhite from '../../assets/logo_white.png';
import { ReactComponent as ArrowBack } from '../../assets/previous-arrow.svg';
import { ReactComponent as WhiteArrowBack } from '../../assets/white-previous-arrow.svg';

import React, { FC } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  color?: 'white' | 'black';
  isFirstPage?: boolean;
}
const Header: FC<HeaderProps> = ({ color = 'black', isFirstPage }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      {!isFirstPage && (
        <button className={styles.buttonBack} onClick={() => navigate(-1)}>
          {color === 'white' ? <WhiteArrowBack /> : <ArrowBack />}
        </button>
      )}
      <img className={styles.logo} src={color === 'white' ? logoWhite : logo} alt="Nebula" />
    </div>
  );
};

export default Header;
