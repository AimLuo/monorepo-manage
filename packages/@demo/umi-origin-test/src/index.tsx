import React from 'react';
import './index.less';
import styles from './index.module.less';

export interface ButtonProps {
  size?: 'large' | 'default';
}

const Button: React.FC<ButtonProps> = function(props) {
  return (
    <button
      type="button"
      className={`button ${styles.bg}`}
      style={{
        fontSize: props.size === 'large' ? 40 : 20,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
