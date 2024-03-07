import {Product} from "../types";
import {Table, TableColumnsType} from "antd";


interface CustomTableProps {
    columns: TableColumnsType<Product>,
    data: Product[],
    loading: boolean
}

export const CustomTableComponent = ({columns, data, loading}: CustomTableProps) => {
    return (
        <Table className="m-12" rowKey="id" columns={columns} dataSource={data} loading={loading} expandable={{
            expandedRowRender: (record) => (
                <div className="flex flex-wrap gap-2 text-white"> {record.product_colors.map((color: any, index) => {
                    return (
                        <span key={index} style={{backgroundColor: color.hex_value, padding: "4px"}}/>
                    )
                })} </div>),
            rowExpandable: (record) => record.product_colors.length > 0,
        }} pagination={{defaultPageSize: 10}}/>
    )
}
