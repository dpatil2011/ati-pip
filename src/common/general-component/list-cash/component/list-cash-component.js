import React from 'react';
import { List } from 'antd';
import { AtiList } from 'ati-react-web';
import '../style/style.css';

function ListCashComponent({
    data, pagination, pageSize, totalRow,
}){
    let page = false;
    if(pagination===true && totalRow!==0){
        page = {
            onChange: (page) => {
                console.log(page);
            },
            // simple: true,
            // total: "10",
            pageSize: pageSize,
            itemRender: ( current, type, originalElement ) => {
                if (type === 'prev') {
                    return <a>Prev</a>;
                }
                if (type === 'next') {
                    return <a>Next</a>;
                }
                return originalElement;
            }
        }
    }
    return (
        <AtiList 
            bordered={false}
            itemLayout="horizontal"
            dataSource={data}
            type='custom'
            events={
                {
                    renderItem: item => (
                        <List.Item style={{marginBottom:"5px",padding:"2px"}}>
                            <List.Item.Meta
                                avatar={<img style={{width: "18px",marginTop:"10px"}} 
                                    src={require(`../../../../assets/images/${item.icon}.png`)} 
                                />}
                                title={<b>{item.title}</b>}
                                description={item.date}
                            />
                            <List.Item.Meta   
                                style={{textAlign:"right"}}                                                 
                                title={
                                    <p className={"cash-type-"+item.type}>
                                        <span className={"cash-type-plus-"+item.type}>+ </span>
                                        <span className={"cash-type-min-"+item.type}>- </span>
                                        {item.amount}
                                    </p>
                                }
                                description={item.type}
                            />
                        </List.Item>
                    )
                }
            }
            pagination={page}
        />
    )
}

export default ListCashComponent;