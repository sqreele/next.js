import Nev from "./Nev"; 



const Layouts = ({mainTitle,footer,children}) =>(
    <div className="container">
        <Nev />
    
       
        <h1>{mainTitle}</h1>
         <hr />
        {children}
          <hr />
          <h4>{footer}</h4>
    </div>

)
export default Layouts;