/// <reference types="react" />
import { FC, Component, Ref } from 'react';
import { SvgProps } from 'react-native-svg';

export interface IconProps extends SvgProps {
  variant?: 'Linear' | 'Outline' | 'Broken' | 'Bold' | 'Bulk' | 'TwoTone';
  ref?: Ref<Component<SvgProps>>;
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
}
export type Icon = FC<IconProps>;
