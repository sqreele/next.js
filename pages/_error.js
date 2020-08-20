  
import Layout from "../components/Layouts";

const Error = ({ message }) => (
    <Layout mainTitle="Error">
        <div>
            <p>{message}</p>
        </div>
    </Layout>
);

export default Error;