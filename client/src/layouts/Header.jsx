import React from 'react';

const Header = () => {
  return (
    <div className="w3-hide-small"style={{height:100,width:"100%",position:"fixed",marginTop : 20, backgroundColor : "pink",zIndex:1}}    >
     <div className='w3-center'
          style={{fontSize:40,flex:1}}>Unit Converter App</div>
      
    </div>
  );
}

export default Header;
