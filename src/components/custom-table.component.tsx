import {Product} from "../types";
import {Button, Switch, Table, TableColumnsType, Tooltip} from "antd";
import {useRef} from "react";
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

interface CustomTableProps {
    columns: TableColumnsType<Product>,
    data: Product[],
    loading: boolean
}

export const CustomTableComponent = ({columns, data, loading}: CustomTableProps) => {
    const componentRef = useRef<any>();
    const handlePrint = async () => {
        const element: any = componentRef.current;
        const canvas = await html2canvas(element, {
            scale: 1,
        });
        const data = canvas.toDataURL("image/png");

        const pdf = new jsPDF("portrait", "px", [380, 380]);

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("table.pdf");
    };

    return (
        <div className="flex flex-col gap-y-4 m-12">
            <div className="flex justify-between">
                <div>
                    <div>Type <Switch className="border border-solid border-gray-200" /></div>
                    <div>Brand <Switch className="border border-solid border-gray-200"/></div>
                    <div>Category <Switch className="border border-solid border-gray-200"/></div>
                </div>
                <Button onClick={handlePrint} className="w-40 h-10" type="primary" danger>Export to PDF</Button>
            </div>
            <div ref={componentRef}>
                <Table rowKey="id" columns={columns} dataSource={data} loading={loading} expandable={{
                    expandedRowRender: (record) => (
                        <div
                            className="flex flex-wrap gap-2 text-white"> {record.product_colors.map((color: any, index) => {
                            return (
                                <Tooltip title={color.colour_name} key={index} mouseEnterDelay={0.1}>
                                    <span className="w-4 h-4" style={{backgroundColor: color.hex_value}}/>
                                </Tooltip>
                            )
                        })} </div>),
                    rowExpandable: (record) => record.product_colors.length > 0,
                }} pagination={{defaultPageSize: 10}}/>
            </div>
        </div>
    )
}
