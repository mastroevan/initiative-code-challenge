import * as React from 'react';
import {Card, CardContent, Divider} from '@mui/material';

const CardEl = ({pic, author, url, id}) => {
  //this function gets rid of the rest the url after .com
  const editURL = (s) => {
    let endIdx = 0;
    let shortURL = '';
    let arr = url.split('');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '.' && arr[i+1] === 'c' && arr[i+3] === 'm') {
        endIdx += ((i+3) + 1)
      }
    }
    return shortURL += arr.slice(0, endIdx).join('');
  }

  return (
    <>
    {/* while inline styling is not best practice, I am using it for sake of time. */}
    <Card sx={{width: 325, height: 'auto', margin: 3, padding: 0}}>
      <div className='img-container' style={{position: 'relative', width: 325}}>
        <img style={{width: 325, height:180}}src={pic} alt="picsum-api" />
      </div>
      <CardContent>
        <span style={{margin: 0, padding: 0, lineHeight: 1}}className='headings'>
          <p style={{fontSize: 16, fontWeight: 600, lineHeight: 1}}>Lorum Ipsom</p>
          <p style={{fontSize: 14, fontWeight: 400, lineHeight: 1}}>Lorum Ipsom</p>
        </span>
        <Divider />
        <table className='info'>
          <tbody>
            <tr>
              <td style={{fontSize: 12, fontWeight: 600}}>Author</td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{fontSize: 12, fontWeight: 400}}>{author}</td>
            </tr>
            <tr>
              <td style={{fontSize: 12, fontWeight: 600}}>ID</td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{fontSize: 12, fontWeight: 400}}>{id}</td>
            </tr>
            <tr>
              <td style={{fontSize: 12, fontWeight: 600}}>URL</td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{fontSize: 12, fontWeight: 400}}>{editURL(url)}</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
    </>
  )
}

export default CardEl;