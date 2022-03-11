import React from 'react';
import t from 'prop-types';

export interface AlertProps {
  kind?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
}

export type KindMap = Record<Required<AlertProps>['kind'], string>;

const prefixCls = 'ad-activity-alert';

const kinds: KindMap = {
  primary: '#4569d4',
  success: '#8cd225',
  danger: '#ff4646',
  warning: '#FFA502',
  info: '#5352ED',
};

const Button: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

Button.propTypes = {
  kind: t.oneOf(['primary', 'success', 'danger', 'warning','info']),
};

export default Button;