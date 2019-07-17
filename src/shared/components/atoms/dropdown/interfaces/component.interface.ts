import * as React from 'react';
import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface PropsInterface extends DefaultPropsInterface {
    onClick?: () => void;
    actionElement: React.ReactNode;
}

export interface StateTypes {
    opened: boolean;
}
