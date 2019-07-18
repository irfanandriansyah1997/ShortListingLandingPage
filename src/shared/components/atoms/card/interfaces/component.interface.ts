import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface PropsInterface extends DefaultPropsInterface {
    type: 'base' | 'flat' | 'border';
    hoverType: 'default-1' | 'default-2' | 'elevate-xs' | 'elevate-sm' | 'elevate-md' | 'elevate-lg' | 'elevate-xl';
    active: boolean;
    rounded?: boolean;
    className?: string;
    onClick?: () => void;
}
