import Link from 'next/link';


const Nev =()=>(
    <div className="my-nav">
        <img src="/images/lo.png" height="60px"/>
        <Link href="/"><a>Home </a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/blogs"><a>blogs</a></Link>
        <style jsx>{`
         
         a,
         img{
             padding: 15px;
         }
        
        
        `}</style>
    </div>
);
export default Nev;
