import React, { useState } from 'react'

const App = () => {
  return (
    <>
      <CardWrapperComponent children={<TextComponent/>}/>
      <CardWrapperComponent>
        <ImageComponent/>
      </CardWrapperComponent>
    </>
  )

}

const TextComponent = () => {
  return (
    <>
      <h3>Introduction</h3>
      <p>My name is Saloni Singh(Chapti). My nose is flat and looks like pig face.
        I am able to toucch my nose through my toungue because it helps me to eat my nose material easily.
        I am black in color and easily disappered in dark environment.
      </p>
    </>
  )
}

const ImageComponent = ()=>{
  return (
    <>
    <div style = {{height:"100px", width:"100px", backgroundColor:"palegreen"}}>
    </div>
    <p>That's a great way to learn — building real use cases helps solidify your understanding of ABAP and OData concepts. Here are a few functional specification-style documents that simulate real-world scenarios. You can pick one and implement the backend logic (ABAP) and OData service </p>
    </>
  )
}

const CardWrapperComponent = ({children}) => {
  return(
    <div>
      <div style={{border: '2px solid black', height:"350px", width:"250px", boxShadow:"1px 2px 1px 2px grey", margin:"4px", borderRadius:"10px", padding:"5px"}}>
        {children}
      </div>
    </div>
  )
}



export default App