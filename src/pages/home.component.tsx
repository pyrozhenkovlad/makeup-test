import {CustomTableComponent} from "../components";
import {Product} from "../types";
import {TableColumnsType, Layout} from "antd";

const {Header, Content, Footer} = Layout;

interface HomeProps {
    products: Product[],
    loading: boolean,
    columns: TableColumnsType<Product>,
    error: any
}

export const HomeComponent = ({products, loading, error, columns}: HomeProps) => {

    return (
        <Layout>
            <Header className="text-center text-white h-[10vh]">Make-up Table</Header>
            <Content>
                {error ? <div>Error: {error.message}</div> :
                    <CustomTableComponent columns={columns} data={products} loading={loading}/>}
            </Content>
            <Footer className="text-center">Developer: Vladyslav Pyrozhenko</Footer>
        </Layout>
    )
}
