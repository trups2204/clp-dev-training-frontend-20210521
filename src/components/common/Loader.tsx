import React from 'react';
import {ScreenReaderOnly,SpinnerPanel, SpinnerSvg, SvgCircle} from './styles';

export const Loader =() =>{
    return (
        <SpinnerPanel data-test-id="loading" role="alert" aria-live="polite" aria-busy="true" aria-atomic="true">
            <SpinnerSvg >
                <SvgCircle cx="30" cy="30" r="20"  />
            </SpinnerSvg>
            <ScreenReaderOnly>Please wait..Page is Loading</ScreenReaderOnly>
        </SpinnerPanel>
    );
};