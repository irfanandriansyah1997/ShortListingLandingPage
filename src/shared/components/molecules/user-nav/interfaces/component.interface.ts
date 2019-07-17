/**
 * Component Interface
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @since 2019.07.17
 */
import { DefaultPropsInterface } from '@/shared/interfaces/component.interface';

export interface PropsInterface extends DefaultPropsInterface {
    isLogin: boolean;
    profilePictureUrl: string;
    shareLink: string;
}
