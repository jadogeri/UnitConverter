import React from 'react';

const Header = () => {
  return (
    <div className="w3-hide-small "style={{height:100,width:"100%",position:"fixed",marginTop : 20,zIndex:1,
                  backgroundColor:"#484464"
    }}    >
     <div className='w3-center'
          style={{fontSize:40,flex:1, color:"white"}}>Unit Converter App</div>
      
    </div>
  );
}

export default Header;
