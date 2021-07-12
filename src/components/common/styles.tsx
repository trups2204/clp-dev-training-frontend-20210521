import styled from 'styled-components';


export const GalleryContainer = styled.div`
padding-top:20px;
display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

export const GalleryImage = styled.img`
vertical-align: middle;

`;

export const GalleryCaption = styled.span`
  margin: 0;
  padding: 1em;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  box-sizing: border-box;
  transition: transform 0.5s;
  transform: translateY(100%);
  background: rgba(0, 0, 0, 0.7);
  color: rgb(255, 255, 255);
 
`;
export const GalleryItem = styled.div`
position: relative;
overflow: hidden;
height:150px;
&:hover {
    ${GalleryCaption} {
        transform: translateY(0%);
    }
  }

`;
export const SpinnerPanel = styled.div`
position: fixed;
left: 50%;
top: 50%;
width: 100%;
height: 100%;
z-index: 9999;
  @keyframes spin {
    from {
      stroke-dashoffset: 360;
    }
    to {
      stroke-dashoffset: 40;
    }
  }

`;

export const SpinnerSvg= styled.svg`
  transform: rotate(-90deg);
  width: 60px;
  height: 60px;
`;

export const SvgCircle = styled.circle`
stroke-linecap: round;
stroke-dasharray: 360;
stroke-width: 6;
stroke: gray;
fill: transparent;
animation: spin .6s ease-in-out 0s normal infinite;
`;

export const ScreenReaderOnly = styled.p`
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
`;