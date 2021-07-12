import React from 'react';
import renderer from 'react-test-renderer';
import  {Loader} from './Loader';

describe('Loader test', ()=>{

    it('loads loader component',()=>{

        const component = <Loader/>;
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    })
})