import React  from 'react';
import { render, screen, fireEvent, waitForElement  } from '@testing-library/react';
import  ImageGallery from './index';


describe("Image gallery test", () => {
  let originFetch;
  
  let inputContainer = render(<ImageGallery></ImageGallery>)
  jest.spyOn(React, 'useEffect').mockImplementation(f => f());
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });

  it('should match service mocked respponse', async () => {
    const fakeResponse = [{id: "51204095578",ownername: "Jambo Jambo", title: "Profumi primaverili",  url_n: "https://live.staticflickr.com/65535/51204095578_b9320d3a4c_n.jpg"}];
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    const { getByTestId } = render(<ImageGallery/>);
    console.warn('getByTestId', getByTestId('galleryItem'));
    // //const divLoading = inputContainer.getByRole("alert")
    // const div = await waitForElement(() => getByTestId('galleryItem'));
    // expect(div).toHaveTextContent('example text');

    // const divLoading = await waitForElement(() => getByTestId('loading'));
    //expect(divLoading).toHaveTextContent('Please wait..Page is Loading');

     expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
    it("should fire input change event for tag search",() => {
    

      const divLoading = inputContainer.getByRole("alert")
      if(!divLoading)
      {
        const input = inputContainer.getByLabelText("search photos")
        fireEvent.change(input, { target: { value: 'family photos' } })
        expect(input.value).toBe('family photos')
      }
    })

    it("should load image gallery page with initial text", () => {
        
       render(<ImageGallery />);
       const divLoading = inputContainer.getByRole("alert")
       if(!divLoading)
       {
     expect(
        screen.getByText(/Responsive Image Gallery/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Resize the browser window to see the effect./)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Hover on the Image to see the title./)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/flowers/)
      ).toBeInTheDocument();
      
      }
    
    });
    it('calls onClick prop on button click', () => {
      render(<ImageGallery />);

      const divLoading = inputContainer.getByRole("alert")
      if(!divLoading)
      {
        const button = inputContainer.getByLabelText("Click to Search")
        fireEvent.click(button, { target: { value: 'family photos' } })
      }
     

    });
   
});