import { lighten } from 'polished'
import { styled, th } from '@smooth-ui/core-sc'

export const ShowCase = styled.div`
  margin-top: 80px;
  background-color: ${th('white')};
  border-top: 1px solid ${th('gray200')};
  border-bottom: 1px solid ${th('gray200')};
  /* color: ${th('gray600')}; */
  /* color: ${th('primary', color => lighten(0.25, color))}; */
  /* background-color: ${th('gray900')}; */
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    padding: 0;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 34px;
    line-height: 1.2;
  }
`
