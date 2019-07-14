import { ComposedComponentProps } from '@/shared/interfaces/viewmodel.interface';

export interface StateProps {
    landingPageModel: {
        isLogin: boolean;
    };
}

export type Props = ComposedComponentProps & StateProps;
