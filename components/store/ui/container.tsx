/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
interface ContainerProps {
    children: React.ReactNode;
  }
  
  const Container: React.FC<ContainerProps> = ({
    children
  }) => {
    return ( 
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
     );
  };
  
  export default Container;