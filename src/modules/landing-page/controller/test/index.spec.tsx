import * as React from 'react';
import { shallow } from 'enzyme';
import Controller from '@/modules/landing-page/controller';
import { Props } from '@/modules/landing-page/interfaces/viewmodel.interface';
import { DefaultAuthModel } from '@/store/auth/model/auth.model';

const FIXTURE: Props = {
    authModel: {
        action: {
            login: jest.fn(),
            logout: jest.fn()
        },
        model: {
            email: '',
            isLogin: true,
            password: '',
            photo_profile: '',
            username: ''
        }
    },
    landingPageModel: {
        model: {
            count: 0,
            properties: [],
            selected: 0
        },
        action: {
            activeListing: (listingID: number | string) => {}
        }
    }
};

describe('Testing controller landing page', () => {
    it('Test render controller', () => {
        const wrapper = shallow(<Controller {...FIXTURE} />);
        const instance: any = wrapper.instance();

        expect(FIXTURE.authModel.action.login).toHaveBeenCalledTimes(0);
        expect(FIXTURE.authModel.action.logout).toHaveBeenCalledTimes(0);
        expect(instance.authModel).toStrictEqual(FIXTURE.authModel.model);
        expect(instance.listingModel).toStrictEqual(FIXTURE.landingPageModel.model);

        instance.actionSetLogin(DefaultAuthModel);
        expect(FIXTURE.authModel.action.login).toHaveBeenCalledTimes(1);

        instance.actionSetLogout();
        expect(FIXTURE.authModel.action.logout).toHaveBeenCalledTimes(1);
    });
});
