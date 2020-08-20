import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layouts";
const About =()=>(

    <Layout mainTitle="my about" footer={`Copyright ${ new Date().getFullYear()}`}>
    <Head>
        <title>About Page</title>
    
    </Head>
      
        <h2>About Pages</h2>
        <Link href="/">
              <a >Index page</a>
        </Link>
        <p>Tempor amet commodo eu ad sunt pariatur culpa officia ut culpa velit laboris cillum. Eu occaecat eu commodo et amet anim tempor duis excepteur dolor eu. Ipsum mollit fugiat cillum consequat dolor et id dolore laboris pariatur.</p>
    </Layout>
   
)
export default About;