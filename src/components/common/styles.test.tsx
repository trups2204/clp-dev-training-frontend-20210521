import React from 'react';
import renderer from 'react-test-renderer';
import * as styles from './styles';

describe('styles',() =>{

    it('should render GalleryContainer',() =>{
        const component = <styles.GalleryContainer/>;
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('should render GalleryImage',() =>{
        const component = <styles.GalleryImage/>;
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('should render GalleryCaption',() =>{
        const component = <styles.GalleryCaption/>;
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('should render GalleryItem',() =>{
        const component = <styles.GalleryItem/>;
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    
    it('should render SpinnerPanel',() =>{
        const component = <styles.SpinnerPanel/>;
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    
    it('should render SpinnerSvg',() =>{
        const component = <styles.SpinnerSvg/>;
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    
    it('should render SvgCircle',() =>{
        const component = <styles.SvgCircle/>;
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    
    it('should render ScreenReaderOnly',() =>{
        const component = <styles.ScreenReaderOnly/>;
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    
})