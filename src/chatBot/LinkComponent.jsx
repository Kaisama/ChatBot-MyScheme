const LinkComponent = (props) => {
    const{link,heading}=props.payload ||{};
    console.log('Link:', link, 'Heading:', heading);
    return (
      <div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: 'block', 
            padding: '10px', 
            backgroundColor: 'blue', 
            color: 'white', 
            textAlign: 'center', 
            textDecoration: 'none', 
            borderRadius: '5px' 
          }}
        >
          {heading}
        </a>
      </div>
    );
  };
  
  export default LinkComponent;
  