import React from 'react'
import KeyboardKey from './KeyboardKey';

export default function Keyboard({keys, changeState}) {
    if (keys.length === 26)
    {
        const [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z] = keys;
        const firstRow = [q,w,e,r,t,y,u,i,o,p];
        const middleRow = [a,s,d,f,g,h,j,k,l];
        const lastRow = [z,x,c,v,b,n,m];
        
        return (
            <>
                <div id="firstRow">
                    {firstRow.map((keyboardkey) => {return <KeyboardKey key={keyboardkey.letter} keyboardkey={keyboardkey} changeState={changeState}/>;})}
                </div>
                <div id="middleRow">
                    {middleRow.map((keyboardkey) => {return <KeyboardKey key={keyboardkey.letter} keyboardkey={keyboardkey} changeState={changeState}/>;})}
                </div>
                <div id="lastRow">
                    {lastRow.map((keyboardkey) => {return  <KeyboardKey key={keyboardkey.letter} keyboardkey={keyboardkey} changeState={changeState}/>;})}
                </div>
            </>
        )
    }
    else {
        return null;
    }
}
